"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/projects", sectionId: "work", label: "WORK" },
  { href: "/experience", sectionId: "experience", label: "EXPERIENCE" },
  { href: "/skills", sectionId: "skills", label: "SKILLS" },
  { href: "/#lab", sectionId: "lab", label: "LAB" },
  { href: "/about", sectionId: "about", label: "ABOUT" },
  { href: "/contact", sectionId: "contact", label: "CONTACT" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Clean any remaining hash from address bar on page load or navigation
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
        }, 150);
      } else {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [pathname]);

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
    } else if (link.sectionId === "lab") {
      e.preventDefault();
      router.push("/#lab");
    }
    if (menuOpen) setMenuOpen(false);
  };

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
              <Link
                key={link.label}
                href={pathname === "/" ? `#${link.sectionId}` : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="font-mono text-[11px] font-semibold tracking-widest text-[--muted] transition-colors hover:text-[--text]"
              >
                {link.label}
              </Link>
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
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="ml-1 flex h-11 w-11 items-center justify-center rounded-md md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lime]"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 w-6">
                <span className={`block h-0.5 w-5 bg-[--text] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-5 bg-[--text] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-[--text] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
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
            className="fixed inset-0 z-40 flex flex-col bg-[--bg]/95 backdrop-blur-2xl px-6 sm:px-8 pt-20 pb-8 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-5 sm:gap-7 my-auto pt-4 pb-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={pathname === "/" ? `#${link.sectionId}` : link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="display-md block border-b border-[--border] pb-4 text-[--text] hover:text-[--lime] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-[--border] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[--lime] animate-pulse" />
              <span className="label-lime text-[10px]">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
