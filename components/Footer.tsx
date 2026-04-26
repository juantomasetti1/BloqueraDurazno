import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-concrete-900 border-t border-concrete-800 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-concrete-500 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-brand">▪</span>
          <span className="font-display text-white uppercase tracking-widest">{SITE.name}</span>
        </div>
        <p className="text-center">{SITE.address}</p>
        <p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
