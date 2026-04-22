import { ArrowRight, Smartphone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-[#F8F4EE]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#2C2820]">
          {/* Soft green glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-leaf-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-terra/20 rounded-full blur-3xl" />

          {/* Decorative leaf shapes */}
          <svg className="absolute top-6 left-6 text-white/5 leaf-sway" width="80" height="120" viewBox="0 0 80 120" fill="currentColor">
            <path d="M40 0 Q80 20 70 60 Q60 100 40 120 Q20 100 10 60 Q0 20 40 0Z"/>
          </svg>
          <svg className="absolute bottom-6 right-12 text-white/5" width="60" height="90" viewBox="0 0 60 90" fill="currentColor">
            <path d="M30 0 Q60 15 52 45 Q45 75 30 90 Q15 75 8 45 Q0 15 30 0Z"/>
          </svg>

          <div className="relative z-10 px-8 md:px-16 py-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-sm font-medium text-white/70 mb-7">
              <Smartphone size={13} />
              Disponible iOS & Android — bientôt
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Votre meilleure version
              <br />
              commence aujourd&apos;hui.
            </h2>

            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Rejoignez 50 000 clients et 6 000 coachs certifiés.
              Premier matching gratuit, sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-8 py-4 rounded-2xl hover:bg-sand-100 transition-all text-base">
                Trouver mon coach <ArrowRight size={18} />
              </a>
              <a href="#coaches" className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/12 transition-all text-base">
                Devenir coach partenaire
              </a>
            </div>

            {/* App badges */}
            <div className="flex items-center justify-center gap-4 mt-10">
              {[
                { label: "App Store", icon: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" },
                { label: "Google Play", icon: "M3.18 23.76c.3.17.65.19.98.08l12.47-7.02-2.79-2.79-10.66 9.73zM.35 1.15C.13 1.5 0 1.96 0 2.54v18.92c0 .58.13 1.04.36 1.39l.07.07 10.59-10.59v-.25L.42 1.08l-.07.07zM20.67 10.41l-2.97-1.67-3.14 3.14 3.14 3.14 2.99-1.69c.85-.48.85-1.27-.02-1.92zM3.18.24l12.47 7.01-2.79 2.79L2.2.31c.3-.17.65-.19.98-.07z" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2.5 bg-white/8 border border-white/12 px-5 py-3 rounded-xl">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d={b.icon}/></svg>
                  <div className="text-left">
                    <div className="text-white/45 text-xs">Bientôt sur</div>
                    <div className="text-white text-sm font-semibold">{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
