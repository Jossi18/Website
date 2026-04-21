import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Amélie R.", role: "Cliente · Fitness loisir", avatar: "AR", gradient: "from-rose-400 to-pink-600", rating: 5, text: "En 3 swipes j'avais trouvé Sarah, mon coach fitness à Paris 8e. Score de matching 97%. La première séance était parfaite — je n'aurais jamais trouvé ça sur Google.", location: "Paris", bg: "bg-white", border: "border-stone-200" },
  { name: "Thomas M.", role: "Coach · BPJEPS Sport", avatar: "TM", gradient: "from-leaf-400 to-leaf-700", rating: 5, text: "Je perdais 2h par jour sur Instagram à chercher des clients. Avec CoachMatch, j'ai rempli mon planning en 2 semaines. Le tableau de bord est incroyable.", location: "Lyon", isCoach: true, bg: "bg-[#EEF5F1]", border: "border-[#AACCB8]" },
  { name: "Priya S.", role: "Cliente · Coaching féminin", avatar: "PS", gradient: "from-blue-400 to-indigo-600", rating: 5, text: "Le filtre 'coachs femmes vérifiées' m'a enfin permis de trouver un environnement de confiance. Je me sens en sécurité. Je recommande à toutes mes amies.", location: "Montréal", bg: "bg-white", border: "border-stone-200" },
  { name: "Carlos V.", role: "Client · Prépa marathon", avatar: "CV", gradient: "from-orange-400 to-red-500", rating: 5, text: "J'avais besoin d'un coach running pour préparer le marathon de Paris. CoachMatch m'a matché avec un préparateur physique ex-athlète de haut niveau. Bluffant.", location: "Paris", bg: "bg-[#F3EDE2]", border: "border-[#D4C4A8]" },
  { name: "Marina K.", role: "Coach · Coaching mental", avatar: "MK", gradient: "from-teal-400 to-emerald-600", rating: 5, text: "En tant que coach PNL & mindfulness, j'avais du mal à me positionner. CoachMatch comprend ma spécialité et me connecte avec les clients qui en ont vraiment besoin.", location: "Bordeaux", isCoach: true, bg: "bg-[#EEF5F1]", border: "border-[#AACCB8]" },
  { name: "Jean-Pierre L.", role: "Client Premium · Executive", avatar: "JL", gradient: "from-amber-400 to-yellow-600", rating: 5, text: "Mon emploi du temps ne laisse aucune place à l'approximatif. L'offre Premium m'a mis en contact avec un coach qui se déplace chez moi, horaires ultra-flexibles.", location: "Paris", bg: "bg-white", border: "border-stone-200" },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 tag-badge px-4 py-1.5 rounded-full mb-5">
            Ils ont trouvé leur match
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            50 000 utilisateurs ne{" "}
            <span className="gradient-text">peuvent pas avoir tort</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className={`group relative rounded-3xl p-7 border hover-lift ${t.bg} ${t.border}`}>
              {t.isCoach && (
                <div className="inline-flex items-center gap-1.5 tag-terra text-xs px-3 py-1 rounded-full mb-4">
                  ✦ Coach vérifié
                </div>
              )}

              <Quote size={32} className="absolute top-6 right-6 text-stone-200 group-hover:text-stone-300 transition-colors" fill="currentColor" />

              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C4956A" className="text-terra" />
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-[1.75] mb-7">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-xs text-stone-400 truncate">{t.role}</div>
                </div>
                <div className="text-xs text-stone-300">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate score */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#C4956A" className="text-terra" />)}
          </div>
          <div className="text-stone-500 text-sm">
            <span className="text-stone-900 font-bold text-lg">4.9/5</span>
            {" "}· basé sur{" "}
            <span className="text-stone-900 font-semibold">12 400+ avis</span>
            {" "}sur App Store et Google Play
          </div>
        </div>
      </div>
    </section>
  );
}
