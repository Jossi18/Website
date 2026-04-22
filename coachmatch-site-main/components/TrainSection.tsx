import Image from "next/image";
import { ArrowRight } from "lucide-react";

const panels = [
  {
    word: "TRAIN.",
    desc: "Des coachs certifiés pour chaque discipline — force, cardio, mobilité.",
    color: "from-stone-900/80 to-stone-900/40",
    position: "0%",
  },
  {
    word: "RECOVER.",
    desc: "Coaching holistique intégrant récupération, nutrition et bien-être mental.",
    color: "from-leaf-900/70 to-leaf-900/30",
    position: "50%",
  },
  {
    word: "GROW.",
    desc: "Progressez semaine après semaine avec un suivi personnalisé en temps réel.",
    color: "from-stone-800/70 to-stone-800/20",
    position: "100%",
  },
];

export default function TrainSection() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden" style={{ height: 480 }}>
          <Image
            src="/images/train-recover-grow.jpg"
            alt="Train. Recover. Grow. — CoachMatch"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />

          {/* Overlay grid with 3 panels */}
          <div className="absolute inset-0 grid grid-cols-3">
            {panels.map((p, i) => (
              <div
                key={p.word}
                className={`relative flex flex-col justify-end p-8 bg-gradient-to-t ${p.color} ${i < 2 ? "border-r border-white/10" : ""}`}
              >
                <span className="text-white font-black text-3xl md:text-4xl tracking-widest drop-shadow-lg mb-2">
                  {p.word}
                </span>
                <p className="text-white/75 text-sm leading-snug hidden md:block">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between bg-gradient-to-t from-stone-900/90 to-transparent">
            <p className="text-white/80 text-sm md:text-base font-medium">
              Une approche complète : sport, récupération, croissance personnelle.
            </p>
            <a
              href="#features"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-sand-100 transition-colors"
            >
              Découvrir <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
