"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LIGHT = {
  "--c-primary": "#1B6B3A",
  "--c-on-primary": "#FFFFFF",
  "--c-primary-ctr": "#D7F2DF",
  "--c-on-primary-ctr": "#00210D",
  "--c-secondary": "#4E6355",
  "--c-on-secondary": "#FFFFFF",
  "--c-secondary-ctr": "#D0E9D6",
  "--c-on-secondary-ctr": "#0B1F14",
  "--c-tertiary": "#3D6373",
  "--c-on-tertiary": "#FFFFFF",
  "--c-tertiary-ctr": "#C1E8FB",
  "--c-on-tertiary-ctr": "#001F2A",
  "--c-surface": "#FFFFFF",
  "--c-on-surface": "#1A1C1A",
  "--c-on-surface-v": "#6B7770",
  "--c-srf-lowest": "#FFFFFF",
  "--c-srf-low": "#F5F7F4",
  "--c-srf-ctr": "#EFF1EE",
  "--c-srf-high": "#E8EBE7",
  "--c-srf-highest": "#DFE2DD",
  "--c-srf-dim": "#D7DCD5",
  "--c-outline": "#9EA69D",
  "--c-outline-v": "#C5CDC3",
  "--c-inv-surface": "#2E312E",
  "--c-inv-on-surface": "#EFF2EC",
  "--c-inv-primary": "#88D99E",
  "--c-error": "#BA1A1A",
  "--c-on-error": "#FFFFFF",
};

const DARK = {
  "--c-primary": "#88D99E",
  "--c-on-primary": "#00391A",
  "--c-primary-ctr": "#005228",
  "--c-on-primary-ctr": "#A4F5B8",
  "--c-secondary": "#B4CDBA",
  "--c-on-secondary": "#203528",
  "--c-secondary-ctr": "#374B3E",
  "--c-on-secondary-ctr": "#D0E9D6",
  "--c-tertiary": "#A5CCDF",
  "--c-on-tertiary": "#073543",
  "--c-tertiary-ctr": "#244C5B",
  "--c-on-tertiary-ctr": "#C1E8FB",
  "--c-surface": "#111411",
  "--c-on-surface": "#DFE4DD",
  "--c-on-surface-v": "#BFC8BD",
  "--c-srf-lowest": "#0C0F0C",
  "--c-srf-low": "#191C19",
  "--c-srf-ctr": "#1D201D",
  "--c-srf-high": "#282B27",
  "--c-srf-highest": "#323632",
  "--c-srf-dim": "#111411",
  "--c-outline": "#8B938A",
  "--c-outline-v": "#414941",
  "--c-inv-surface": "#DFE4DD",
  "--c-inv-on-surface": "#2E312E",
  "--c-inv-primary": "#1B6B3A",
  "--c-error": "#FFB4AB",
  "--c-on-error": "#690005",
};

function applyTheme(vars: Record<string, string>) {
  const s = document.documentElement.style;
  for (const [k, v] of Object.entries(vars)) {
    s.setProperty(k, v);
  }
}

function clearInlineTheme() {
  const s = document.documentElement.style;
  for (const k of Object.keys(LIGHT)) {
    s.removeProperty(k);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      applyTheme(stored === "dark" ? DARK : LIGHT);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      // System preference is handled by CSS media query, no inline override needed
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next === "dark" ? DARK : LIGHT);
    localStorage.setItem("theme", next);
  };

  if (!theme) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-srf-ctr border-none cursor-pointer transition-colors hover:bg-srf-high active:scale-95"
      aria-label={isDark ? "Светлая тема" : "Тёмная тема"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-on-surface"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-on-surface"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
