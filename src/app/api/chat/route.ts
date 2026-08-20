import { NextResponse } from "next/server";
import { profile, projects, skills, timeline } from "@/data/portfolio";

interface ChatMessage {
    role: string;
    content: string;
}

export async function POST(req: Request) {
    try {
        const { messages } = (await req.json()) as { messages: ChatMessage[] };
        const userMessage = messages[messages.length - 1]?.content || "";

        const apiKeyGateway = process.env.AI_GATEWAY_KEY;
        const aiModel = process.env.AI_MODEL || "openai/gpt-3.5-turbo";
        const apiKeyGemini = process.env.GEMINI_API_KEY;
        const apiKeyOpenAI = process.env.OPENAI_API_KEY;

        const portfolioContext = `
Name: ${profile.name}
Role: ${profile.role}
Headline: ${profile.headline}
Bio: ${profile.bio}
About: ${profile.about.join("\n")}
Location: ${profile.location}
Email: ${profile.email}
WhatsApp: +94 76 527 4750 (Link: https://wa.me/94765274750)
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}

Skills:
${skills.map(s => `- ${s.title}: ${s.items.join(", ")}`).join("\n")}

Projects:
${projects.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(", ")})`).join("\n")}

Experience Timeline:
${timeline.map(t => `- ${t.title} at ${t.place} (${t.period}): ${t.description}`).join("\n")}
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

    if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("hola") || q.includes("greetings")) {
        return "Hello! I am Ishan's AI Assistant. How can I help you today? You can ask about my skills, projects, experience, or how to contact me.";
    }
    if (q.includes("skill") || q.includes("technology") || q.includes("tech") || q.includes("languages") || q.includes("capable")) {
        return "Ishan specialises in:\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind CSS\n• **Backend**: Node.js, PHP & Laravel, Java & Spring Boot, Python\n• **Databases**: MySQL, PostgreSQL, MongoDB, SQLite\n• **Cloud & DevOps**: AWS, Microsoft Azure, Docker, CI/CD\n\nIs there a specific framework or tool you're interested in?";
    }
    if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("apps") || q.includes("systems")) {
        return "Here are a few notable projects Ishan has built:\n\n1. **AI-Powered Study Assistant**: featuring automated flashcards and RAG pipelines (Next.js, PostgreSQL).\n2. **SmartBus Transit Tracker**: live-tracking GPS transit app (Next.js, Express, Socket.io).\n3. **FixNow Service Platform**: client-vendor booking platform (PHP, MySQL).\n4. **Ocean View Resort Portal**: spring boot/react guest administration system.\n\nWhich of these would you like more details on?";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("reach") || q.includes("hire") || q.includes("connect")) {
        return "You can get in touch with Ishan directly through:\n\n• **Email**: ishanchinthaka2002@gmail.com\n• **WhatsApp**: +94 76 527 4750\n• **LinkedIn**: linkedin.com/in/ishan-chinthaka-1a6b5a2b1\n\nAlternatively, use the WhatsApp direct link at the top of this chat window to start a quick chat!";
    }
    if (q.includes("experience") || q.includes("job") || q.includes("education") || q.includes("degree") || q.includes("study") || q.includes("university")) {
        return "Ishan holds a **BSc (Hons) in Software Engineering** (Second Class Upper) from Cardiff Metropolitan University. He has built various web development, mobile apps, business databases, and POS/management solutions.";
    }

    return "I'm Ishan's Portfolio Assistant. Ask me anything about his skills, projects, qualifications, or how to get in touch. You can also chat directly with him on WhatsApp (0765274750)!";
}
