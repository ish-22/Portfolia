import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-mist dark:bg-[#0d1117]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and strengths I bring to modern web products."
          description="A practical technical stack for building responsive interfaces, database-driven systems, mobile apps, and business workflows."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea/10 text-sea dark:bg-teal-300/10 dark:text-teal-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink dark:text-white">{skill.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
