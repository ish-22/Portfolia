"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { engineeringCapabilities } from "@/data/portfolio";

export function EngineeringSignal() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-labelledby="signal-heading">
            <div className="container-xl">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="label-muted">ENGINEERING SIGNAL</span>
                    <span className="h-px flex-1 bg-[--border]" />
                </div>

                {/* Four large numbered capability rows */}
                <div className="divide-y divide-[--border]">
                    {engineeringCapabilities.map((cap) => (
                        <motion.div
                            key={cap.id}
                            onMouseEnter={() => setHovered(cap.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-8 md:py-12 cursor-default"
                        >
                            {/* Oversized number */}
                            <span
                                className={`numeral shrink-0 w-40 transition-colors duration-300 ${hovered === cap.id ? "text-[--lime]" : ""
                                    }`}
                                aria-hidden
                            >
                                {cap.id}
                            </span>

                            {/* Title block */}
                            <div className="flex-1">
                                <h2
                                    className={`display-md transition-colors duration-300 ${hovered === cap.id ? "text-[--lime]" : "text-[--text]"
                                        }`}
                                >
                                    {cap.title}
                                </h2>
                                <p className="mt-1 label-muted">{cap.subtitle}</p>
                            </div>

                            {/* Description + tags — reveal on hover */}
                            <AnimatePresence>
                                {hovered === cap.id && (
                                    <motion.div
                                        key="desc"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.25 }}
                                        className="shrink-0 w-full md:w-72 ml-auto"
                                    >
                                        <p className="text-sm text-[--muted] leading-relaxed mb-4">
                                            {cap.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {cap.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="border border-[--lime]/30 bg-[--lime]/5 px-2.5 py-1 font-mono text-[10px] text-[--lime]"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

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
