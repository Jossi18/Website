"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const panels = [
  { word: "TRAIN.", desc: "Des coachs certifiés pour chaque discipline — force, cardio, mobilité.", overlay: "from-stone-900/80 to-stone-900/40" },
  { word: "RECOVER.", desc: "Coaching holistique intégrant récupération, nutrition et bien-être mental.", overlay: "from-[#2E5238]/75 to-[#2E5238]/30" },
  { word: "GROW.", desc: "Progressez semaine après semaine avec un suivi personnalisé en temps réel.", overlay: "from-stone-800/70 to-stone-800/20" },
];

export default function TrainSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden" style={{ height: 480 }}>

          {/* Image ou fallback */}
          {!imgError ? (
            <Image
              src="/images/train-recover-grow.jpg"
              alt="Train. Recover. Grow."
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(135deg,
                    #1C1A17 0%,
                    #2C3D28 33%,
                    #3D4A2E 50%,
                    #2E3820 66%,
                    #1C2418 100%
                  )
                `,
              }}
            >
              {/* Decorative elements sur le fallback */}
              <div className="absolute inset-0 grid grid-cols-3">
                {[
                  { emoji: "💪", label: "Force & Cardio" },
                  { emoji: "🧊", label: "Récupération" },
                  { emoji: "🌱", label: "Progression" },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center justify-center gap-3 ${i < 2 ? "border-r border-white/10" : ""}`}>
                    <span className="text-5xl opacity-40">{item.emoji}</span>
                    <span className="text-white/20 text-xs tracking-widest uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Panel overlays */}
          <div className="absolute inset-0 grid grid-cols-3">
            {panels.map((p, i) => (
              <div key={p.word} className={`relative flex flex-col justify-end p-8 bg-gradient-to-t ${p.overlay} ${i < 2 ? "border-r border-white/10" : ""}`}>
                <span className="text-white font-black text-2xl md:text-4xl tracking-widest drop-shadow-lg mb-2">
                  {p.word}
                </span>
                <p className="text-white/70 text-sm leading-snug hidden md:block">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between bg-gradient-to-t from-stone-900/80 to-transparent">
            <p className="text-white/75 text-sm md:text-base font-medium">
              Une approche complète : sport, récupération, croissance personnelle.
            </p>
            <a href="#features" className="shrink-0 inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#F3EDE2] transition-colors">
              Découvrir <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
