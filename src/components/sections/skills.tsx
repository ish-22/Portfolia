"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { technologyMap } from "@/data/portfolio";
import {
  Code2,
  Server,
  Terminal,
  Database,
  Cloud,
  Wrench,
  Cpu,
  Info,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Code2 size={18} className="text-[--lime]" />,
  "Backend Development": <Server size={18} className="text-[--lime]" />,
  "Programming Languages": <Terminal size={18} className="text-[--lime]" />,
  "Databases": <Database size={18} className="text-[--lime]" />,
  "Cloud and DevOps": <Cloud size={18} className="text-[--lime]" />,
  "Development Tools": <Wrench size={18} className="text-[--lime]" />,
  "AI and Integrations": <Cpu size={18} className="text-[--lime]" />
};

export function TechnologyUniverse() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeTech, setActiveTech] = useState<{ name: string; note: string; category: string } | null>(null);

  const displayedCategories =
    selectedCategory === "ALL"
      ? technologyMap
      : technologyMap.filter((c) => c.category === selectedCategory);

  const totalSkillsCount = technologyMap.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="skills" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="skills-heading">
      <div className="container-xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="label-lime">TECHNICAL STACK</span>
              <span className="font-mono text-xs text-[--muted]">/</span>
              <span className="font-mono text-xs text-[--muted]">{totalSkillsCount} VERIFIED TECHNOLOGIES</span>
            </div>
            <h2 id="skills-heading" className="display-lg text-[--text]">
              ENGINEERING<br />
              <span className="text-[--muted] italic font-thin">&amp; SYSTEM</span><br />
              CAPABILITIES.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[--muted] leading-relaxed">
            Organized into verified engineering specializations. Each node represents active production or prototype experience with documented architectural application.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[--border]">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-3.5 py-2 font-mono text-xs font-semibold rounded-none border transition-all min-h-[40px] flex items-center ${
              selectedCategory === "ALL"
                ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                : "border-[--border] text-[--muted] hover:text-[--text] hover:border-[--border]/80"
            }`}
          >
            ALL CATEGORIES ({technologyMap.length})
          </button>
          {technologyMap.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-2 font-mono text-xs font-semibold rounded-none border transition-all min-h-[40px] flex items-center gap-2 ${
                selectedCategory === cat.category
                  ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                  : "border-[--border] text-[--muted] hover:text-[--text] hover:border-[--border]/80"
              }`}
            >
              <span>{cat.category}</span>
              <span className="text-[10px] opacity-60">({cat.items.length})</span>
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {displayedCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between border border-[--border] bg-[--surface]/30 p-6 transition-all hover:border-[--lime]/40 hover:bg-[--surface]/50"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[--border] mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 border border-[--border] bg-[--surface]">
                        {categoryIcons[cat.category] || <Sparkles size={16} className="text-[--lime]" />}
                      </span>
                      <h3 className="font-bold text-sm tracking-tight text-[--text]">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[--muted] px-2 py-0.5 border border-[--border]">
                      {cat.items.length}
                    </span>
                  </div>

                  <p className="text-xs text-[--muted] leading-relaxed mb-5 min-h-[36px]">
                    {cat.description}
                  </p>

                  {/* Skills Items */}
                  <div className="space-y-2">
                    {cat.items.map((item) => {
                      const isSelected = activeTech?.name === item.name;
                      return (
                        <div
                          key={item.name}
                          onClick={() =>
                            setActiveTech(
                              isSelected
                                ? null
                                : { name: item.name, note: item.note, category: cat.category }
                            )
                          }
                          onMouseEnter={() =>
                            setActiveTech({
                              name: item.name,
                              note: item.note,
                              category: cat.category
                            })
                          }
                          className={`group/item p-2.5 border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[--lime] bg-[--lime]/10 text-[--lime]"
                              : "border-[--border]/60 bg-[--surface]/60 text-[--text] hover:border-[--lime]/40 hover:bg-[--surface]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-semibold flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isSelected ? "bg-[--lime]" : "bg-[--muted]/40 group-hover/item:bg-[--lime]"
                              }`} />
                              {item.name}
                            </span>
                            <span className="font-mono text-[10px] text-[--muted] group-hover/item:text-[--lime] transition-colors">
                              {isSelected ? "ACTIVE" : "DETAILS →"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-3 border-t border-[--border]/60 flex items-center justify-between font-mono text-[10px] text-[--muted]">
                  <span>CATEGORY {String(technologyMap.findIndex(c => c.category === cat.category) + 1).padStart(2, "0")}</span>
                  <span className="text-[--lime] flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    VERIFIED
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Architectural Context Inspector */}
        <div className="mt-10 p-5 border border-[--lime]/30 bg-[--lime]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-start sm:items-center gap-3">
            <Info size={18} className="text-[--lime] shrink-0 mt-0.5 sm:mt-0" />
            <div>
              {activeTech ? (
                <span>
                  <strong className="text-[--lime] uppercase tracking-wider">{activeTech.category} {" / "} {activeTech.name}:</strong>{" "}
                  <span className="text-[--text]">{activeTech.note}</span>
                </span>
              ) : (
                <span className="text-[--muted]">
                  Hover over or tap any technology node above to inspect its real-world architectural usage context.
                </span>
              )}
            </div>
          </div>
          {activeTech && (
            <button
              onClick={() => setActiveTech(null)}
              className="text-[10px] text-[--muted] hover:text-[--text] underline shrink-0 font-mono"
            >
              CLEAR INSPECTION
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
