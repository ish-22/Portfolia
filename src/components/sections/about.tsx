"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Performance by Default",
    desc: "Sub-second load times, optimized PostgreSQL schemas, lightweight client hydration, and clean bundle footprints."
  },
  {
    number: "02",
    title: "Scalable Architecture",
    desc: "Modular component hierarchies, secure RESTful APIs, resilient ACID database transactions, and cloud-ready Docker containers."
  },
  {
    number: "03",
    title: "Human-Centered UX",
    desc: "Intuitive workflows that transform dense operational requirements into smooth, pleasant, and friction-free user experiences."
  }
];

export function About() {
  return (
    <section id="about" className="section bg-[--bg] border-t border-[--border]" aria-label="About Ishan">
      <div className="container-xl">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <span className="h-px w-8 bg-[--lime]" />
          <span className="label-muted">WHO I AM &amp; PHILOSOPHY</span>
          <span className="font-mono text-xs text-[--muted]">/</span>
          <span className="label-lime">MANIFESTO</span>
        </div>

        {/* Large Editorial Manifesto (Savindu / Creative Developer style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(1.85rem,4.5vw,3.85rem)] font-bold tracking-tight text-[--text] leading-[1.22] sm:leading-[1.18]"
            >
              Engineering <span className="text-[--lime]">high-performance web products</span> and resilient systems that solve real operational friction.{" "}
              <span className="text-[--muted] font-normal">
                Commercial precision, clean code, and disciplined Agile delivery grounded in Cardiff Metropolitan software engineering rigor.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 items-start lg:items-end">
            <p className="text-sm sm:text-base text-[--text] opacity-85 leading-relaxed max-w-md text-left lg:text-right">
              The combination of my commercial engineering at Amazoft IT, full-stack database architectures, and UI/UX design discipline positions me to turn complex requirements into smooth, scalable software.
            </p>

            {/* Circular CTA Button (Dennis Snellenberg / Savindu inspired) */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-[--border] bg-[--surface] hover:border-[--lime] text-[--text] flex flex-col items-center justify-center font-mono text-xs font-bold transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]"
              >
                <span className="relative z-10 flex items-center gap-1 group-hover:text-[--lime] transition-colors">
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="relative z-10 text-[10px] text-[--muted] font-normal mt-1">
                  Let&apos;s build
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats & Verified Credentials Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-[--border] bg-[--surface] mb-16 shadow-xs font-mono">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--text]">3+</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Years Commercial Experience</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--lime]">2:1</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Cardiff Met. BSc (Hons)</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--text]">100%</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Agile Sprint Delivery</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--lime]">6+</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Production Platforms Shipped</p>
          </div>
        </div>

        {/* Three Core Engineering Values */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="label-muted font-bold">HOW I DELIVER BUSINESS VALUE</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {principles.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl border border-[--border] bg-[--surface] flex flex-col justify-between hover:border-[--lime]/40 transition-colors shadow-xs"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[--lime] mb-3 block">
                    {item.number}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[--text] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[--muted] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
