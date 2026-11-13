"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Globe, ArrowDownRight, MessageCircle, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[--bg] flex flex-col justify-between overflow-hidden select-none pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-10"
      aria-label="Hero Introduction"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[350px] w-[350px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--lime] opacity-[0.05] blur-[140px]" />

      {/* Top Floating Badges (Dennis Snellenberg / Savindu inspired) */}
      <div className="container-xl relative z-30 w-full flex items-start justify-between gap-4">
        {/* Left: Location & Globe Badge */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto"
        >
          <div className="inline-flex items-center gap-3 bg-[--surface] text-[--text] rounded-full py-2 pl-3.5 pr-2 sm:py-2.5 sm:pl-5 sm:pr-2.5 shadow-xl border border-[--border] group">
            <div className="leading-tight">
              <span className="text-[10px] font-mono tracking-widest text-[--lime] block uppercase font-bold">
                LOCATED IN
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-[--text]">
                Sri Lanka · LK
              </span>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[--elevated] flex items-center justify-center text-[--lime] border border-[--border]">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[--lime] animate-spin-slow stroke-[1.5]" />
            </div>
          </div>
        </motion.div>

        {/* Right: Specialty & Role Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="pointer-events-auto text-right flex flex-col items-end gap-1"
        >
          <div className="text-xl sm:text-2xl font-light text-[--lime]">↘</div>
          <span className="text-[10px] font-mono tracking-widest text-[--muted] uppercase font-bold">
            SPECIALIZATION
          </span>
          <h2 className="text-xs sm:text-base md:text-lg font-bold tracking-tight text-[--text] leading-snug">
            Full-Stack Software Engineer
            <span className="block text-[11px] font-mono text-[--lime] font-normal">
              @ Amazoft IT
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Center Editorial Portrait Frame */}
      <div className="relative inset-x-0 my-auto flex justify-center items-end pointer-events-none z-10 w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[300px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] h-[48vh] sm:h-[58vh] md:h-[64vh] rounded-t-3xl sm:rounded-t-[48px] overflow-hidden border-t border-x border-[--border] bg-gradient-to-b from-transparent via-[--surface]/40 to-[--bg] shadow-2xl"
        >
          <Image
            src="/portrait.jpg"
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 560px"
            className="object-cover object-top filter contrast-[1.02]"
          />
          {/* Subtle gradient vignette at bottom to seamlessly blend with background marquee */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[--bg] via-[--bg]/70 to-transparent" />
        </motion.div>
      </div>

      {/* Dennis Snellenberg / Savindu Signature Refined Typographic Marquee */}
      <div className="relative z-20 w-full overflow-hidden pb-3 sm:pb-5">
        <div className="relative w-full overflow-hidden whitespace-nowrap select-none">
          <div
            data-cursor="ISHAN"
            className="flex animate-marquee hover:[animation-play-state:paused] cursor-default whitespace-nowrap will-change-transform"
          >
            {[...Array(6)].map((_, i) => (
              <h1
                key={i}
                className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] font-extrabold tracking-tighter text-[--text] pr-8 sm:pr-14 leading-none select-none uppercase opacity-90 transition-opacity hover:text-[--lime]"
              >
                {profile.name} —
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Floating Quick Actions & Availability Bar */}
      <div className="container-xl relative z-30 w-full pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[--border] pt-4"
        >
          {/* Availability Beacon */}
          <div className="flex items-center gap-2.5 font-mono text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[--lime]" />
            </span>
            <span className="font-bold text-[--text] tracking-wider text-[11px] sm:text-xs uppercase">
              {profile.availability}
            </span>
          </div>

          {/* Quick Action Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {/* View Work Button */}
            <a
              href="#work"
              onClick={handleScrollToWork}
              data-cursor="WORK"
              className="btn-editorial-primary"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="h-3.5 w-3.5" />
            </a>

            {/* Chat on WhatsApp */}
            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Ishan, I saw your portfolio and would like to discuss an opportunity.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="inline-flex items-center justify-center gap-2 border border-emerald-600/30 dark:border-emerald-500/40 bg-emerald-500/10 px-4 sm:px-5 py-3 font-mono text-xs font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 transition-all duration-300 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-black cursor-pointer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WHATSAPP</span>
            </a>

            {/* Download CV */}
            <Link
              href={profile.resume}
              download="Ishan_Chinthaka_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CV"
              className="btn-editorial-secondary"
            >
              <Download className="h-3.5 w-3.5" />
              <span>CV (PDF)</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
