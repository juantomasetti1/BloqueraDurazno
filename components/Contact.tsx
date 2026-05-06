import { SITE } from "@/data/site";
import { waLink } from "./waLink";

export default function Contact() {
  return (
    <section id="contacto" className="bg-brand py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white text-5xl md:text-7xl mb-4">¿Listo para cotizar?</h2>
        <p className="text-cream text-lg mb-10 max-w-xl mx-auto">
          Escribinos con la cantidad y el tipo de bloque que necesitás.
          Respondemos rápido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-whatsapp hover:bg-green-dark text-white font-bold px-10 py-5 text-xl uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-3"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="border-2 border-cream text-cream hover:bg-cream hover:text-brand font-bold px-10 py-5 text-xl uppercase tracking-wider transition-colors"
          >
            📞 Llamar
          </a>
        </div>

        <p className="text-cream-dark text-sm mt-8 opacity-80">{SITE.hours}</p>

        {SITE.facebook && (
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-cream hover:text-white underline text-sm transition-colors"
          >
            Seguinos en Facebook
          </a>
        )}
      </div>
    </section>
  );
}
