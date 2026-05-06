// ============================================================
// CONFIGURACIÓN CENTRAL — Editar aquí para actualizar el sitio
// ============================================================

export const SITE = {
  name: "Bloquera Durazno",
  tagline: "Bloques de hormigón directos de fábrica",
  phone: "+59899000000",          // ← cambiar por número real
  whatsapp: "59899000000",        // ← sin + ni guiones
  whatsappMsg: "Hola! Consulto por bloques de hormigón.",
  address: "Ruta 5 km 184, 5 km al norte de Durazno, Uruguay",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-56.5226!3d-33.3694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIyJzA5LjkiUyA1NsKwMzEnMjEuNCJX!5e0!3m2!1ses!2suy!4v1680000000000",
  hours: "Lun–Sáb: 8:00 a 17:00",
  facebook: "https://facebook.com/", // ← link a la página de Facebook (opcional)
  zone: "Durazno y zona",
};

export type Product = {
  id: string;
  name: string;
  measures: string;        // largo × alto × ancho  (cm)
  use: string;
  price: string | null;    // null = "Consultar"
  image: string | null;    // ruta pública o null = placeholder
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "b12",
    name: "Bloque estándar 12",
    measures: "39 × 19 × 12",
    use: "Paredes interiores",
    price: "$120",
    image: null,
    featured: true,
  },
  {
    id: "b15",
    name: "Bloque estándar 15",
    measures: "39 × 19 × 15",
    use: "Muros exteriores y estructurales",
    price: "$145",
    image: null,
    featured: true,
  },
  {
    id: "b20",
    name: "Bloque estándar 20",
    measures: "39 × 19 × 20",
    use: "Construcción de alta resistencia",
    price: "$175",
    image: null,
    featured: true,
  },
  {
    id: "medio",
    name: "Medio bloque 12",
    measures: "19 × 19 × 12",
    use: "Remates, esquinas y terminaciones",
    price: "$65",
    image: null,
  },
  {
    id: "portante",
    name: "Bloque portante 20",
    measures: "39 × 19 × 20",
    use: "Muros portantes y cimentaciones",
    price: null,
    image: null,
  },
  {
    id: "adoquin",
    name: "Adoquín 6 cm",
    measures: "20 × 10 × 6",
    use: "Veredas, entradas y patios",
    price: "$95",
    image: null,
  },
];

export const PAYMENTS = [
  { icon: "💵", label: "Efectivo" },
  { icon: "📲", label: "Transferencia bancaria" },
  { icon: "💙", label: "Mercado Pago" },
  { icon: "💳", label: "POS / Postnet" },
];

export const DELIVERY = [
  "Entrega en Durazno ciudad y zona rural",
  "Coordinación por WhatsApp",
  "Flete propio para volúmenes grandes",
  "También retiro en fábrica",
];
