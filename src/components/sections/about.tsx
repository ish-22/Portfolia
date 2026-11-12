"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/portfolio";

const focusAreas = [
  "Full-Stack Web Architecture (React, Next.js, TypeScript & REST APIs)",
  "Distributed & Real-Time Data (Redis, Pub/Sub & PostgreSQL/MySQL)",
  "Practical AI Integration (Document ingestion, schema validation & Bedrock)",
  "Engineering Rigor & Security (Root-cause diagnostics, RBAC & clean code)"
];

export function About() {
  return (
    <section id="about" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">

          {/* Left column — Portrait Image */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] overflow-hidden border border-[--border] shadow-xl group bg-[--surface]">
              {/* Note: Save your image in the public folder as "portrait.jpg" */}
              <Image
                src="/portrait.jpg"
                alt="Ishan Chinthaka - Full-Stack Software Engineer"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 350px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* Right Area (Split into two sub-columns) */}
          <div className="lg:col-span-8 grid gap-12 md:grid-cols-12 items-center">

            {/* Middle column */}
            <div className="md:col-span-5">
              <span className="label-muted block mb-6">PROFESSIONAL PROFILE</span>
              <h2 id="about-heading" className="display-sm text-[--text] mb-8">
                FULL-STACK<br />
                <span className="text-[--lime]">SOFTWARE</span><br />
                ENGINEER.
              </h2>

              <div className="space-y-4 border-t border-[--border] pt-8">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-4 shrink-0 bg-[--lime]" />
                    <span className="text-sm text-[--muted] leading-relaxed">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — narrative */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <blockquote className="text-xl md:text-2xl font-medium text-[--text] leading-[1.4] mb-8 border-l-2 border-[--lime] pl-6 md:pl-8">
                &ldquo;I build software that balances responsive, intuitive interface design with disciplined, reliable backend architecture.&rdquo;
              </blockquote>

              <div className="space-y-5">
                {profile.about.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm md:text-base text-[--muted] leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Credential badges */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 self-start w-full sm:w-auto">
                <div className="flex items-center gap-3 border border-[--border] p-3 sm:px-4 sm:py-3 bg-[--surface]/40 w-full sm:w-auto min-w-0">
                  <span className="h-8 w-8 rounded-full bg-[--lime]/10 flex items-center justify-center text-[--lime] text-xs font-black shrink-0">
                    BSc
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs font-bold text-[--text] truncate">BSc (HONS) SOFTWARE ENGINEERING</p>
                    <p className="font-mono text-[10px] text-[--muted] leading-tight mt-0.5">Cardiff Metropolitan University, UK · 2:1</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-[--border] p-3 sm:px-4 sm:py-3 bg-[--surface]/40 w-full sm:w-auto min-w-0">
                  <span className="h-8 w-8 rounded-full bg-[--lime]/10 flex items-center justify-center text-[--lime] text-xs font-black shrink-0">
                    HD
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs font-bold text-[--text] truncate">HIGHER DIPLOMA IN COMPUTING</p>
                    <p className="font-mono text-[10px] text-[--muted] leading-tight mt-0.5">Cardiff Met. / ICBT · Merit / Distinction</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
