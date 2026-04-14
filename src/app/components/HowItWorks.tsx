"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Заявка и дизайн",
    text: "Описываете задачу — мы создаём макет трафарета. Согласуем эскиз, размеры и локацию.",
    icon: (
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    ),
  },
  {
    num: "02",
    title: "Изготовление трафарета",
    text: "Создаём многоразовый трафарет из прочного материала. Логотипы, QR-коды — любая сложность.",
    icon: (
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm7 13H5v-.23c0-.62.28-1.2.76-1.58A10.7 10.7 0 0 1 12 15c2.36 0 4.53.82 6.24 2.19.48.38.76.97.76 1.58V19z" />
    ),
  },
  {
    num: "03",
    title: "Нанесение на асфальт",
    text: "Наносим рекламу экологичной водосмываемой краской. Легально, с согласованием участка.",
    icon: (
      <path d="M18 4l-4 4h3v7a2 2 0 0 1-4 0V8a4 4 0 0 0-8 0v7H2l4 4 4-4H7V8a2 2 0 0 1 4 0v7a4 4 0 0 0 8 0V8h3l-4-4z" />
    ),
  },
  {
    num: "04",
    title: "Результат",
    text: "Фото- и видеоотчёт. Реклама работает от 2 недель до 3 месяцев.",
    icon: (
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" ref={ref} className="py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block t-label text-primary mb-2"
          >
            Процесс
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="t-h1"
          >
            Как это работает
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="group relative bg-srf-low rounded-2xl p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 t-display text-primary opacity-[0.06] select-none">
                {s.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary-ctr flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--c-primary)">
                  {s.icon}
                </svg>
              </div>

              <h3 className="t-h4 mb-2">{s.title}</h3>
              <p className="t-body-s text-on-surface-v">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
