"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/data/portfolio";

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

  return (
    <footer className="border-t border-[--border] bg-[--bg] py-14" role="contentinfo">
      <div className="container-xl">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <p className="font-mono text-xs font-black tracking-widest text-[--text] mb-2">
              ISHAN CHINTHAKA
            </p>
            <p className="font-mono text-[10px] text-[--muted] tracking-widest">
              FULL-STACK SOFTWARE ENGINEER
            </p>
            <p className="font-mono text-[10px] text-[--muted] mt-0.5 tracking-wider">
              UI/UX · ENGINEERING · AI · CLOUD
            </p>
          </div>

          {/* Nav */}
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

          {/* Social */}
          <div className="flex gap-5 md:justify-end mt-1">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-[--muted] hover:text-[--lime] transition-colors">
              GITHUB
            </Link>
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-[--muted] hover:text-[--lime] transition-colors">
              LINKEDIN
            </Link>
            <Link href={`mailto:${profile.email}`} className="font-mono text-[10px] text-[--muted] hover:text-[--lime] transition-colors">
              EMAIL
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[--border] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-[10px] text-[--muted]">
            © {new Date().getFullYear()} ISHAN CHINTHAKA. ALL RIGHTS RESERVED.
          </p>
          <span className="font-mono text-[10px] text-[--muted]">
            Sri Lanka
          </span>
        </div>
      </div>
    </footer>
  );
}
