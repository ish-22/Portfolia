"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section className="section bg-[--bg] border-t border-[--border]" aria-label="Career journey">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-20">
          <span className="label-muted block mb-4">THE JOURNEY</span>
          <h2 className="display-lg text-[--text]">
            GROWTH &amp;<br />
            <span className="text-[--muted] italic font-thin">MILESTONES.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[--border] md:hidden" />

          <div className="space-y-0 md:grid md:grid-cols-3 md:gap-0 md:divide-x md:divide-[--border]">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pb-12 md:pb-0 md:px-10 md:py-0 group"
              >
                {/* Mobile rail dot */}
                <div className="absolute -left-8 top-0 h-3 w-3 rounded-full border-2 border-[--lime] bg-[--bg] md:hidden" />

                <span className="numeral block mb-6 opacity-20 group-hover:opacity-100 group-hover:text-[--lime] transition-all duration-500">
                  {item.year}
                </span>

                <div className="space-y-2">
                  <span className="label-lime">{item.status}</span>
                  <h3 className="font-bold text-lg text-[--text] leading-tight">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[--muted]">{item.company}</p>
                  <p className="text-sm text-[--muted] leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
