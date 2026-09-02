"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { designLabExamples, uxProcessSteps } from "@/data/portfolio";

export function DesignLab() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="section bg-[--bg] border-t border-[--border]" aria-label="Design Lab">
            <div className="container-xl">
                {/* Header */}
                <div className="mb-20">
                    <span className="label-muted block mb-4">DESIGN LAB</span>
                    <h2 className="display-lg text-[--text]">
                        UI/UX<br />
                        <span className="italic font-thin text-[--muted]">EXPLORATIONS.</span>
                    </h2>
                </div>

                {/* Problem-solution UX cases */}
                <div className="space-y-2 mb-28">
                    {designLabExamples.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="grid md:grid-cols-12 border border-[--border] overflow-hidden"
                        >
                            {/* Copy */}
                            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <span className="label-lime block mb-4">UX EXPLORATION / 00{idx + 1}</span>
                                    <h3 className="font-black text-xl md:text-2xl text-[--text] mb-6">{item.title}</h3>

                                    <div className="space-y-4 text-sm">
                                        <div className="border-l-2 border-red-500/40 pl-4">
                                            <p className="label-muted mb-1">PROBLEM</p>
                                            <p className="text-[--muted] leading-relaxed">{item.problem}</p>
                                        </div>
                                        <div className="border-l-2 border-[--lime]/50 pl-4">
                                            <p className="label-lime mb-1">SOLUTION</p>
                                            <p className="text-[--muted] leading-relaxed">{item.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-4 font-mono text-[10px]">
                                    <span className="text-[--muted]">{item.beforeLabel}</span>
                                    <span className="text-[--lime]">→</span>
                                    <span className="text-[--lime] font-bold">{item.afterLabel}</span>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="md:col-span-7 relative min-h-[260px] bg-[--surface]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* UX Process */}
                <div className="border-t border-[--border] pt-16">
                    <span className="label-muted block mb-10">END-TO-END UX PROCESS</span>

                    {/* Step selector */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-px bg-[--border]">
                        {uxProcessSteps.map((s, i) => (
                            <button
                                key={s.step}
                                onClick={() => setActiveStep(i)}
                                className={`text-center p-4 font-mono text-[10px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lime] ${activeStep === i
                                        ? "bg-[--lime] text-black font-black"
                                        : "bg-[--bg] text-[--muted] hover:bg-[--surface] hover:text-[--text]"
                                    }`}
                            >
                                <span className="block text-[8px] mb-1">{s.step}</span>
                                {s.title}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-0 border border-t-0 border-[--border] p-8"
                    >
                        <div className="flex items-start gap-6">
                            <span className="font-mono text-4xl font-black text-[--lime]/20">
                                {uxProcessSteps[activeStep].step}
                            </span>
                            <div>
                                <h4 className="font-black text-lg text-[--text]">{uxProcessSteps[activeStep].title}</h4>
                                <p className="mt-2 max-w-xl text-sm text-[--muted] leading-relaxed">
                                    {uxProcessSteps[activeStep].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
