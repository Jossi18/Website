import {
  MapPin, Shield, Star, CreditCard, MessageCircle, TrendingUp,
  Zap, BarChart3, Calendar, Users, Award, Video
} from "lucide-react";

const clientFeatures = [
  {
    icon: Zap,
    title: "Matching IA en temps réel",
    desc: "Score de compatibilité calculé sur 6 critères : objectifs, budget, localisation, spécialité, disponibilité, avis.",
  },
  {
    icon: MapPin,
    title: "Géolocalisation intelligente",
    desc: "Coachs disponibles autour de vous. Domicile, salle spécialisée ou outdoor — vous choisissez.",
  },
  {
    icon: Shield,
    title: "Coachs 100% vérifiés",
    desc: "Pièce d'identité + diplômes BPJEPS/CQP vérifiés manuellement. Badge officiel sur chaque profil.",
  },
  {
    icon: CreditCard,
    title: "Paiement ultra-sécurisé",
    desc: "Stripe, Apple Pay, carte bancaire. Fonds libérés au coach uniquement après confirmation de séance.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Vidéo in-app",
    desc: "Échangez avec votre coach avant et après chaque séance. Tout reste dans l'application.",
  },
  {
    icon: TrendingUp,
    title: "Suivi de progression",
    desc: "Enregistrez vos métriques, visualisez vos progrès, recevez des recommandations personnalisées.",
  },
];

const coachFeatures = [
  {
    icon: Users,
    title: "Tableau de bord complet",
    desc: "Gérez vos réservations, revenus, disponibilités et clients depuis une interface unifiée.",
  },
  {
    icon: Calendar,
    title: "Mode disponibilité express",
    desc: "Remplissez vos créneaux libres instantanément. Les clients disponibles sont notifiés en temps réel.",
  },
  {
    icon: BarChart3,
    title: "Analytics avancés",
    desc: "Taux de conversion, revenus mensuels, profil client type — données actionnables pour scaler.",
  },
  {
    icon: Award,
    title: "Badge Coach Vérifié",
    desc: "Augmentez votre crédibilité avec le badge officiel CoachMatch après vérification de vos diplômes.",
  },
  {
    icon: Video,
    title: "Profil vidéo",
    desc: "Présentez votre méthode avec une vidéo d'introduction. Les profils vidéo convertissent 3× plus.",
  },
  {
    icon: Star,
    title: "Système d'avis double",
    desc: "Les clients vous notent, vous évaluez vos clients. Un écosystème sain basé sur la confiance mutuelle.",
  },
];

function FeatureCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="card-glass rounded-2xl p-6 group transition-all duration-300">
      <div className="feature-icon-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        <Icon size={20} className="text-purple-400" />
      </div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Client features */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            Pour les clients
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Tout ce dont vous avez besoin{" "}
            <span className="gradient-text">pour performer</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            De la recherche à la première séance, chaque étape est pensée pour votre réussite.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {clientFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* Coach features */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5 bg-orange-500/10 border border-orange-500/30 text-orange-400">
            Pour les coachs
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Développez votre activité{" "}
            <span className="text-orange-400">sans effort publicitaire</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Concentrez-vous sur le coaching. On s&apos;occupe de votre acquisition client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coachFeatures.map((f) => (
            <div key={f.title} className="card-glass rounded-2xl p-6 group transition-all duration-300 hover:border-orange-500/30">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-orange-500/10 border border-orange-500/20">
                <f.icon size={20} className="text-orange-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
