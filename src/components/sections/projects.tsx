"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { fadeUp, viewportCard } from "@/lib/animations";
import { selectedProjects, secondaryProjects, ProjectData } from "@/data/portfolio";
import { ArrowUpRight, Github, ExternalLink, Layers } from "lucide-react";

export function SelectedWork() {
  const [activeHoverProject, setActiveHoverProject] = useState<string | null>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for Dennis Snellenberg / Savindu magnetic floating follower
  const springX = useSpring(cursorX, { stiffness: 400, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 30 });

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <section
      id="work"
      onMouseMove={handleGlobalMouseMove}
      className="relative section bg-[--bg] border-t border-[--border]"
      aria-labelledby="work-heading"
    >
      {/* Floating Magnetic Follower Pill (Dennis Snellenberg / Savindu signature interaction) */}
      <motion.div
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center rounded-full bg-[--lime] text-black font-mono text-xs font-black shadow-[0_0_30px_rgba(163,230,53,0.35)] tracking-widest px-5 py-2.5 border border-black/10"
        style={{
          left: springX,
          top: springY
        }}
        animate={{
          scale: activeHoverProject ? 1 : 0,
          opacity: activeHoverProject ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="flex items-center gap-1.5 uppercase">
          <span>VIEW</span>
          <ArrowUpRight size={14} className="stroke-[2.5]" />
        </span>
      </motion.div>

      <div className="container-xl">
        {/* Section heading */}
        <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[--lime]" />
              <span className="label-muted">PORTFOLIO &amp; CASE STUDIES</span>
              <span className="font-mono text-xs text-[--muted]">/</span>
              <span className="label-lime">SELECTED WORK</span>
            </div>
            <h2 id="work-heading" className="display-lg text-[--text]">
              RECENT WORK<br />
              <span className="text-[--lime]">(SELECTED).</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[--text] opacity-85 leading-relaxed font-normal">
            Production web applications, real-time tracking systems, AI-powered tools, and full-stack business software I have built.
          </p>
        </div>

        {/* Primary projects — Editorial Non-Image Showcase Cards with Interactive Mouse Follow & Spotlight */}
        <div className="space-y-8 sm:space-y-12">
          {selectedProjects.map((project, index) => (
            <ProjectEditorialCard
              key={project.id}
              project={project}
              index={index}
              onHoverStart={() => setActiveHoverProject(project.title)}
              onHoverEnd={() => setActiveHoverProject(null)}
            />
          ))}
        </div>

        {/* Secondary projects — Clean minimal editorial rows with reciprocal translation */}
        <div className="mt-20 sm:mt-24 border-t border-[--border] pt-14 sm:pt-16">
          <div className="flex items-center justify-between mb-8">
            <span className="label-muted font-bold">ADDITIONAL COMMERCIAL &amp; SYSTEM WORK</span>
            <span className="font-mono text-xs text-[--lime]">
              +{secondaryProjects.length} MORE ARCHIVED
            </span>
          </div>

          <div className="divide-y divide-[--border] border-t border-b border-[--border]">
            {secondaryProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => setActiveHoverProject(project.title)}
                onMouseLeave={() => setActiveHoverProject(null)}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-7 sm:py-9 transition-all duration-300 hover:px-4 sm:hover:px-6 hover:bg-[--surface]/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 min-w-0">
                  <span className="font-mono text-xs text-[--lime] shrink-0 font-bold tracking-wider">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-xl sm:text-3xl md:text-4xl text-[--text] group-hover:text-[--lime] group-hover:translate-x-3 transition-all duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[--muted] mt-1.5">
                      {project.subtitle} · <span className="text-[--text] opacity-75">{project.category}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0 font-mono text-xs group-hover:-translate-x-2 transition-transform duration-300">
                  <span className="text-[--muted] hidden sm:inline">{project.year}</span>
                  <span className="inline-flex items-center gap-1.5 text-[--lime] font-bold">
                    <span>CASE STUDY</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectEditorialCard({
  project,
  index,
  onHoverStart,
  onHoverEnd
}: {
  project: ProjectData;
  index: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      variants={fadeUp}
      custom={index * 0.12}
      initial="hidden"
      whileInView="visible"
      viewport={viewportCard}
      className="group relative rounded-2xl border border-[--border] bg-[--surface] overflow-hidden transition-all duration-400 hover:border-[--lime]/60 shadow-xs"
    >
      {/* Interactive Radial Spotlight Gradient Following Mouse Coordinates */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(163, 230, 53, 0.08), transparent 70%)`
        }}
      />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[--border] mb-8 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-[--lime] tracking-wider">{project.number}</span>
            <span className="text-[--border]">/</span>
            <span className="text-[--text] font-semibold">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 border border-[--lime]/30 bg-[--lime-dim] text-[--lime] font-bold text-[10px] rounded tracking-wider uppercase">
              {project.projectType || project.status}
            </span>
            <span className="text-[--muted]">{project.year}</span>
          </div>
        </div>

        {/* Title & Headline with Kinetic Slide On Hover */}
        <div className="max-w-4xl mb-6">
          <Link href={`/projects/${project.slug}`} className="block group/title">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[--text] group-hover:text-[--lime] group-hover:translate-x-3 transition-all duration-300 tracking-tight flex items-center gap-3">
              <span>{project.title}</span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[--lime] transition-all duration-300 h-6 w-6 sm:h-8 sm:w-8 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>
          </Link>
          <p className="mt-2 text-sm sm:text-base font-mono text-[--lime] font-medium transition-colors">
            {project.subtitle}
          </p>
        </div>

        {/* Real Application Screenshot with Consistent Proportions */}
        {project.image && (
          <Link
            href={`/projects/${project.slug}`}
            className="block relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xl border border-[--border] bg-[--elevated]/40 mb-6 group/img cursor-pointer"
          >
            <Image
              src={project.image}
              alt={`${project.title} user interface screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
            />
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded font-mono text-[10px] text-[--lime] flex items-center gap-1.5">
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={12} />
            </div>
          </Link>
        )}

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-[--text] opacity-85 leading-relaxed max-w-4xl mb-6">
          {project.description}
        </p>

        {/* Problem vs Solution 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-[--border] bg-[--elevated]/30">
            <span className="font-mono text-[10px] uppercase font-bold text-[--muted] tracking-wider block mb-1.5">
              The Problem
            </span>
            <p className="text-xs sm:text-sm text-[--text] opacity-80 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-4 rounded-xl border border-[--lime]/30 bg-[--lime]/5">
            <span className="font-mono text-[10px] uppercase font-bold text-[--lime] tracking-wider block mb-1.5">
              My Solution
            </span>
            <p className="text-xs sm:text-sm text-[--text] opacity-90 leading-relaxed font-medium">
              {project.solution}
            </p>
          </div>
        </div>

        {/* My Individual Contribution */}
        {project.myContribution && (
          <div className="mb-6 p-4 rounded-xl border border-[--border] bg-[--surface]">
            <span className="font-mono text-[10px] uppercase font-bold text-[--lime] tracking-wider block mb-1">
              My Specific Role &amp; Contribution
            </span>
            <p className="text-xs sm:text-sm text-[--text] opacity-85 leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        )}

        {/* Real-World Business Impact Banner */}
        {project.businessImpact && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 sm:p-5 max-w-3xl transition-transform duration-300 group-hover:scale-[1.01]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 animate-pulse" />
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 block mb-1">
                Business Value
              </span>
              <p className="font-mono text-xs sm:text-sm text-[--text] opacity-90 leading-relaxed font-medium">
                {project.businessImpact}
              </p>
            </div>
          </div>
        )}

        {/* Technical Architecture Highlights & Deliverables */}
        {project.goals && project.goals.length > 0 && (
          <div className="mb-8 p-5 sm:p-6 rounded-xl border border-[--border] bg-[--elevated]/40">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[--lime]">
              <Layers size={14} />
              <span className="font-bold tracking-wider uppercase">KEY FEATURES</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
              {project.goals.map((goal, gIdx) => (
                <div key={gIdx} className="flex items-start gap-2 text-[--text] opacity-80">
                  <span className="text-[--lime] font-bold">↳</span>
                  <span className="leading-snug">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Bar: Stack & Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[--border]">
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="border border-[--border] bg-[--surface] px-3 py-1 font-mono text-xs text-[--text] rounded hover:border-[--lime]/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 border border-[--lime] bg-[--lime] text-[--btn-text] px-5 py-2.5 font-bold hover:bg-transparent hover:text-[--lime] transition-all rounded"
            >
              <span>READ CASE STUDY</span>
              <ArrowUpRight size={14} />
            </Link>

            {project.repo && (
              <a
                href={typeof project.repo === "string" ? project.repo : project.repo.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[--border] bg-[--surface] text-[--muted] hover:text-[--text] hover:border-[--border]/80 px-4 py-2.5 transition-all rounded"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={14} />
                <span>CODE</span>
              </a>
            )}

            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[--lime] hover:underline px-2 py-2"
                aria-label={`Visit ${project.title} live system`}
              >
                <span>LIVE</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default SelectedWork;
