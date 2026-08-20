"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  repo: string | { frontend?: string; backend?: string };
}

type FilterCategory = "All" | "Web Apps" | "Business Systems" | "Mobile";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const categories: FilterCategory[] = ["All", "Web Apps", "Business Systems", "Mobile"];

  // Register GSAP ScrollTrigger and animate entrance
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        if (filtersRef.current) {
          gsap.fromTo(
            filtersRef.current,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: filtersRef.current,
                start: "top 88%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        if (carouselTrackRef.current) {
          gsap.fromTo(
            carouselTrackRef.current,
            { opacity: 0, y: 35, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: 0.35,
              ease: "power3.out",
              scrollTrigger: {
                trigger: carouselTrackRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web Apps") {
      return project.tags.some((tag) =>
        [
          "React",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "PHP",
          "Next.js",
          "Express.js",
          "Python",
          "Flask",
          "Spring Boot",
          "Vite",
          "Socket.io",
          "Tailwind CSS",
          "Scikit-Learn",
          "Jupyter Notebook"
        ].includes(tag)
      );
    }
    if (activeCategory === "Business Systems") {
      return (
        project.tags.includes("Business system") ||
        project.title.toLowerCase().includes("system") ||
        project.title.toLowerCase().includes("management") ||
        project.title.toLowerCase().includes("ticketing") ||
        project.title.toLowerCase().includes("bookshop") ||
        project.title.toLowerCase().includes("resort") ||
        project.title.toLowerCase().includes("platform") ||
        project.title.toLowerCase().includes("inventory")
      );
    }
    if (activeCategory === "Mobile") {
      return project.tags.some((tag) =>
        ["Mobile", "Kotlin", "Java", "Android", "SQLite"].includes(tag)
      );
    }
    return true;
  });

  // Duplicate 4 times to ensure seamless infinite looping marquee width
  const marqueeItems = filteredProjects.length > 0
    ? [...filteredProjects, ...filteredProjects, ...filteredProjects, ...filteredProjects]
    : [];

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-slate-50/50 dark:bg-[#0b0f19]/40 relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Header container */}
        <div ref={headerRef} className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 mb-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected software projects and business systems."
            description="A collection of web, mobile, POS, inventory, service management, and business-focused applications."
          />
        </div>

        {/* Category Filters */}
        <div ref={filtersRef} className="filters-container mb-10 flex flex-wrap justify-start gap-2.5 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${activeCategory === category
                ? "bg-sea text-white shadow-soft"
                : "border border-black/5 bg-white text-slate-600 hover:border-sea hover:text-sea dark:border-white/5 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-teal-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Visual Viewport - Full Bleed Screen Edge Marquee */}
        <div ref={carouselTrackRef} className="relative w-full overflow-hidden py-4">
          {/* Mask gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/40 dark:from-[#080b12] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/40 dark:from-[#080b12] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className="flex gap-6 w-max animate-marquee animate-marquee-hover-pause pb-8 select-none"
            style={{
              animationDuration: filteredProjects.length > 0 ? `${filteredProjects.length * 7}s` : "0s"
            }}
          >
            {marqueeItems.map((p, index) => {
              const project = p as unknown as Project;
              return (
                <article
                  key={`${project.title}-${index}`}
                  className="project-card-item glass-panel group flex w-[350px] shrink-0 flex-col rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 border border-black/5 dark:border-white/5 shadow-soft transition-all duration-300 hover:border-sea/30"
                >
                  {project.image && (
                    <div className="relative mb-6 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 aspect-video w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-bold text-sea dark:text-teal-300">
                      0{(index % filteredProjects.length) + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      {typeof project.repo === "object" && project.repo !== null ? (
                        <>
                          {project.repo.frontend && (
                            <Link
                              aria-label={`${project.title} frontend repository`}
                              href={project.repo.frontend}
                              title="Frontend Doc"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                            >
                              <Github size={17} />
                              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sea text-[8px] font-bold text-white dark:bg-teal-400 dark:text-black">
                                FE
                              </span>
                            </Link>
                          )}
                          {project.repo.backend && (
                            <Link
                              aria-label={`${project.title} backend repository`}
                              href={project.repo.backend}
                              title="Backend Doc"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                            >
                              <Github size={17} />
                              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-honey text-[8px] font-bold text-ink dark:bg-honey dark:text-black">
                                BE
                              </span>
                            </Link>
                          )}
                        </>
                      ) : (
                        project.repo && project.repo !== "#" && (
                          <Link
                            aria-label={`${project.title} repository`}
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                          >
                            <Github size={17} />
                          </Link>
                        )
                      )}
                      {project.link && project.link !== "#" && (
                        <Link
                          aria-label={`${project.title} live site`}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                        >
                          <ArrowUpRight size={17} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-ink dark:text-white group-hover:text-sea dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-honey/10 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-honey/15 dark:text-honey"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
