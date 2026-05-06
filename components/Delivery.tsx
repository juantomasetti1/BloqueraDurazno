import { DELIVERY } from "@/data/site";
import { waLink } from "./waLink";

export default function Delivery() {
  return (
    <section id="entregas" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
            Logística
          </p>
          <h2 className="text-concrete-900 text-5xl md:text-6xl mb-6">Entregas</h2>
          <div className="w-16 h-1 bg-brand mb-8" />

          <ul className="space-y-4">
            {DELIVERY.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 bg-brand text-cream flex items-center justify-center text-xs flex-shrink-0">
                  ✓
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
            <span>📲</span> Coordinar entrega por WhatsApp
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
