import { NextResponse } from "next/server";
import { profile, selectedProjects, technologyMap, experienceTimeline } from "@/data/portfolio";


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

Experience Timeline:
${experienceTimeline.map(t => `- ${t.year} (${t.role} at ${t.company}): ${t.description}`).join("\n")}
`;


        const systemPrompt = `You are "Ishan's AI Portfolio Assistant", an AI representative of Ishan Chinthaka.
Your task is to answer user inquiries about Ishan's professional profile, skills, projects, and contact information.
Guidelines:
1. Always be professional, helpful, polite, and descriptive but brief.
2. Restrict answers to findings from the portfolio context. If a user asks about unrelated topics, politely guide them back to Ishan's portfolio.
3. If they ask how to contact Ishan, provide his email (${profile.email}) and WhatsApp connection (+94 76 527 4750).
4. Do not make up links, project details, or qualifications.

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
    if (q.includes("smartbus") || q.includes("smart bus")) {
        return "The SmartBus Transit Tracker is a real-time transit solution featuring GPS live bus tracking with interactive maps, seat reservation, Stripe payment, and QR code tickets. Technology Stack: Next.js, Express.js, Socket.io, React, MongoDB, and Stripe.";
    }
    if (q.includes("study assistant") || q.includes("study-assistant") || q.includes("educational platform")) {
        return "The AI-Powered Study Assistant is an educational platform featuring automated flashcards, relational quiz tracking, and AI-driven document chunking for RAG pipelines. Technology Stack: Next.js, TypeScript, PostgreSQL, Zod, and Tailwind CSS.";
    }
    if (q.includes("fixnow") || q.includes("fix now") || q.includes("service platform")) {
        return "The FixNow Service Platform is a service marketplace connecting customers with vendors, supporting booking, status tracking, rating feedback, and secure accounts. Technology Stack: PHP, MySQL, JavaScript, HTML, and CSS.";
    }
    if (q.includes("resort") || q.includes("ocean view") || q.includes("resort portal")) {
        return "The Ocean View Resort Portal is a luxury-vintage themed guest resort management system featuring a cinematic booking suite. Technology Stack: Spring Boot, React, Vite, and MySQL.";
    }
    if (q.includes("bookshop") || q.includes("pahana")) {
        return "The Pahana Bookshop System is a Java desktop inventory management, ordering, and billing application. Technology Stack: Java, MySQL, Swing, and JDBC.";
    }

    // 2. Contact details (Checking this before greeting words like "hi" to prevent greeting match on contact queries)
    if (/\b(contact|email|phone|whatsapp|reach|hire|connect|message)\b/.test(q) || q.includes("0765274750") || q.includes("94765274750")) {
        return "You can get in touch with Ishan directly through:\n\n• Email: ishanchinthaka2002@gmail.com\n• WhatsApp: +94 76 527 4750\n• LinkedIn: linkedin.com/in/ishan-chinthaka-1a6b5a2b1\n\nAlternatively, use the WhatsApp tab in this widget to message him directly!";
    }

    // 3. Skills / Technologies
    if (/\b(skill|skills|technology|technologies|tech|languages|frameworks|capable)\b/.test(q)) {
        return "Ishan specialises in:\n\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, PHP & Laravel, Java & Spring Boot, Python\n• Databases: MySQL, PostgreSQL, MongoDB, SQLite\n• Cloud & DevOps: AWS, Microsoft Azure, Docker, CI/CD\n\nIs there a specific framework or tool you're interested in?";
    }

    // 4. Projects catalog
    if (/\b(project|projects|work|portfolio|apps|systems)\b/.test(q)) {
        return "Here are a few notable projects Ishan has built:\n\n1. AI-Powered Study Assistant: featuring automated flashcards and RAG pipelines (Next.js, PostgreSQL).\n2. SmartBus Transit Tracker: live-tracking GPS transit app (Next.js, Express, Socket.io).\n3. FixNow Service Platform: client-vendor booking platform (PHP, MySQL).\n4. Ocean View Resort Portal: spring boot/react guest administration system.\n\nWhich of these would you like more details on?";
    }

    // 5. Experience / Education
    if (/\b(experience|experiences|job|jobs|education|degree|study|university|graduate)\b/.test(q)) {
        return "Ishan holds a BSc (Hons) in Software Engineering (Second Class Upper) from Cardiff Metropolitan University. He has built various web development, mobile apps, business databases, and POS/management solutions.";
    }

    // 6. Greetings with boundary match
    if (/\b(hi|hello|hey|hola|greetings|accourancy|test)\b/.test(q)) {
        return "Hello! I am Ishan's AI Assistant. How can I help you today? You can ask about my skills, projects, experience, or how to contact me.";
    }

    return "I'm Ishan's Portfolio Assistant. Ask me anything about his skills, projects, qualifications, or how to get in touch. You can also chat directly with him on WhatsApp (0765274750)!";
}
