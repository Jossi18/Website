import { CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  commission?: string;
  desc: string;
  features: string[];
  missing?: string[];
  cta: string;
  popular: boolean;
  badge?: string;
  accentColor: string;
  glowColor: string;
}

const clientPlans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    desc: "Pour tester CoachMatch",
    features: [
      "3 matchings par mois",
      "Profil coach complet",
      "Réservation & paiement sécurisé",
      "Chat in-app",
      "Avis et notes",
    ],
    missing: ["Matching illimité", "Accès coachs premium", "Suivi avancé"],
    cta: "Commencer gratuitement",
    popular: false,
    accentColor: "border-white/8",
    glowColor: "",
  },
  {
    name: "Premium",
    price: "9,99",
    period: "/ mois",
    desc: "Pour aller plus loin",
    badge: "Le plus populaire",
    features: [
      "Matching illimité",
      "Accès coachs premium & exécutif",
      "Remise 10% première séance",
      "Suivi de progression avancé",
      "Support prioritaire 24/7",
      "Chat & vidéo illimité",
    ],
    cta: "Essai 14 jours offert",
    popular: true,
    accentColor: "border-purple-500/50",
    glowColor: "shadow-purple-500/20",
  },
];

const coachPlans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    commission: "20%",
    desc: "Pour démarrer",
    features: [
      "Profil visible dans les résultats",
      "Réservations illimitées",
      "Tableau de bord basique",
      "Paiement automatique",
      "Chat in-app",
    ],
    missing: ["Visibilité boostée", "Badge Coach Pro", "Analytics", "Clients premium"],
    cta: "Créer mon profil",
    popular: false,
    accentColor: "border-white/8",
    glowColor: "",
  },
  {
    name: "Coach Pro",
    price: "29",
    period: "/ mois",
    commission: "15%",
    desc: "Pour scaler votre activité",
    badge: "ROI dès 2 séances",
    features: [
      "Visibilité × 5 dans les résultats",
      "Badge Coach Pro vérifié",
      "Analytics avancés",
      "Accès clients Premium & Exécutif",
      "Mode disponibilité express",
      "Commission réduite à 15%",
    ],
    cta: "Rejoindre Coach Pro",
    popular: true,
    accentColor: "border-orange-500/50",
    glowColor: "shadow-orange-500/20",
  },
];

function PlanCard({ plan, type }: { plan: Plan; type: "client" | "coach" }) {
  const isCoach = type === "coach";
  const accent = isCoach ? "orange" : "purple";

  return (
    <div
      className={`relative rounded-3xl border transition-all duration-300 ${
        plan.popular
          ? `bg-gradient-to-b from-${accent}-950/60 to-[#0d0d1e] ${plan.accentColor} shadow-2xl ${plan.glowColor}`
          : "bg-[#0d0d1e] border-white/[0.08]"
      }`}
    >
      {/* Popular glow ring */}
      {plan.popular && (
        <div
          className={`absolute -inset-px rounded-3xl opacity-40 blur-sm pointer-events-none`}
          style={{
            background: isCoach
              ? "linear-gradient(135deg, transparent 40%, rgba(249,115,22,0.4) 100%)"
              : "linear-gradient(135deg, transparent 40%, rgba(108,71,255,0.4) 100%)",
          }}
        />
      )}

      <div className="relative p-8">
        {/* Badge */}
        {plan.badge && (
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 ${
              isCoach
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
            }`}
          >
            <Sparkles size={10} />
            {plan.badge}
          </div>
        )}

        {/* Plan name & price */}
        <div className="mb-2">
          <div className="text-white/45 text-sm font-medium uppercase tracking-wider mb-3">
            {plan.name}
          </div>
          <div className="flex items-end gap-1.5">
            <span className="text-5xl font-black text-white">{plan.price}€</span>
            {plan.period && (
              <span className="text-white/40 text-base mb-2">{plan.period}</span>
            )}
          </div>
          {plan.commission && (
            <div className="text-xs text-white/35 mt-1.5">
              + {plan.commission} commission sur réservations
            </div>
          )}
          <div className="text-sm text-white/40 mt-2">{plan.desc}</div>
        </div>

        {/* Divider */}
        <div
          className={`h-px my-7 ${
            plan.popular
              ? isCoach ? "bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
                       : "bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
              : "bg-white/[0.06]"
          }`}
        />

        {/* Features */}
        <div className="space-y-3.5 mb-8">
          {plan.features.map(f => (
            <div key={f} className="flex items-start gap-3 text-sm">
              <div
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  isCoach ? "bg-orange-500/15" : "bg-purple-500/15"
                }`}
              >
                <CheckCircle2
                  size={12}
                  className={isCoach ? "text-orange-400" : "text-purple-400"}
                />
              </div>
              <span className="text-white/80">{f}</span>
            </div>
          ))}
          {(plan.missing ?? []).map(f => (
            <div key={f} className="flex items-start gap-3 text-sm opacity-30">
              <div className="mt-0.5 w-5 h-5 rounded-full border border-white/15 shrink-0" />
              <span className="text-white/40 line-through">{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm transition-all ${
            plan.popular
              ? isCoach
                ? "btn-accent text-white"
                : "btn-primary text-white"
              : "border border-white/10 hover:border-white/20 text-white/70 hover:text-white"
          }`}
        >
          {plan.cta}
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            <Zap size={13} fill="currentColor" />
            Tarifs transparents
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Commencez{" "}
            <span className="gradient-text">gratuitement</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Freemium pour les clients, Pro pour les coachs qui veulent scaler. Pas de frais cachés.
          </p>
        </div>

        {/* Client plans */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            Plans Client
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-20">
          {clientPlans.map(plan => (
            <PlanCard key={plan.name} plan={plan} type="client" />
          ))}
        </div>

        {/* Coach plans */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-8">
            Plans Coach
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {coachPlans.map(plan => (
            <PlanCard key={plan.name} plan={plan} type="coach" />
          ))}
        </div>

        {/* Enterprise */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0d0d1e] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-orange-500/5" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8">
              <div>
                <div className="font-bold text-lg text-white mb-1">CoachMatch Entreprise</div>
                <div className="text-white/45 text-sm max-w-sm">
                  Packages bien-être pour entreprises, hôtels de luxe, résidences premium. Sur devis personnalisé.
                </div>
              </div>
              <a
                href="mailto:pro@coachmatch.app"
                className="btn-primary shrink-0 px-7 py-3.5 rounded-2xl text-sm font-bold text-white whitespace-nowrap flex items-center gap-2"
              >
                Contacter l&apos;équipe
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
