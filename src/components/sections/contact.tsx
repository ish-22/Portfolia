import Link from "next/link";
import { Send } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const Icon = contact.icon;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#111827]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={contact.title}
          description={contact.description}
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 text-ember">
              <Icon size={26} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-ink dark:text-white">Let&apos;s talk</h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Prefer email? Reach out directly and replace this address with your own.
            </p>
            <Link
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex font-semibold text-sea transition hover:text-ember dark:text-teal-300"
            >
              {profile.email}
            </Link>
          </div>

          <form className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                className="mt-2 min-h-36 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sea sm:w-auto dark:bg-white dark:text-ink dark:hover:bg-teal-200"
              type="button"
            >
              Send message <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
