import { ArrowRight, Star, Shield, MapPin, CheckCircle2, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Mesh grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,71,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,71,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-violet-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left col ── */}
          <div className="text-center lg:text-left">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-white/70">6 000+ coachs disponibles maintenant</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-6">
              Trouvez le{" "}
              <span className="gradient-text">coach parfait</span>
              <br />
              en{" "}
              <span className="relative inline-block text-white">
                60 secondes
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 260 10" fill="none">
                  <path d="M2 7 Q65 2 130 6 Q195 10 258 4" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              L&apos;algorithme de matching le plus précis du marché.
              Objectifs, budget, localisation, discipline — votre coach idéal vous attend.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <a
                href="#pricing"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white"
              >
                Trouver mon coach
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-all">
                  <Play size={12} fill="currentColor" />
                </span>
                Voir comment ça marche
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              {[
                { icon: CheckCircle2, color: "text-green-400", label: "Coachs BPJEPS vérifiés" },
                { icon: Shield, color: "text-blue-400", label: "Paiement sécurisé Stripe" },
                { icon: MapPin, color: "text-purple-400", label: "Géolocalisé" },
              ].map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-white/45">
                  <Icon size={14} className={color} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right col — App mockup ── */}
          <div className="relative flex justify-center lg:justify-end h-[480px]">

            {/* Main coach card */}
            <div className="float-animation absolute top-8 right-0 lg:right-4 z-10 w-72">
              <div className="rounded-3xl p-6 bg-[#13132a] border border-white/10 shadow-2xl shadow-purple-900/30">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-2xl shadow-lg shadow-purple-700/40">
                      💪
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#13132a]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white">Sarah Laurent</div>
                    <div className="text-xs text-white/45">Coach Fitness · Paris 8e</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">70€</div>
                    <div className="text-xs text-white/35">/séance</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={13} fill="#FBBF24" className="text-yellow-400" />
                  ))}
                  <span className="text-xs text-white/45 ml-1.5">4.9 · 127 avis</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["BPJEPS ✓", "Perte de poids", "Musculation", "Domicile"].map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Availability */}
                <div className="bg-white/[0.04] rounded-xl p-3 mb-4 flex items-center justify-between">
                  <span className="text-xs text-white/50">Prochain créneau</span>
                  <span className="text-xs font-semibold text-green-400">Demain 9h00 ✓</span>
                </div>

                <button className="w-full btn-primary py-3 rounded-xl text-sm font-bold text-white">
                  Réserver une séance
                </button>
              </div>
            </div>

            {/* Match score */}
            <div className="float-animation-delay absolute top-0 left-0 lg:-left-8 z-20">
              <div className="rounded-2xl px-4 py-3 bg-[#13132a] border border-orange-500/30 shadow-xl shadow-orange-900/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/40">
                  🎯
                </div>
                <div>
                  <div className="text-[10px] text-white/45 uppercase tracking-wider">Score matching</div>
                  <div className="font-bold text-white text-sm">98% compatible</div>
                </div>
              </div>
            </div>

            {/* Booking confirmed */}
            <div className="float-animation absolute bottom-16 -left-4 lg:-left-12 z-20">
              <div className="rounded-2xl px-4 py-3 bg-[#13132a] border border-green-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/45 uppercase tracking-wider">Réservation</div>
                  <div className="font-bold text-white text-sm">Confirmée ✓</div>
                </div>
              </div>
            </div>

            {/* Clients count */}
            <div className="float-animation-delay absolute bottom-0 right-0 lg:right-0 z-20">
              <div className="rounded-2xl px-5 py-3 bg-[#13132a] border border-white/10 shadow-xl text-center">
                <div className="text-2xl font-black gradient-text">50K+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Clients actifs</div>
              </div>
            </div>

            {/* Mini chat card */}
            <div className="float-animation absolute top-1/2 -translate-y-1/2 right-[268px] lg:right-[290px] z-20 w-44">
              <div className="rounded-2xl p-3 bg-[#13132a] border border-white/10 shadow-lg">
                <div className="text-[10px] text-white/40 mb-2">💬 Nouveau message</div>
                <div className="text-xs text-white/70 leading-relaxed">
                  &ldquo;Parfait pour demain 9h, à bientôt !&rdquo;
                </div>
                <div className="text-[10px] text-white/30 mt-1.5">Sarah · il y a 2 min</div>
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
          ].map(s => (
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
