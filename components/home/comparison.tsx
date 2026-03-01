import { solutions } from "@/lib/content";

export function Comparison() {
  return (
    <section id="services" className="section-shell py-24">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Comparaison des solutions</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((solution) => (
          <article
            key={solution.title}
            className={`glass-card p-6 ${solution.highlight ? "border-accent-violet/60 shadow-glow" : ""}`}
          >
            <h3 className="mb-4 text-xl font-medium">{solution.title}</h3>
            <ul className="space-y-2 text-muted">
              {solution.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
