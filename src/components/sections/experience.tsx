"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp, viewportCard, viewportOnce } from "@/lib/animations";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Layers,
  GraduationCap,
  Sparkles,
  Award
} from "lucide-react";
import { workExperience, experienceTimeline, education } from "@/data/portfolio";

type TabType = "all" | "experience" | "education";

export function ProfessionalExperience() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const totalExperienceCount = workExperience.length;
  const totalEducationCount = education.length;
  const totalMilestonesCount = experienceTimeline.length;

  return (
    <section
      id="experience"
      className="section bg-[--bg] border-t border-[--border] scroll-mt-16"
      aria-labelledby="experience-heading"
    >
      <div className="container-xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[--lime]" />
              <span className="label-muted">TRACK RECORD &amp; CREDENTIALS</span>
              <span className="font-mono text-xs text-[--muted]">/</span>
              <span className="label-lime">EXPERIENCE</span>
            </div>
            <h2 id="experience-heading" className="display-lg text-[--text]">
              CAREER &amp;<br />
              <span className="text-[--lime]">ACADEMIC</span><br />
              <span className="text-[--text] font-extrabold">MILESTONES.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[--text] opacity-85 leading-relaxed font-normal">
            Commercial software engineering experience at Amazoft IT, combined with an honours degree
            in Software Engineering from Cardiff Metropolitan University.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[--border]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 font-mono text-xs font-semibold rounded-none border transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "all"
                ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                : "border-[--border] bg-[--surface] text-[--muted] hover:text-[--text] hover:border-[--border]/80"
            }`}
          >
            <span>ALL MILESTONES</span>
            <span className="text-[10px] opacity-75 font-mono">({totalMilestonesCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2.5 font-mono text-xs font-semibold rounded-none border transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "experience"
                ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                : "border-[--border] bg-[--surface] text-[--muted] hover:text-[--text] hover:border-[--border]/80"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>COMMERCIAL EXPERIENCE</span>
            <span className="text-[10px] opacity-75 font-mono">({totalExperienceCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2.5 font-mono text-xs font-semibold rounded-none border transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "education"
                ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                : "border-[--border] bg-[--surface] text-[--muted] hover:text-[--text] hover:border-[--border]/80"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC DEGREES</span>
            <span className="text-[10px] opacity-75 font-mono">({totalEducationCount})</span>
          </button>
        </div>

        {/* Commercial Experience Section */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="space-y-12 mb-16">
            {activeTab === "all" && (
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-4 w-4 text-[--lime]" />
                <span className="label-muted font-bold">COMMERCIAL ROLES &amp; PRODUCTION SYSTEMS</span>
              </div>
            )}

            {workExperience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={fadeUp}
                custom={idx * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={viewportCard}
                className="border border-[--border] bg-[--surface] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[--lime]/40 shadow-xs"
              >
                {/* Card Header & Status Banner */}
                <div className="border-b border-[--border] p-6 sm:p-8 md:p-10 bg-[--surface]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div>
                      {/* Status badge */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-[--lime]/30 bg-[--lime-dim] px-3.5 py-1 mb-4">
                        {exp.status === "CURRENT" && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[--lime]" />
                          </span>
                        )}
                        <span className="font-mono text-xs font-semibold tracking-wider text-[--lime]">
                          {exp.status === "CURRENT" ? "CURRENT COMMERCIAL ROLE" : "FOUNDATIONAL COMMERCIAL ROLE"}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[--text] tracking-tight">
                        {exp.company}
                      </h3>

                      <p className="mt-1 font-mono text-base sm:text-lg font-bold text-[--lime]">
                        {exp.role}
                      </p>
                    </div>

                    {/* Metadata badges */}
                    <div className="flex flex-wrap lg:flex-col lg:items-end gap-2.5 font-mono text-xs text-[--muted]">
                      <div className="inline-flex items-center gap-2 border border-[--border] bg-[--elevated] px-3 py-1.5 rounded-md">
                        <Calendar className="h-3.5 w-3.5 text-[--lime]" />
                        <span className="text-[--text] font-semibold">{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 border border-[--border] bg-[--elevated] px-3 py-1.5 rounded-md">
                        <MapPin className="h-3.5 w-3.5 text-[--lime]" />
                        <span className="text-[--text]">{exp.location}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 border border-[--border] bg-[--elevated] px-3 py-1.5 rounded-md">
                        <Briefcase className="h-3.5 w-3.5 text-[--lime]" />
                        <span className="text-[--text]">Full-Time · Agile / Scrum</span>
                      </div>
                    </div>
                  </div>

                  {/* Role Summary */}
                  <p className="mt-6 text-sm sm:text-base text-[--text] opacity-85 leading-relaxed max-w-3xl">
                    {exp.summary}
                  </p>
                </div>

                {/* Card Body: 2 Columns (Responsibilities + Impact) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[--border]">
                  {/* Left Column: Responsibilities */}
                  <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 bg-[--surface]">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="label-muted font-bold">KEY RESPONSIBILITIES &amp; CONTRIBUTIONS</span>
                    </div>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-[--text] opacity-85 leading-relaxed">
                          <span className="font-mono text-xs text-[--lime] font-bold mt-0.5 shrink-0">
                            {(rIdx + 1).toString().padStart(2, "0")}.
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Verified Achievements */}
                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 bg-[--elevated]/60">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles className="h-4 w-4 text-[--lime]" />
                      <span className="label-muted font-bold">VERIFIED ACHIEVEMENTS &amp; IMPACT</span>
                    </div>
                    <div className="space-y-3.5">
                      {exp.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="rounded-lg border border-[--border] bg-[--surface] p-4 transition-colors hover:border-[--lime]/40 shadow-xs"
                        >
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[--lime] shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-[--text] opacity-90 leading-relaxed font-medium">
                              {ach}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used Bar */}
                <div className="border-t border-[--border] p-6 sm:p-8 bg-[--elevated]/40">
                  <span className="label-muted block mb-3 font-bold">PRODUCTION TECHNOLOGIES &amp; METHODOLOGIES</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border border-[--border] bg-[--surface] px-3 py-1 font-mono text-xs text-[--text] transition-colors hover:border-[--lime]/50 hover:text-[--lime]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Projects & Domain Experience under this role */}
                {exp.projects.length > 0 && (
                  <div className="border-t border-[--border] p-6 sm:p-8 md:p-10 bg-[--surface]">
                    <div className="flex items-center gap-2 mb-6">
                      <Layers className="h-4 w-4 text-[--lime]" />
                      <span className="label-muted font-bold">PRODUCTION PLATFORMS SHIPPED UNDER THIS ROLE</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.projects.map((project) => (
                        <div
                          key={project.id}
                          className="flex flex-col justify-between rounded-xl border border-[--border] bg-[--elevated]/50 p-5 transition-all duration-300 hover:border-[--lime]/40 shadow-xs group"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="font-mono text-[10px] text-[--lime] bg-[--lime]/10 border border-[--lime]/20 px-2 py-0.5 rounded font-semibold">
                                {project.area}
                              </span>
                              {project.link && (
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[--lime] hover:underline"
                                  aria-label={`Visit ${project.name}`}
                                >
                                  <span>LIVE</span>
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                              )}
                            </div>

                            <h4 className="font-bold text-base text-[--text] group-hover:text-[--lime] transition-colors mb-2">
                              {project.name}
                            </h4>

                            <p className="text-xs sm:text-sm text-[--text] opacity-80 leading-relaxed mb-4">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech tags */}
                          <div className="pt-3 border-t border-[--border] flex flex-wrap gap-1.5 mt-auto">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-[10px] text-[--muted] bg-[--surface] px-2 py-0.5 rounded border border-[--border]/60"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Education & Academic Qualifications Section */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="mb-16">
            {activeTab === "all" && (
              <div className="flex items-center gap-2 mb-6 pt-6 border-t border-[--border]">
                <GraduationCap className="h-4 w-4 text-[--lime]" />
                <span className="label-muted font-bold">ACADEMIC FOUNDATION &amp; DEGREE QUALIFICATIONS</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, eIdx) => (
                <motion.div
                  key={edu.degree}
                  variants={fadeUp}
                  custom={eIdx * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportCard}
                  className="border border-[--border] bg-[--surface] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[--lime]/40 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-bold text-[--lime] border border-[--lime]/30 bg-[--lime-dim] px-3 py-1 rounded-full">
                        {edu.classification}
                      </span>
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[--text] opacity-85">
                        <Calendar className="h-3 w-3 text-[--lime]" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h3 className="font-black text-xl sm:text-2xl text-[--text] mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-[--lime] mb-4">
                      {edu.institution}
                    </p>
                    
                    {/* Education Highlights & Rigor */}
                    {edu.highlights && edu.highlights.length > 0 ? (
                      <ul className="space-y-2 mb-4 font-mono text-xs text-[--text] opacity-85">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-[--lime] font-bold">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs sm:text-sm text-[--text] opacity-80 leading-relaxed mb-4">
                        Specialized in software architecture, enterprise systems, database design, modern web technologies, and scalable software design patterns.
                      </p>
                    )}

                    {edu.verificationNote && (
                      <div className="p-3 rounded-lg border border-[--border] bg-[--elevated]/40 font-mono text-[11px] text-[--muted]">
                        <span className="text-[--lime] font-bold">Verification Note: </span>
                        {edu.verificationNote}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[--border] flex items-center justify-between text-xs font-mono text-[--muted]">
                    <span className="inline-flex items-center gap-1.5 text-[--lime] font-bold">
                      <Award className="h-3.5 w-3.5" />
                      <span>{edu.status}</span>
                    </span>
                    <span className="border border-[--border] px-2 py-0.5 rounded text-[10px]">
                      Official Degree
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Unified Chronological Milestone Rail */}
        <div className="relative pl-8 md:pl-0 border-t border-[--border] pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <span className="label-muted font-bold">UNIFIED CHRONOLOGICAL TIMELINE</span>
            <span className="font-mono text-xs text-[--lime]">2022 — 2026 ROADMAP</span>
          </div>

          <div className="absolute left-0 top-12 bottom-0 w-px bg-[--border] md:hidden" />

          <div className="space-y-0 md:grid md:grid-cols-4 md:gap-0 md:divide-x md:divide-[--border]">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.role}`}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative pb-10 md:pb-0 md:px-6 md:py-0 group"
              >
                <div className="absolute -left-8 top-0 h-3 w-3 rounded-full border-2 border-[--lime] bg-[--bg] md:hidden" />

                <span className="font-mono text-xs font-bold text-[--lime] block mb-2">
                  {item.year}
                </span>

                <div className="space-y-2">
                  <span className="label-muted block text-[10px] font-bold text-[--text] opacity-70">
                    {item.status}
                  </span>
                  <h5 className="font-bold text-sm sm:text-base text-[--text] leading-tight">
                    {item.role}
                  </h5>
                  <p className="font-mono text-xs text-[--lime]">{item.company}</p>
                  <p className="text-xs text-[--text] opacity-80 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Retain alias for any existing imports
export { ProfessionalExperience as ExperienceTimeline };
export default ProfessionalExperience;
