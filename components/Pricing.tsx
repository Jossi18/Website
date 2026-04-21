import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

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
}

const clientPlans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    desc: "Pour tester CoachMatch",
    features: ["3 matchings par mois", "Profil coach complet", "Réservation & paiement sécurisé", "Chat in-app", "Avis et notes"],
    missing: ["Matching illimité", "Accès coachs premium", "Suivi avancé"],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Premium",
    price: "9,99",
    period: "/ mois",
    desc: "Pour aller plus loin",
    badge: "Le plus populaire",
    features: ["Matching illimité", "Accès coachs premium & exécutif", "Remise 10% première séance", "Suivi de progression avancé", "Support prioritaire 24/7", "Chat & vidéo illimité"],
    cta: "Essai 14 jours offert",
    popular: true,
  },
];

const coachPlans: Plan[] = [
  {
    name: "Gratuit",
    price: "0",
    commission: "20%",
    desc: "Pour démarrer",
    features: ["Profil visible dans les résultats", "Réservations illimitées", "Tableau de bord basique", "Paiement automatique", "Chat in-app"],
    missing: ["Visibilité boostée", "Badge Coach Pro", "Analytics", "Clients premium"],
    cta: "Créer mon profil",
    popular: false,
  },
  {
    name: "Coach Pro",
    price: "29",
    period: "/ mois",
    commission: "15%",
    desc: "Pour scaler votre activité",
    badge: "ROI dès 2 séances",
    features: ["Visibilité × 5 dans les résultats", "Badge Coach Pro vérifié", "Analytics avancés", "Accès clients Premium & Exécutif", "Mode disponibilité express", "Commission réduite à 15%"],
    cta: "Rejoindre Coach Pro",
    popular: true,
  },
];

function PlanCard({ plan, type }: { plan: Plan; type: "client" | "coach" }) {
  const isCoach = type === "coach";

  return (
    <div className={`relative rounded-3xl border p-8 transition-all duration-300 ${
      plan.popular
        ? isCoach
          ? "bg-[#FBF3EC] border-[#C4956A]/50 shadow-xl shadow-[#C4956A]/10"
          : "bg-[#EEF5F1] border-leaf-400/50 shadow-xl shadow-leaf-200"
        : "bg-white border-stone-200"
    }`}>
      {plan.badge && (
        <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 ${
          isCoach
            ? "bg-terra text-white shadow-md shadow-[#C4956A]/30"
            : "bg-leaf-600 text-white shadow-md shadow-leaf-400/30"
        }`}>
          ✦ {plan.badge}
        </div>
      )}

      <div className="mb-2">
        <div className="text-stone-400 text-sm font-medium uppercase tracking-wider mb-3">{plan.name}</div>
        <div className="flex items-end gap-1.5">
          <span className="text-5xl font-black text-stone-900">{plan.price}€</span>
          {plan.period && <span className="text-stone-400 text-base mb-2">{plan.period}</span>}
        </div>
        {plan.commission && <div className="text-xs text-stone-400 mt-1.5">+ {plan.commission} commission sur réservations</div>}
        <div className="text-sm text-stone-400 mt-2">{plan.desc}</div>
      </div>

      <div className={`h-px my-7 ${plan.popular ? isCoach ? "bg-[#E8C4A0]" : "bg-leaf-200" : "bg-stone-100"}`} />

      <div className="space-y-3.5 mb-8">
        {plan.features.map(f => (
          <div key={f} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isCoach ? "bg-[#FBF3EC] border border-[#E8C4A0]" : "bg-leaf-100 border border-leaf-200"}`}>
              <CheckCircle2 size={11} className={isCoach ? "text-terra" : "text-leaf-600"} />
            </div>
            <span className="text-stone-700">{f}</span>
          </div>
        ))}
        {(plan.missing ?? []).map(f => (
          <div key={f} className="flex items-start gap-3 text-sm opacity-35">
            <div className="mt-0.5 w-5 h-5 rounded-full border border-stone-200 shrink-0" />
            <span className="text-stone-400 line-through">{f}</span>
          </div>
        ))}
      </div>

      <a href="#" className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm transition-all ${
        plan.popular
          ? isCoach ? "btn-terra" : "btn-primary"
          : "border border-stone-200 hover:border-stone-300 text-stone-600 hover:text-stone-900 bg-transparent"
      }`}>
        {plan.cta} <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-[#F3EDE2]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-5">
            <Zap size={13} />
            Tarifs transparents
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Commencez <span className="gradient-text">gratuitement</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Freemium pour les clients, Pro pour les coachs qui veulent scaler. Pas de frais cachés.
          </p>
        </div>

        <div className="mb-4">
          <span className="tag-badge px-4 py-1.5 rounded-full inline-flex mb-8">Plans Client</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-20">
          {clientPlans.map(p => <PlanCard key={p.name} plan={p} type="client" />)}
        </div>

        <div className="mb-4">
          <span className="tag-terra px-4 py-1.5 rounded-full inline-flex mb-8">Plans Coach</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {coachPlans.map(p => <PlanCard key={p.name} plan={p} type="coach" />)}
        </div>

        {/* Enterprise */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-bold text-lg text-stone-900 mb-1">CoachMatch Entreprise</div>
              <div className="text-stone-500 text-sm max-w-sm">Packages bien-être pour entreprises, hôtels de luxe, résidences premium. Sur devis personnalisé.</div>
            </div>
            <a href="mailto:pro@coachmatch.app" className="btn-primary shrink-0 px-7 py-3.5 font-bold text-sm whitespace-nowrap inline-flex items-center gap-2">
              Contacter l&apos;équipe <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
