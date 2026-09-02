"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { architectureNodes } from "@/data/portfolio";

export function ArchitectureLab() {
    const [activeId, setActiveId] = useState<string>("client");
    const active = architectureNodes.find((n) => n.id === activeId)!;

    return (
        <section id="lab" className="section bg-[--bg] border-t border-[--border]" aria-label="Architecture lab">
            <div className="container-xl">
                {/* Header */}
                <div className="mb-20">
                    <span className="label-muted block mb-4">BEYOND THE INTERFACE</span>
                    <h2 className="display-lg text-[--text]">
                        SYSTEM<br />
                        <span className="italic font-thin text-[--muted]">ARCHITECTURE.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-sm text-[--muted] leading-relaxed">
                        Good software is more than what users see. Hover a node to inspect responsibilities.
                    </p>
                </div>

                {/* Interactive node grid */}
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    {architectureNodes.map((node, i) => (
                        <motion.button
                            key={node.id}
                            onClick={() => setActiveId(node.id)}
                            onMouseEnter={() => setActiveId(node.id)}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className={`group text-left border px-6 py-5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lime] ${activeId === node.id
                                ? "border-[--lime] bg-[--lime]/5"
                                : "border-[--border] hover:border-[--text]/20"
                                }`}
                        >
                            <p className="label-lime mb-2">{node.type}</p>
                            <p className={`font-bold text-sm ${activeId === node.id ? "text-[--lime]" : "text-[--text] group-hover:text-[--lime]"} transition-colors`}>
                                {node.title}
                            </p>
                            <p className="font-mono text-[10px] text-[--muted] mt-0.5">{node.tech}</p>
                        </motion.button>
                    ))}
                </div>

                {/* Inspector panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="border border-[--lime]/30 bg-[--lime]/5 px-8 py-7"
                    >
                        <div className="flex flex-wrap items-start gap-8">
                            <div className="flex-1">
                                <span className="label-lime block mb-2">NODE INSPECTOR — {active.type}</span>
                                <h3 className="text-xl font-bold text-[--text]">{active.title}</h3>
                                <p className="mt-3 text-sm text-[--muted] leading-relaxed">{active.description}</p>
                            </div>
                            <div className="shrink-0">
                                <span className="label-muted block mb-1">TECHNOLOGY</span>
                                <p className="font-mono text-sm font-semibold text-[--lime]">{active.tech}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
