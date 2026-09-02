"use client";

import { motion } from "framer-motion";

const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "Laravel", "Tailwind CSS",
    "MySQL", "PostgreSQL", "Redis", "AWS", "Docker", "Vercel", "Git", "GitHub",
    "Framer Motion", "Amazon Bedrock", "Python"
];

const doubled = [...techStack, ...techStack];

export function TechnologyWall() {
    return (
        <section className="section-sm bg-[--bg] border-t border-[--border] overflow-hidden" aria-label="Technology stack">
            <div className="container-xl mb-12">
                <span className="label-muted">THE TOOLS I BUILD WITH</span>
            </div>

            {/* Marquee */}
            <div className="relative">
                <div className="flex animate-marquee hover:[animation-play-state:paused] cursor-default" aria-hidden>
                    {doubled.map((tech, i) => (
                        <div
                            key={i}
                            className="shrink-0 flex items-center gap-6 px-8 py-4 border-r border-[--border]"
                        >
                            <span className="font-mono text-xs font-semibold tracking-widest text-[--muted] hover:text-[--text] transition-colors whitespace-nowrap">
                                {tech}
                            </span>
                            <span className="text-[--lime] text-xs" aria-hidden>✦</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Screen fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[--bg] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[--bg] to-transparent" />
        </section>
    );
}
