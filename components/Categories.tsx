const categories = [
  {
    emoji: "🏋️",
    title: "Fitness Loisir",
    desc: "Perte de poids, musculation, remise en forme. Accessible à tous les budgets.",
    tag: "Grand public",
    bg: "from-blue-600/12 to-blue-900/5",
    border: "border-blue-500/15",
    hover: "hover:border-blue-500/35 hover:shadow-blue-900/20",
    tagColor: "text-blue-400",
  },
  {
    emoji: "🏆",
    title: "Prépa Compétition",
    desc: "Running, CrossFit, tennis, arts martiaux, natation. Coachs certifiés sport spécifique.",
    tag: "Sportifs",
    bg: "from-yellow-600/12 to-yellow-900/5",
    border: "border-yellow-500/15",
    hover: "hover:border-yellow-500/35 hover:shadow-yellow-900/20",
    tagColor: "text-yellow-400",
  },
  {
    emoji: "🧠",
    title: "Coaching Mental",
    desc: "PNL, mindfulness, gestion du stress. Bien-être intégré au coaching physique.",
    tag: "Bien-être",
    bg: "from-purple-600/12 to-purple-900/5",
    border: "border-purple-500/15",
    hover: "hover:border-purple-500/35 hover:shadow-purple-900/20",
    tagColor: "text-purple-400",
  },
  {
    emoji: "🛡️",
    title: "Coaching Féminin",
    desc: "Filtrage coachs femmes uniquement. Badge double vérification d'identité certifiée.",
    tag: "Sécurité renforcée",
    bg: "from-pink-600/12 to-pink-900/5",
    border: "border-pink-500/20",
    hover: "hover:border-pink-500/40 hover:shadow-pink-900/20",
    tagColor: "text-pink-400",
    highlight: true,
  },
  {
    emoji: "💎",
    title: "Premium / Exécutif",
    desc: "CSP+, horaires ultra-flexibles, déplacement inclus. Coachs top-tier 200–500€/séance.",
    tag: "Luxe",
    bg: "from-amber-600/12 to-amber-900/5",
    border: "border-amber-500/15",
    hover: "hover:border-amber-500/35 hover:shadow-amber-900/20",
    tagColor: "text-amber-400",
  },
  {
    emoji: "⭐",
    title: "Jeunesse & Compétition",
    desc: "Coachs spécialisés enfants et adolescents. Accompagnement sécurisé et bienveillant.",
    tag: "Jeunes",
    bg: "from-green-600/12 to-green-900/5",
    border: "border-green-500/15",
    hover: "hover:border-green-500/35 hover:shadow-green-900/20",
    tagColor: "text-green-400",
  },
];

export default function Categories() {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            6 disciplines couvertes
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Quel que soit votre objectif,{" "}
            <span className="gradient-text">votre coach existe</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Du grand public au segment ultra-premium. Une seule plateforme pour tout.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`group relative rounded-3xl p-8 bg-gradient-to-br ${cat.bg} border ${cat.border} transition-all duration-300 ${cat.hover} hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer`}
            >
              {cat.highlight && (
                <div className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300">
                  🛡️ Vérification double
                </div>
              )}

              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {cat.emoji}
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg text-white leading-snug">{cat.title}</h3>
                <span className={`text-xs font-medium ${cat.tagColor} shrink-0 mt-0.5`}>
                  {cat.tag}
                </span>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">{cat.desc}</p>

              <div className="mt-6 text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1.5">
                Voir les coachs
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
