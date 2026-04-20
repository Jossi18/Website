"use client";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Pour les coachs", href: "#coaches" },
  { label: "Tarifs", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Coach<span className="gradient-text-purple">Match</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#how-it-works"
            className="text-sm text-white/70 hover:text-white px-4 py-2 transition-colors"
          >
            Se connecter
          </a>
          <a
            href="#pricing"
            className="btn-primary text-sm font-semibold text-white px-5 py-2 rounded-xl"
          >
            Commencer gratuitement
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A14] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-primary text-sm font-semibold text-white px-5 py-2.5 rounded-xl text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Commencer gratuitement
          </a>
        </div>
      )}
    </header>
  );
}
