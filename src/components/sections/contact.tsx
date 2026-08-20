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
    const rawData = Object.fromEntries(formData.entries());

    // Basic XSS sanitisation: strip any html-like script/tag elements
    const sanitize = (val: unknown) => {
      if (typeof val !== "string") return "";
      return val.replace(/<[^>]*>/g, "").trim();
    };

    const data = {
      name: sanitize(rawData.name),
      email: sanitize(rawData.email),
      message: sanitize(rawData.message)
    };

    // Client-side validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (data.name.length < 2 || data.name.length > 80) {
      setErrorMessage("Name must be between 2 and 80 characters.");
      setStatus("error");
      return;
    }

    if (data.message.length < 10 || data.message.length > 3000) {
      setErrorMessage("Message must be between 10 and 3000 characters.");
      setStatus("error");
      return;
    }

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
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sea/10 text-sea dark:bg-teal-500/10 dark:text-teal-400">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink dark:text-white">Let&apos;s talk</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Have an inquiry or project in mind? Contact me directly using the options below or send a message.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Email Block */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea/10 text-sea dark:bg-[#0f766e]/20 dark:text-teal-400">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email</h4>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="text-base font-semibold text-sea transition hover:text-ember dark:text-teal-300"
                  >
                    {profile.email}
                  </Link>
                </div>
              </div>

              {/* WhatsApp Block */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 animate-pulse"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">WhatsApp</h4>
                  <Link
                    href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-emerald-600 transition hover:text-emerald-500 dark:text-teal-300"
                  >
                    {profile.whatsappFormatted}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={80}
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
                minLength={10}
                maxLength={3000}
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
