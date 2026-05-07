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
        <div className="text-center space-y-1">
          <p>{SITE.address}</p>
          <p className="text-xs opacity-60">Fundada por José Ávila</p>
        </div>
        <div className="text-center space-y-1">
          <p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
          <p className="text-xs opacity-50">
            Diseño web por{" "}
            <a
              href="https://www.scalerics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 underline underline-offset-2"
            >
              Scalerics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
