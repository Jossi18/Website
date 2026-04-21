"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Pour les coachs", href: "#coaches" },
  { label: "Tarifs", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-light fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl btn-primary flex items-center justify-center">
            {/* Leaf icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.96 5-8"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-stone-900">
            Coach<span className="gradient-text">Match</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#how-it-works" className="text-sm text-stone-600 hover:text-stone-900 px-4 py-2 transition-colors font-medium">
            Connexion
          </a>
          <a href="#pricing" className="btn-primary text-sm font-semibold px-5 py-2.5 inline-block">
            Commencer gratuitement
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-stone-600 hover:text-stone-900" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-sand-50 border-t border-sand-200 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-stone-600 hover:text-stone-900 py-1 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn-primary text-sm font-semibold px-5 py-3 text-center mt-2" onClick={() => setOpen(false)}>
            Commencer gratuitement
          </a>
        </div>
      )}
    </header>
  );
}
