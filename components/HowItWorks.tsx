import { UserCircle2, Cpu, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserCircle2,
    number: "01",
    title: "Créez votre profil",
    description:
      "Renseignez vos objectifs, niveau, localisation, budget et préférences. Moins de 2 minutes.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Notre IA vous matche",
    description:
      "L'algorithme analyse 6 critères simultanément et vous propose les coachs les plus compatibles.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Réservez & commencez",
    description:
      "Consultez les profils, choisissez votre créneau, payez en sécurité. Votre première séance en 1 clic.",
    color: "from-green-500 to-green-700",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
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

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-purple-500/40 to-orange-500/40 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="card-glass rounded-3xl p-8 relative z-10 group">
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                >
                  <step.icon size={24} className="text-white" />
                </div>
                <span className="text-5xl font-black text-white/[0.06] group-hover:text-white/10 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="md:hidden mt-6 flex justify-center">
                  <ArrowRight size={20} className="text-white/20 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white"
          >
            Trouver mon coach maintenant
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
