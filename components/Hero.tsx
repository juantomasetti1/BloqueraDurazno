import { SITE } from "@/data/site";
import { waLink } from "./waLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand texture-concrete min-h-[88vh] flex items-center">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 38px,#fff 38px,#fff 39px),repeating-linear-gradient(90deg,transparent,transparent 77px,#fff 77px,#fff 78px)",
        }}
      />

      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-cream" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div>
          <p className="text-cream font-display text-lg tracking-widest uppercase mb-3">
            Durazno, Uruguay
          </p>
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl leading-none mb-6">
            Bloques de<br />
            <span className="text-cream">Hormigón</span><br />
            directos de<br />fábrica
          </h1>
          <p className="text-cream-dark text-lg mb-8 max-w-md leading-relaxed">
            Fabricación y venta de bloques de hormigón en Durazno. Calidad
            garantizada, entrega en zona y precios directos sin intermediarios.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-whatsapp hover:bg-green-dark text-white font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors inline-flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-brand font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        {/* Visual block illustration */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-2 mb-2" style={{ marginLeft: row * 20 }}>
                {[0, 1, 2].map((col) => (
                  <div
                    key={col}
                    className="w-28 h-14 border-2 border-brand-light bg-brand-dark relative overflow-hidden"
                    style={{ opacity: 1 - row * 0.15 - col * 0.05 }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-brand-light" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-brand-light opacity-50" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-brand-light opacity-50" />
                  </div>
                ))}
              </div>
            ))}
            <div className="absolute -bottom-4 -right-4 bg-cream text-brand font-display text-2xl px-4 py-2 uppercase tracking-widest">
              Construyendo tu futuro
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-dark text-xs uppercase tracking-widest flex flex-col items-center gap-2">
        <span>Ver catálogo</span>
        <div className="w-px h-8 bg-cream-dark animate-bounce" />
      </div>
    </section>
  );
}
