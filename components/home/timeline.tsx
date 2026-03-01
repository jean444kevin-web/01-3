"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <section className="section-shell py-24">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Processus en 4 étapes</h2>
      <div className="relative space-y-8 before:absolute before:left-[9px] before:top-1 before:h-[95%] before:w-px before:bg-white/20 md:before:left-1/2">
        {timeline.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`relative ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
          >
            <span className="absolute -left-8 top-4 h-5 w-5 rounded-full border border-accent-cyan/60 bg-background md:left-auto md:right-[-10px] md:top-6" />
            <article className="glass-card p-6">
              <p className="mb-2 text-accent-cyan">Étape {index + 1}</p>
              <p className="text-lg">{step}</p>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
