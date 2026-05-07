import { DELIVERY } from "@/data/site";
import { waLink } from "./waLink";

export default function Delivery() {
  return (
    <section id="entregas" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
            Entregas & Logística
          </p>
          <h2 className="text-concrete-900 text-5xl md:text-6xl mb-6">Llegamos a pie de obra</h2>
          <div className="w-16 h-1 bg-brand mb-8" />

          <ul className="space-y-4">
            {DELIVERY.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 bg-brand text-cream flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </span>
                <span className="text-concrete-700 text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink("Hola! Quiero coordinar una entrega de bloques.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 uppercase tracking-wider transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Coordinar entrega por WhatsApp
          </a>
        </div>

        {/* Zone info box */}
        <div className="bg-cream-light border-l-4 border-brand p-8">
          <h3 className="font-display text-3xl text-brand mb-6">Zona de cobertura</h3>
          <div className="space-y-3 text-concrete-700">
            {[
              "Durazno ciudad",
              "Sarandí del Yí",
              "Puebla del Norte",
              "La Paloma",
              "Zona rural — consultar",
            ].map((z) => (
              <div key={z} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand rounded-full flex-shrink-0" />
                <span>{z}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-concrete-500 text-sm">
            Para zonas fuera de la lista, contactanos. Podemos coordinar según el volumen del pedido.
          </p>
        </div>
      </div>
    </section>
  );
}
