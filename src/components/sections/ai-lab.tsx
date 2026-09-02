"use client";

import { motion } from "framer-motion";
import { aiLabItems } from "@/data/portfolio";

export function AILab() {
    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-label="AI Lab">
            <div className="container-xl">
                {/* Header */}
                <div className="grid gap-10 md:grid-cols-12 mb-20">
                    <div className="md:col-span-7">
                        <span className="label-muted block mb-4">BUILDING WITH AI</span>
                        <h2 className="display-lg text-[--text]">
                            INTELLIGENT<br />
                            <span className="italic font-thin text-[--muted]">SYSTEMS.</span>
                        </h2>
                    </div>
                    <div className="md:col-span-5 flex items-end">
                        <p className="text-sm text-[--muted] leading-relaxed">
                            Exploring how intelligent systems can become useful product experiences. Every item here is grounded in real implementation.
                        </p>
                    </div>
                </div>

                {/* AI items — horizontal row layout */}
                <div className="divide-y divide-[--border]">
                    {aiLabItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 py-7"
                        >
                            <span className="font-mono text-xs text-[--muted] shrink-0 w-10">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <h3 className="flex-1 font-bold text-[--text] group-hover:text-[--lime] transition-colors">
                                {item.title}
                            </h3>

                            <p className="sm:w-64 text-sm text-[--muted] leading-relaxed">
                                {item.description}
                            </p>

                            <div className="sm:w-48 sm:text-right flex sm:block items-center gap-3">
                                <span className={`inline-block border px-2.5 py-1 font-mono text-[10px] font-bold ${item.status === "PRODUCTION"
                                        ? "border-[--lime]/30 text-[--lime]"
                                        : "border-amber-500/30 text-amber-400"
                                    }`}>
                                    {item.status}
                                </span>
                                <span className="block mt-1 font-mono text-[10px] text-[--muted]">{item.tech}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
