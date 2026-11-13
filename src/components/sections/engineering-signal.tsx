"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { engineeringCapabilities } from "@/data/portfolio";

export function EngineeringSignal() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-labelledby="signal-heading">
            <div className="container-xl">
                {/* Section label */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[--lime]" />
                        <span className="label-muted">SERVICES &amp; EXPERTISE</span>
                        <span className="font-mono text-xs text-[--muted]">/</span>
                        <span className="label-lime">WHAT I DO &amp; BUILD</span>
                    </div>
                    <p className="text-xs font-mono text-[--muted]">
                        BUSINESS-FOCUSED ENGINEERING &amp; MODERN WEB SOLUTIONS
                    </p>
                </div>

                {/* Four large numbered capability rows */}
                <div className="divide-y divide-[--border]">
                    {engineeringCapabilities.map((cap) => (
                        <motion.div
                            key={cap.id}
                            onMouseEnter={() => setHovered(cap.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="group relative flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-8 py-8 md:py-12 cursor-default"
                        >
                            {/* Oversized number */}
                            <span
                                className={`numeral shrink-0 w-16 sm:w-20 md:w-28 transition-colors duration-300 ${
                                    hovered === cap.id ? "text-[--lime]" : "text-[--border]"
                                }`}
                                aria-hidden
                            >
                                {cap.id}
                            </span>

                            {/* Title block */}
                            <div className="flex-1 min-w-0">
                                <h2
                                    className={`display-md transition-colors duration-300 ${
                                        hovered === cap.id ? "text-[--lime]" : "text-[--text]"
                                    }`}
                                >
                                    {cap.title}
                                </h2>
                                <p className="mt-1 text-xs sm:text-sm font-mono text-[--muted]">{cap.subtitle}</p>
                            </div>

                            {/* Description + tags — always accessible on mobile and desktop */}
                            <div className="shrink-0 w-full md:w-80 lg:w-96 md:ml-auto">
                                <p className="text-sm text-[--muted] leading-relaxed mb-3.5">
                                    {cap.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {cap.items.map((item) => (
                                        <span
                                            key={item}
                                            className="border border-[--border] bg-[--surface] group-hover:border-[--lime]/40 group-hover:bg-[--lime]/10 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-[--muted] group-hover:text-[--lime] transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Accent line that expands on hover */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-px bg-[--lime]"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: hovered === cap.id ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ originX: 0 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
