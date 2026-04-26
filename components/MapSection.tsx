import { SITE } from "@/data/site";

export default function MapSection() {
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address)}`;

  return (
    <section id="ubicacion" className="bg-concrete-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-brand font-display text-base tracking-widest uppercase mb-2">
            Dónde estamos
          </p>
          <h2 className="text-concrete-900 text-5xl md:text-6xl">Ubicación</h2>
          <div className="w-16 h-1 bg-brand mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-concrete-200 p-6">
              <p className="text-concrete-400 text-xs uppercase tracking-widest mb-1">Dirección</p>
              <p className="text-concrete-800 font-semibold">{SITE.address}</p>
            </div>
            <div className="bg-white border border-concrete-200 p-6">
              <p className="text-concrete-400 text-xs uppercase tracking-widest mb-1">Horario</p>
              <p className="text-concrete-800 font-semibold">{SITE.hours}</p>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-concrete-900 hover:bg-concrete-700 text-white font-bold px-6 py-4 uppercase tracking-wider transition-colors flex items-center gap-3 justify-center"
            >
              🗺️ Cómo llegar
            </a>
          </div>

          {/* Map embed */}
          <div className="md:col-span-2 h-72 md:h-auto bg-concrete-300 overflow-hidden">
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Bloquera Durazno"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
