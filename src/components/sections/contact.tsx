"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const Icon = contact.icon;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Use the environment variable or a fallback that clearly indicates it's missing
    const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!formspreeUrl || formspreeUrl.includes("your-id-here")) {
      setErrorMessage("Contact endpoint is not configured. Please add your Formspree ID to the .env file.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      const result = await response.json() as {
        errors?: Array<{ message: string }>;
        error?: string;
      };

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        // If results has errors array, take the first message
        if (result.errors && Array.isArray(result.errors)) {
          setErrorMessage(result.errors.map((err) => err.message).join(", "));
        } else if (result.error) {
          setErrorMessage(result.error);
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to send message. Please check your connection.");
      setStatus("error");
    }
  }

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

          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                required
                className="mt-2 min-h-36 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-sea dark:border-white/10 dark:bg-white/10 dark:text-white"
                placeholder="Tell me about your project..."
              />
            </label>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium">Message sent successfully!</span>
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertCircle size={18} />
                <span className="text-sm font-medium">{errorMessage}</span>
              </div>
            )}

            <button
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sea disabled:opacity-70 sm:w-auto dark:bg-white dark:text-ink dark:hover:bg-teal-200"
              type="submit"
            >
              {status === "submitting" ? (
                <>Sending... <Loader2 size={17} className="animate-spin" /></>
              ) : (
                <>Send message <Send size={17} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
