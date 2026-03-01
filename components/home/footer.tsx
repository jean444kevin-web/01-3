export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-shell grid gap-8 text-sm text-muted md:grid-cols-4">
        <div>
          <p className="mb-3 text-base font-semibold text-foreground">Altéra</p>
          <p>Agence digitale premium orientée performance.</p>
        </div>
        <div>
          <p className="mb-3 font-medium text-foreground">Services</p>
          <ul className="space-y-1">
            <li>Site web & UX</li>
            <li>Acquisition paid media</li>
            <li>SEO & contenu</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-medium text-foreground">Ressources</p>
          <ul className="space-y-1">
            <li>Études de cas</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-medium text-foreground">Contact</p>
          <ul className="space-y-1">
            <li>hello@altera.agency</li>
            <li>+33 1 88 00 00 00</li>
            <li>Paris, France</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
