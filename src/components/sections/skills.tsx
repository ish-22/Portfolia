"use client";

const techStack = [
  {
    name: "React",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      </svg>
    )
  },
  {
    name: "Angular",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zM12 4.5l6.5 2.5-1 9L12 19l-5.5-3 1-9L12 4.5z" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <span className="font-extrabold text-sm tracking-tighter">TS</span>
    )
  },
  {
    name: "Next.js",
    icon: (
      <span className="font-black text-sm tracking-tight text-slate-800 dark:text-white">N.js</span>
    )
  },
  {
    name: "Flutter",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.3 2.3L5 11.6l4.7 4.7 9.3-9.3zM14.3 12.3L5 21.6h9.3l4.7-4.7z" />
      </svg>
    )
  },
  {
    name: "Java",
    icon: (
      <span className="font-bold text-sm">☕</span>
    )
  },
  {
    name: "Python",
    icon: (
      <span className="font-extrabold text-sm tracking-tighter">Py</span>
    )
  },
  {
    name: "Node.js",
    icon: (
      <span className="font-extrabold text-sm text-green-500">JS</span>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 16c-2.5 0-4-1-6-4 2-1 3.5 0 6 2zm0-8c2.5 0 4 1 6 4-2 1-3.5 0-6-2z" />
      </svg>
    )
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 14.5c-.3-.2-.6-.3-1-.3h-3.6c-.4 0-.7.1-1 .3l-2.4 2-1.2-1c-.3-.2-.6-.3-1-.3H5.5c-1 0-1.8.8-1.8 1.8V20c0 1 .8 1.8 1.8 1.8h13c1 0 1.8-.8 1.8-1.8v-3.7c.3-.4.3-1 .2-1.8z" />
      </svg>
    )
  }
];

export function Skills() {

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-tr from-sky-50/50 via-white to-sky-50/20 dark:from-slate-950 dark:via-[#0c1221] dark:to-slate-950 overflow-hidden border-b border-black/5 dark:border-white/5">

      {/* Node connectivity lines layout mock backing */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl filter" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl filter" />

        {/* Network connections grids layout */}
        <svg className="w-full h-full text-sky-200 dark:text-slate-800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nodes-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" className="fill-sky-400/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodes-grid)" />
        </svg>
      </div>

      <div className="container-page relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Headline details mapping the design mockup */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Software Development<span className="text-sky-500">.</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
          I design and engineer intuitive, engaging, and user-centric interfaces. Delivering digital products users love.
        </p>

        {/* Carousel Infinite Slider wrapping container */}
        <div className="mt-16 relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky-50/50 dark:from-[#0c1221] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-sky-50/20 dark:from-[#0c1221]/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-8 w-max animate-marquee animate-marquee-hover-pause">
            {/* Cloned twice to make it seamless */}
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 w-28 h-28 bg-white/95 dark:bg-slate-900/90 rounded-2xl border border-black/5 dark:border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-sky-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800 shadow-inner">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
