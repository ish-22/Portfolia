import Link from "next/link";
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
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink dark:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm text-white dark:bg-white dark:text-ink">
            {profile.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
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
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sea sm:inline-flex dark:bg-white dark:text-ink dark:hover:bg-teal-200"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
