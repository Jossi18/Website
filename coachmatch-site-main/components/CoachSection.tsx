import { CheckCircle2, ArrowRight, TrendingUp, Users, Wallet, Clock } from "lucide-react";

const benefits = [
  { icon: Wallet, title: "0% commission sur vos clients actuels", desc: "Vous apportez vos propres clients ? CoachMatch ne prélève rien. Commission uniquement sur les nouveaux clients apportés par la plateforme.", iconClass: "icon-terra" },
  { icon: Users, title: "Acquisition client automatisée", desc: "Finis les posts Instagram sans fin. Notre algorithme vous met en face des clients qui ont exactement votre profil.", iconClass: "icon-leaf" },
  { icon: TrendingUp, title: "Revenus prévisibles", desc: "Tableau de bord en temps réel. Prévisions mensuelles. Encaissement automatique après chaque séance confirmée.", iconClass: "icon-stone" },
  { icon: Clock, title: "Gérez votre agenda librement", desc: "Définissez vos disponibilités, tarifs et zones de déplacement. Vous restez indépendant, CoachMatch vous amplifie.", iconClass: "icon-terra" },
];

export default function CoachSection() {
  return (
    <section id="coaches" className="py-28 px-6 bg-[#F3EDE2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 tag-terra px-4 py-1.5 rounded-full mb-7">
              Espace Coach
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-6 leading-tight">
              Arrêtez de chercher des clients.
              <br />
              <span className="gradient-text-warm">Laissez-les venir à vous.</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              CoachMatch est la première plateforme pensée pour les coachs indépendants.
              Visibilité, outils de gestion, paiement sécurisé — tout en un.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map(b => (
                <div key={b.title} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${b.iconClass} flex items-center justify-center shrink-0 mt-0.5`}>
                    <b.icon size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{b.title}</div>
                    <div className="text-sm text-stone-500 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#pricing" className="btn-terra inline-flex items-center gap-2.5 px-8 py-4 font-bold text-base">
              Rejoindre en tant que coach
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right — Dashboard mockup */}
          <div>
            <div className="card p-7 shadow-xl shadow-stone-200">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <div className="text-stone-400 text-sm mb-1">Tableau de bord</div>
                  <div className="font-bold text-xl text-stone-900">Avril 2025</div>
                </div>
                <div className="tag-terra px-3 py-1.5 rounded-xl text-sm">
                  Coach Pro ✦
                </div>
              </div>

              {/* Revenue bars */}
              <div className="bg-[#F3EDE2] rounded-2xl p-5 mb-5">
                <div className="flex items-end gap-2 h-20 mb-3">
                  {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 5
                          ? "linear-gradient(180deg, #C4956A, #A67A52)"
                          : "#E8DCC8",
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-400">Revenus ce mois</span>
                  <span className="font-bold text-stone-900">3 240 €</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Séances", value: "18" },
                  { label: "Nouveaux clients", value: "4" },
                  { label: "Note moy.", value: "4.9 ⭐" },
                ].map(s => (
                  <div key={s.label} className="card-sand p-3 text-center rounded-xl">
                    <div className="font-bold text-stone-900">{s.value}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Next session */}
              <div className="card-sand p-4 rounded-xl">
                <div className="text-xs text-stone-400 mb-2">Prochaine séance</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center text-sm text-white font-bold">M</div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">Marie D.</div>
                      <div className="text-xs text-stone-400">Demain, 10h00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-leaf-600">
                    <CheckCircle2 size={14} />
                    <span className="text-xs font-semibold">Confirmée</span>
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
