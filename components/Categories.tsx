const categories = [
  {
    emoji: "🏋️",
    title: "Fitness Loisir",
    desc: "Perte de poids, musculation, remise en forme. Accessible à tous budgets.",
    tag: "Grand public",
    color: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/20",
  },
  {
    emoji: "🏆",
    title: "Prépa Compétition",
    desc: "Running, CrossFit, tennis, arts martiaux, natation. Coachs certifiés sport spécifique.",
    tag: "Sportifs",
    color: "from-yellow-600/20 to-yellow-800/10",
    border: "border-yellow-500/20",
  },
  {
    emoji: "🧠",
    title: "Coaching Mental",
    desc: "PNL, mindfulness, gestion du stress. Bien-être intégré au coaching physique.",
    tag: "Bien-être",
    color: "from-purple-600/20 to-purple-800/10",
    border: "border-purple-500/20",
  },
  {
    emoji: "🛡️",
    title: "Coaching Féminin Sécurisé",
    desc: "Filtrage coachs femmes uniquement. Badge double vérification d'identité.",
    tag: "Femmes",
    color: "from-pink-600/20 to-pink-800/10",
    border: "border-pink-500/20",
    highlight: true,
  },
  {
    emoji: "💎",
    title: "Premium / Exécutif",
    desc: "CSP+, horaires ultra-flexibles, déplacement inclus. Coachs top-tier 200–500€/séance.",
    tag: "Luxe",
    color: "from-amber-600/20 to-amber-800/10",
    border: "border-amber-500/20",
  },
  {
    emoji: "⭐",
    title: "Jeunesse & Compétition",
    desc: "Coachs spécialisés enfants et adolescents. Accompagnement sécurisé et bienveillant.",
    tag: "Jeunes",
    color: "from-green-600/20 to-green-800/10",
    border: "border-green-500/20",
  },
];

export default function Categories() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent pointer-events-none" />

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
            Une plateforme multi-disciplines. Du grand public au segment ultra-premium.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-3xl p-7 bg-gradient-to-br ${cat.color} border ${cat.border} coach-card-hover cursor-pointer ${cat.highlight ? "ring-1 ring-pink-400/30" : ""}`}
            >
              {cat.highlight && (
                <div className="inline-flex items-center gap-1.5 bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs px-2.5 py-1 rounded-full mb-3 font-medium">
                  🛡️ Sécurité renforcée
                </div>
              )}
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-white">{cat.title}</h3>
                <span className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-full ml-2 shrink-0">
                  {cat.tag}
                </span>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
