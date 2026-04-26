import { SITE } from "@/data/site";

export function waLink(msg?: string) {
  const text = encodeURIComponent(msg || SITE.whatsappMsg);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
