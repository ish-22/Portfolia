"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const interests = [
  "Full-Stack Development",
  "Frontend Engineering",
  "AI Engineering",
  "Cloud Engineering"
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const url = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!url || url.includes("your-id-here")) {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="contact-heading">
      <div className="container-xl">

        {/* Availability callout */}
        <div className="mb-20 border border-[--border] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[--lime]" />
            </span>
            <span className="font-mono text-sm font-semibold text-[--lime]">CURRENTLY OPEN TO OPPORTUNITIES</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span key={item} className="border border-[--border] px-3 py-1 font-mono text-[10px] text-[--muted]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Large CTA heading */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display-xl text-[--text] mb-16 max-w-[12ch]"
        >
          LET&apos;S<br />
          <span className="text-[--lime]">BUILD</span><br />
          SOMETHING<br />
          <span className="italic font-thin text-[--muted]">MEANINGFUL.</span>
        </motion.h2>

        <div className="grid gap-16 md:grid-cols-12">
          {/* Direct contact details */}
          <div className="md:col-span-4 space-y-8">
            <p className="text-base text-[--muted] leading-relaxed">
              Have a product idea, technical challenge or engineering opportunity? I&apos;d love to hear about it.
            </p>

            <div className="space-y-6 border-t border-[--border] pt-8">
              <div>
                <p className="label-muted mb-1">EMAIL</p>
                <Link href={`mailto:${profile.email}`} className="font-mono text-sm text-[--text] hover:text-[--lime] transition-colors break-all">
                  {profile.email}
                </Link>
              </div>
              <div>
                <p className="label-muted mb-1">WHATSAPP</p>
                <Link
                  href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[--lime] hover:underline"
                >
                  {profile.whatsappFormatted}
                </Link>
              </div>
              <div>
                <p className="label-muted mb-1">GITHUB</p>
                <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[--text] hover:text-[--lime] transition-colors">
                  github.com/ish-22
                </Link>
              </div>
              <div>
                <p className="label-muted mb-1">LINKEDIN</p>
                <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[--text] hover:text-[--lime] transition-colors">
                  linkedin.com/in/ishan-chinthaka
                </Link>
              </div>
            </div>

            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[--border] px-5 py-3 font-mono text-xs font-semibold text-[--text] hover:border-[--lime] hover:text-[--lime] transition-all"
            >
              DOWNLOAD CV →
            </Link>
          </div>

          {/* Contact form */}
          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-0 border border-[--border]">
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[--border]">
                <div className="p-6">
                  <label className="label-muted block mb-3">YOUR NAME</label>
                  <input
                    name="name" required minLength={2} maxLength={80} type="text"
                    placeholder="Alex Morgan"
                    className="w-full bg-transparent text-[--text] placeholder-[--muted]/40 outline-none font-mono text-sm focus:text-[--text]"
                  />
                </div>
                <div className="p-6">
                  <label className="label-muted block mb-3">EMAIL ADDRESS</label>
                  <input
                    name="email" required type="email"
                    placeholder="alex@company.com"
                    className="w-full bg-transparent text-[--text] placeholder-[--muted]/40 outline-none font-mono text-sm"
                  />
                </div>
              </div>
              <div className="border-t border-[--border] p-6">
                <label className="label-muted block mb-3">YOUR MESSAGE</label>
                <textarea
                  name="message" required minLength={10} maxLength={3000} rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-transparent text-[--text] placeholder-[--muted]/40 outline-none font-mono text-sm resize-none"
                />
              </div>

              {status === "success" && (
                <div className="border-t border-[--lime]/30 bg-[--lime]/5 px-6 py-4 font-mono text-xs text-[--lime]">
                  ✓ MESSAGE SENT — I will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="border-t border-red-500/30 bg-red-500/5 px-6 py-4 font-mono text-xs text-red-400">
                  ✗ SEND FAILED — Please email me directly at {profile.email}
                </div>
              )}

              <div className="border-t border-[--border] p-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cursor="SEND"
                  className="w-full bg-[--lime] py-4 font-mono text-xs font-black tracking-widest text-black transition-all hover:bg-[--lime]/90 disabled:opacity-50"
                >
                  {status === "submitting" ? "SENDING..." : "START A CONVERSATION →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
