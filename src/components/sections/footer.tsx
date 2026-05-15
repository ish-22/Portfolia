import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-mist py-10 dark:border-white/10 dark:bg-[#0d1117]">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link aria-label="GitHub" href={profile.github} className="text-slate-500 transition hover:text-sea dark:text-slate-300">
            <Github size={20} />
          </Link>
          <Link aria-label="LinkedIn" href={profile.linkedin} className="text-slate-500 transition hover:text-sea dark:text-slate-300">
            <Linkedin size={20} />
          </Link>
          <Link aria-label="Email" href={`mailto:${profile.email}`} className="text-slate-500 transition hover:text-sea dark:text-slate-300">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
