"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Fast & Dependable Web Apps",
    desc: "Lightweight, responsive pages in React and Next.js that load quickly on any device, keeping visitors engaged and reducing bounce rates."
  },
  {
    number: "02",
    title: "Clean, Maintainable Architecture",
    desc: "Writing maintainable TypeScript, well-organized databases, and clear APIs that your team can easily understand, test, and build upon."
  },
  {
    number: "03",
    title: "Clear Communication & Agile Delivery",
    desc: "Regular sprint progress demos, documented Git pull requests, and transparent timelines so clients and managers always know what is being shipped."
  }
];

export function About() {
  return (
    <section id="about" className="section bg-[--bg] border-t border-[--border]" aria-label="About Ishan">
      <div className="container-xl">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <span className="h-px w-8 bg-[--lime]" />
          <span className="label-muted">ABOUT ME &amp; APPROACH</span>
          <span className="font-mono text-xs text-[--muted]">/</span>
          <span className="label-lime">BACKGROUND</span>
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
              Building <span className="text-[--lime]">reliable web software</span> that turns complicated business workflows into smooth, simple experiences.{" "}
              <span className="text-[--muted] font-normal">
                Combining commercial software experience at Amazoft IT with a Cardiff Metropolitan honours degree in software engineering.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 items-start lg:items-end">
            <p className="text-sm sm:text-base text-[--text] opacity-85 leading-relaxed max-w-md text-left lg:text-right">
              Whether it&apos;s helping passengers track buses live on a map, connecting a clinic&apos;s prescriptions with pharmacy stock, or automating document Q&amp;A with AI, I build clean, dependable software that solves everyday problems.
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
                  Start a project
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats & Verified Credentials Bar — 100% Grounded and Authentic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-[--border] bg-[--surface] mb-16 shadow-xs font-mono">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--text]">3+</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Years at Amazoft IT</p>
            <span className="text-[10px] text-[--lime] block mt-0.5 font-normal">2022–Present (Trainee → Associate)</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--lime]">2:1</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Cardiff Met. BSc (Hons)</p>
            <span className="text-[10px] text-[--muted] block mt-0.5 font-normal">Software Engineering</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--text]">8+</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Documented Projects</p>
            <span className="text-[10px] text-[--muted] block mt-0.5 font-normal">Commercial &amp; Personal Systems</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[--lime]">Direct</span>
            <p className="text-xs text-[--muted] uppercase tracking-wider mt-1">Direct Developer Contact</p>
            <span className="text-[10px] text-[--lime] block mt-0.5 font-normal">Email &amp; WhatsApp Direct</span>
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
