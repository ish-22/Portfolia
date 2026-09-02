import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, CheckCircle, Cpu, Layers } from "lucide-react";
import { selectedProjects, secondaryProjects, ProjectData } from "@/data/portfolio";
import { SiteLayout } from "@/components/site-layout";

type CaseStudyParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
    const all = [...selectedProjects, ...secondaryProjects];
    return all.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: CaseStudyParams }) {
    const { slug } = await params;
    const allProjects = [...selectedProjects, ...secondaryProjects];
    const project = allProjects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <SiteLayout>
            <article className="min-h-screen pt-28 pb-24 bg-[--bg] text-[--text]">
                <div className="container-lg max-w-5xl">
                    {/* Back Navigation Button */}
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[--muted] hover:text-[--lime] transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        <span>BACK TO WORK</span>
                    </Link>

                    {/* Header Metadata */}
                    <div className="border-b border-[--border] pb-8">
                        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[--muted] mb-4">
                            <span className="text-[--lime] font-bold">{project.number}</span>
                            <span className="opacity-50">/</span>
                            <span>{project.year}</span>
                            <span className="opacity-50">/</span>
                            <span className="text-[--lime] border border-[--lime]/30 bg-[--lime]/5 px-2.5 py-1">
                                {project.status}
                            </span>
                        </div>

                        <h1 className="display-lg text-[--text] mt-2 mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl font-mono text-[--lime]">{project.subtitle}</p>

                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs border-t border-[--border] pt-6">
                            <div>
                                <p className="text-[--muted] text-[10px] mb-1">ROLE</p>
                                <p className="text-[--text] font-semibold">{project.role}</p>
                            </div>
                            <div>
                                <p className="text-[--muted] text-[10px] mb-1">CATEGORY</p>
                                <p className="text-[--text] font-semibold">{project.category}</p>
                            </div>
                            <div>
                                <p className="text-[--muted] text-[10px] mb-1">YEAR</p>
                                <p className="text-[--text] font-semibold">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-[--muted] text-[10px] mb-1">STACK</p>
                                <p className="text-[--lime] font-semibold">{project.stack.slice(0, 3).join(" · ")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual Image */}
                    <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden border border-[--border] bg-[--surface]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Chapter-by-Chapter Technical Case Study Presentation */}
                    <div className="mt-16 space-y-16">
                        {/* 01 — Overview */}
                        <section className="p-8 border border-[--border] bg-[--surface]/20">
                            <span className="label-lime block mb-4">01 — OVERVIEW</span>
                            <h2 className="text-2xl font-bold text-[--text] mb-4">System Executive Summary</h2>
                            <p className="text-base text-[--muted] leading-relaxed">
                                {project.overview}
                            </p>
                        </section>

                        {/* 02 — Problem & Users */}
                        <div className="grid gap-8 sm:grid-cols-2">
                            <section className="p-8 border border-[--border] bg-[--surface]/20">
                                <span className="label-muted block mb-4">02 — THE PROBLEM</span>
                                <h3 className="text-xl font-bold text-[--text] mb-3">Core Friction</h3>
                                <p className="text-sm text-[--muted] leading-relaxed">
                                    {project.problem}
                                </p>
                            </section>

                            <section className="p-8 border border-[--border] bg-[--surface]/20">
                                <span className="label-muted block mb-4">03 — TARGET USERS</span>
                                <h3 className="text-xl font-bold text-[--text] mb-3">Primary Personas</h3>
                                <p className="text-sm text-[--muted] leading-relaxed">
                                    {project.users}
                                </p>
                            </section>
                        </div>

                        {/* 04 — Product Goals */}
                        <section className="p-8 border border-[--border] bg-[--surface]/20">
                            <span className="label-lime block mb-4">04 — PRODUCT GOALS</span>
                            <h2 className="text-2xl font-bold text-[--text] mb-4">Engineering Objectives</h2>
                            <ul className="space-y-3 font-mono text-sm text-[--muted]">
                                {project.goals.map((goal, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <CheckCircle size={18} className="text-[--lime] shrink-0 mt-0.5" />
                                        <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* 05 — Research & User Flow */}
                        <div className="grid gap-8 sm:grid-cols-2">
                            <section className="p-8 border border-[--border] bg-[--surface]/20">
                                <span className="label-muted block mb-4">05 — RESEARCH & INSIGHTS</span>
                                <p className="text-sm text-[--muted] leading-relaxed">
                                    {project.research}
                                </p>
                            </section>

                            <section className="p-8 border border-[--border] bg-[--surface]/20">
                                <span className="label-muted block mb-4">06 — USER FLOW</span>
                                <p className="font-mono text-xs text-[--lime] leading-relaxed">
                                    {project.userFlow}
                                </p>
                            </section>
                        </div>

                        {/* 07 — Technical Architecture & Challenges */}
                        <section className="p-8 border border-[--lime]/30 bg-[--lime]/5">
                            <div className="flex items-center gap-2 font-mono text-xs text-[--lime] mb-4">
                                <Cpu size={16} />
                                <span>07 — BACKEND ARCHITECTURE & ENGINE</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[--text] mb-4">System Architecture & Challenges</h2>
                            <p className="text-sm text-[--muted] leading-relaxed mb-6">
                                {project.architectureNotes}
                            </p>

                            <div className="border-t border-[--border] pt-6">
                                <h4 className="font-mono text-xs text-[--lime] uppercase mb-4">Engineering Challenge & Solution</h4>
                                <p className="text-sm text-[--muted] mb-3">
                                    <strong className="text-[--text]">Challenge:</strong> {project.challenges}
                                </p>
                                <p className="text-sm text-[--muted]">
                                    <strong className="text-[--lime]">Solution:</strong> {project.solution}
                                </p>
                            </div>
                        </section>

                        {/* 08 — Result & Impact */}
                        <section className="p-8 border border-[--lime]/30 bg-[--lime]/10">
                            <span className="label-lime block mb-4">08 — RESULT & OUTCOME</span>
                            <h2 className="text-2xl font-bold text-[--text] mb-4">Measured Product Impact</h2>
                            <p className="text-base font-semibold text-[--lime] leading-relaxed">
                                {project.result}
                            </p>
                        </section>
                    </div>

                    {/* Footer CTAs */}
                    <div className="mt-16 border-t border-[--border] pt-8 flex items-center justify-between">
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[--muted] hover:text-[--lime] transition-colors"
                        >
                            <ArrowLeft size={16} />
                            <span>EXPLORE ALL PROJECTS</span>
                        </Link>

                        {project.repo && typeof project.repo === "string" && (
                            <Link
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-[--border] px-4 py-2 font-mono text-xs text-[--text] hover:border-[--lime] hover:text-[--lime] transition-all"
                            >
                                <Github size={16} />
                                <span>VIEW SOURCE REPOSITORY</span>
                            </Link>
                        )}
                    </div>
                </div>
            </article>
        </SiteLayout>
    );
}
