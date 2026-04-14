"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="video" ref={ref} className="py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-block t-label text-tertiary mb-2"
            >
              Видео
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="t-h1 mb-4"
            >
              Смотрите, как мы это&nbsp;делаем
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="t-body text-on-surface-v mb-8 max-w-[480px] lg:max-w-none"
            >
              Быстро, аккуратно и с полным соблюдением экологических норм.
              Каждый трафарет — произведение уличного искусства.
            </motion.p>

            {/* Info chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-srf-low rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-primary-ctr flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--c-primary)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <div className="t-label">Без вреда для природы</div>
                  <div className="t-caption text-on-surface-v">Только экокраски</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-srf-low rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-tertiary-ctr flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--c-tertiary)">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 5H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                </div>
                <div>
                  <div className="t-label">от 15 минут</div>
                  <div className="t-caption text-on-surface-v">На одно нанесение</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Phone with video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            <div className="phone-frame">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/video-poster.jpg"
              >
                <source src="/eco-video.mp4" type="video/mp4" />
              </video>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 z-10 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs opacity-70">Живое видео</span>
              </div>
            </div>
            {/* Glow */}
            <div
              className="absolute -inset-8 -z-10 opacity-15 blur-3xl rounded-full"
              style={{ background: "radial-gradient(circle, var(--c-primary), transparent 70%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
