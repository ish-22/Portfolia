"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle button visibility after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate scroll progress percentage
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once initially to set the correct state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Circular progress dimensions
    const radius = 18;
    const circumference = 2 * Math.PI * radius; // ~113.1
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-slate-700 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10 dark:bg-[#111827]/85 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400 ${isVisible
                ? "opacity-100 translate-y-0 scale-100 visible"
                : "opacity-0 translate-y-4 scale-75 invisible pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            {/* SVG progress indicator */}
            <svg className="absolute -rotate-90" width="48" height="48" viewBox="0 0 48 48">
                {/* Track circle */}
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    className="text-black/5 dark:text-white/5"
                    strokeWidth="2.5"
                />
                {/* Progress path */}
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    className="text-emerald-500 dark:text-teal-400 transition-all duration-100"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            {/* Icon */}
            <ArrowUp size={18} className="relative z-10" />
        </button>
    );
}
