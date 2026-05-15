import { MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-[#111827]">
      <div className="container-page">
        <SectionHeading
          eyebrow="About me"
          title="Focused on practical software for real workflows."
          description="I build modern web, mobile, and business systems with a clear focus on usability, reliability, and maintainable implementation."
        />
        <div className="grid items-start gap-6 lg:grid-cols-[0.55fr_1.45fr]">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea dark:text-teal-300">
              Based in
            </p>
            <div className="mt-4 flex items-center gap-3 text-xl font-bold text-ink dark:text-white">
              <MapPin className="text-ember" size={22} />
              {profile.location}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Available for software development work, portfolio projects, and practical business system development.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-8">
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
