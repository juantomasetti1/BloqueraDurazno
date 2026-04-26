import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
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
