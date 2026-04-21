import { X, Share2, Link2 } from "lucide-react";

const links = {
  Produit: ["Comment ça marche", "Fonctionnalités", "Tarifs", "Application mobile"],
  Coachs: ["Devenir coach", "Coach Pro", "Certifications", "Tableau de bord"],
  Entreprise: ["CoachMatch B2B", "Partenariats", "Hôtels & Résidences", "Médias"],
  Légal: ["Mentions légales", "CGU", "Politique de confidentialité", "RGPD"],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C2820] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-leaf-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.96 5-8"/>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Coach<span style={{ color: "#7EAF93" }}>Match</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              La marketplace intelligente qui connecte clients et coachs sportifs.
              Matching IA, paiement sécurisé, confiance garantie.
            </p>
            <div className="flex items-center gap-3">
              {[X, Share2, Link2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl border border-white/10 hover:border-white/20 flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-sm font-semibold text-white mb-4">{category}</div>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/8 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/25">
          <div>© 2025 CoachMatch. Tous droits réservés.</div>
          <div className="flex items-center gap-6">
            <span>🇫🇷 France</span>
            <span>🇲🇽 Mexique</span>
            <span>RGPD Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
