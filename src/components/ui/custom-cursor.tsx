"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  char: string;
  vx: number;
  vy: number;
  rotation: number;
  life: number;
}

const SPARKLE_COLORS = [
  "#a3e635", // Electric lime
  "#84cc16", // Lime green
  "#38bdf8", // Magic cyan
  "#facc15", // Magic gold
  "#ffffff"  // Pure starlight
];

const SPARKLE_CHARS = ["✦", "★", "✧", "•", "⋆"];

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const lastPos = useRef({ x: -100, y: -100 });
  const sparkleCount = useRef(0);
  const rafId = useRef<number>(0);

  // Add magic sparkle particle
  const addSparkle = useCallback((x: number, y: number, isBurst = false) => {
    const count = isBurst ? 8 : 1;
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < count; i++) {
      sparkleCount.current += 1;
      const angle = isBurst
        ? (Math.PI * 2 * i) / count + (Math.random() - 0.5)
        : Math.random() * Math.PI * 2;
      const speed = isBurst ? Math.random() * 3 + 2 : Math.random() * 1.5 + 0.5;

      newSparkles.push({
        id: sparkleCount.current,
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        size: isBurst ? Math.random() * 6 + 10 : Math.random() * 4 + 8,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + (isBurst ? -1 : 0.5), // slight gravity
        rotation: Math.random() * 360,
        life: 1.0
      });
    }

    setSparkles((prev) => [...prev.slice(-30), ...newSparkles]);
  }, []);

  // Animate sparkles in continuous loop
  useEffect(() => {
    if (!isVisible) return;

    const updateParticles = () => {
      setSparkles((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            vy: s.vy + 0.05, // gentle gravity
            rotation: s.rotation + 4,
            life: s.life - 0.035
          }))
          .filter((s) => s.life > 0)
      );

      rafId.current = requestAnimationFrame(updateParticles);
    };

    rafId.current = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(rafId.current);
  }, [isVisible]);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setIsVisible(true);

    // Hide default OS cursor on desktop
    document.documentElement.classList.add("magic-cursor-active");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Calculate distance moved to throttle sparkle trail
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 18) {
        addSparkle(e.clientX, e.clientY, false);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      addSparkle(e.clientX, e.clientY, true);
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      const cursor = el.closest("[data-cursor]");
      setLabel(cursor?.getAttribute("data-cursor") ?? "");

      const isInteractive =
        el.tagName === "BUTTON" ||
        el.tagName === "A" ||
        el.closest("button") !== null ||
        el.closest("a") !== null ||
        el.getAttribute("role") === "button" ||
        el.classList.contains("clickable");

      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("magic-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [addSparkle]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sparkle Particle Trail */}
      <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" aria-hidden="true">
        {sparkles.map((s) => (
          <span
            key={s.id}
            style={{
              position: "fixed",
              left: `${s.x}px`,
              top: `${s.y}px`,
              color: s.color,
              fontSize: `${s.size}px`,
              opacity: s.life,
              transform: `translate(-50%, -50%) rotate(${s.rotation}deg) scale(${s.life})`,
              textShadow: `0 0 8px ${s.color}`,
              userSelect: "none"
            }}
            className="pointer-events-none font-bold leading-none select-none transition-none"
          >
            {s.char}
          </span>
        ))}
      </div>

      {/* Magic Wand Cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] origin-top-left"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
        animate={{
          scale: isClicking ? 0.88 : isHovered ? 1.15 : 1,
          rotate: isClicking ? -15 : isHovered ? -5 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
          mass: 0.2
        }}
        aria-hidden="true"
      >
        {/* Magic Wand Vector SVG */}
        <div className="relative -translate-x-[2px] -translate-y-[2px]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
          >
            {/* Glowing magic star flare at tip (Hotspot at 2, 2) */}
            <g className="animate-pulse">
              <path
                d="M3 0 L4.5 2.5 L7 3 L4.5 3.5 L3 6 L1.5 3.5 L-1 3 L1.5 2.5 Z"
                fill="#a3e635"
                filter="drop-shadow(0 0 6px #a3e635)"
              />
              <circle cx="3" cy="3" r="1.5" fill="#ffffff" />
            </g>

            {/* Magic Wand Tip Collar (White/Silver Star Crystal) */}
            <path
              d="M3 3 L7 7 L5.5 8.5 L1.5 4.5 Z"
              fill="#ffffff"
              stroke="#a3e635"
              strokeWidth="0.5"
            />

            {/* Gold / Brass Accent Band */}
            <path
              d="M6 6 L8 8 L7 9 L5 7 Z"
              fill="#facc15"
            />

            {/* Wand Shaft (Dark Ebony Titanium) */}
            <path
              d="M7.5 7.5 L27 27 L25 29 L5.5 9.5 Z"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="0.5"
            />

            {/* Subtle light reflection on wand shaft */}
            <line
              x1="8"
              y1="7"
              x2="25"
              y2="24"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="0.75"
              strokeLinecap="round"
            />

            {/* Handle Grip & Pommel End */}
            <path
              d="M19 19 L28 28 L26 30 L17 21 Z"
              fill="#09090b"
            />
            {/* Gold Pommel Cap */}
            <circle cx="27" cy="29" r="2" fill="#facc15" stroke="#ca8a04" strokeWidth="0.5" />
          </svg>

          {/* Hover Magic Burst Ring */}
          {isHovered && (
            <motion.span
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute -top-1 -left-1 h-4 w-4 rounded-full border border-[--lime] pointer-events-none"
            />
          )}

          {/* Optional Data Cursor Label Pill */}
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 24, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                className="absolute top-1 left-4 rounded-full bg-[--lime] px-2.5 py-0.5 font-mono text-[10px] font-black text-black shadow-lg tracking-wider pointer-events-none whitespace-nowrap"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

export default CustomCursor;
