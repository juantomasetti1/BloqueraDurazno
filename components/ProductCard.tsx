import { Product } from "@/data/site";
import { waLink } from "./waLink";

export default function ProductCard({ product }: { product: Product }) {
  const msg = `Hola! Me interesa el ${product.name} (${product.measures} cm). ¿Podría darme información y precio?`;

  return (
    <div className="bg-white border border-concrete-200 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
      {/* Image / placeholder */}
      <div className="relative bg-concrete-100 h-48 flex items-center justify-center overflow-hidden">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <BlockPlaceholder />
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand text-cream text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Más vendido
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-brand mb-1">{product.name}</h3>
        <p className="text-concrete-500 text-xs uppercase tracking-wider mb-1">
          Medidas (L×H×A): <strong className="text-concrete-700">{product.measures} cm</strong>
        </p>
        <p className="text-concrete-600 text-sm mb-4 flex-1">{product.use}</p>

        <div className="flex items-end justify-between mt-auto pt-4 border-t border-concrete-100">
          <div>
            {product.pricePuesto ? (
              <div className="space-y-1">
                <div>
                  <p className="text-xs text-concrete-400 uppercase tracking-wider leading-none">Puesto en obra</p>
                  <p className="font-display text-2xl text-brand leading-tight">{product.pricePuesto}</p>
                </div>
                <div>
                  <p className="text-xs text-concrete-400 uppercase tracking-wider leading-none">A levantar</p>
                  <p className="font-display text-2xl text-brand leading-tight">{product.priceLevantar}</p>
                </div>
              </div>
            ) : (
              <p className="font-display text-2xl text-concrete-500">Consultar</p>
            )}
          </div>
          <a
            href={waLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-whatsapp hover:bg-green-dark text-white font-bold px-4 py-3 text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

function BlockPlaceholder() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="opacity-30">
      <rect x="1" y="1" width="118" height="58" rx="2" stroke="#1b3a6b" strokeWidth="2" fill="#e8dcc8"/>
      <line x1="40" y1="1" x2="40" y2="59" stroke="#1b3a6b" strokeWidth="1.5"/>
      <line x1="80" y1="1" x2="80" y2="59" stroke="#1b3a6b" strokeWidth="1.5"/>
      <line x1="1" y1="20" x2="119" y2="20" stroke="#1b3a6b" strokeWidth="1"/>
      <line x1="1" y1="40" x2="119" y2="40" stroke="#1b3a6b" strokeWidth="1"/>
    </svg>
  );
}
