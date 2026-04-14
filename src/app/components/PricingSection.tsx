"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Старт",
    desc: "Попробовать формат",
    price: "от 5 000 ₽",
    features: [
      "1 трафарет (до 1 м²)",
      "1 локация",
      "Эко-краска",
      "Фотоотчёт",
      "Срок действия: до 2 недель",
    ],
    featured: false,
  },
  {
    name: "Бизнес",
    desc: "Максимальный охват",
    price: "от 15 000 ₽",
    features: [
      "3–5 трафаретов",
      "До 5 локаций",
      "Дизайн трафарета",
      "QR-код интеграция",
      "Видео + фотоотчёт",
      "Срок действия: до 3 месяцев",
    ],
    featured: true,
  },
  {
    name: "Корпоративный",
    desc: "Для крупных кампаний",
    price: "По запросу",
    features: [
      "Безлимит трафаретов",
      "Безлимит локаций",
      "Дизайн + согласование",
      "Аналитика и отчёты",
      "Менеджер проекта",
      "Приоритетная поддержка",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-16 md:py-24 lg:py-28 bg-srf-low">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block t-label text-primary mb-2"
          >
            Тарифы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="t-h1"
          >
            Прозрачные цены
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[960px] mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className={`relative rounded-2xl p-6 md:p-7 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${
                p.featured
                  ? "bg-primary text-on-primary"
                  : "bg-surface border border-outline-v"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 t-caption font-medium px-3 py-0.5 rounded-full bg-primary-ctr text-on-primary-ctr">
                  Популярный
                </span>
              )}

              <div className="mb-5">
                <h3 className="t-h3 mb-0.5">{p.name}</h3>
                <p className={`t-body-s ${p.featured ? "opacity-75" : "text-on-surface-v"}`}>
                  {p.desc}
                </p>
              </div>

              <div className="t-h2 mb-6">{p.price}</div>

              <ul className="space-y-2.5 mb-6 list-none">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 t-body-s">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5"
                      fill={p.featured ? "currentColor" : "var(--c-primary)"}
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center t-btn py-3 rounded-xl no-underline transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  p.featured
                    ? "bg-on-primary text-primary"
                    : "bg-primary text-on-primary"
                }`}
              >
                Выбрать
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
