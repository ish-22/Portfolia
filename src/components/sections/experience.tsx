import { timeline } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-mist dark:bg-[#0d1117]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline for roles, education, and milestones."
          description="Keep the most relevant items here and focus each one on impact."
        />
        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={`${item.title}-${item.period}`} className="relative pl-12">
                {index !== timeline.length - 1 ? (
                  <div className="absolute left-[1.35rem] top-12 h-full w-px bg-black/10 dark:bg-white/10" />
                ) : null}
                <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-sea shadow-sm dark:border-white/10 dark:bg-[#111827] dark:text-teal-200">
                  <Icon size={20} />
                </div>
                <div className="pb-10">
                  <div className="glass-panel rounded-2xl p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-ink dark:text-white">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-sea dark:text-teal-300">{item.place}</p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
