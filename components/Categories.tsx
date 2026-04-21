const categories = [
  {
    emoji: "🏋️",
    title: "Fitness Loisir",
    desc: "Perte de poids, musculation, remise en forme. Accessible à tous les budgets.",
    tag: "Grand public",
    bg: "bg-white",
    border: "border-stone-200",
    hover: "hover:border-leaf-300 hover:shadow-leaf-100",
    tagColor: "text-leaf-600 bg-leaf-50 border-leaf-200",
  },
  {
    emoji: "🏆",
    title: "Prépa Compétition",
    desc: "Running, CrossFit, tennis, arts martiaux. Coachs certifiés sport spécifique.",
    tag: "Sportifs",
    bg: "bg-white",
    border: "border-stone-200",
    hover: "hover:border-terra hover:shadow-orange-50",
    tagColor: "text-terra bg-[#FBF3EC] border-[#E8C4A0]",
  },
  {
    emoji: "🧠",
    title: "Coaching Mental",
    desc: "PNL, mindfulness, gestion du stress. Bien-être intégré au coaching physique.",
    tag: "Bien-être",
    bg: "bg-[#F3EDE2]",
    border: "border-[#D4C4A8]",
    hover: "hover:border-stone-400",
    tagColor: "text-stone-600 bg-[#E8DCC8] border-[#D4C4A8]",
  },
  {
    emoji: "🛡️",
    title: "Coaching Féminin Sécurisé",
    desc: "Filtrage coachs femmes uniquement. Badge double vérification certifiée.",
    tag: "Sécurité renforcée",
    bg: "bg-[#EEF5F1]",
    border: "border-[#AACCB8]",
    hover: "hover:border-leaf-500 hover:shadow-leaf-100",
    tagColor: "text-leaf-700 bg-leaf-100 border-leaf-200",
    highlight: true,
  },
  {
    emoji: "💎",
    title: "Premium / Exécutif",
    desc: "CSP+, horaires ultra-flexibles, déplacement inclus. Coachs top-tier 200–500€/séance.",
    tag: "Luxe",
    bg: "bg-white",
    border: "border-stone-200",
    hover: "hover:border-terra",
    tagColor: "text-terra bg-[#FBF3EC] border-[#E8C4A0]",
  },
  {
    emoji: "⭐",
    title: "Jeunesse & Compétition",
    desc: "Coachs spécialisés enfants et adolescents. Accompagnement sécurisé et bienveillant.",
    tag: "Jeunes",
    bg: "bg-white",
    border: "border-stone-200",
    hover: "hover:border-leaf-300",
    tagColor: "text-leaf-600 bg-leaf-50 border-leaf-200",
  },
];

export default function Categories() {
  return (
    <section className="py-28 px-6 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-5">
            6 disciplines
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Quel que soit votre objectif,{" "}
            <span className="gradient-text">votre coach existe</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Du grand public au segment ultra-premium. Une seule plateforme pour tout.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div
              key={cat.title}
              className={`group rounded-3xl p-8 border transition-all duration-300 cursor-pointer hover-lift ${cat.bg} ${cat.border} ${cat.hover} ${cat.highlight ? "ring-1 ring-leaf-300" : ""}`}
            >
              {cat.highlight && (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-leaf-100 border border-leaf-200 text-leaf-700 mb-3">
                  🛡️ Vérification double
                </div>
              )}

              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {cat.emoji}
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg text-stone-900 leading-snug">{cat.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 mt-0.5 ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>

              <p className="text-sm text-stone-500 leading-relaxed">{cat.desc}</p>

              <div className="mt-6 text-xs text-stone-400 group-hover:text-leaf-600 transition-colors flex items-center gap-1.5 font-medium">
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
