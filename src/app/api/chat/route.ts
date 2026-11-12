import { NextResponse } from "next/server";
import { profile, selectedProjects, technologyMap, experienceTimeline, workExperience } from "@/data/portfolio";


interface ChatMessage {
    role: string;
    content: string;
}

interface RateLimitInfo {
    count: number;
    lastReset: number;
}

const rateLimitMap = new Map<string, RateLimitInfo>();
const LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15; // Max 15 requests/min per IP

export async function POST(req: Request) {
    try {
        // 1. IP-based Rate Limiter Check
        const ip = req.headers.get("x-forwarded-for") || "local-anonymous";
        const now = Date.now();
        const clientData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

        if (now - clientData.lastReset > LIMIT_WINDOW_MS) {
            clientData.count = 1;
            clientData.lastReset = now;
        } else {
            clientData.count++;
        }
        rateLimitMap.set(ip, clientData);

        if (clientData.count > MAX_REQUESTS_PER_WINDOW) {
            return NextResponse.json(
                { role: "assistant", content: "Rate limit exceeded (max 15 messages/minute). Please wait a moment before sending another inquiry." },
                { status: 429 }
            );
        }

        // 2. Validate request payload structure
        const body = await req.json().catch(() => null);
        if (!body || !body.messages || !Array.isArray(body.messages)) {
            return NextResponse.json(
                { role: "assistant", content: "Invalid request format." },
                { status: 400 }
            );
        }

        const rawMessages = body.messages as ChatMessage[];

        // 3. Sanitise & trim payload history
        const sanitizedHistory = rawMessages.filter(
            (m) => m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant")
        );

        if (sanitizedHistory.length === 0) {
            return NextResponse.json(
                { role: "assistant", content: "Message history must not be empty." },
                { status: 400 }
            );
        }

        const userMessage = sanitizedHistory[sanitizedHistory.length - 1]?.content || "";

        // Length limit
        if (userMessage.length > 500) {
            return NextResponse.json(
                { role: "assistant", content: "Check failed. Message exceeds the 500 character security boundary limit." },
                { status: 400 }
            );
        }

        const messages = sanitizedHistory.slice(-6);

        const apiKeyGateway = process.env.AI_GATEWAY_KEY;
        const aiModel = process.env.AI_MODEL || "openai/gpt-3.5-turbo";
        const apiKeyGemini = process.env.GEMINI_API_KEY;
        const apiKeyOpenAI = process.env.OPENAI_API_KEY;

        const portfolioContext = `
Name: ${profile.name}
Role: ${profile.role}
Headline: ${profile.headline}
Subhead: ${profile.subhead}
About: ${profile.about.join("\n")}
Location: ${profile.location}
Email: ${profile.email}
WhatsApp: ${profile.whatsappFormatted}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}

Technology Stack & Categories:
${technologyMap.map(c => `- ${c.category}: ${c.items.map(i => i.name).join(", ")}`).join("\n")}

Featured Projects:
${selectedProjects.map(p => `- ${p.title} (${p.number}): ${p.subtitle} - Stack: ${p.stack.join(", ")}`).join("\n")}

Professional Work Experience:
${workExperience.map(w => `- ${w.company} (${w.role}, ${w.period}): ${w.summary}
  Technologies: ${w.technologies.join(", ")}
  Key Projects/Systems: ${w.projects.map(p => `${p.name} [${p.area}]`).join("; ")}
  Achievements: ${w.achievements.join("; ")}`).join("\n")}

Experience Timeline:
${experienceTimeline.map(t => `- ${t.year} (${t.role} at ${t.company}): ${t.description}`).join("\n")}
`;


        const systemPrompt = `You are "Ishan's AI Portfolio Assistant", an AI representative of Ishan Chinthaka.
Your task is to answer inquiries about Ishan's professional profile, verified skills, real-world projects, commercial experience at Amazoft IT, and contact details with 100% factual accuracy.

Strict Guidelines:
1. Accuracy First: Base all answers strictly on the portfolio context below. Never invent technologies, client companies, unverified metrics, or qualifications.
2. If asked about Ishan's experience, highlight his current commercial role as Associate Software Engineer at Amazoft IT and his BSc (Hons) 2:1 from Cardiff Metropolitan University.
3. If asked about Ishan's skills, refer directly to his 7 technical domains: Frontend, Backend, Programming Languages, Databases, Cloud & DevOps, Development Tools, and AI & Integrations.
4. If asked about contact options, provide his email (${profile.email}), WhatsApp (${profile.whatsappFormatted}), phone (+94 75 246 4420), or LinkedIn.
5. If asked about unrelated general topics, politely guide the visitor back to Ishan's portfolio and engineering work.

Context:
${portfolioContext}
`;

        // 1. Try Vercel AI Gateway if key is available
        if (apiKeyGateway) {
            try {
                const response = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKeyGateway}`
                    },
                    body: JSON.stringify({
                        model: aiModel,
                        messages: [
                            { role: "system", content: systemPrompt },
                            ...messages.map((m: ChatMessage) => ({ role: m.role, content: m.content }))
                        ],
                        temperature: 0.7
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.choices?.[0]?.message?.content;
                    if (reply) {
                        return NextResponse.json({ role: "assistant", content: reply });
                    }
                } else {
                    const errText = await response.text();
                    console.error("Vercel AI Gateway request failed with status:", response.status, errText);
                }
            } catch (err) {
                console.error("Vercel AI Gateway request failed, trying fallback:", err);
            }
        }

        // 2. Try OpenAI if key is available
        if (apiKeyOpenAI) {
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKeyOpenAI}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o-mini",
                        messages: [
                            { role: "system", content: systemPrompt },
                            ...messages.map((m: ChatMessage) => ({ role: m.role, content: m.content }))
                        ],
                        temperature: 0.7
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.choices?.[0]?.message?.content;
                    if (reply) {
                        return NextResponse.json({ role: "assistant", content: reply });
                    }
                }
            } catch (err) {
                console.error("OpenAI request failed, trying fallback:", err);
            }
        }

        // 2. Try Gemini if key is available
        if (apiKeyGemini) {
            try {
                const formattedHistory = messages.map((m: ChatMessage) => `${m.role === "user" ? "user" : "model"}: ${m.content}`).join("\n");
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKeyGemini}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            contents: [
                                {
                                    role: "user",
                                    parts: [{ text: `${systemPrompt}\n\nConversation history:\n${formattedHistory}\n\nmodel:` }]
                                }
                            ]
                        }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (reply) {
                        return NextResponse.json({ role: "assistant", content: reply });
                    }
                }
            } catch (err) {
                console.error("Gemini request failed, trying static fallback:", err);
            }
        }

        // 3. Static fallback if no keys configured
        const staticReply = generateStaticResponse(userMessage);
        return NextResponse.json({ role: "assistant", content: staticReply });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ role: "assistant", content: "I'm online but encountered an error processing that message. Please try asking about Ishan's skills or projects, or click the WhatsApp tab to chat directly!" });
    }
}

function generateStaticResponse(query: string): string {
    const q = query.toLowerCase();

    // 1. Specific project details matching
    if (q.includes("smartbus") || q.includes("smart bus") || q.includes("track my bus") || q.includes("transit")) {
        return "Track My Bus (WORK / 001) is a real-time transit and fleet tracking ecosystem featuring live GPS bus tracking with Google Maps marker interpolation, Redis-powered seat reservation locks, Stripe payment processing, and dynamic QR code tickets. Tech Stack: Next.js 15, TypeScript, Laravel / Express, Redis, MySQL, and Google Maps API.";
    }
    if (q.includes("study assistant") || q.includes("study-assistant") || q.includes("rag") || q.includes("flashcard")) {
        return "The AI Study Assistant (WORK / 003) is an educational platform with PDF document ingestion, semantic chunking, and grounded Q&A/quiz generation powered by Amazon Bedrock. Structured JSON outputs are strictly validated using Zod schemas to eliminate hallucinations. Tech Stack: Next.js 15, TypeScript, PostgreSQL, Node.js/Express, Amazon Bedrock, and Zod.";
    }
    if (q.includes("medisync") || q.includes("pharmacy") || q.includes("hospital") || q.includes("clinical")) {
        return "MediSync Core (WORK / 002) is an enterprise medical and pharmacy management portal featuring role-based access control (RBAC), electronic health records, inventory stock alerts, and an AI clinical summarization copilot with client-side PII redaction. Tech Stack: Next.js, Node.js, MySQL, Amazon Bedrock, and Tailwind CSS.";
    }
    if (q.includes("fixnow") || q.includes("fix now") || q.includes("service platform") || q.includes("technician")) {
        return "The FixNow Service Platform (WORK / 004) connects customers with vetted local service technicians, featuring online dispatching, state-machine booking status tracking, and provider ratings. Tech Stack: PHP, MySQL, JavaScript, HTML5, and CSS3.";
    }
    if (q.includes("resort") || q.includes("ocean view")) {
        return "The Ocean View Resort Portal (WORK / 005) is a hospitality management suite built with Java Spring Boot and React, utilizing Spring Data JPA transaction isolation to achieve zero booking collisions. Tech Stack: Spring Boot, React, Vite, MySQL, and Tailwind CSS.";
    }
    if (q.includes("bookshop") || q.includes("pahana")) {
        return "The Pahana Bookshop System (WORK / 006) is a desktop retail POS and inventory management application with barcode scanning receipt generation and offline-cached transaction re-sync. Tech Stack: Java, MySQL, Swing, and JDBC.";
    }

    // 2. Accuracy & AI Agent questions
    if (/\b(accuracy|accurate|reliable|truth|hallucinat|agent accuracy)\b/.test(q)) {
        return "As Ishan's AI Portfolio Assistant, my answers are grounded strictly in Ishan's verified portfolio and commercial experience. I do not fabricate credentials, unverified percentages, or unsupported claims. You can inspect Ishan's live GitHub repositories, system architecture diagrams, and academic qualifications directly on this site.";
    }

    // 3. Contact details
    if (/\b(contact|email|phone|whatsapp|reach|hire|connect|message)\b/.test(q) || q.includes("0765274750") || q.includes("94765274750")) {
        return "You can get in touch with Ishan directly through:\n\n• Email: ishanchinthaka2002@gmail.com\n• WhatsApp: +94 76 527 4750\n• Phone: +94 75 246 4420\n• LinkedIn: linkedin.com/in/ishan-chinthaka\n• GitHub: github.com/ish-22\n\nYou can also click the WhatsApp tab in this widget to message him directly!";
    }

    // 4. Skills / Technologies
    if (/\b(skill|skills|technology|technologies|tech|languages|frameworks|capable|stack)\b/.test(q)) {
        return "Ishan's technical capabilities span 7 verified categories:\n\n1. Frontend: React.js, Next.js, TypeScript, Tailwind CSS, HTML5 & CSS3\n2. Backend: Node.js, Express.js, Java & Spring Boot, PHP & Laravel, RESTful APIs, .NET Core\n3. Languages: TypeScript, JavaScript (ES6+), Java, PHP, C#, SQL\n4. Databases: PostgreSQL, MySQL, MongoDB, SQLite, Redis\n5. Cloud & DevOps: AWS Cloud, Docker, CI/CD Pipelines\n6. Tools: Git, GitHub, Postman, VS Code, Figma\n7. AI & Integrations: Amazon Bedrock, Vector Search & RAG, Zod Schema Validation, Google Maps API, Stripe API";
    }

    // 5. Commercial Experience & Education
    if (/\b(experience|job|jobs|work|career|amazoft|education|degree|university|study|graduate|qualif)\b/.test(q)) {
        return "Ishan Chinthaka's verified background:\n\n• Current Role: Associate Software Engineer at Amazoft IT (December 2025 – Present), building production web features in React/TypeScript, optimizing PostgreSQL schemas, and conducting Agile peer reviews.\n• Prior Role: Trainee Software Developer at Amazoft IT (June 2022 – December 2025), building UIs, supporting Spring Boot APIs, and managing Docker builds.\n• Education: BSc (Hons) in Software Engineering (Second Class Upper Division 2:1) from Cardiff Metropolitan University, UK (2025–2026), and Higher Diploma in Computing (Merit / Distinction).";
    }

    // 6. Projects summary
    if (/\b(project|projects|portfolio|apps|systems|work)\b/.test(q)) {
        return "Ishan has engineered several full-stack and distributed products:\n\n1. Track My Bus: Real-time public transit tracking ecosystem (Next.js, Redis, Laravel, Stripe, Google Maps).\n2. MediSync Core: AI-assisted healthcare & pharmacy operations portal (Next.js, Node.js, MySQL, Amazon Bedrock).\n3. AI Study Assistant: Intelligent document chunking & RAG learning platform (Next.js, PostgreSQL, Bedrock, Zod).\n4. Ocean View Resort: Concurrency-managed hospitality system (Spring Boot, React, MySQL).\n5. Pahana Bookshop: Desktop inventory & barcode billing software (Java, Swing, MySQL).\n\nWhich project would you like to explore?";
    }

    // 7. Greetings
    if (/\b(hi|hello|hey|hola|greetings|morning|afternoon|evening)\b/.test(q)) {
        return "Hello! I am Ishan's AI Assistant. How can I help you today? You can ask about his commercial experience at Amazoft IT, verified technical skills, system architecture, projects, or how to get in touch.";
    }

    return "I'm Ishan's Portfolio Assistant. Ask me anything about his technical skills across 7 domains, commercial experience at Amazoft IT, project architectures, or how to connect on WhatsApp (+94 76 527 4750) and email!";
}
