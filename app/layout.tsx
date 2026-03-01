import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altéra — Agence digitale premium",
  description: "Agence digitale Altéra : design, acquisition et automatisation orientés ROI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
