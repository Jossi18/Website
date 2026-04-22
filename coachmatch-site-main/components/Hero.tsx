import { ArrowRight, Shield, MapPin, CheckCircle2, Star, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col relative overflow-hidden bg-[#F8F4EE]">

      {/* ── Full-width Bali image top half ── */}
      <div className="relative w-full" style={{ height: "62vh", minHeight: 400 }}>
        <Image
          src="/images/bali-coaching.jpg"
          alt="Coaching Bali — infinite pool et jungle"
          fill
          priority
          className="object-cover object-center"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Dark gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#F8F4EE]" />

        {/* "TRAIN. RECOVER. GROW." words overlay */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 px-6">
          {["TRAIN.", "RECOVER.", "GROW."].map(w => (
            <span key={w} className="text-white font-black text-2xl md:text-4xl tracking-widest drop-shadow-lg opacity-90">
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ── Copy section ── */}
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-500 animate-pulse inline-block" />
              6 000+ coachs disponibles
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-[1.06] tracking-tight text-stone-900 mb-6">
              Trouvez le{" "}
              <span className="gradient-text">coach parfait</span>
              <br />
              en <span className="gradient-text-warm">60 secondes</span>
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg mb-10">
              La marketplace de coaching inspirée par l&apos;excellence Balinaise —
              matching IA, coachs certifiés, espaces de vie et d&apos;entraînement soigneusement sélectionnés.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#pricing" className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold">
                Trouver mon coach
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn-outline inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold">
                <span className="w-8 h-8 rounded-full bg-leaf-100 flex items-center justify-center">
                  <Play size={11} className="text-leaf-600 ml-0.5" fill="currentColor" />
                </span>
                Voir la démo
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: CheckCircle2, color: "text-leaf-500", label: "Coachs BPJEPS vérifiés" },
                { icon: Shield, color: "text-stone-400", label: "Paiement sécurisé" },
                { icon: MapPin, color: "text-terra", label: "Géolocalisé" },
              ].map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-stone-500">
                  <Icon size={14} className={color} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Coach card mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="float-animation w-72 relative z-10">

              {/* Main coach card */}
              <div className="card p-6 shadow-xl shadow-stone-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-700 flex items-center justify-center text-2xl shadow-md">
                      🧘
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-stone-900">Sarah Laurent</div>
                    <div className="text-xs text-stone-400">Coach Yoga & Mindfulness</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-stone-900">80€</div>
                    <div className="text-xs text-stone-400">/séance</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#C4956A" className="text-terra" />)}
                  <span className="text-xs text-stone-400 ml-1.5">4.9 · 127 avis</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["BPJEPS ✓", "Outdoor", "Domicile"].map(t => (
                    <span key={t} className="tag-badge text-xs px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="card-sand p-3 mb-4 flex items-center justify-between rounded-xl">
                  <span className="text-xs text-stone-500">Prochain créneau</span>
                  <span className="text-xs font-semibold text-leaf-600">Demain 8h00 ✓</span>
                </div>

                <button className="w-full btn-primary py-3 text-sm font-bold">
                  Réserver une séance
                </button>
              </div>

              {/* Match score floating */}
              <div className="float-animation-delay absolute -top-5 -left-10 z-20">
                <div className="card px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-terra flex items-center justify-center shadow-md">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Score matching</div>
                    <div className="font-bold text-stone-900 text-sm">98% compatible</div>
                  </div>
                </div>
              </div>

              {/* Confirmed booking */}
              <div className="float-animation absolute -bottom-4 -left-6 z-20">
                <div className="card px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-leaf-500 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Réservation</div>
                    <div className="font-bold text-stone-900 text-sm">Confirmée ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="section-divider mt-20 mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "6 000+", label: "Coachs certifiés" },
            { value: "50 000+", label: "Clients actifs" },
            { value: "98%", label: "Taux satisfaction" },
            { value: "< 60s", label: "Temps de matching" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-stone-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
