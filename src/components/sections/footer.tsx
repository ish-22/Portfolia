"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

const footerNav = [
  { href: "/projects", sectionId: "work", label: "WORK" },
  { href: "/experience", sectionId: "experience", label: "EXPERIENCE" },
  { href: "/#lab", sectionId: "lab", label: "LAB" },
  { href: "/about", sectionId: "about", label: "ABOUT" },
  { href: "/contact", sectionId: "contact", label: "CONTACT" }
];

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [slTime, setSlTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(now);
        setSlTime(formatted);
      } catch {
        setSlTime("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof footerNav)[0]) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      }
    } else if (item.sectionId === "lab") {
      e.preventDefault();
      router.push("/#lab");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[--border] bg-[--bg] py-14" role="contentinfo">
      <div className="container-xl">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand & Colombo LK Time */}
          <div>
            <p className="font-mono text-xs font-black tracking-widest text-[--text] mb-1">
              ISHAN CHINTHAKA
            </p>
            <p className="font-mono text-[10px] text-[--lime] font-semibold tracking-widest">
              FULL-STACK SOFTWARE ENGINEER
            </p>
            <p className="font-mono text-[10px] text-[--muted] mt-1 tracking-wider">
              AMAZOFT IT · CARDIFF METROPOLITAN UNIVERSITY
            </p>

            {slTime && (
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-[--muted]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[--lime]" />
                </span>
                <span>COLOMBO LK:</span>
                <span className="text-[--lime] font-bold">{slTime} (GMT+5:30)</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 mt-1">
            {footerNav.map((item) => (
              <Link
                key={item.label}
                href={pathname === "/" ? `#${item.sectionId}` : item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="font-mono text-[10px] font-semibold tracking-widest text-[--muted] hover:text-[--lime] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Directory & Back to top */}
          <div className="flex flex-col md:items-end gap-4 mt-1">
            <div className="flex gap-5">
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-bold text-[--muted] hover:text-[--lime] transition-colors"
              >
                GITHUB
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-bold text-[--muted] hover:text-[--lime] transition-colors"
              >
                LINKEDIN
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="font-mono text-[10px] font-bold text-[--muted] hover:text-[--lime] transition-colors"
              >
                EMAIL
              </Link>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[--muted] hover:text-[--lime] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[--border] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-[10px] text-[--muted]">
            © {new Date().getFullYear()} ISHAN CHINTHAKA. DESIGNED WITH EDITORIAL MINIMALISM.
          </p>
          <span className="font-mono text-[10px] text-[--muted]">
            SRI LANKA · GLOBAL AVAILABILITY
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
