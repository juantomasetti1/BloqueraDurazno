"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/data/site";
import { waLink } from "./waLink";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#pagos", label: "Pagos" },
  { href: "#entregas", label: "Entregas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <SpiralLogo className="w-10 h-10 flex-shrink-0" />
          <span className="font-bebas text-cream text-2xl tracking-widest">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream hover:text-white transition-colors font-medium uppercase tracking-wider text-xs"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-whatsapp hover:bg-green-dark text-white font-bold px-4 py-2 text-xs uppercase tracking-wider transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className={`w-6 h-0.5 bg-cream mb-1.5 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-cream mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-cream transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-brand-light px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream font-medium uppercase tracking-wider text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-whatsapp text-white font-bold px-4 py-3 text-sm uppercase tracking-wider text-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function SpiralLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <polygon points="6,50 28,12 72,12 94,50 72,88 28,88" fill="#1b3a6b"/>
      <path
        d="M 15,50 L 32,20 L 68,20 L 85,50 L 68,80 L 32,80 L 29,50 L 39,32 L 61,32 L 71,50 L 61,68 L 39,68 L 43,50 L 46,44 L 54,44 L 57,50 L 54,56 L 46,56"
        fill="none"
        stroke="#e8dcc8"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
