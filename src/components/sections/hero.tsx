"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowDownRight, Download } from "lucide-react";
import { profile, heroTechSignals } from "@/data/portfolio";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gridX = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 100, damping: 30 });
  const gridY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen overflow-hidden bg-[--bg] flex flex-col justify-end pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
      aria-label="Hero"
    >
      {/* Reactive background grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ x: gridX, y: gridY }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a3e635" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--lime] opacity-[0.04] blur-[120px]" />

      <div className="container-xl relative z-10 w-full">
        {/* Recruiter-friendly identity banner & availability status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs"
        >
          <span className="h-px w-6 sm:w-8 bg-[--lime]" />
          <span className="font-bold tracking-widest text-[--text] uppercase">
            {profile.name}
          </span>
          <span className="text-[--border]">/</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[--lime]" />
            </span>
            <span className="label-lime">{profile.availability}</span>
          </span>
          <span className="hidden sm:inline text-[--border]">/</span>
          <span className="hidden sm:inline text-[--muted] font-medium">
            {profile.location}
          </span>
        </motion.div>

        {/* Professional Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[--lime]/25 bg-[--lime-dim] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[--lime]" />
            <h2 className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[--lime]">
              {profile.role}
            </h2>
          </div>
        </motion.div>

        {/* Main editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.1rem,6.5vw,7.5rem)] font-black leading-[0.96] sm:leading-[0.92] tracking-tighter uppercase text-[--text] max-w-[15ch] break-words"
        >
          I BUILD DIGITAL{" "}
          <span className="text-[--lime]">PRODUCTS,</span>
          <br />
          INTELLIGENT{" "}
          <span className="italic font-thin text-[--muted]">SYSTEMS</span>
          <br />
          &amp; CLOUD{" "}
          <span className="text-[--muted]">SOLUTIONS.</span>
        </motion.h1>

        {/* Subhead + Recruiter CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col gap-6 lg:gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[--muted]">
            {profile.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
            {/* Primary Action 1: View My Projects */}
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  if (window.location.hash) {
                    window.history.replaceState(null, "", "/");
                  }
                }
              }}
              data-cursor="PROJECTS"
              className="group inline-flex items-center justify-center gap-2.5 border border-[--lime] bg-[--lime] px-6 sm:px-7 py-3.5 font-mono text-xs font-black tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[--lime] hover:shadow-[0_0_24px_rgba(163,230,53,0.25)] focus:outline-none focus:ring-2 focus:ring-[--lime] focus:ring-offset-2 focus:ring-offset-[--bg]"
              aria-label="View my projects"
            >
              <span>VIEW MY PROJECTS</span>
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            {/* Primary Action 2: Download CV */}
            <Link
              href={profile.resume}
              download="Ishan_Chinthaka_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CV"
              className="group inline-flex items-center justify-center gap-2.5 border border-[--border] bg-transparent px-6 sm:px-7 py-3.5 font-mono text-xs font-semibold tracking-widest text-[--text] transition-all duration-300 hover:border-[--lime] hover:text-[--lime] hover:bg-[--lime-dim] focus:outline-none focus:ring-2 focus:ring-[--lime] focus:ring-offset-2 focus:ring-offset-[--bg]"
              aria-label="Download CV as PDF"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>DOWNLOAD CV</span>
            </Link>
          </div>
        </motion.div>

        {/* Tech signals & academic credential line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 sm:mt-14 md:mt-16 border-t border-[--border] pt-6 sm:pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="label-muted mr-1">CORE STACK</span>
            {heroTechSignals.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded border border-[--border] bg-[--surface]/60 px-2.5 py-1 font-mono text-[11px] font-medium text-[--muted] transition-colors hover:border-[--lime]/40 hover:text-[--text]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[--muted]">
            <span className="h-1.5 w-1.5 rounded-full bg-[--lime]" />
            <span>BSc (Hons) Software Engineering · Cardiff Metropolitan University</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
