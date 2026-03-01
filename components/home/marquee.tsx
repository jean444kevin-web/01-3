import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/5 py-4">
      <div className="animate-marquee flex min-w-max gap-4 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-xl border border-white/10 px-4 py-2 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
