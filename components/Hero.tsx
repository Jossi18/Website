"use client";
import { ArrowRight, CheckCircle2, MapPin, Shield, Star, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* ── Background image / fallback ── */}
      <div className="absolute inset-0">
        {!imgError ? (
          <Image
            src="/images/Recover.png"
            alt="Coach et client — session yoga Bali"
            fill priority
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0" style={{
            background: "linear-gradient(160deg,#1C2418 0%,#2C3D28 30%,#3D5C3A 55%,#4A6B42 75%,#3D4F2E 100%)"
          }}>
            {/* Palm silhouettes */}
            <svg className="absolute bottom-0 right-0 w-1/3 opacity-10" viewBox="0 0 300 400" fill="#fff">
              <path d="M150 400 L150 180 Q150 160 160 140 Q200 80 260 20 Q220 60 190 100 Q210 60 230 10 Q180 70 160 120 Q170 80 175 30 Q140 90 145 150 Q130 100 110 40 Q125 100 140 150 Q120 100 80 50 Q110 110 138 160 Q100 120 50 80 Q100 140 140 170 L140 400Z"/>
            </svg>
            <svg className="absolute bottom-0 left-0 w-1/4 opacity-10 scale-x-[-1]" viewBox="0 0 300 400" fill="#fff">
              <path d="M150 400 L150 180 Q150 160 160 140 Q200 80 260 20 Q220 60 190 100 Q210 60 230 10 Q180 70 160 120 Q170 80 175 30 Q140 90 145 150 Q130 100 110 40 Q125 100 140 150 Q120 100 80 50 Q110 110 138 160 Q100 120 50 80 Q100 140 140 170 L140 400Z"/>
            </svg>
          </div>
        )}

        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-end">

          {/* Left — Copy */}
          <div>
            {/* Live pill */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              6 000+ coachs disponibles maintenant
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6">
              Trouvez le
              <br />
              <span style={{ color: "#7EAF93" }}>coach parfait</span>
              <br />
              en <span style={{ color: "#C4956A" }}>60 secondes</span>
            </h1>

            <p className="text-lg text-white/65 leading-relaxed max-w-lg mb-10">
              La marketplace de coaching inspirée par l&apos;excellence Balinaise.
              Matching IA, coachs certifiés, expériences d&apos;entraînement d&apos;exception.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all"
                style={{ background: "#4A7C59", boxShadow: "0 4px 24px rgba(74,124,89,0.5)" }}>
                Trouver mon coach <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base text-white border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play size={11} fill="white" className="ml-0.5" />
                </span>
                Voir la démo
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: CheckCircle2, label: "Coachs BPJEPS vérifiés" },
                { icon: Shield, label: "Paiement Stripe sécurisé" },
                { icon: MapPin, label: "Géolocalisé" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-white/55">
                  <Icon size={14} className="text-white/40" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating coach card */}
          <div className="flex justify-center lg:justify-end">
            <div className="float-animation w-72">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg" style={{ background: "linear-gradient(135deg,#5E9970,#3D6B4A)" }}>🧘</div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white/30" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">Sarah Laurent</div>
                      <div className="text-xs text-white/55">Coach Yoga · Bali</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">80€</div>
                      <div className="text-xs text-white/40">/séance</div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="#C4956A" className="text-[#C4956A]" />)}
                    <span className="text-xs text-white/50 ml-1.5">4.9 · 127 avis</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["BPJEPS ✓", "Outdoor", "Domicile"].map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}>{t}</span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between mb-5 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <span className="text-xs text-white/50">Prochain créneau</span>
                    <span className="text-xs font-semibold text-green-300">Demain 8h00 ✓</span>
                  </div>

                  <button className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all" style={{ background: "#4A7C59", boxShadow: "0 4px 16px rgba(74,124,89,0.4)" }}>
                    Réserver une séance
                  </button>
                </div>
              </div>

              {/* Match score badge */}
              <div className="float-animation-delay absolute -top-5 -left-12 z-20">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg text-base" style={{ background: "#C4956A" }}>🎯</div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Matching</div>
                    <div className="font-bold text-white text-sm">98% compatible</div>
                  </div>
                </div>
              </div>

              {/* Confirmed badge */}
              <div className="float-animation absolute -bottom-4 -left-8 z-20">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#4A7C59" }}>
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Réservation</div>
                    <div className="font-bold text-white text-sm">Confirmée ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6 000+", label: "Coachs certifiés" },
              { value: "50 000+", label: "Clients actifs" },
              { value: "98%", label: "Taux satisfaction" },
              { value: "< 60s", label: "Temps de matching" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: "#7EAF93" }}>{s.value}</div>
                <div className="text-sm text-white/45">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
