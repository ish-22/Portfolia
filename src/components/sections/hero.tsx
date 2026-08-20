import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.14),transparent_26%),radial-gradient(circle_at_78%_12%,rgba(232,93,79,0.14),transparent_24%),linear-gradient(180deg,#f7f7f4_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_24%),radial-gradient(circle_at_78%_12%,rgba(244,183,64,0.12),transparent_24%),linear-gradient(180deg,#0d1117_0%,#111827_100%)]" />
      <div className="container-page grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="eyebrow">{profile.role}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sea px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              View projects <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ember hover:text-ember dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              Contact me <Mail size={17} />
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-sea dark:text-slate-300">
              <Github size={22} />
            </Link>
            <Link aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-sea dark:text-slate-300">
              <Linkedin size={22} />
            </Link>
            <Link aria-label="Facebook" href={profile.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link aria-label="TikTok" href={profile.tiktok} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-pink-500 dark:text-slate-300 dark:hover:text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.35a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.6a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.06z" />
              </svg>
            </Link>
            <Link aria-label="Email" href={`mailto:${profile.email}`} className="text-slate-500 transition hover:text-sea dark:text-slate-300">
              <Mail size={22} />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:160ms]">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
            <Image
              src="/portfolio-hero.jpeg"
              alt="Abstract developer portfolio workspace"
              width={1024}
              height={1024}
              priority
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 gap-2 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-[#111827]/90">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-ink dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
