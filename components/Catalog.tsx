import { PRODUCTS } from "@/data/site";
import ProductCard from "./ProductCard";
import { waLink } from "./waLink";

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-cream-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
              Nuestros productos
            </p>
            <h2 className="text-concrete-900 text-5xl md:text-6xl">Catálogo</h2>
            <div className="w-16 h-1 bg-brand mt-4" />
          </div>
          <p className="text-concrete-500 max-w-sm text-sm leading-relaxed">
            Todos nuestros bloques se fabrican con hormigón de alta resistencia.
            Los precios pueden variar según volumen — consultanos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* CTA note */}
        <p className="text-center text-concrete-500 text-sm mt-10">
          ¿Necesitás un producto que no está en el catálogo?{" "}
          <a
            href={waLink("Hola! Consulto por un producto que no está en el catálogo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            Consultanos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
