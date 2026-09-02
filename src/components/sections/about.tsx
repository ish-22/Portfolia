"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/portfolio";

const focusAreas = [
  "UI/UX Design & Product Thinking",
  "Frontend Engineering (Next.js, React, TypeScript)",
  "Backend Systems (Node.js, Laravel, MySQL)",
  "AI Integration (Amazon Bedrock, RAG)",
  "Cloud Architecture (AWS, Docker, CI/CD)"
];

export function About() {
  return (
    <section id="about" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="about-heading">
      <div className="container-xl">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">

          {/* Left column — Portrait Image */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] overflow-hidden border border-[--border] shadow-xl group">
              {/* Note: Save your image in the public folder as "portrait.jpg" */}
              <Image
                src="/portrait.jpg"
                alt="Ishan Chinthaka"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* Right Area (Split into two sub-columns) */}
          <div className="lg:col-span-8 grid gap-12 md:grid-cols-12 items-center">

            {/* Middle column (Original Left) */}
            <div className="md:col-span-5">
              <span className="label-muted block mb-6">WHO IS ISHAN?</span>
              <h2 id="about-heading" className="display-sm text-[--text] mb-8">
                FULL-STACK<br />
                <span className="text-[--lime]">SOFTWARE</span><br />
                ENGINEER.
              </h2>

              <div className="space-y-3 border-t border-[--border] pt-8">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-4 shrink-0 bg-[--lime]" />
                    <span className="text-sm text-[--muted]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — narrative */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <blockquote className="text-xl md:text-2xl font-medium text-[--text] leading-[1.4] mb-10 border-l-2 border-[--lime] pl-6 md:pl-8">
                &ldquo;I enjoy taking complex ideas and turning them into simple, usable and reliable digital products.&rdquo;
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

              {/* Credential badge */}
              <div className="mt-10 inline-flex items-center gap-4 border border-[--border] px-5 py-4 self-start bg-[--surface]/30">
                <span className="h-8 w-8 rounded-full bg-[--lime]/10 flex items-center justify-center text-[--lime] text-xs font-black">
                  BSc
                </span>
                <div>
                  <p className="font-mono text-xs font-bold text-[--text]">SOFTWARE ENGINEERING (HONS)</p>
                  <p className="font-mono text-[10px] text-[--muted]">Cardiff Metropolitan University · Second Class Upper</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
