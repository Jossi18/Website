import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const clientPlans = [
  {
    name: "Gratuit",
    price: "0",
    period: "",
    desc: "Pour tester CoachMatch",
    features: [
      "3 matchings par mois",
      "Profil coach complet",
      "Réservation & paiement sécurisé",
      "Chat in-app",
      "Avis et notes",
    ],
    missing: ["Matching illimité", "Accès coachs premium", "Suivi de progression avancé"],
    cta: "Commencer gratuitement",
    ctaStyle: "border border-white/10 hover:border-white/20 text-white",
    popular: false,
  },
  {
    name: "Premium",
    price: "9,99",
    period: "/ mois",
    desc: "Pour aller plus loin",
    features: [
      "Matching illimité",
      "Accès coachs premium & exécutif",
      "Remise 10% première séance",
      "Suivi de progression avancé",
      "Support prioritaire",
      "Chat & vidéo in-app illimité",
    ],
    missing: [],
    cta: "Essai 14 jours offert",
    ctaStyle: "btn-primary text-white",
    popular: true,
    badge: "Le plus populaire",
  },
];

const coachPlans = [
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
    missing: ["Visibilité boostée", "Badge Coach Pro", "Analytics avancés", "Accès clients premium"],
    cta: "Créer mon profil",
    ctaStyle: "border border-white/10 hover:border-white/20 text-white",
    popular: false,
  },
  {
    name: "Coach Pro",
    price: "29",
    period: "/ mois",
    commission: "15%",
    desc: "Pour scaler votre activité",
    features: [
      "Visibilité × 5 dans les résultats",
      "Badge Coach Pro vérifié",
      "Analytics avancés (conversion, LTV...)",
      "Accès clients Premium & Exécutif",
      "Mode disponibilité express",
      "Commission réduite à 15%",
    ],
    missing: [],
    cta: "Rejoindre Coach Pro",
    ctaStyle: "btn-accent text-white",
    popular: true,
    badge: "ROI dès 2 séances",
  },
];

interface Plan {
  name: string;
  price: string;
  period?: string;
  commission?: string;
  desc: string;
  features: string[];
  missing?: string[];
  cta: string;
  ctaStyle: string;
  popular: boolean;
  badge?: string;
}

function PlanCard({ plan, type }: { plan: Plan; type: "client" | "coach" }) {
  return (
    <div
      className={`rounded-3xl p-8 relative transition-all duration-300 ${
        plan.popular
          ? `pricing-popular ${type === "coach" ? "!border-orange-500/40" : ""}`
          : "card-glass"
      }`}
    >
      {plan.badge && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full ${
            type === "coach"
              ? "bg-orange-500 text-white"
              : "bg-purple-600 text-white"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <div className="text-white/50 text-sm mb-1">{plan.name}</div>
        <div className="flex items-end gap-1 mb-1">
          <span className="text-4xl font-black text-white">{plan.price}€</span>
          {plan.period && <span className="text-white/40 text-sm mb-2">{plan.period}</span>}
        </div>
        {plan.commission && (
          <div className="text-xs text-white/40">+ {plan.commission} commission sur réservations</div>
        )}
        <div className="text-sm text-white/40 mt-1">{plan.desc}</div>
      </div>

      <div className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${type === "coach" ? "text-orange-400" : "text-purple-400"}`} />
            <span className="text-white/80">{f}</span>
          </div>
        ))}
        {(plan.missing ?? []).map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-sm opacity-35">
            <div className="w-3.5 h-3.5 rounded-full border border-white/20 mt-0.5 shrink-0" />
            <span className="text-white/50 line-through">{f}</span>
          </div>
        ))}
      </div>

      <a
        href="#"
        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all ${plan.ctaStyle}`}
      >
        {plan.cta}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            <Zap size={13} fill="currentColor" />
            Tarifs transparents
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Commencez <span className="gradient-text">gratuitement</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Freemium pour les clients, Pro pour les coachs qui veulent scaler. Pas de frais cachés.
          </p>
        </div>

        {/* Client plans */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium tag-badge mb-8">
            Plans Client
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
          {clientPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} type="client" />
          ))}
        </div>

        {/* Coach plans */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-8">
            Plans Coach
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {coachPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} type="coach" />
          ))}
        </div>

        {/* Enterprise */}
        <div className="card-glass rounded-3xl p-8 mt-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-lg text-white mb-1">CoachMatch Entreprise</div>
            <div className="text-white/50 text-sm">
              Packages bien-être pour entreprises, hôtels de luxe, résidences premium. Sur devis.
            </div>
          </div>
          <a
            href="mailto:pro@coachmatch.app"
            className="btn-primary shrink-0 px-7 py-3 rounded-2xl text-sm font-bold text-white whitespace-nowrap"
          >
            Contacter l&apos;équipe
          </a>
        </div>
      </div>
    </section>
  );
}
