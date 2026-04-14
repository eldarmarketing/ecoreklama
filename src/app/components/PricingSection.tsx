"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Старт",
    desc: "Попробовать формат",
    price: "5 000 ₽",
    oldPrice: null,
    features: [
      "3 нанесения",
      "1 трафарет",
      "Разработка дизайна",
      "Фотоотчёт",
    ],
    featured: false,
  },
  {
    name: "Бизнес",
    desc: "Оптимально для малого бизнеса",
    price: "9 000 ₽",
    oldPrice: "10 500 ₽",
    features: [
      "10 нанесений",
      "1–2 трафарета",
      "Разработка дизайна",
      "Фото + видеоотчёт",
      "Согласование точек",
    ],
    featured: true,
  },
  {
    name: "Масштаб",
    desc: "Максимальный охват района",
    price: "22 500 ₽",
    oldPrice: "25 500 ₽",
    features: [
      "30 нанесений",
      "1–2 трафарета",
      "Разработка бесплатно",
      "Фото + видеоотчёт",
      "Согласование точек",
      "Аналитика охвата",
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

        {/* Exclusivity offer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-[720px] mx-auto mb-10 md:mb-14 rounded-2xl bg-primary/8 border border-primary/20 p-5 md:p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--c-primary)">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            <span className="t-h4 text-primary">Эксклюзив на район</span>
          </div>
          <p className="t-body-s text-on-surface-v max-w-[480px] mx-auto">
            В каждом районе работаем только с одним бизнесом в нише. Ваши конкуренты не смогут заказать рекламу рядом — территория закреплена за вами.
          </p>
        </motion.div>

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

              <div className="mb-6 flex items-baseline gap-2">
                <span className="t-h2">{p.price}</span>
                {p.oldPrice && (
                  <span className={`t-body-s line-through ${p.featured ? "opacity-50" : "text-on-surface-v"}`}>
                    {p.oldPrice}
                  </span>
                )}
              </div>

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

        {/* Per-unit pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 md:mt-16 max-w-[720px] mx-auto"
        >
          <h3 className="t-h3 text-center mb-6">Поштучные цены</h3>
          <div className="rounded-2xl border border-outline-v overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-srf-ctr">
                  <th className="t-label px-5 py-3">Кол-во нанесений</th>
                  <th className="t-label px-5 py-3">Цена за нанесение</th>
                  <th className="t-label px-5 py-3 hidden sm:table-cell">Трафарет</th>
                </tr>
              </thead>
              <tbody className="t-body-s">
                {[
                  ["1–3", "5 000 ₽ фикс.", "1 500 ₽"],
                  ["4–10", "1 000 ₽ / шт", "1 500 ₽"],
                  ["11–30", "800 ₽ / шт", "1 500 ₽"],
                  ["30+", "590 ₽ / шт", "бесплатно"],
                ].map(([qty, price, stencil]) => (
                  <tr key={qty} className="border-t border-outline-v">
                    <td className="px-5 py-3 font-medium">{qty}</td>
                    <td className="px-5 py-3">{price}</td>
                    <td className="px-5 py-3 hidden sm:table-cell text-on-surface-v">{stencil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Subscriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 md:mt-16 max-w-[960px] mx-auto"
        >
          <h3 className="t-h3 text-center mb-2">Подписка на обновление</h3>
          <p className="t-body-s text-on-surface-v text-center mb-6">
            Для бизнесов с регулярными акциями и сезонными предложениями
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Лайт", price: "4 500 ₽/мес", updates: "1 дизайн", applications: "3 нанесения" },
              { name: "Стандарт", price: "9 500 ₽/мес", updates: "2 дизайна", applications: "10 нанесений" },
              { name: "Про", price: "24 000 ₽/мес", updates: "4 дизайна", applications: "30 нанесений" },
            ].map((s) => (
              <div key={s.name} className="rounded-2xl border border-outline-v bg-surface p-5 md:p-6">
                <h4 className="t-h4 mb-1">{s.name}</h4>
                <div className="t-h3 text-primary mb-4">{s.price}</div>
                <ul className="space-y-2 list-none t-body-s text-on-surface-v">
                  <li className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--c-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    {s.updates} / мес
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--c-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    {s.applications} / мес
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="t-caption text-on-surface-v text-center mt-4">
            Предоплата 3 мес. — скидка 10% · 6 мес. — скидка 15%
          </p>
        </motion.div>
      </div>
    </section>
  );
}
