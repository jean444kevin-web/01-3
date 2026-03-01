"use client";

import { useMemo, useState } from "react";

export function RoiCalculator() {
  const [clients, setClients] = useState(20);
  const [basket, setBasket] = useState(1200);

  const yearlyRevenue = useMemo(() => clients * basket * 12, [clients, basket]);

  return (
    <section id="roi" className="section-shell py-24">
      <div className="glass-card grid gap-8 p-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-semibold">Module ROI interactif</h2>
          <p className="mb-6 text-muted">Calculez instantanément votre potentiel annuel.</p>
          <p className="text-sm text-muted">Formule : clients mensuels × panier moyen × 12.</p>
        </div>

        <div className="space-y-5 rounded-xl border border-white/10 bg-black/30 p-6">
          <label className="block text-sm">
            Clients mensuels
            <input
              type="range"
              min={1}
              max={200}
              value={clients}
              onChange={(e) => setClients(Number(e.target.value))}
              className="mt-2 w-full accent-[#6C5CE7]"
            />
            <span className="text-muted">{clients} clients/mois</span>
          </label>

          <label className="block text-sm">
            Panier moyen (€)
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={basket}
              onChange={(e) => setBasket(Number(e.target.value))}
              className="mt-2 w-full accent-[#00F5FF]"
            />
            <span className="text-muted">{basket.toLocaleString("fr-FR")} €</span>
          </label>

          <div className="rounded-xl border border-accent-violet/40 bg-accent-violet/10 p-5">
            <p className="text-sm text-muted">CA potentiel annuel</p>
            <p className="text-3xl font-semibold text-accent-cyan">{yearlyRevenue.toLocaleString("fr-FR")} €</p>
          </div>
        </div>
      </div>
    </section>
  );
}
