"use client";

import { motion } from "framer-motion";

const philosophyStatements = [
    { label: "DESIGN WITH PURPOSE.", text: "Every interface starts with understanding humans, not pixels." },
    { label: "BUILD WITH CLARITY.", text: "The best code is the code that solves the real problem, nothing more." },
    { label: "ENGINEER FOR SCALE.", text: "Architecture decisions made today define the ceiling of tomorrow." },
    { label: "LEARN CONSTANTLY.", text: "Technology changes fast. Curiosity and discipline are the constants." },
    { label: "SHIP WITH INTENTION.", text: "Fast is good. Thoughtful is better. Both together is the goal." }
];

export function Philosophy() {
    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-label="Personal philosophy">
            <div className="container-xl">
                {/* Big statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="display-xl text-[--text] max-w-[12ch]">
                        GOOD <span className="text-[--muted] italic font-thin">SOFTWARE</span><br />
                        SHOULD <span className="text-[--lime]">FEEL</span><br />
                        <span className="italic font-thin text-[--muted]">SIMPLE.</span>
                    </h2>
                    <p className="mt-8 max-w-lg text-base text-[--muted] leading-relaxed">
                        Behind every simple experience is thoughtful design, careful engineering, and consistent iteration.
                    </p>
                </motion.div>

                {/* Five statements */}
                <div className="divide-y divide-[--border]">
                    {philosophyStatements.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12 py-7 hover:text-[--lime] transition-colors cursor-default"
                        >
                            <span className="font-mono text-xs font-black tracking-widest text-[--lime] shrink-0">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-black text-lg md:text-2xl tracking-tight text-[--text] group-hover:text-[--lime] transition-colors shrink-0">
                                {item.label}
                            </span>
                            <span className="text-sm text-[--muted] leading-relaxed">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
