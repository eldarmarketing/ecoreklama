"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="eco-blob absolute -top-24 -right-24 w-[500px] h-[500px] opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--c-primary), transparent 70%)" }}
        />
        <div
          className="eco-blob absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--c-tertiary), transparent 70%)",
            animationDelay: "-8s",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-ctr text-on-primary-ctr t-label mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Первые в Санкт-Петербурге
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="t-display mb-5"
          >
            Реклама на асфальте.{" "}
            <span className="gradient-text">Законно. Экологично.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="t-body text-on-surface-v max-w-[540px] mx-auto mb-8 text-[17px]"
          >
            Водосмываемые трафареты, которые привлекают тысячи глаз каждый день.
            Без штрафов. Без вреда для природы.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 t-btn px-7 py-3.5 rounded-xl bg-primary text-on-primary no-underline transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(27,107,58,0.25)] active:scale-[0.97]"
            >
              Обсудить проект
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </a>
            <a
              href="#how"
              className="flex items-center gap-2 t-btn px-7 py-3.5 rounded-xl border border-outline-v text-on-surface no-underline transition-all hover:bg-srf-ctr active:scale-[0.97]"
            >
              Как это работает
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-14"
          >
            {[
              { value: "10 000+", label: "просмотров в день" },
              { value: "0 ₽", label: "штрафов" },
              { value: "100%", label: "экологично" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="t-h2 text-primary">{s.value}</div>
                <div className="t-caption text-on-surface-v mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-outline-v flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-primary"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
