// ============================================================
// CONFIGURACIÓN CENTRAL — Editar aquí para actualizar el sitio
// ============================================================

export const SITE = {
  name: 'Bloquera "La Cadena"',
  tagline: "Calidad que construye. Entrega que cumple.",
  phone: "092437871",
  whatsapp: "59892437871",
  whatsappMsg: "Hola! Consulto por bloques de hormigón.",
  address: "Paso la Cadena, Durazno, Uruguay",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-56.5226!3d-33.3694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIyJzA5LjkiUyA1NsKwMzEnMjEuNCJX!5e0!3m2!1ses!2suy!4v1680000000000",
  hours: "Lun–Sáb: 8:00 a 17:00",
  facebook: "https://facebook.com/",
  zone: "Durazno ciudad y zona rural",
};

export type Product = {
  id: string;
  name: string;
  measures: string;
  use: string;
  pricePuesto: string | null;    // precio puesto en obra (null = consultar)
  priceLevantar: string | null;  // precio a levantar en fábrica (null = consultar)
  image: string | null;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "bloque-comun",
    name: "Bloque Común",
    measures: "39 × 19 × 12",
    use: "Paredes y muros en general",
    pricePuesto: "$28",
    priceLevantar: "$25",
    image: "/images/WhatsApp Image 2026-05-05 at 11.33.38.jpeg",
    featured: true,
  },
  {
    id: "bloque-u-comun",
    name: "Bloque U Común",
    measures: "39 × 19 × 12",
    use: "Vigas de encadenado y dinteles",
    pricePuesto: "$40",
    priceLevantar: "$35",
    image: "/images/WhatsApp Image 2026-05-05 at 11.33.39 (3).jpeg",
    featured: true,
  },
  {
    id: "bloque-15",
    name: "Bloque de 15",
    measures: "39 × 19 × 15",
    use: "Muros exteriores y estructurales",
    pricePuesto: "$35",
    priceLevantar: "$32",
    image: "/images/WhatsApp Image 2026-05-05 at 11.33.38 (1).jpeg",
  },
  {
    id: "monoblock-15",
    name: "Monoblock de 15",
    measures: "39 × 19 × 15",
    use: "Construcción sólida de alta resistencia",
    pricePuesto: "$35",
    priceLevantar: "$32",
    image: "/images/WhatsApp Image 2026-05-05 at 11.33.41 (2).jpeg",
  },
  {
    id: "bloque-u-15",
    name: "Bloque U de 15",
    measures: "39 × 19 × 15",
    use: "Vigas y encadenados en muros de 15",
    pricePuesto: "$50",
    priceLevantar: "$45",
    image: null,
  },
  {
    id: "monoblock-19",
    name: "Monoblock de 19",
    measures: "39 × 19 × 19",
    use: "Cimentaciones y muros de alta carga",
    pricePuesto: "$40",
    priceLevantar: "$36",
    image: "/images/WhatsApp Image 2026-05-05 at 11.33.40 (3).jpeg",
    featured: true,
  },
  {
    id: "bloque-u-19",
    name: "Bloque U de 19",
    measures: "39 × 19 × 19",
    use: "Vigas y encadenados en muros de 19",
    pricePuesto: "$55",
    priceLevantar: "$50",
    image: "/images/bloque u de 19.jpeg",
  },
];

export const PAYMENTS = [
  { label: "Efectivo" },
  { label: "Transferencia bancaria" },
  { label: "Mercado Pago" },
  { label: "POS / Postnet" },
];

export const DELIVERY = [
  "Entrega a pie de obra en Durazno ciudad y zona",
  "Coordinación rápida por WhatsApp",
  "Flete propio para grandes volúmenes",
  "Retiro en fábrica en Paso la Cadena",
];
