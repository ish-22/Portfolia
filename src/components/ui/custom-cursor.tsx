"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [label, setLabel] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Don't render on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;
        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        setIsVisible(true);

        const onMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const onEnter = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            const cursor = el.closest("[data-cursor]");
            setLabel(cursor?.getAttribute("data-cursor") ?? "");
        };

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onEnter);
        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed z-[9999] flex items-center gap-1.5"
            animate={{ x: pos.x - 6, y: pos.y - 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
            aria-hidden
        >
            <div className="h-3 w-3 rounded-full bg-[--lime] transition-transform duration-200" />
            {label && (
                <span className="rounded bg-[--lime] px-2 py-0.5 font-mono text-[10px] font-black text-black">
                    {label}
                </span>
            )}
        </motion.div>
    );
}
