"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
      className="relative min-h-screen overflow-hidden bg-[--bg] flex flex-col justify-end pb-20 pt-32"
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
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--lime] opacity-[0.04] blur-[120px]" />

      <div className="container-xl relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[--lime]" />
          <span className="label-lime">{profile.availability}</span>
        </motion.div>

        {/* Main editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-xl text-[--text] max-w-[14ch]"
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

        {/* Subhead + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base md:text-lg leading-relaxed text-[--muted]">
            {profile.subhead}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2 border border-[--lime] bg-[--lime] px-6 py-3.5 font-mono text-xs font-black tracking-widest text-black transition-all hover:bg-transparent hover:text-[--lime]"
            >
              EXPLORE MY WORK
              <span className="text-base leading-none">→</span>
            </a>

            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CV"
              className="inline-flex items-center gap-2 border border-[--border] px-6 py-3.5 font-mono text-xs font-semibold tracking-widest text-[--text] transition-all hover:border-[--text]"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </motion.div>

        {/* Tech signal line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 border-t border-[--border] pt-8 flex flex-wrap items-center gap-4"
        >
          <span className="label-muted mr-2">CORE STACK</span>
          {heroTechSignals.map((t) => (
            <span key={t} className="font-mono text-[11px] font-medium text-[--muted]">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
