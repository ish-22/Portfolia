"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#lab", label: "LAB" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-[--bg]/90 backdrop-blur-xl border-b border-[--border]"
            : "bg-transparent"
          }`}
      >
        <div className="container-xl flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="font-mono text-xs font-black tracking-widest text-[--text] hover:text-[--lime] transition-colors">
            ISHAN CHINTHAKA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-semibold tracking-widest text-[--muted] transition-colors hover:text-[--text]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            {/* Availability pulse */}
            <div className="hidden items-center gap-2 md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[--lime]" />
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-widest text-[--lime]">
                AVAILABLE
              </span>
            </div>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="ml-2 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span className={`block h-px w-5 bg-[--text] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-px" : ""}`} />
              <span className={`block h-px w-5 bg-[--text] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-px" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[--bg] px-8 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="display-md border-b border-[--border] pb-6 text-[--text] hover:text-[--lime] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pb-12 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[--lime]" />
              <span className="label-lime">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
