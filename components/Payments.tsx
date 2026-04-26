import { PAYMENTS } from "@/data/site";

export default function Payments() {
  return (
    <section id="pagos" className="bg-concrete-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
            Medios de pago
          </p>
          <h2 className="text-white text-5xl md:text-6xl">Pagos</h2>
          <div className="w-16 h-1 bg-brand mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PAYMENTS.map((p) => (
            <div
              key={p.label}
              className="bg-concrete-800 border border-concrete-700 px-6 py-8 flex flex-col items-center gap-3 hover:border-brand transition-colors"
            >
              <span className="text-4xl">{p.icon}</span>
              <span className="text-white font-semibold text-center text-sm uppercase tracking-wide">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
