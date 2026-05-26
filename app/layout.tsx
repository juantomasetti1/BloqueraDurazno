import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloqueralacadena.uy"),
  title: `${SITE.name} | Bloques de hormigón en Durazno, Uruguay`,
  description:
    "Fabricación y venta de bloques de hormigón en Durazno, Uruguay. Bloque 12, 15 y 20 cm. Entrega en zona. Consultá precios por WhatsApp.",
  keywords: [
    "bloques de hormigón Durazno",
    "fábrica de bloques Uruguay",
    "bloquera Durazno",
    "bloques construcción Durazno",
    "hormigón Uruguay",
  ],
  openGraph: {
    title: `${SITE.name} | Bloques de hormigón en Durazno`,
    description: "Fabricación y venta de bloques de hormigón. Entrega en Durazno y zona.",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/images/WhatsApp%20Image%202026-05-05%20at%2011.33.38.jpeg",
        width: 1200,
        height: 630,
        alt: "Bloques de hormigón Bloquera La Cadena",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
