"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    setIsVisible(scrollY > 300);

                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    if (totalHeight > 0) {
                        const progress = (scrollY / totalHeight) * 100;
                        setScrollProgress(progress);
                    } else {
                        setScrollProgress(0);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
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
            className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/10 bg-white/85 text-slate-700 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10 dark:bg-[#111827]/85 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400 ${isVisible
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

export default ScrollToTop;
