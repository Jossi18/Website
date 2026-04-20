import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amélie R.",
    role: "Cliente • Fitness loisir",
    avatar: "AR",
    avatarColor: "from-pink-500 to-rose-700",
    rating: 5,
    text: "En 3 swipes j'avais trouvé Sarah, mon coach fitness à Paris 8e. Score de matching 97%. La première séance était parfaite. Je n'aurais jamais trouvé ça sur Google.",
    tag: "Paris, France",
  },
  {
    name: "Thomas M.",
    role: "Coach • BPJEPS Sport",
    avatar: "TM",
    avatarColor: "from-purple-500 to-violet-700",
    rating: 5,
    text: "Je perdais 2h par jour sur Instagram à chercher des clients. Avec CoachMatch, j'ai rempli mon planning en 2 semaines. Le tableau de bord est incroyable.",
    tag: "Lyon, France",
    isCoach: true,
  },
  {
    name: "Priya S.",
    role: "Cliente • Coaching féminin",
    avatar: "PS",
    avatarColor: "from-blue-500 to-indigo-700",
    rating: 5,
    text: "Le filtre 'coachs femmes vérifiées' m'a enfin permis de trouver un environnement de confiance. Je me sens en sécurité. Je recommande à toutes mes amies.",
    tag: "Montréal, Canada",
  },
  {
    name: "Carlos V.",
    role: "Client • Prépa marathon",
    avatar: "CV",
    avatarColor: "from-orange-500 to-red-700",
    rating: 5,
    text: "J'avais besoin d'un coach running pour préparer le marathon de Paris. CoachMatch m'a matché avec un préparateur physique ex-athlète de haut niveau. Incroyable.",
    tag: "Paris, France",
  },
  {
    name: "Marina K.",
    role: "Coach • Coaching mental",
    avatar: "MK",
    avatarColor: "from-teal-500 to-green-700",
    rating: 5,
    text: "En tant que coach PNL & mindfulness, j'avais du mal à me positionner. CoachMatch a compris ma spécialité et me met en face des clients qui en ont vraiment besoin.",
    tag: "Bordeaux, France",
    isCoach: true,
  },
  {
    name: "Jean-Pierre L.",
    role: "Client Premium • Executive",
    avatar: "JL",
    avatarColor: "from-amber-500 to-yellow-700",
    rating: 5,
    text: "Mon emploi du temps ne laisse aucune place à l'approximatif. L'offre Premium m'a mis en contact avec un coach qui se déplace chez moi, horaires ultra-flexibles. Parfait.",
    tag: "Paris, France",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-purple-500/30" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            Ils ont trouvé leur match
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            50 000 utilisateurs ne{" "}
            <span className="gradient-text">peuvent pas avoir tort</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`card-glass rounded-3xl p-7 relative ${t.isCoach ? "border-orange-500/20" : ""}`}
            >
              {t.isCoach && (
                <div className="inline-flex items-center gap-1 bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs px-2.5 py-1 rounded-full mb-4 font-medium">
                  Coach vérifié ✦
                </div>
              )}

              <Quote
                size={32}
                className="text-purple-500/20 absolute top-6 right-6"
                fill="currentColor"
              />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400" fill="#FBBF24" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
                <div className="ml-auto text-xs text-white/30">{t.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
