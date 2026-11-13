"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring } from "motion/react";

const CircularCarousel = dynamic(
    () => import("@/components/ui/CircularCarousel"),
    { ssr: false }
);

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function makeTechCard(
    title: string,
    subtitle: string,
    category: string,
    color: string,
    symbol: string,
    num: string
): string {
    const sTitle = escapeXml(title);
    const sSubtitle = escapeXml(subtitle);
    const sCategory = escapeXml(category.toUpperCase());
    const sSymbol = escapeXml(symbol);
    const sNum = escapeXml(num);
    const sColor = escapeXml(color);

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
    <circle cx="170" cy="388" r="4" fill="#a3e635" />
    <text x="185" y="392" font-family="monospace" font-size="11" font-weight="bold" fill="#f5f5f5" letter-spacing="1.5">CORE TECHNOLOGY</text>
  </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

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
    { title: "MySQL", subtitle: "Relational Database Engine", category: "Database", color: "#00758f", symbol: "SQL", num: "10" },
    { title: "Redis", subtitle: "In-Memory Caching & Pub/Sub", category: "Memory", color: "#dc382d", symbol: "REDIS", num: "11" },
    { title: "Amazon Bedrock", subtitle: "Generative AI & Document Search", category: "AI System", color: "#ff9900", symbol: "AI", num: "12" },
    { title: "Docker", subtitle: "Containerization & Registry", category: "DevOps", color: "#2496ed", symbol: "DOCK", num: "13" },
    { title: "Tailwind CSS", subtitle: "Design Tokens & Motion", category: "Styling", color: "#38bdf8", symbol: "TW", num: "14" }
];

const techStack = [
    "React.js", "Next.js", "TypeScript", "JavaScript", "Java", "Spring Boot",
    "Node.js", "Express.js", "PHP", "Laravel", ".NET Core", "Tailwind CSS",
    "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "AWS", "Docker",
    "Git", "GitHub", "Postman", "Figma", "Amazon Bedrock", "REST APIs"
];

const doubled = [...techStack, ...techStack];

export function TechnologyWall() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics matching the Selected Work section cursor
    const springX = useSpring(cursorX, { stiffness: 400, damping: 30 });
    const springY = useSpring(cursorY, { stiffness: 400, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    // Memoize pre-rendered 3D carousel card items
    const carouselItems = useMemo(() => {
        return techItemsData.map((t) => ({
            src: makeTechCard(t.title, t.subtitle, t.category, t.color, t.symbol, t.num),
            alt: `${t.title} — ${t.subtitle}`,
            title: t.title,
            subtitle: t.subtitle
        }));
    }, []);

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative section bg-[--bg] border-t border-[--border] overflow-hidden"
            aria-label="Technology stack"
        >
            {/* Project-Style Floating Magnetic Follower Pill (Dennis Snellenberg / Savindu signature interaction) */}
            <motion.div
                className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center rounded-full bg-[--lime] text-black font-mono text-xs font-black shadow-[0_0_30px_rgba(163,230,53,0.35)] tracking-widest px-5 py-2.5 border border-black/10"
                style={{
                    left: springX,
                    top: springY
                }}
                animate={{
                    scale: hoveredTech ? 1 : 0,
                    opacity: hoveredTech ? 1 : 0
                }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="flex items-center gap-1.5 uppercase whitespace-nowrap">
                    <span>{hoveredTech || "TECH"}</span>
                    <span className="text-black text-xs font-bold">✦</span>
                </span>
            </motion.div>

            {/* Section Header */}
            <div className="container-xl mb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-[--lime]" />
                            <span className="label-muted">ENGINEERING TOOLKIT &amp; RUNTIMES</span>
                            <span className="font-mono text-xs text-[--muted]">/</span>
                            <span className="label-lime">3D CYLINDER STACK</span>
                        </div>
                        <h2 className="display-lg text-[--text]">
                            THE TOOLS I<br />
                            <span className="text-[--lime] font-extrabold">BUILD WITH.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 font-mono text-xs text-[--muted]">
                        <span className="inline-flex items-center gap-2 border border-[--border] bg-[--surface] px-3.5 py-1.5 rounded-full text-[--text] font-semibold">
                            <span className="h-2 w-2 rounded-full bg-[--lime] animate-pulse" />
                            <span>DRAG 3D CYLINDER · CLICK TO INSPECT</span>
                        </span>
                        <span className="text-[10px] text-[--muted]">
                            14 Core Technologies
                        </span>
                    </div>
                </div>
            </div>

            {/* 3D Circular Cylinder Carousel for Technology Stack */}
            <div
                className="w-full flex justify-center mb-16"
                data-cursor="DRAG 3D"
            >
                <div style={{ width: "100%", height: "560px", position: "relative" }}>
                    <CircularCarousel
                        items={carouselItems}
                        preset="cylinder"
                        intro="rise"
                        cardWidth={220}
                        aspectRatio={1}
                        speed={14}
                        captions={false}
                        gap={25}
                        tilt={-5}
                        curve={1}
                        perspective={2500}
                        autoplay="drift"
                        interval={3}
                        direction="left"
                        momentum={0.6}
                        snap
                        pauseOnHover
                        focusOnClick
                        draggable
                        parallax={0.3}
                        stretch={0.5}
                        fadeColor="#000000"
                        depthFade={0.55}
                        innerShade={0.6}
                        cornerRadius={12}
                        onItemClick={(item) => setHoveredTech(item.title?.toUpperCase() || null)}
                    />
                </div>
            </div>

            {/* Continuous Marquee Ticker with Hover Pause & Magnetic Cursor Interaction */}
            <div className="relative border-t border-[--border] pt-6" data-cursor="TECH STACK">
                <div
                    onMouseEnter={() => setHoveredTech("TECH STACK")}
                    className="flex animate-marquee hover:[animation-play-state:paused] cursor-pointer"
                    aria-hidden
                >
                    {doubled.map((tech, i) => (
                        <div
                            key={i}
                            data-cursor={tech.toUpperCase()}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                setHoveredTech(tech.toUpperCase());
                            }}
                            onMouseLeave={() => setHoveredTech("TECH STACK")}
                            className="shrink-0 flex items-center gap-6 px-8 py-4 border-r border-[--border] hover:bg-[--surface]/80 transition-colors cursor-pointer group"
                        >
                            <span className="font-mono text-xs font-semibold tracking-widest text-[--muted] group-hover:text-[--lime] transition-colors whitespace-nowrap">
                                {tech}
                            </span>
                            <span className="text-[--lime] text-xs" aria-hidden>✦</span>
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[--bg] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[--bg] to-transparent z-10" />
            </div>
        </section>
    );
}

export default TechnologyWall;
