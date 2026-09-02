"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { selectedProjects, secondaryProjects, ProjectData } from "@/data/portfolio";

export function SelectedWork() {
  const allProjects = [...selectedProjects, ...secondaryProjects];

  return (
    <section id="work" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="work-heading">
      <div className="container-xl">
        {/* Section heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="label-muted block mb-4">SELECTED WORK</span>
            <h2 id="work-heading" className="display-lg text-[--text]">
              ENGINEERED<br />
              <span className="text-[--muted] italic font-thin">PRODUCTS &amp;</span><br />
              CASE STUDIES.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[--muted] leading-relaxed">
            Each project built to solve a real problem — from transit infrastructure to AI-powered learning.
          </p>
        </div>

        {/* Primary 3 projects — large editorial */}
        <div className="space-y-2">
          {selectedProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Secondary projects — compact list */}
        <div className="mt-20">
          <span className="label-muted block mb-8">MORE WORK</span>
          <div className="divide-y divide-[--border]">
            {secondaryProjects.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                data-cursor="CASE STUDY"
                className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-[--lime]"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-[--muted]">{project.number}</span>
                  <span className="font-bold text-[--text] group-hover:text-[--lime] transition-colors">
                    {project.title}
                  </span>
                  <span className="hidden sm:block text-sm text-[--muted]">{project.subtitle}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block font-mono text-[10px] text-[--muted]">{project.year}</span>
                  <span className="font-mono text-[10px] text-[--muted] group-hover:text-[--lime] transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: ProjectData; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative border border-[--border] overflow-hidden"
    >
      <Link href={`/projects/${project.slug}`} data-cursor="CASE STUDY" className="block">
        <div className="grid md:grid-cols-12 min-h-[380px]">
          {/* Left: editorial copy */}
          <div className="md:col-span-5 flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="label-lime">{project.number}</span>
                <span className={`font-mono text-[10px] px-2.5 py-1 border ${project.status === "PRODUCTION"
                  ? "border-[--lime]/30 text-[--lime]"
                  : "border-[--border] text-[--muted]"
                  }`}>
                  {project.status}
                </span>
              </div>
              <h3
                className={`display-md transition-all duration-300 ${hovered ? "text-[--lime]" : "text-[--text]"
                  }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[--muted] font-mono">{project.subtitle}</p>
              <p className="mt-4 text-sm text-[--muted] leading-relaxed max-w-sm line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="mt-5">
              {/* Role + Year */}
              <div className="mb-4 grid grid-cols-2 gap-4 text-xs font-mono border-t border-[--border] pt-3">
                <div>
                  <p className="text-[--muted] mb-0.5">ROLE</p>
                  <p className="text-[--text]">{project.role}</p>
                </div>
                <div>
                  <p className="text-[--muted] mb-0.5">YEAR</p>
                  <p className="text-[--text]">{project.year}</p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((t) => (
                  <span key={t} className="border border-[--border] px-2 py-0.5 font-mono text-[10px] text-[--muted]">
                    {t}
                  </span>
                ))}
              </div>

              <motion.div
                className="inline-flex items-center gap-2 font-mono text-xs font-black text-[--lime]"
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.2 }}
              >
                VIEW CASE STUDY →
              </motion.div>
            </div>
          </div>

          {/* Right: project image */}
          <motion.div
            className="md:col-span-7 relative aspect-video md:aspect-auto md:h-full min-h-[220px] overflow-hidden bg-[--surface]"
            animate={{ scale: hovered ? 1.02 : 1 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[--bg]/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}
