"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-shell grid gap-12 pb-20 pt-14 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-7"
      >
        <p className="inline-flex rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan">
          Agence digitale orientée résultats
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Faites de votre acquisition un moteur de croissance durable.
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Altéra conçoit des expériences web premium et des stratégies d&apos;acquisition pilotées par la data.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Réserver un audit</Button>
          <Button variant="ghost">Voir nos réalisations</Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass-card relative overflow-hidden p-7"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6C5CE740,transparent_55%)]" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent-cyan/20 blur-3xl" />
        <div className="relative space-y-5">
          <p className="text-sm text-muted">Dashboard de performance</p>
          {["Trafic qualifié", "Taux conversion", "CAC maîtrisé"].map((item, index) => (
            <div key={item} className="rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{item}</span>
                <span className="text-accent-cyan">+{(index + 1) * 18}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${45 + index * 20}%` }}
                  transition={{ duration: 0.8, delay: 0.25 + index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
