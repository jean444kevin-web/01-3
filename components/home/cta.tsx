import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="glass-card relative overflow-hidden p-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6C5CE733,transparent_65%)]" />
        <div className="relative">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Prêt à accélérer votre croissance ?</h2>
          <p className="mb-8 text-muted">Discutons de vos objectifs et construisons un plan clair sur 90 jours.</p>
          <div className="flex justify-center gap-3">
            <Button>Planifier un call</Button>
            <Button variant="ghost">Demander un audit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
