"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-shell py-24">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Ils parlent d&apos;Altéra</h2>
      <div className="glass-card p-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="min-h-32"
          >
            <p className="mb-5 text-2xl">“{item.quote}”</p>
            <footer className="text-muted">
              {item.name} · {item.role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-6 flex gap-3">
          <button onClick={prev} className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:border-accent-cyan/60">
            Précédent
          </button>
          <button onClick={next} className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:border-accent-cyan/60">
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}
