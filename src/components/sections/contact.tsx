"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/data/portfolio";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  FileDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send
} from "lucide-react";

const contactServices = [
  "Full-Stack Web Development",
  "Frontend Architecture (React / Next.js)",
  "Backend & RESTful API Engineering",
  "AI & Document Search Tools",
  "Employment Inquiry / Consultation"
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: contactServices[0],
    message: "",
    _gotcha: ""
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function validateField(name: string, value: string) {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters.";
      else if (value.trim().length > 80) error = "Name must be 80 characters or fewer.";
    }
    if (name === "email") {
      if (!value.trim()) error = "Email address is required.";
      else if (!EMAIL_REGEX.test(value.trim())) error = "Please enter a valid email address (name@domain.com).";
    }
    if (name === "message") {
      if (!value.trim()) error = "Message is required.";
      else if (value.trim().length < 10) error = "Message must be at least 10 characters.";
      else if (value.trim().length > 3000) error = "Message must be 3,000 characters or fewer.";
    }
    return error;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "submitting") return;

    // Validate all fields
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const msgErr = validateField("message", formData.message);

    const newErrors = { name: nameErr, email: emailErr, message: msgErr };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: contactServices[0],
          message: "",
          _gotcha: ""
        });
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage(
          result.error || `Unable to deliver message (HTTP ${res.status}). Please email Ishan directly.`
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network connection error. Please email ishanchinthaka2002@gmail.com directly.");
    }
  }

  return (
    <section id="contact" className="section bg-[--bg] border-t border-[--border]" aria-labelledby="contact-heading">
      <div className="container-xl">
        {/* Availability Banner */}
        <div className="mb-16 border border-[--border] p-5 sm:p-6 bg-[--surface]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--lime] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[--lime]" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[--lime] tracking-wider">
              {profile.availability}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {contactServices.slice(0, 3).map((item) => (
              <span key={item} className="border border-[--border] px-2.5 py-1 font-mono text-[10px] text-[--muted]">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="label-lime block mb-3">GET IN TOUCH</span>
          <h2 id="contact-heading" className="display-lg text-[--text] mb-6">
            LET&apos;S BUILD<br />
            <span className="text-[--lime]">SOMETHING</span><br />
            <span className="text-[--text] font-extrabold">GREAT TOGETHER.</span>
          </h2>
          <p className="text-base text-[--muted] leading-relaxed">
            Have a project idea, a technical challenge, or a job opening? Reach out directly using the form below or connect through my contact channels.
          </p>
        </div>

        {/* Grid: Details (Left) + Contact Form (Right) */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[--border] bg-[--surface]/30 p-6 sm:p-8 space-y-6">
              <span className="label-muted block pb-3 border-b border-[--border]">DIRECT CONTACT CHANNELS</span>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <span className="p-2 border border-[--border] bg-[--surface] text-[--lime] shrink-0 mt-0.5">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[--muted] uppercase tracking-wider mb-0.5">PRIMARY EMAIL</p>
                  <Link
                    href={`mailto:${profile.email}`}
                    className="font-mono text-sm font-bold text-[--text] hover:text-[--lime] transition-colors break-all"
                  >
                    {profile.email}
                  </Link>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <span className="p-2 border border-[--border] bg-[--surface] text-[--lime] shrink-0 mt-0.5">
                  <MessageSquare size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[--muted] uppercase tracking-wider mb-0.5">WHATSAPP (DIRECT MESSAGING)</p>
                  <Link
                    href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-[--lime] hover:underline"
                  >
                    {profile.whatsappFormatted}
                  </Link>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-start gap-3.5">
                <span className="p-2 border border-[--border] bg-[--surface] text-[--muted] shrink-0 mt-0.5">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[--muted] uppercase tracking-wider mb-0.5">PHONE DIRECT</p>
                  <Link
                    href={`tel:${profile.phoneSecondary.replace(/\s+/g, "")}`}
                    className="font-mono text-sm text-[--text] hover:text-[--lime] transition-colors"
                  >
                    {profile.phoneSecondaryFormatted}
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <span className="p-2 border border-[--border] bg-[--surface] text-[--muted] shrink-0 mt-0.5">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[--muted] uppercase tracking-wider mb-0.5">LOCATION</p>
                  <p className="font-mono text-sm text-[--text]">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Card */}
            <div className="border border-[--border] bg-[--surface]/30 p-6 sm:p-8 space-y-5">
              <span className="label-muted block pb-3 border-b border-[--border]">PROFESSIONAL PROFILES</span>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[--border] bg-[--surface]/40 flex items-center gap-2.5 font-mono text-xs font-bold text-[--text] hover:border-[--lime] hover:text-[--lime] transition-all"
                >
                  <Github size={16} />
                  <span>GITHUB</span>
                </Link>

                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[--border] bg-[--surface]/40 flex items-center gap-2.5 font-mono text-xs font-bold text-[--text] hover:border-[--lime] hover:text-[--lime] transition-all"
                >
                  <Linkedin size={16} />
                  <span>LINKEDIN</span>
                </Link>
              </div>

              <Link
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 border border-[--lime]/40 bg-[--lime]/10 flex items-center justify-between font-mono text-xs font-bold text-[--lime] hover:bg-[--lime] hover:text-[--btn-text] transition-all"
              >
                <div className="flex items-center gap-2">
                  <FileDown size={16} />
                  <span>DOWNLOAD CV (PDF)</span>
                </div>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Craft Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="border border-[--border] bg-[--surface]/20">
              {/* Form Header */}
              <div className="p-6 sm:p-8 border-b border-[--border] bg-[--surface]/40">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="label-lime">INQUIRY FORM</span>
                  <span className="font-mono text-[10px] text-[--lime] bg-[--lime]/10 border border-[--lime]/30 px-2 py-0.5 rounded">
                    ⚡ &lt;24H RESPONSE TIME
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[--text]">Send a Direct Message</h3>
                <p className="text-xs text-[--muted] mt-1 font-mono">
                  Delivered directly to Ishan&apos;s verified inbox. I review and respond to every message within 24 hours.
                </p>
              </div>

              {/* Hidden Bot Honeypot */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Form Inputs Grid */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name-input" className="label-muted block mb-2">
                      YOUR FULL NAME <span className="text-[--lime]">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 bg-[--surface] border outline-none font-mono text-sm text-[--text] transition-all ${
                        errors.name && touched.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-[--border] focus:border-[--lime]"
                      } disabled:opacity-50`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email-input" className="label-muted block mb-2">
                      EMAIL ADDRESS <span className="text-[--lime]">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 bg-[--surface] border outline-none font-mono text-sm text-[--text] transition-all ${
                        errors.email && touched.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[--border] focus:border-[--lime]"
                      } disabled:opacity-50`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject / Service Selection */}
                <div>
                  <label htmlFor="subject-select" className="label-muted block mb-2">
                    PROJECT INQUIRY TYPE
                  </label>
                  <select
                    id="subject-select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 bg-[--surface] border border-[--border] outline-none font-mono text-sm text-[--text] focus:border-[--lime] transition-all disabled:opacity-50"
                  >
                    {contactServices.map((service) => (
                      <option key={service} value={service} className="bg-[--surface] text-[--text]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message-input" className="label-muted">
                      MESSAGE <span className="text-[--lime]">*</span>
                    </label>
                    <span className="font-mono text-[10px] text-[--muted]">
                      {formData.message.length} / 3000
                    </span>
                  </div>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === "submitting"}
                    placeholder="Describe your project, timeline, architecture, or inquiry details..."
                    className={`w-full px-4 py-3 bg-[--surface] border outline-none font-mono text-sm text-[--text] resize-none transition-all ${
                      errors.message && touched.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-[--border] focus:border-[--lime]"
                    } disabled:opacity-50`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1.5 font-mono text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-[--lime]/40 bg-[--lime]/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-[--lime]"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="shrink-0" />
                      <span>Message received successfully! Ishan will respond to your email promptly.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="text-[10px] underline hover:text-[--text] shrink-0 font-mono"
                    >
                      SEND ANOTHER
                    </button>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-red-500/40 bg-red-500/10 px-6 py-4 flex items-start gap-2.5 font-mono text-xs text-red-400"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Not Sent</p>
                      <p className="mt-0.5 text-xs text-red-300">
                        {errorMessage || `Please reach out directly at ${profile.email}`}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button Bar */}
              <div className="border-t border-[--border] p-6 sm:p-8 bg-[--surface]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-[--muted] text-center sm:text-left">
                  🔒 Strictly confidential. Your email is never shared.
                </span>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[--lime] font-mono text-xs font-black tracking-widest text-[--btn-text] hover:bg-[--lime]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
