import { UserCircle2, Cpu, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserCircle2,
    number: "01",
    title: "Créez votre profil",
    description: "Objectifs, niveau, localisation, budget, préférences. Moins de 2 minutes pour tout renseigner.",
    iconClass: "icon-leaf",
    accentColor: "#4A7C59",
    bgCard: "bg-white border-[#D5E8DC]",
    tag: "2 min",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Notre IA vous matche",
    description: "L'algorithme analyse 6 critères simultanément et sélectionne les coachs les plus compatibles.",
    iconClass: "icon-terra",
    accentColor: "#C4956A",
    bgCard: "bg-[#FBF3EC] border-[#E8C4A0]",
    tag: "Instantané",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Réservez & commencez",
    description: "Consultez les profils, choisissez votre créneau, payez en sécurité. Première séance en 1 clic.",
    iconClass: "icon-stone",
    accentColor: "#8C8880",
    bgCard: "bg-[#F3EDE2] border-[#D4C4A8]",
    tag: "1 clic",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-5">
            Simple & rapide
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            3 étapes pour votre{" "}
            <span className="gradient-text">premier entraînement</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            De la recherche à la première séance, tout est pensé pour aller à l&apos;essentiel.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connector */}
          <div className="hidden md:block absolute top-12 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px z-0">
            <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
              <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="#D4C4A8" strokeWidth="1" strokeDasharray="5 5" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 rounded-3xl p-8 border hover-lift ${step.bgCard}`}
            >
              <div className="flex items-start justify-between mb-7">
                <div className={`w-14 h-14 rounded-2xl ${step.iconClass} flex items-center justify-center`}>
                  <step.icon size={24} />
                </div>
                <span className="text-6xl font-black text-stone-900/[0.06] select-none">
                  {step.number}
                </span>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 bg-white/60 border border-stone-200 text-stone-400">
                ⚡ {step.tag}
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="md:hidden mt-6 flex justify-center">
                  <ArrowRight size={18} className="text-stone-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#pricing" className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 font-bold text-base">
            Commencer maintenant
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
