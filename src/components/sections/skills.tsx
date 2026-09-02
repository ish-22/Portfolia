"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { technologyMap } from "@/data/portfolio";
import { Info } from "lucide-react";


export function TechnologyUniverse() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [techNote, setTechNote] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-[#08090b] border-t border-white/10">
      <div className="container-page">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="eyebrow-mono">TECHNOLOGY MAP</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Structured Technology Universe
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400 font-mono">
            Hover over any technology node to view architectural usage context in product development.
          </p>
        </div>

        {/* 4 Category Tree Columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologyMap.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="lab-card p-6"
            >
              <div className="font-mono text-xs font-bold text-lime-400 mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>├── {cat.category}</span>
                <span className="text-[10px] text-gray-500">{cat.items.length} NODES</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => {
                      setHoveredTech(item.name);
                      setTechNote(item.note);
                    }}
                    onMouseLeave={() => {
                      setHoveredTech(null);
                      setTechNote(null);
                    }}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${hoveredTech === item.name
                      ? "border-lime-400 bg-lime-500/10 text-lime-300"
                      : "border-white/5 bg-[#101216] text-gray-300 hover:border-white/20"
                      }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>│   ├── {item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Context Explanation Bar */}
        <div className="mt-8 lab-card p-4 flex items-center gap-3 font-mono text-xs text-gray-300 border-lime-400/30">
          <Info size={16} className="text-lime-400 shrink-0" />
          <span>
            {techNote ? (
              <>
                <strong className="text-lime-400">{hoveredTech}:</strong> {techNote}
              </>
            ) : (
              "Hover any technology node above to inspect architectural usage context."
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
