"use client";

import { motion } from "framer-motion";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="methode" className="section-shell py-24">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Les 3 piliers Altéra</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card group p-6 transition hover:shadow-glow"
          >
            <p className="mb-4 text-accent-cyan">0{i + 1}</p>
            <h3 className="mb-3 text-xl font-medium">{pillar.title}</h3>
            <p className="text-muted">{pillar.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
