import { UserCircle2, Cpu, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserCircle2,
    number: "01",
    title: "Créez votre profil",
    description: "Renseignez vos objectifs, niveau, localisation, budget et préférences. Moins de 2 minutes.",
    gradient: "from-violet-500 to-purple-700",
    glow: "shadow-purple-600/30",
    border: "border-purple-500/20",
    tag: "2 minutes",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Notre IA vous matche",
    description: "L'algorithme analyse 6 critères simultanément et vous propose les coachs les plus compatibles.",
    gradient: "from-orange-400 to-orange-600",
    glow: "shadow-orange-500/30",
    border: "border-orange-500/20",
    tag: "Instantané",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Réservez & commencez",
    description: "Consultez les profils, choisissez votre créneau, payez en sécurité. Première séance en 1 clic.",
    gradient: "from-green-500 to-emerald-700",
    glow: "shadow-green-600/30",
    border: "border-green-500/20",
    tag: "1 clic",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            Aussi simple que Tinder
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            3 étapes pour votre{" "}
            <span className="gradient-text">premier entraînement</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Le matching le plus précis du marché, sans effort de votre côté.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-14 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px z-0">
            <svg className="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
              <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(108,71,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative z-10 rounded-3xl p-8 bg-[#0d0d1e] border ${step.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${step.glow} group`}
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between mb-7">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl ${step.glow}`}>
                  <step.icon size={24} className="text-white" />
                </div>
                <span className="text-6xl font-black text-white/[0.05] group-hover:text-white/[0.08] transition-colors select-none">
                  {step.number}
                </span>
              </div>

              {/* Tag */}
              <div className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 bg-white/5 border ${step.border} text-white/50`}>
                ⚡ {step.tag}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{step.description}</p>

              {/* Mobile arrow */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-6 flex justify-center">
                  <ArrowRight size={18} className="text-white/20 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white"
          >
            Trouver mon coach maintenant
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
