"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "Как это работает", href: "#how" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Видео", href: "#video" },
  { label: "Цены", href: "#pricing" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl shadow-[0_1px_0_var(--c-outline-variant)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Stencil spray circle */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="absolute inset-0">
              <circle cx="18" cy="18" r="15" stroke="var(--c-primary)" strokeWidth="2.5" strokeDasharray="4 3" className="transition-all duration-500 group-hover:stroke-dasharray-[8,2]" />
            </svg>
            {/* Leaf cutout */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 21c1.5-5 3-9 9-13 0 0-4 6-3 13"
                stroke="var(--c-primary)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8c3-4 8-6 13-6-1 6-3 11-7 14"
                stroke="var(--c-primary)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-on-surface font-bold text-[17px] tracking-[-0.02em]">
              эко<span className="text-primary">реклама</span>
            </span>
            <span className="text-on-surface-v text-[9px] font-medium tracking-[0.12em] uppercase mt-[1px]">
              на асфальте
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="t-label px-4 py-2 rounded-lg text-on-surface-v no-underline transition-colors hover:text-on-surface hover:bg-srf-ctr"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + theme + burger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:flex items-center t-btn px-5 py-2.5 rounded-xl bg-primary text-on-primary no-underline transition-transform hover:scale-[1.03] active:scale-[0.97]"
          >
            Оставить заявку
          </a>

          {/* Burger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-transparent border-none cursor-pointer text-on-surface"
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {menuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-surface border-t border-outline-v px-5 pb-5 pt-2"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block t-body py-3 text-on-surface no-underline border-b border-outline-v last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block t-btn text-center mt-4 px-5 py-3 rounded-xl bg-primary text-on-primary no-underline"
          >
            Оставить заявку
          </a>
        </motion.div>
      )}
    </header>
  );
}
