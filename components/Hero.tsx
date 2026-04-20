import { ArrowRight, Star, Shield, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <Star size={13} fill="currentColor" />
              #1 Marketplace Coach × Client
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Trouvez le{" "}
              <span className="gradient-text">coach parfait</span>{" "}
              en{" "}
              <span className="relative inline-block">
                60 secondes
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 Q50 2 100 5 Q150 8 198 3"
                    stroke="#FF6B35"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              L&apos;algorithme de matching le plus précis du marché. Objectifs, budget,
              localisation, type de coaching — votre coach idéal vous attend.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#pricing"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white"
              >
                Trouver mon coach
                <ArrowRight size={18} />
              </a>
              <a
                href="#coaches"
                className="card-glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/80 hover:text-white"
              >
                Je suis coach
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-white/50">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-green-400" />
                Coachs vérifiés BPJEPS
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-blue-400" />
                Paiement 100% sécurisé
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-purple-400" />
                Géolocalisé
              </div>
            </div>
          </div>

          {/* Right — UI mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main card */}
            <div className="float-animation relative z-10">
              <div className="card-glass rounded-3xl p-6 w-72 glow-purple">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xl">
                    💪
                  </div>
                  <div>
                    <div className="font-bold text-white">Sarah L.</div>
                    <div className="text-xs text-white/50">Coach Fitness · Paris 8e</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} className="text-yellow-400" fill="#FBBF24" />
                  ))}
                  <span className="text-xs text-white/50 ml-1">4.9 (127 avis)</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["BPJEPS ✓", "Perte de poids", "Musculation"].map((t) => (
                    <span key={t} className="tag-badge text-xs px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <div className="text-white font-bold text-lg">70€</div>
                    <div className="text-xs text-white/40">/ séance</div>
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-xl text-sm font-semibold text-white">
                    Réserver
                  </button>
                </div>
              </div>
            </div>

            {/* Match score card */}
            <div className="float-animation-delay absolute -top-4 -left-8 lg:-left-16 z-20">
              <div className="card-glass rounded-2xl px-4 py-3 flex items-center gap-3 glow-orange">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-sm">🎯</span>
                </div>
                <div>
                  <div className="text-xs text-white/50">Score matching</div>
                  <div className="font-bold text-white">98% compatible</div>
                </div>
              </div>
            </div>

            {/* Booking confirmation */}
            <div className="float-animation absolute bottom-4 -right-4 lg:-right-8 z-20">
              <div className="card-glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Réservation</div>
                  <div className="font-bold text-white text-sm">Confirmée ✓</div>
                </div>
              </div>
            </div>

            {/* Stat card */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-20 z-20 float-animation">
              <div className="card-glass rounded-2xl px-4 py-3 text-center">
                <div className="text-2xl font-black gradient-text">50K+</div>
                <div className="text-xs text-white/40">clients actifs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="section-divider mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "6 000+", label: "Coachs certifiés" },
            { value: "50 000+", label: "Clients actifs" },
            { value: "98%", label: "Taux satisfaction" },
            { value: "< 60s", label: "Temps de matching" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
