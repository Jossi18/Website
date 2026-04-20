import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amélie R.",
    role: "Cliente · Fitness loisir",
    avatar: "AR",
    gradient: "from-pink-500 to-rose-600",
    rating: 5,
    text: "En 3 swipes j'avais trouvé Sarah, mon coach fitness à Paris 8e. Score de matching 97%. La première séance était parfaite — je n'aurais jamais trouvé ça sur Google.",
    location: "Paris",
    cardAccent: "hover:border-pink-500/25",
  },
  {
    name: "Thomas M.",
    role: "Coach · BPJEPS Sport",
    avatar: "TM",
    gradient: "from-violet-500 to-purple-700",
    rating: 5,
    text: "Je perdais 2h par jour sur Instagram à chercher des clients. Avec CoachMatch, j'ai rempli mon planning en 2 semaines. Le tableau de bord est incroyable.",
    location: "Lyon",
    isCoach: true,
    cardAccent: "hover:border-orange-500/25",
  },
  {
    name: "Priya S.",
    role: "Cliente · Coaching féminin",
    avatar: "PS",
    gradient: "from-blue-500 to-indigo-700",
    rating: 5,
    text: "Le filtre 'coachs femmes vérifiées' m'a enfin permis de trouver un environnement de confiance. Je me sens en sécurité. Je recommande à toutes mes amies.",
    location: "Montréal",
    cardAccent: "hover:border-blue-500/25",
  },
  {
    name: "Carlos V.",
    role: "Client · Prépa marathon",
    avatar: "CV",
    gradient: "from-orange-500 to-red-600",
    rating: 5,
    text: "J'avais besoin d'un coach running pour préparer le marathon de Paris. CoachMatch m'a matché avec un préparateur physique ex-athlète de haut niveau. Bluffant.",
    location: "Paris",
    cardAccent: "hover:border-orange-500/25",
  },
  {
    name: "Marina K.",
    role: "Coach · Coaching mental",
    avatar: "MK",
    gradient: "from-teal-500 to-emerald-700",
    rating: 5,
    text: "En tant que coach PNL & mindfulness, j'avais du mal à me positionner. CoachMatch comprend ma spécialité et me connecte avec des clients qui ont vraiment besoin de moi.",
    location: "Bordeaux",
    isCoach: true,
    cardAccent: "hover:border-teal-500/25",
  },
  {
    name: "Jean-Pierre L.",
    role: "Client Premium · Executive",
    avatar: "JL",
    gradient: "from-amber-500 to-yellow-600",
    rating: 5,
    text: "Mon emploi du temps ne laisse aucune place à l'approximatif. L'offre Premium m'a mis en contact avec un coach qui se déplace chez moi, horaires ultra-flexibles. Parfait.",
    location: "Paris",
    cardAccent: "hover:border-amber-500/25",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Top fade */}
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
          <p className="text-white/45 text-lg max-w-lg mx-auto">
            Clients et coachs, ils ont transformé leur rapport au sport et au coaching.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`group relative rounded-3xl p-7 bg-[#0d0d1e] border border-white/[0.07] transition-all duration-300 ${t.cardAccent} hover:-translate-y-1`}
            >
              {/* Coach badge */}
              {t.isCoach && (
                <div className="inline-flex items-center gap-1.5 bg-orange-500/12 border border-orange-500/25 text-orange-400 text-xs px-3 py-1 rounded-full mb-4 font-medium">
                  ✦ Coach vérifié
                </div>
              )}

              {/* Quote icon */}
              <Quote
                size={36}
                className="absolute top-6 right-6 text-white/[0.04] group-hover:text-white/[0.07] transition-colors"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#FBBF24" className="text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm leading-[1.75] mb-7">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/40 truncate">{t.role}</div>
                </div>
                <div className="text-xs text-white/25 shrink-0">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate score */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} fill="#FBBF24" className="text-yellow-400" />
            ))}
          </div>
          <div className="text-white/60 text-sm">
            <span className="text-white font-bold text-lg">4.9/5</span>
            {" "}· basé sur{" "}
            <span className="text-white font-semibold">12 400+ avis</span>
            {" "}sur l&apos;App Store et Google Play
          </div>
        </div>
      </div>
    </section>
  );
}
