const PAYMENT_ITEMS = [
  {
    label: "Efectivo",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    label: "Transferencia bancaria",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zM11.5 1L2 6v2h19V6l-9.5-5z" />
      </svg>
    ),
  },
  {
    label: "Mercado Pago",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
      </svg>
    ),
  },
  {
    label: "POS / Postnet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
];

export default function Payments() {
  return (
    <section id="pagos" className="bg-brand py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-cream font-display text-base tracking-widest uppercase mb-2">
            Medios de pago
          </p>
          <h2 className="text-white text-5xl md:text-6xl">Pagos</h2>
          <div className="w-16 h-1 bg-cream mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PAYMENT_ITEMS.map((p) => (
            <div
              key={p.label}
              className="bg-brand-dark border border-brand-light px-6 py-8 flex flex-col items-center gap-3 hover:border-cream transition-colors"
            >
              <span className="text-cream">{p.icon}</span>
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
