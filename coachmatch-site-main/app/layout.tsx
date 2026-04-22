import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoachMatch — Trouvez votre coach idéal",
  description:
    "La marketplace intelligente qui connecte clients et coachs sportifs. Matching IA, paiement sécurisé, coaching sport, compétition, bien-être mental et premium.",
  keywords: "coach sportif, coaching personnel, marketplace coach, bien-être, fitness, préparation physique",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
