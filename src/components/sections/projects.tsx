"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type FilterCategory = "All" | "Web Apps" | "Business Systems" | "Mobile";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "Web Apps", "Business Systems", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web Apps") {
      return project.tags.some((tag) =>
        ["React", "TypeScript", "JavaScript", "HTML", "CSS", "PHP"].includes(tag)
      );
    }
    if (activeCategory === "Business Systems") {
      return (
        project.tags.includes("Business system") ||
        project.title.toLowerCase().includes("system") ||
        project.title.toLowerCase().includes("management") ||
        project.title.toLowerCase().includes("ticketing")
      );
    }
    if (activeCategory === "Mobile") {
      return project.tags.some((tag) =>
        ["Mobile", "Kotlin", "Java"].includes(tag)
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#111827]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected software projects and business systems."
          description="A collection of web, mobile, POS, inventory, service management, and business-focused applications."
        />

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-sea text-white shadow-soft"
                  : "border border-black/10 bg-white text-ink hover:border-sea hover:text-sea dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-teal-400 dark:hover:text-teal-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="glass-panel group flex min-h-[320px] flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-sea dark:text-teal-300">
                  0{index + 1}
                </span>
                <div className="flex gap-2">
                  <Link
                    aria-label={`${project.title} repository`}
                    href={project.repo}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                  >
                    <Github size={17} />
                  </Link>
                  <Link
                    aria-label={`${project.title} live site`}
                    href={project.link}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-slate-500 transition hover:border-sea hover:text-sea dark:border-white/10 dark:text-slate-300"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>

              <h3 className="mt-10 text-2xl font-bold tracking-tight text-ink dark:text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-honey/15 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-honey/20 dark:text-honey"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
