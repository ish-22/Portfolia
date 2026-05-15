"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-sea hover:text-sea dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
