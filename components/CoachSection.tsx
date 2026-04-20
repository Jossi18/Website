import { CheckCircle2, ArrowRight, TrendingUp, Users, Wallet, Clock } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "0% commission sur vos clients actuels",
    desc: "Vous apportez vos propres clients ? CoachMatch ne prélève rien. Commission uniquement sur les nouveaux clients apportés par la plateforme.",
  },
  {
    icon: Users,
    title: "Acquisition client automatisée",
    desc: "Finis les posts Instagram sans fin. Notre algorithme vous met en face des clients qui ont exactement votre profil.",
  },
  {
    icon: TrendingUp,
    title: "Revenus prévisibles",
    desc: "Tableau de bord en temps réel. Prévisions mensuelles. Encaissement automatique après chaque séance confirmée.",
  },
  {
    icon: Clock,
    title: "Gérez votre agenda librement",
    desc: "Définissez vos disponibilités, tarifs et zones de déplacement. Vous restez indépendant, CoachMatch vous amplifie.",
  },
];

export default function CoachSection() {
  return (
    <section id="coaches" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-7 bg-orange-500/10 border border-orange-500/30 text-orange-400">
              Espace Coach
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Arrêtez de chercher des clients.
              <br />
              <span className="text-orange-400">Laissez-les venir à vous.</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              CoachMatch est la première plateforme pensée pour les coachs indépendants.
              Visibilité, outils de gestion, paiement sécurisé — tout en un.
            </p>

            <div className="space-y-5 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{b.title}</div>
                    <div className="text-sm text-white/50 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white"
            >
              Rejoindre en tant que coach
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right — Coach dashboard mockup */}
          <div className="relative">
            <div className="card-glass rounded-3xl p-7 glow-orange">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <div className="text-white/40 text-sm mb-1">Tableau de bord</div>
                  <div className="font-bold text-xl">Avril 2025</div>
                </div>
                <div className="tag-badge px-3 py-1.5 rounded-xl text-sm font-medium">
                  Coach Pro ✦
                </div>
              </div>

              {/* Revenue chart simulation */}
              <div className="bg-white/3 rounded-2xl p-5 mb-5">
                <div className="flex items-end gap-2 h-20 mb-3">
                  {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background: i === 5
                          ? "linear-gradient(180deg, #FF6B35, #E84C1E)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/40">Revenus ce mois</span>
                  <span className="font-bold text-white">3 240 €</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Séances", value: "18" },
                  { label: "Nouveaux clients", value: "4" },
                  { label: "Note moy.", value: "4.9 ⭐" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/3 rounded-xl p-3 text-center">
                    <div className="font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Upcoming booking */}
              <div className="bg-white/3 rounded-xl p-4">
                <div className="text-xs text-white/40 mb-2">Prochaine séance</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-sm">
                      M
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Marie D.</div>
                      <div className="text-xs text-white/40">Demain, 10h00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-400">
                    <CheckCircle2 size={14} />
                    <span className="text-xs font-medium">Confirmée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
