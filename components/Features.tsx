import {
  MapPin, Shield, Star, CreditCard, MessageCircle, TrendingUp,
  Zap, BarChart3, Calendar, Users, Award, Video
} from "lucide-react";

const clientFeatures = [
  { icon: Zap, title: "Matching IA en temps réel", desc: "Score de compatibilité calculé sur 6 critères : objectifs, budget, localisation, spécialité, disponibilité, avis.", iconClass: "icon-leaf" },
  { icon: MapPin, title: "Géolocalisation intelligente", desc: "Coachs disponibles autour de vous. Domicile, salle spécialisée, outdoor ou villa privée.", iconClass: "icon-terra" },
  { icon: Shield, title: "Coachs 100% vérifiés", desc: "Pièce d'identité + diplômes BPJEPS/CQP vérifiés manuellement. Badge officiel sur chaque profil.", iconClass: "icon-stone" },
  { icon: CreditCard, title: "Paiement ultra-sécurisé", desc: "Stripe, Apple Pay, carte bancaire. Fonds libérés au coach uniquement après confirmation de séance.", iconClass: "icon-leaf" },
  { icon: MessageCircle, title: "Chat & vidéo in-app", desc: "Échangez avec votre coach avant et après. Tout reste dans l'application, zéro friction.", iconClass: "icon-terra" },
  { icon: TrendingUp, title: "Suivi de progression", desc: "Enregistrez vos métriques, visualisez vos progrès, recevez des recommandations personnalisées.", iconClass: "icon-stone" },
];

const coachFeatures = [
  { icon: Users, title: "Tableau de bord complet", desc: "Gérez réservations, revenus, disponibilités et clients depuis une interface unifiée.", iconClass: "icon-terra" },
  { icon: Calendar, title: "Mode disponibilité express", desc: "Remplissez vos créneaux libres en temps réel. Les clients disponibles sont notifiés instantanément.", iconClass: "icon-leaf" },
  { icon: BarChart3, title: "Analytics avancés", desc: "Taux de conversion, revenus mensuels, profil client type — données actionnables pour scaler.", iconClass: "icon-stone" },
  { icon: Award, title: "Badge Coach Vérifié", desc: "Augmentez votre crédibilité après vérification de vos diplômes. Visible sur tous vos résultats.", iconClass: "icon-terra" },
  { icon: Video, title: "Profil vidéo", desc: "Présentez votre méthode en vidéo. Les profils avec vidéo convertissent 3× plus.", iconClass: "icon-leaf" },
  { icon: Star, title: "Système d'avis double", desc: "Clients notent les coachs, coachs évaluent les clients. Un écosystème sain basé sur la confiance.", iconClass: "icon-stone" },
];

function Card({ icon: Icon, title, desc, iconClass }: { icon: React.ElementType; title: string; desc: string; iconClass: string }) {
  return (
    <div className="card p-6 hover-lift">
      <div className={`w-12 h-12 rounded-xl ${iconClass} flex items-center justify-center mb-4`}>
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-[#F3EDE2]">
      <div className="max-w-7xl mx-auto">

        {/* Client features */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-5">
            Pour les clients
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Tout pour <span className="gradient-text">performer</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            De la recherche à la première séance, chaque étape est pensée pour votre réussite.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {clientFeatures.map(f => <Card key={f.title} {...f} />)}
        </div>

        {/* Coach features */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 tag-terra px-4 py-1.5 rounded-full mb-5">
            Pour les coachs
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Développez votre activité{" "}
            <span className="gradient-text-warm">sans effort publicitaire</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Concentrez-vous sur le coaching. On s&apos;occupe de votre acquisition client.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coachFeatures.map(f => <Card key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  );
}
