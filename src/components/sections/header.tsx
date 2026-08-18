import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-mist/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1117]/80">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink dark:text-white group">
          <div className="relative flex h-10 w-10 overflow-hidden rounded-xl border border-black/5 bg-slate-50 dark:border-white/10 shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Ishan Chinthaka Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none tracking-tight text-ink sm:text-base dark:text-white">
              {profile.name}
            </span>
            <span className="hidden sm:inline-block text-[9px] font-semibold tracking-wider uppercase text-slate-500 dark:text-teal-400/80 mt-1">
              {profile.role}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sea dark:text-slate-300 dark:hover:text-teal-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={profile.resume}
            className="inline-flex rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sea sm:px-4 sm:py-2 sm:text-sm dark:bg-white dark:text-ink dark:hover:bg-teal-200"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
