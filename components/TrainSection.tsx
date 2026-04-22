"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const panels = [
  {
    word: "TRAIN.",
    desc: "Force, cardio, mobilité. Des coachs certifiés pour chaque discipline.",
    bg: "from-black/70 via-black/40 to-transparent",
  },
  {
    word: "RECOVER.",
    desc: "Récupération, nutrition, bien-être. L'approche holistique Balinaise.",
    bg: "from-[#1C2A18]/70 via-[#1C2A18]/40 to-transparent",
  },
  {
    word: "GROW.",
    desc: "Suivi personnalisé, progression mesurée. Votre meilleure version.",
    bg: "from-black/60 via-black/35 to-transparent",
  },
];

export default function TrainSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden" style={{ height: 500 }}>

          {/* Image */}
          {!imgError ? (
            <Image
              src="/images/train-recover-grow.jpg"
              alt="Train. Recover. Grow. — CoachMatch Bali"
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg,#1A2016 0%,#263020 25%,#2E3C24 50%,#243018 75%,#1A2416 100%)"
            }}>
              <div className="absolute inset-0 flex">
                {["💪","🧊","🌱"].map((em, i) => (
                  <div key={i} className={`flex-1 flex flex-col items-center justify-center gap-4 ${i < 2 ? "border-r border-white/8" : ""}`}>
                    <span className="text-6xl opacity-25">{em}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3-panel overlay */}
          <div className="absolute inset-0 grid grid-cols-3">
            {panels.map((p, i) => (
              <div
                key={p.word}
                className={`flex flex-col justify-between p-8 bg-gradient-to-t ${p.bg} ${i < 2 ? "border-r border-white/10" : ""}`}
              >
                {/* Word at top */}
                <span className="text-white font-black text-3xl md:text-5xl tracking-widest drop-shadow-2xl" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
                  {p.word}
                </span>
                {/* Desc at bottom */}
                <p className="text-white/65 text-sm leading-relaxed hidden md:block">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
            <p className="text-white/70 text-sm md:text-base font-medium max-w-md">
              Une approche complète : sport, récupération, croissance personnelle.
            </p>
            <a
              href="#features"
              className="shrink-0 inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              style={{ background: "rgba(255,255,255,0.95)", color: "#1C1A17" }}
            >
              Découvrir <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
