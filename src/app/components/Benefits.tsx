"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "100% законно",
    text: "Работаем с согласованием территории. Водосмываемые материалы не нарушают закон.",
    emoji: "✅",
    bg: "bg-primary-ctr",
  },
  {
    title: "Экологично",
    text: "Только нетоксичные водосмываемые краски. Дождь естественно очищает поверхность.",
    emoji: "🌱",
    bg: "bg-primary-ctr",
  },
  {
    title: "10 000+ контактов/день",
    text: "Реклама под ногами — её невозможно не заметить. Пешеходный трафик работает на вас.",
    emoji: "👁",
    bg: "bg-tertiary-ctr",
  },
  {
    title: "В 5–10 раз дешевле",
    text: "Дешевле билбордов и баннеров. Одно нанесение — до 3 месяцев работы рекламы.",
    emoji: "💰",
    bg: "bg-secondary-ctr",
  },
  {
    title: "Вирусный эффект",
    text: "Люди фотографируют и делятся в соцсетях. Бесплатный органический охват.",
    emoji: "📱",
    bg: "bg-tertiary-ctr",
  },
  {
    title: "Точное размещение",
    text: "У входа, на пешеходных зонах, у метро — там, где ваша целевая аудитория.",
    emoji: "📍",
    bg: "bg-primary-ctr",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" ref={ref} className="py-16 md:py-24 lg:py-28 bg-srf-low">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block t-label text-primary mb-2"
          >
            Преимущества
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="t-h1"
          >
            Почему реклама на асфальте
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="bg-surface rounded-2xl p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div
                className={`w-11 h-11 rounded-xl ${b.bg} flex items-center justify-center text-xl mb-4`}
              >
                {b.emoji}
              </div>
              <h3 className="t-h4 mb-2">{b.title}</h3>
              <p className="t-body-s text-on-surface-v">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
