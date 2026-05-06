import Image from "next/image";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-cream-dark text-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Bloquera La Cadena"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display text-cream uppercase tracking-widest">{SITE.name}</span>
        </div>
        <p className="text-center">{SITE.address}</p>
        <p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
