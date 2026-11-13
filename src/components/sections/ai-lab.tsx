"use client";

import { motion } from "motion/react";
import { aiLabItems } from "@/data/portfolio";

export function AILab() {
    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-label="AI Lab">
            <div className="container-xl">
                {/* Header */}
                <div className="grid gap-10 md:grid-cols-12 mb-16">
                    <div className="md:col-span-7">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-[--lime]" />
                            <span className="label-muted">PRACTICAL AI INTEGRATIONS</span>
                            <span className="font-mono text-xs text-[--muted]">/</span>
                            <span className="label-lime">USEFUL AUTOMATION</span>
                        </div>
                        <h2 className="display-lg text-[--text]">
                          PRACTICAL<br />
                          <span className="text-[--lime] font-extrabold">AI TOOLS</span><br />
                          FOR WORK.
                        </h2>
                    </div>
                    <div className="md:col-span-5 flex items-end">
                        <p className="text-sm text-[--muted] leading-relaxed">
                            Rather than using AI as a gimmick, I build practical tools that solve real time-wasting problems: extracting facts from large PDFs, translating content, and generating practice quizzes.
                        </p>
                    </div>
                </div>

                {/* AI items — clear, accessible card layout */}
                <div className="divide-y divide-[--border]">
                    {aiLabItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 hover:bg-[--surface]/40 transition-colors px-4 rounded-xl"
                        >
                            <div className="flex items-start gap-4 flex-1">
                                <span className="font-mono text-xs text-[--lime] font-bold shrink-0 pt-1">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="space-y-1.5 max-w-xl">
                                    <h3 className="font-bold text-base sm:text-lg text-[--text] group-hover:text-[--lime] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[--muted] leading-relaxed">
                                        {item.description}
                                    </p>
                                    {"businessValue" in item && item.businessValue && (
                                        <p className="font-mono text-xs text-[--lime] pt-1">
                                            ↳ <span className="text-[--text] opacity-80">{item.businessValue}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="md:text-right shrink-0 flex md:flex-col items-center md:items-end justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-[--border]">
                                <span className={`inline-block border px-3 py-1 font-mono text-[10px] font-bold uppercase rounded ${item.status === "PRODUCTION"
                                        ? "border-[--lime]/30 text-[--lime] bg-[--lime]/5"
                                        : "border-amber-600/40 text-amber-500 bg-amber-500/10"
                                    }`}>
                                    {item.status}
                                </span>
                                <span className="font-mono text-[11px] text-[--muted]">{item.tech}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AILab;
