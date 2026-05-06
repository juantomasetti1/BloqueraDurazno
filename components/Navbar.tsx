"use client";
import { useState } from "react";
import Image from "next/image";
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
          <Image
            src="/images/logo.jpeg"
            alt="Bloquera La Cadena"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-display text-cream text-xl tracking-widest uppercase">
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
            📲 Escribinos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
