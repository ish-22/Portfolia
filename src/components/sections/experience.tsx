"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Layers,
  GraduationCap
} from "lucide-react";
import { workExperience, experienceTimeline, education } from "@/data/portfolio";

export function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="section bg-[--bg] border-t border-[--border] scroll-mt-16"
      aria-labelledby="experience-heading"
    >
      <div className="container-xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[--lime]" />
              <span className="label-muted">PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 id="experience-heading" className="display-lg text-[--text]">
              COMMERCIAL<br />
              <span className="text-[--lime]">EXPERIENCE &amp;</span><br />
              <span className="text-[--muted] italic font-thin">ENTERPRISE SYSTEMS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[--muted] leading-relaxed">
            Hands-on software development experience engineering scalable web applications,
            RESTful APIs, PostgreSQL database architectures, and production microservices.
          </p>
        </div>

        {/* Work Experience Cards for Amazoft IT (Associate Software Engineer & Trainee Software Developer) */}
        <div className="space-y-16">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-[--border] bg-[--surface]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[--lime]/30"
            >
              {/* Card Header & Status Banner */}
              <div className="border-b border-[--border] p-6 sm:p-8 md:p-10 bg-[--surface]/60">
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
                        {exp.status === "CURRENT" ? "CURRENT ROLE" : "FOUNDATIONAL ROLE"}
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
                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 font-mono text-xs text-[--muted]">
                    <div className="inline-flex items-center gap-2 border border-[--border] bg-[--bg]/50 px-3 py-1.5 rounded-md">
                      <Calendar className="h-3.5 w-3.5 text-[--lime]" />
                      <span className="text-[--text] font-semibold">{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 border border-[--border] bg-[--bg]/50 px-3 py-1.5 rounded-md">
                      <MapPin className="h-3.5 w-3.5 text-[--lime]" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 border border-[--border] bg-[--bg]/50 px-3 py-1.5 rounded-md">
                      <Briefcase className="h-3.5 w-3.5 text-[--lime]" />
                      <span>Full-Time · Agile / Scrum</span>
                    </div>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="mt-6 text-sm sm:text-base text-[--muted] leading-relaxed max-w-3xl">
                  {exp.summary}
                </p>
              </div>

              {/* Middle Grid: Responsibilities & Verified Achievements */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[--border]">
                {/* Left Column: Responsibilities */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="label-muted">KEY RESPONSIBILITIES</span>
                  </div>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[--lime] shrink-0" />
                        <span className="text-sm text-[--muted] leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Verified Achievements */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 bg-[--bg]/30">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="label-muted">VERIFIED ACHIEVEMENTS &amp; IMPACT</span>
                  </div>
                  <div className="space-y-4">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="rounded-lg border border-[--border] bg-[--surface]/60 p-4 transition-colors hover:border-[--lime]/30"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[--lime] shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-[--text] leading-relaxed">
                            {ach}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Used Bar */}
              <div className="border-t border-[--border] p-6 sm:p-8 bg-[--surface]/60">
                <span className="label-muted block mb-3">TECHNOLOGIES &amp; METHODOLOGIES</span>
                <div className="flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-[--border] bg-[--bg] px-3 py-1 font-mono text-xs text-[--text] transition-colors hover:border-[--lime]/50 hover:text-[--lime]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Projects & Domain Experience under this role */}
              {exp.projects.length > 0 && (
                <div className="border-t border-[--border] p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Layers className="h-4 w-4 text-[--lime]" />
                    <span className="label-muted">KEY PROJECTS &amp; DOMAIN EXPERIENCE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {exp.projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex flex-col justify-between rounded-xl border border-[--border] bg-[--bg]/60 p-5 transition-all duration-300 hover:border-[--lime]/40 hover:shadow-[0_0_20px_rgba(163,230,53,0.06)] group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-[10px] font-semibold text-[--lime] tracking-wider uppercase border border-[--lime]/20 bg-[--lime-dim] px-2 py-0.5 rounded">
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

                          <p className="text-xs sm:text-sm text-[--muted] leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech tags */}
                        <div className="pt-3 border-t border-[--border] flex flex-wrap gap-1.5 mt-auto">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] text-[--muted] bg-[--surface] px-2 py-0.5 rounded"
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

        {/* Education & Qualifications Section (Aligned with CV) */}
        <div className="mt-20 pt-16 border-t border-[--border]">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="h-4 w-4 text-[--lime]" />
                <span className="label-muted">EDUCATION &amp; QUALIFICATIONS</span>
              </div>
              <h3 className="display-md text-[--text]">
                ACADEMIC<br />
                <span className="text-[--lime]">FOUNDATION &amp;</span><br />
                <span className="text-[--muted] italic font-thin">CREDENTIALS.</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {education.map((edu, eIdx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: eIdx * 0.1 }}
                className="border border-[--border] bg-[--surface]/40 rounded-xl p-6 transition-all duration-300 hover:border-[--lime]/30"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-[--lime] border border-[--lime]/30 bg-[--lime-dim] px-2.5 py-0.5 rounded">
                    {edu.classification}
                  </span>
                  <span className="font-mono text-xs text-[--muted]">{edu.period}</span>
                </div>
                <h4 className="font-bold text-lg text-[--text] mb-1">{edu.degree}</h4>
                <p className="text-sm text-[--muted]">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          {/* Chronological Career & Academic Milestones Rail */}
          <div className="relative pl-8 md:pl-0 border-t border-[--border] pt-12">
            <span className="label-muted block mb-8">CHRONOLOGICAL MILESTONE RAIL</span>

            <div className="absolute left-0 top-12 bottom-0 w-px bg-[--border] md:hidden" />

            <div className="space-y-0 md:grid md:grid-cols-4 md:gap-0 md:divide-x md:divide-[--border]">
              {experienceTimeline.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-10 md:pb-0 md:px-6 md:py-0 group"
                >
                  <div className="absolute -left-8 top-0 h-3 w-3 rounded-full border-2 border-[--lime] bg-[--bg] md:hidden" />

                  <span className="font-mono text-xs font-bold text-[--lime] block mb-2">
                    {item.year}
                  </span>

                  <div className="space-y-1.5">
                    <span className="label-muted block text-[10px]">{item.status}</span>
                    <h5 className="font-bold text-sm sm:text-base text-[--text] leading-tight">
                      {item.role}
                    </h5>
                    <p className="font-mono text-[11px] text-[--muted]">{item.company}</p>
                    <p className="text-xs text-[--muted] leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Retain alias for any existing imports
export { ProfessionalExperience as ExperienceTimeline };
