"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-shell py-24">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <article key={faq.question} className="glass-card overflow-hidden">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="text-accent-cyan">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="px-6 pb-5 text-muted">{faq.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
