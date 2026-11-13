"use client";

import { useState, useRef, useEffect } from "react";
import {
    Sparkles,
    Send,
    X,
    Loader2,
    ChevronRight,
    ChevronLeft,
    PhoneCall,
    RotateCcw,
    Copy,
    Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";

// Formatted phone numbers
const WHATSAPP_NUMBER = profile.whatsapp.replace("+", "");
const WHATSAPP_RAW = profile.whatsappFormatted;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={className}
        fill="currentColor"
    >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

const waTemplates = {
    collab: "Hi Ishan, I saw your portfolio and would like to collaborate on a software project with you.",
    hire: "Hi Ishan, I am interested in hiring you for software development services.",
    question: "Hi Ishan, I have a quick question regarding one of your portfolio projects.",
};

interface Message {
    role: "user" | "assistant";
    content: string;
}

const INITIAL_MESSAGE: Message = {
    role: "assistant",
    content: `Hi! I am Ishan's AI assistant. 🚀 Feel free to ask about his skills, education, commercial experience at Amazoft IT, recent projects, or how to contact him. How can I help you today?`,
};

function FormattedMessage({ content }: { content: string }) {
    const parts = content.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

    return (
        <span className="whitespace-pre-line">
            {parts.map((part, i) => {
                const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (linkMatch) {
                    const [, label, url] = linkMatch;
                    const isExternal = url.startsWith("http");
                    const isPdf = url.endsWith(".pdf");
                    return (
                        <a
                            key={i}
                            href={url}
                            target={isExternal || isPdf ? "_blank" : undefined}
                            rel={isExternal || isPdf ? "noopener noreferrer" : undefined}
                            download={isPdf ? true : undefined}
                            className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 underline underline-offset-2 transition-colors cursor-pointer"
                        >
                            {label}
                        </a>
                    );
                }
                const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
                if (boldMatch) {
                    return (
                        <strong key={i} className="font-semibold text-slate-900 dark:text-white">
                            {boldMatch[1]}
                        </strong>
                    );
                }
                return part;
            })}
        </span>
    );
}

function PromptCarousel({
    items,
    onSelect,
    disabled
}: {
    items: { text: string; action: string }[];
    onSelect: (action: string) => void;
    disabled?: boolean;
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 6);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
    };

    useEffect(() => {
        const timer = setTimeout(checkScroll, 100);
        const el = scrollRef.current;
        if (!el) return () => clearTimeout(timer);
        el.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            clearTimeout(timer);
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [items]);

    const handleScroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = direction === "left" ? -150 : 150;
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <div className="relative border-t border-black/5 dark:border-white/5 bg-slate-50/95 dark:bg-[#0f172a]/90 py-1.5 flex items-center group/carousel">
            {/* Left Nav Arrow Button */}
            {canScrollLeft && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScroll("left");
                    }}
                    aria-label="Scroll prompts left"
                    className="absolute left-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition cursor-pointer"
                >
                    <ChevronLeft size={13} />
                </button>
            )}

            {/* Left Fade Gradient Mask */}
            {canScrollLeft && (
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent z-5" />
            )}

            {/* Scrollable Chip Track */}
            <div
                ref={scrollRef}
                className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth px-3 py-0.5 w-full"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {items.map((reply, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onSelect(reply.action);
                        }}
                        disabled={disabled}
                        className="whitespace-nowrap text-[11px] font-medium px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-black/10 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-400 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95 transition shadow-2xs flex-shrink-0 cursor-pointer disabled:opacity-50"
                    >
                        {reply.text}
                    </button>
                ))}
            </div>

            {/* Right Fade Gradient Mask */}
            {canScrollRight && (
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent z-5" />
            )}

            {/* Right Nav Arrow Button */}
            {canScrollRight && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScroll("right");
                    }}
                    aria-label="Scroll prompts right"
                    className="absolute right-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition cursor-pointer"
                >
                    <ChevronRight size={13} />
                </button>
            )}
        </div>
    );
}

export function ChatWidget() {
    const prefersReducedMotion = useReducedMotion();
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"ai" | "whatsapp">("ai");
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // WhatsApp Inquiry Fields
    const [waMessage, setWaMessage] = useState(waTemplates.collab);
    const [selectedTemplate, setSelectedTemplate] = useState<string>("collab");

    const chatEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const quickReplies = [
        { text: "💼 Skills", action: "What technologies and skills does Ishan use?" },
        { text: "🚀 Projects", action: "Tell me about Ishan's top project deployments." },
        { text: "🤖 AI Work", action: "What AI projects has he developed?" },
        { text: "📄 Download CV", action: "Can I download his CV?" },
        { text: "🏢 Amazoft Role", action: "What is his commercial experience at Amazoft IT?" },
        { text: "🎓 Education", action: "What are his university qualifications?" },
        { text: "📞 Contact", action: "How can I contact Ishan?" },
    ];

    // Load persisted chat history from sessionStorage
    useEffect(() => {
        try {
            const saved = sessionStorage.getItem("portfolio_chat_messages");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            }
        } catch {
            // ignore storage errors
        }
    }, []);

    // Save messages to sessionStorage
    useEffect(() => {
        try {
            if (messages.length > 1) {
                sessionStorage.setItem("portfolio_chat_messages", JSON.stringify(messages));
            }
        } catch {
            // ignore storage errors
        }
    }, [messages]);

    // Keyboard navigation: Escape key closes modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Scroll to bottom on new messages
    useEffect(() => {
        if (activeTab === "ai") {
            chatEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        }
    }, [messages, activeTab, prefersReducedMotion]);

    // Auto-focus input when opening
    useEffect(() => {
        if (isOpen && activeTab === "ai") {
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [isOpen, activeTab]);

    const handleClearChat = () => {
        setMessages([INITIAL_MESSAGE]);
        try {
            sessionStorage.removeItem("portfolio_chat_messages");
        } catch {
            // ignore
        }
    };

    const handleCopy = async (content: string, index: number) => {
        try {
            if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(content);
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
            }
        } catch {
            // Ignore clipboard errors if permissions denied
        }
    };

    const handleTemplateChange = (templateKey: "collab" | "hire" | "question") => {
        setSelectedTemplate(templateKey);
        setWaMessage(waTemplates[templateKey]);
    };

    const handleSend = async (textToSend?: string | unknown) => {
        const text = (typeof textToSend === "string" ? textToSend : inputValue).trim();
        if (!text) return;

        if (typeof textToSend !== "string") {
            setInputValue("");
        }

        const newMessages = [...messages, { role: "user" as const, content: text }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (response.ok) {
                const reply = await response.json();
                if (reply && typeof reply.content === "string") {
                    setMessages((prev) => [...prev, reply]);
                }
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I had trouble processing that request. Please try again or click the WhatsApp tab to chat directly with Ishan!",
                    },
                ]);
            }
        } catch (err) {
            console.error("Chat API error:", err);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Network error. Please make sure you are connected to the internet, or contact Ishan on WhatsApp directly.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const getWhatsAppLink = () => {
        const encodedText = encodeURIComponent(waMessage);
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    };

    return (
        <div className="fixed bottom-18 sm:bottom-20 right-4 sm:right-6 z-50">
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        key="chat-fab"
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                        whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -2 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.94 }}
                        onClick={() => setIsOpen(true)}
                        className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] p-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 border border-emerald-500/40 cursor-pointer"
                        aria-label="Open AI chat assistant"
                    >
                        <div className="h-full w-full rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-slate-900">
                            <Image
                                src="/ai-assistant-logo.png"
                                alt="Ishan AI Portfolio Assistant"
                                width={44}
                                height={44}
                                className="h-full w-full object-cover rounded-full"
                            />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Widget Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-dialog"
                        role="dialog"
                        aria-label="Ishan Chinthaka AI Assistant"
                        aria-modal="false"
                        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        style={{ transformOrigin: "bottom right" }}
                        className="absolute bottom-16 -right-2 sm:right-0 w-[calc(100vw-32px)] sm:w-[390px] h-[520px] max-h-[calc(100vh-130px)] rounded-2xl border border-black/10 bg-white/95 dark:bg-[#111827]/95 shadow-soft backdrop-blur-md flex flex-col overflow-hidden dark:border-white/10"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-3 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/20">
                                        <Image
                                            src="/ai-assistant-logo.png"
                                            alt="Ishan AI Portfolio Assistant"
                                            width={40}
                                            height={40}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-emerald-700 bg-emerald-400 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-tight">{profile.name}</h4>
                                    <p className="text-xs text-emerald-100 flex items-center gap-1">
                                        <span>AI Assistant & Inquiry</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                {activeTab === "ai" && messages.length > 1 && (
                                    <button
                                        onClick={handleClearChat}
                                        title="Clear chat history"
                                        aria-label="Clear chat history"
                                        className="rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/15 transition cursor-pointer"
                                    >
                                        <RotateCcw size={15} />
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close chat"
                                    className="rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/15 transition cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Clean Tab Selection Bar */}
                        <div className="flex border-b border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 text-xs">
                            <button
                                onClick={() => setActiveTab("ai")}
                                className={`flex-1 py-2.5 px-2 flex items-center justify-center gap-1.5 font-semibold transition border-b-2 cursor-pointer ${
                                    activeTab === "ai"
                                        ? "border-emerald-500 text-emerald-600 dark:border-teal-400 dark:text-teal-400"
                                        : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                }`}
                            >
                                <Sparkles size={14} />
                                AI Portfolio Guide
                            </button>
                            <button
                                onClick={() => setActiveTab("whatsapp")}
                                className={`flex-1 py-2.5 px-2 flex items-center justify-center gap-1.5 font-semibold transition border-b-2 cursor-pointer ${
                                    activeTab === "whatsapp"
                                        ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                        : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                }`}
                            >
                                <WhatsAppIcon className="w-3.5 h-3.5" />
                                WhatsApp Direct
                            </button>
                        </div>

                        {/* Content Pane */}
                        <div className="flex-1 overflow-y-auto p-3.5 flex flex-col bg-slate-50/50 dark:bg-[#0f172a]/20">
                            {activeTab === "ai" ? (
                                <>
                                    {/* Message Log */}
                                    <div
                                        className="flex-1 space-y-3 overflow-y-auto pb-2"
                                        aria-live="polite"
                                    >
                                        {messages.map((msg, index) => (
                                            <div
                                                key={index}
                                                className={`group relative flex ${
                                                    msg.role === "user" ? "justify-end" : "justify-start"
                                                }`}
                                            >
                                                <div
                                                    className={`relative flex gap-2 max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                                                        msg.role === "user"
                                                            ? "bg-emerald-600 dark:bg-emerald-500 text-white rounded-br-none"
                                                            : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-black/5 dark:border-white/5 rounded-bl-none shadow-xs"
                                                    }`}
                                                >
                                                    {msg.role === "assistant" && (
                                                        <div className="flex-shrink-0 h-5 w-5 rounded-full overflow-hidden mt-0.5 border border-black/5 dark:border-white/5">
                                                            <Image
                                                                src="/ai-assistant-logo.png"
                                                                alt="AI Logo"
                                                                width={20}
                                                                height={20}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <FormattedMessage content={msg.content} />
                                                    </div>

                                                    {/* Copy button for assistant responses */}
                                                    {msg.role === "assistant" && (
                                                        <button
                                                            onClick={() => handleCopy(msg.content, index)}
                                                            title="Copy message"
                                                            aria-label="Copy message"
                                                            className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 self-start ml-1 cursor-pointer"
                                                        >
                                                            {copiedIndex === index ? (
                                                                <Check size={13} className="text-emerald-500" />
                                                            ) : (
                                                                <Copy size={13} />
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        {isLoading && (
                                            <div className="flex justify-start">
                                                <div className="flex gap-2 max-w-[85%] rounded-2xl px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/5 rounded-bl-none shadow-xs items-center">
                                                    <Loader2 size={14} className="animate-spin text-emerald-500" />
                                                    <span className="text-xs">Thinking & searching portfolio...</span>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={chatEndRef} />
                                    </div>

                                    {/* Detailed Suggested Prompts when on initial state */}
                                    {messages.length === 1 && (
                                        <div className="grid grid-cols-1 gap-1.5 mt-auto pt-2">
                                            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 ml-1 mb-0.5">
                                                Suggested questions:
                                            </p>
                                            {quickReplies.slice(0, 3).map((reply, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSend(reply.action)}
                                                    className="text-left w-full text-xs py-2 px-3 bg-white dark:bg-slate-800 border border-black/5 dark:border-white/5 rounded-xl hover:border-emerald-500 dark:hover:border-teal-500 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-teal-400 transition shadow-xs flex justify-between items-center cursor-pointer"
                                                >
                                                    <span>{reply.text} — {reply.action}</span>
                                                    <ChevronRight size={12} className="text-slate-400 flex-shrink-0" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                /* WhatsApp Tab */
                                <div className="h-full flex flex-col justify-between py-2">
                                    <div className="space-y-4">
                                        <div className="glass-panel p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800/80 shadow-xs">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                                    <PhoneCall size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-400 font-semibold dark:text-slate-500">DIRECT WHATSAPP</p>
                                                    <p className="text-sm font-bold text-slate-800 dark:text-white">{WHATSAPP_RAW}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mb-2 ml-1">
                                                Template Messages:
                                            </span>
                                            <div className="grid grid-cols-3 gap-2">
                                                <button
                                                    onClick={() => handleTemplateChange("collab")}
                                                    className={`text-center py-2 px-1 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                                                        selectedTemplate === "collab"
                                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                                            : "bg-white dark:bg-slate-800 border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300"
                                                    }`}
                                                >
                                                    Collab
                                                </button>
                                                <button
                                                    onClick={() => handleTemplateChange("hire")}
                                                    className={`text-center py-2 px-1 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                                                        selectedTemplate === "hire"
                                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                                            : "bg-white dark:bg-slate-800 border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300"
                                                    }`}
                                                >
                                                    Hire
                                                </button>
                                                <button
                                                    onClick={() => handleTemplateChange("question")}
                                                    className={`text-center py-2 px-1 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                                                        selectedTemplate === "question"
                                                            ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                                            : "bg-white dark:bg-slate-800 border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300"
                                                    }`}
                                                >
                                                    Question
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mb-2 ml-1">
                                                Customize Message:
                                            </span>
                                            <textarea
                                                value={waMessage}
                                                onChange={(e) => {
                                                    setSelectedTemplate("");
                                                    setWaMessage(e.target.value);
                                                }}
                                                placeholder="Type your WhatsApp inquiry message here..."
                                                className="w-full h-24 p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm outline-none focus:border-emerald-500 dark:focus:border-emerald-400 resize-none shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <Link
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <WhatsAppIcon className="w-5 h-5 text-white" />
                                        <span className="text-sm">Send WhatsApp Inquiry</span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Always-accessible Quick Chip Carousel (above input) */}
                        {activeTab === "ai" && (
                            <PromptCarousel
                                items={quickReplies}
                                onSelect={(action) => handleSend(action)}
                                disabled={isLoading}
                            />
                        )}

                        {/* Footer Input Area for AI Chat */}
                        {activeTab === "ai" && (
                            <div className="p-3 border-t border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Ask assistant anything about Ishan..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
                                    disabled={isLoading}
                                    className="flex-1 px-3 py-2 border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm rounded-xl outline-none focus:border-emerald-500 dark:focus:border-teal-500 transition"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={isLoading || !inputValue.trim()}
                                    aria-label="Send message"
                                    className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 transition flex items-center justify-center cursor-pointer shadow-xs"
                                >
                                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ChatWidget;
