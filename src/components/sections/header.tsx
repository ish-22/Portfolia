"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/projects", sectionId: "work", number: "01", label: "WORK" },
  { href: "/about", sectionId: "about", number: "02", label: "ABOUT" },
  { href: "/experience", sectionId: "experience", number: "03", label: "EXPERIENCE" },
  { href: "/skills", sectionId: "skills", number: "04", label: "SKILLS" },
  { href: "/contact", sectionId: "contact", number: "05", label: "CONTACT" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Track Sri Lanka Time (GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      }
    } else {
      router.push(`/#${link.sectionId}`);
    }
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[--bg]/80 backdrop-blur-xl border-b border-[--border] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Brand & Creative Code Signature */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[--text] transition-colors"
          >
            <span className="text-[--lime] group-hover:rotate-180 transition-transform duration-500">©</span>
            <span className="tracking-widest uppercase">Code by Ishan</span>
          </Link>

          {/* Center / Right cluster */}
          <div className="flex items-center gap-6 sm:gap-8">
            {/* Desktop Quick Nav Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.label}
                  href={pathname === "/" ? `#${link.sectionId}` : link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="font-mono text-xs tracking-widest text-[--muted] transition-colors hover:text-[--text] relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[--lime] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 border border-[--border] bg-[--surface]/60 px-3 py-1 rounded-full font-mono text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[--lime]" />
              </span>
              <span className="text-[--muted] text-[10px] tracking-wider uppercase font-semibold">
                Available for work
              </span>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Circular Creative Hamburger Toggle (Magnetic Dennis Snellenberg style) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className={`h-11 w-11 rounded-full border transition-all duration-300 flex items-center justify-center ${
                menuOpen
                  ? "border-[--lime] bg-[--lime] text-black"
                  : "border-[--border] bg-[--surface]/80 text-[--text] hover:border-[--lime]/60 hover:scale-105"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-1.5 w-4">
                <span
                  className={`block h-0.5 w-4 bg-current transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-4 bg-current transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Curtain Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[--bg] flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-20 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-[--border] pb-6 pt-16 sm:pt-12">
              <span className="font-mono text-xs tracking-widest text-[--muted] uppercase">
                Navigation &amp; Directory
              </span>
              <span className="font-mono text-xs text-[--lime] tracking-wider">
                {profile.location} · {localTime || "GMT+5:30"}
              </span>
            </div>

            {/* Big Editorial Links */}
            <nav className="my-auto py-10 space-y-4 sm:space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={pathname === "/" ? `#${link.sectionId}` : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="group flex items-baseline gap-4 sm:gap-8 transition-colors"
                  >
                    <span className="font-mono text-sm sm:text-base text-[--muted] group-hover:text-[--lime] transition-colors">
                      {link.number}
                    </span>
                    <span className="text-[clamp(2rem,6vw,5.5rem)] font-black tracking-tighter uppercase text-[--text] group-hover:text-[--lime] group-hover:translate-x-3 transition-all duration-300">
                      {link.label}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[--lime] transition-opacity h-6 w-6 sm:h-10 sm:w-10" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Meta Bar inside Curtain */}
            <div className="border-t border-[--border] pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-6 text-[--muted]">
                <span className="text-[--text] font-bold">GET IN TOUCH:</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[--lime] transition-colors"
                >
                  {profile.email}
                </a>
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[--lime] transition-colors"
                >
                  {profile.whatsappFormatted}
                </a>
              </div>

              <div className="flex items-center gap-6 text-[--muted]">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[--lime] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[--lime] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[--lime] transition-colors font-bold text-[--lime]"
                >
                  CV (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
