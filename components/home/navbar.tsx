"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "ROI", href: "#roi" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 px-6 py-4"
    >
      <nav
        className={`section-shell flex items-center justify-between rounded-xl border transition-all duration-300 ${
          scrolled ? "border-white/20 bg-black/40 backdrop-blur-xl" : "border-white/10 bg-black/20"
        }`}
      >
        <div className="px-5 py-4 text-lg font-semibold">Altéra</div>
        <div className="hidden items-center gap-7 px-5 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
