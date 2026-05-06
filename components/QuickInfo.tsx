import { SITE } from "@/data/site";

const items = [
  { icon: "📍", label: "Ubicación", value: "Durazno y zona" },
  { icon: "🕐", label: "Horario", value: SITE.hours },
  { icon: "🚚", label: "Entrega", value: "Durazno y zona" },
  { icon: "📲", label: "Coordinación", value: "Por WhatsApp" },
];

export default function QuickInfo() {
  return (
    <section className="bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-brand">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 md:px-6">
            <span className="text-2xl">{it.icon}</span>
            <div>
              <p className="text-cream-dark text-xs font-semibold uppercase tracking-wider">{it.label}</p>
              <p className="text-white font-bold text-sm">{it.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
