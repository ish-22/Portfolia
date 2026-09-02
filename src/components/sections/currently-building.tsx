"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, GitBranch, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";

export function CurrentlyBuilding() {
    return (
        <section className="section-padding bg-[#08090b] border-t border-white/10">
            <div className="container-page">
                <div className="lab-card p-8 lg:p-12 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-2 font-mono text-xs text-lime-400 font-bold mb-2">
                                <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                                <span>CURRENTLY BUILDING IN THE LAB</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                Active Code Repositories & Engineering System Updates
                            </h2>
                            <p className="mt-3 max-w-xl text-sm text-gray-400">
                                Regular commits to AI study assistants, Next.js 15 app router architectures, microservices, and AWS Bedrock translation layers.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 font-mono text-xs">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="GITHUB"
                                className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300 transition-all"
                            >
                                <Github size={18} />
                                <span>EXPLORE GITHUB PROFILE</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-6 font-mono text-xs">
                        <div className="flex items-center gap-3">
                            <GitCommit size={18} className="text-lime-400" />
                            <div>
                                <p className="text-gray-500 text-[10px]">RECENT COMMIT</p>
                                <p className="text-gray-200 font-bold">RAG Document Pipeline Optimization</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <GitBranch size={18} className="text-lime-400" />
                            <div>
                                <p className="text-gray-500 text-[10px]">MAIN BRANCH</p>
                                <p className="text-gray-200 font-bold">production / main</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Code2 size={18} className="text-lime-400" />
                            <div>
                                <p className="text-gray-500 text-[10px]">PRIMARY LANGUAGE</p>
                                <p className="text-lime-400 font-bold">TypeScript / Next.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
