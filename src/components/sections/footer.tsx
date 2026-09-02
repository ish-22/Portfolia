import Link from "next/link";
import { profile } from "@/data/portfolio";

const footerNav = [
  { href: "#work", label: "WORK" },
  { href: "#lab", label: "LAB" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" }
];

export function Footer() {
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
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[10px] font-semibold tracking-widest text-[--muted] hover:text-[--lime] transition-colors"
              >
                {item.label}
              </a>
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
        <div className="mt-12 border-t border-[--border] pt-6 flex items-center justify-between">
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
