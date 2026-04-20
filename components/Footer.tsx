import { Zap, X, Share2, Link2 } from "lucide-react";

const links = {
  Produit: ["Comment ça marche", "Fonctionnalités", "Tarifs", "Application mobile"],
  Coachs: ["Devenir coach", "Coach Pro", "Certifications", "Tableau de bord"],
  Entreprise: ["CoachMatch B2B", "Partenariats", "Hôtels & Résidences", "Médias"],
  Légal: ["Mentions légales", "CGU", "Politique de confidentialité", "RGPD"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Coach<span className="gradient-text-purple">Match</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              La marketplace intelligente qui connecte clients et coachs sportifs.
              Matching IA, paiement sécurisé, confiance garantie.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: X, href: "#" },
                { icon: Share2, href: "#" },
                { icon: Link2, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 card-glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
                >
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
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
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
