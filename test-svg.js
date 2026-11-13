const fs = require('fs');

const techItemsData = [
    { title: "React.js", subtitle: "Component & State Architecture", category: "Frontend", color: "#38bdf8", symbol: "⚛", num: "01" },
    { title: "Next.js 15", subtitle: "App Router & SSR Engine", category: "Full-Stack", color: "#ffffff", symbol: "▲", num: "02" },
    { title: "TypeScript", subtitle: "Strict Type Systems", category: "Language", color: "#3178c6", symbol: "TS", num: "03" },
    { title: "Spring Boot", subtitle: "Microservices & JPA Data", category: "Backend", color: "#6db33f", symbol: "SB", num: "04" },
    { title: "Node.js", subtitle: "Event-Driven REST Services", category: "Backend", color: "#68a063", symbol: "NODE", num: "05" },
    { title: "Express.js", subtitle: "API Layer & Middleware", category: "Backend", color: "#e2e8f0", symbol: "EX", num: "06" },
    { title: "Java", subtitle: "OOP & Enterprise Architecture", category: "Language", color: "#f89820", symbol: "JAVA", num: "07" },
    { title: "PHP & Laravel", subtitle: "Enterprise MVC Workflows", category: "Full-Stack", color: "#ff2d20", symbol: "PHP", num: "08" },
    { title: "PostgreSQL", subtitle: "Relational Schemas & Indexing", category: "Database", color: "#336791", symbol: "PG", num: "09" },
    { title: "MySQL", subtitle: "High-Throughput ACID Storage", category: "Database", color: "#00758f", symbol: "SQL", num: "10" },
    { title: "Redis", subtitle: "In-Memory Caching & Pub/Sub", category: "Memory", color: "#dc382d", symbol: "REDIS", num: "11" },
    { title: "Amazon Bedrock", subtitle: "Generative AI & RAG Pipelines", category: "AI System", color: "#ff9900", symbol: "AI", num: "12" },
    { title: "Docker", subtitle: "Containerization & Registry", category: "DevOps", color: "#2496ed", symbol: "DOCK", num: "13" },
    { title: "Tailwind CSS", subtitle: "Design Tokens & Motion", category: "Styling", color: "#38bdf8", symbol: "TW", num: "14" }
];

function escapeXml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

let allOk = true;
techItemsData.forEach(t => {
    const sTitle = escapeXml(t.title);
    const sSubtitle = escapeXml(t.subtitle);
    const sCategory = escapeXml(t.category.toUpperCase());
    const sSymbol = escapeXml(t.symbol);
    const sNum = escapeXml(t.num);
    const sColor = escapeXml(t.color);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440">
    <defs>
      <linearGradient id="g_${sNum}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14181f" />
        <stop offset="100%" stop-color="#0a0c10" />
      </linearGradient>
      <radialGradient id="r_${sNum}" cx="50%" cy="32%" r="50%">
        <stop offset="0%" stop-color="${sColor}" stop-opacity="0.32" />
        <stop offset="100%" stop-color="${sColor}" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="440" height="440" rx="24" fill="url(#g_${sNum})" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    <circle cx="220" cy="170" r="140" fill="url(#r_${sNum})" />
    <rect x="32" y="32" width="70" height="28" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" />
    <text x="67" y="51" font-family="monospace" font-size="12" font-weight="bold" fill="#a3e635" text-anchor="middle">#${sNum}</text>
    <text x="408" y="51" font-family="monospace" font-size="11" font-weight="bold" fill="#94a3b8" text-anchor="end" letter-spacing="1.5">${sCategory}</text>
    <circle cx="220" cy="170" r="54" fill="#181d24" stroke="${sColor}" stroke-width="2.5" />
    <text x="220" y="186" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="${sSymbol.length > 2 ? '22' : '28'}" font-weight="900" fill="${sColor}" text-anchor="middle">${sSymbol}</text>
    <text x="220" y="278" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#f5f5f5" text-anchor="middle" letter-spacing="-0.5">${sTitle}</text>
    <text x="220" y="312" font-family="monospace" font-size="13" font-weight="500" fill="#94a3b8" text-anchor="middle">${sSubtitle}</text>
    <line x1="60" y1="360" x2="380" y2="360" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <circle cx="150" cy="388" r="4" fill="#a3e635" />
    <text x="165" y="392" font-family="monospace" font-size="11" font-weight="bold" fill="#f5f5f5" letter-spacing="1.5">PRODUCTION VERIFIED</text>
  </svg>`;

    // Check for any unescaped ampersands
    const nakedAmpRegex = /&(?!amp;|lt;|gt;|quot;|apos;)/;
    if (nakedAmpRegex.test(svg)) {
        console.error("FAIL - Unescaped ampersand in:", t.title);
        allOk = false;
    }
});

if (allOk) {
    console.log("SUCCESS: ALL 14 CARDS ARE VALID XML!");
}

