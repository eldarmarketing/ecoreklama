"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function StencilReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-srf-highest overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="t-label text-on-surface-v uppercase tracking-[0.15em] mb-6"
        >
          Трафарет на асфальте
        </motion.p>

        <motion.div style={{ clipPath }} className="inline-block">
          <h2
            className="font-black text-primary leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(56px, 12vw, 140px)" }}
          >
            ЭКО
            <br />
            РЕКЛАМА
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="t-body text-on-surface-v mt-6 max-w-[480px] mx-auto"
        >
          Так выглядит ваша реклама на тротуаре — чётко, ярко, невозможно пройти мимо
        </motion.p>
      </div>
    </section>
  );
}
