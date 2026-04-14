"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-outline-v bg-srf-lowest text-on-surface t-body outline-none transition-all placeholder:text-on-surface-v/50 focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      company: fd.get("company") as string,
      budget: fd.get("budget") as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-[640px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-block t-label text-primary mb-2"
            >
              Контакт
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="t-h1 mb-3"
            >
              Запустите рекламу сегодня
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="t-body text-on-surface-v"
            >
              Оставьте заявку — перезвоним в течение часа
            </motion.p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="bg-srf-low rounded-2xl p-6 md:p-8"
          >
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-ctr flex items-center justify-center mx-auto mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--c-primary)">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="t-h3 mb-1">Заявка отправлена!</h3>
                <p className="t-body text-on-surface-v">
                  Свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block t-label mb-1.5">Имя</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block t-label mb-1.5">Телефон</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block t-label mb-1.5">Компания</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Название"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block t-label mb-1.5">Бюджет</label>
                    <select name="budget" className={inputCls}>
                      <option>до 10 000 ₽</option>
                      <option>10 000 — 30 000 ₽</option>
                      <option>30 000 — 100 000 ₽</option>
                      <option>от 100 000 ₽</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block t-label mb-1.5">Сообщение</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Расскажите о проекте..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="t-body-s text-error">
                    Ошибка отправки. Попробуйте ещё раз или напишите в Telegram.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto t-btn px-8 py-3.5 rounded-xl bg-primary text-on-primary border-none cursor-pointer transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,107,58,0.25)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" ? "Отправляем..." : "Отправить заявку"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
