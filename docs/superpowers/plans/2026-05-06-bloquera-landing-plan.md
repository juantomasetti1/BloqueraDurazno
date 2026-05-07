# Bloquera La Cadena — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Actualizar la landing page de Bloquera La Cadena con logo prominente en el hero, foto real de fondo, valores de la empresa implícitos en el copy, y datos reales de la empresa.

**Architecture:** Proyecto Next.js 14 con App Router. Sin suite de tests — verificación via TypeScript build y revisión visual en el servidor de desarrollo. Todos los cambios son en componentes existentes; no se crean archivos nuevos.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS v3, `next/image`

---

## File Map

| Archivo | Tipo | Qué cambia |
|---|---|---|
| `data/site.ts` | Modify | address, tagline, zone, DELIVERY array |
| `components/Hero.tsx` | Modify | Rediseño completo: foto de fondo, logo, layout C |
| `components/QuickInfo.tsx` | Modify | Iconos SVG, copy actualizado |
| `components/Delivery.tsx` | Modify | Heading "Llegamos a pie de obra" |
| `components/Footer.tsx` | Modify | Línea del fundador |
| `components/Catalog.tsx` | Modify | Bug fix: WhatsApp hardcodeado |

---

### Task 1: Actualizar datos base en `data/site.ts`

**Files:**
- Modify: `data/site.ts`

- [ ] **Step 1: Actualizar SITE y DELIVERY**

Reemplazar el objeto `SITE` y el array `DELIVERY` con los datos reales:

```ts
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
```

```ts
export const DELIVERY = [
  "Entrega a pie de obra en Durazno ciudad y zona",
  "Coordinación rápida por WhatsApp",
  "Flete propio para grandes volúmenes",
  "Retiro en fábrica en Paso la Cadena",
];
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npm run build
```

Expected: compilación exitosa sin errores de tipo. Si hay errores, son de otro archivo — no de este cambio.

- [ ] **Step 3: Commit**

```bash
git add data/site.ts
git commit -m "feat: update site data with real address, tagline and delivery copy"
```

---

### Task 2: Fix bug en `Catalog.tsx` — WhatsApp hardcodeado

**Files:**
- Modify: `components/Catalog.tsx:33-41`

- [ ] **Step 1: Reemplazar el link hardcodeado**

En `components/Catalog.tsx`, el CTA final usa un número de WhatsApp hardcodeado. Reemplazar:

```tsx
// ANTES (línea ~33-41):
<p className="text-center text-concrete-500 text-sm mt-10">
  ¿Necesitás un producto que no está en el catálogo?{" "}
  <a
    href="https://wa.me/59899000000"
    target="_blank"
    rel="noopener noreferrer"
    className="text-brand font-semibold hover:underline"
  >
    Consultanos por WhatsApp
  </a>
</p>
```

```tsx
// DESPUÉS:
import { waLink } from "./waLink";

// ... dentro del componente:
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
```

Nota: `waLink` ya está importado en `components/waLink.ts` — sólo agregar el import al inicio del archivo si no está.

- [ ] **Step 2: Verificar**

```bash
npm run build
```

Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add components/Catalog.tsx
git commit -m "fix: replace hardcoded WhatsApp number with waLink() in Catalog"
```

---

### Task 3: Actualizar `QuickInfo.tsx` — SVG icons y copy

**Files:**
- Modify: `components/QuickInfo.tsx`

- [ ] **Step 1: Reemplazar el componente completo**

Reemplazar todo el contenido de `components/QuickInfo.tsx`:

```tsx
import React from "react";
import { SITE } from "@/data/site";

type InfoItem = { label: string; value: string; icon: React.ReactNode };

const items: InfoItem[] = [
  {
    label: "Ubicación",
    value: "Paso la Cadena, Durazno",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Horario",
    value: SITE.hours,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
  {
    label: "Entrega",
    value: "A pie de obra",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5L21 12h-4V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm14 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    label: "Coordinación",
    value: "Por WhatsApp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
];

export default function QuickInfo() {
  return (
    <section className="bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-brand">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 md:px-6">
            <span className="text-cream opacity-75 flex-shrink-0">{it.icon}</span>
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
```

- [ ] **Step 2: Verificar**

```bash
npm run build
```

Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add components/QuickInfo.tsx
git commit -m "feat: replace emoji icons with SVG and update QuickInfo copy"
```

---

### Task 4: Actualizar heading en `Delivery.tsx`

**Files:**
- Modify: `components/Delivery.tsx:9-13`

- [ ] **Step 1: Cambiar el heading de la sección**

En `components/Delivery.tsx`, cambiar el bloque de encabezado:

```tsx
// ANTES:
<p className="text-brand font-display text-base tracking-widest uppercase mb-2">
  Logística
</p>
<h2 className="text-concrete-900 text-5xl md:text-6xl mb-6">Entregas</h2>
```

```tsx
// DESPUÉS:
<p className="text-brand font-display text-base tracking-widest uppercase mb-2">
  Entregas & Logística
</p>
<h2 className="text-concrete-900 text-5xl md:text-6xl mb-6">Llegamos a pie de obra</h2>
```

- [ ] **Step 2: Verificar**

```bash
npm run build
```

Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add components/Delivery.tsx
git commit -m "feat: update Delivery heading to 'Llegamos a pie de obra'"
```

---

### Task 5: Actualizar `Footer.tsx` — agregar fundador

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Agregar la línea del fundador**

En `components/Footer.tsx`, reemplazar el bloque de derecha:

```tsx
// ANTES:
<p className="text-center">{SITE.address}</p>
<p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
```

```tsx
// DESPUÉS:
<div className="text-center space-y-1">
  <p>{SITE.address}</p>
  <p className="text-xs opacity-60">Fundada por José Ávila</p>
</div>
<p>© {new Date().getFullYear()} — Todos los derechos reservados</p>
```

- [ ] **Step 2: Verificar**

```bash
npm run build
```

Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add founder attribution to Footer"
```

---

### Task 6: Rediseñar `Hero.tsx` — logo prominente + foto de fondo

**Files:**
- Modify: `components/Hero.tsx`

Este es el cambio principal. El Hero pasa de un fondo CSS a una foto real con overlay, y el logo aparece grande en el contenido.

- [ ] **Step 1: Reemplazar el componente completo**

Reemplazar todo el contenido de `components/Hero.tsx`:

```tsx
import Image from "next/image";
import { SITE } from "@/data/site";
import { waLink } from "./waLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Foto de fondo */}
      <Image
        src="/images/WhatsApp Image 2026-05-05 at 11.33.38.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Overlay azul */}
      <div className="absolute inset-0 bg-brand/80" />

      {/* Barra de acento */}
      <div className="absolute left-0 top-0 h-full w-2 bg-cream z-10" />

      {/* Logo decorativo de fondo (derecha) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[420px] md:h-[420px] rounded-full object-cover opacity-[0.07] pointer-events-none z-[1]"
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
        {/* Logo + nombre */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-cream flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt={SITE.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-cream-dark font-display text-sm tracking-widest uppercase leading-tight">
              Paso la Cadena, Durazno
            </p>
            <p className="text-white font-display text-2xl md:text-3xl tracking-wider uppercase leading-tight">
              {SITE.name}
            </p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-white text-6xl sm:text-7xl md:text-8xl leading-none mb-6 max-w-2xl">
          Bloques de<br />
          <span className="text-cream">Hormigón</span><br />
          directos de<br />fábrica
        </h1>

        <p className="text-cream-dark text-lg mb-8 max-w-md leading-relaxed">
          {SITE.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-whatsapp hover:bg-green-dark text-white font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors inline-flex items-center gap-3"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
          <a
            href="#catalogo"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-brand font-bold px-8 py-4 text-lg uppercase tracking-wider transition-colors"
          >
            Ver catálogo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-dark text-xs uppercase tracking-widest flex flex-col items-center gap-2 z-10">
        <span>Ver catálogo</span>
        <div className="w-px h-8 bg-cream-dark animate-bounce" />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.1.548 4.07 1.504 5.782L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.735.979 1-3.645-.235-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}
```

- [ ] **Step 2: Verificar compilación**

```bash
npm run build
```

Expected: compilación exitosa. Si falla con error de `next/image` sobre el path con espacios, no es un error — Next.js acepta rutas con espacios en `/public`.

- [ ] **Step 3: Verificar visualmente en el dev server**

```bash
npm run dev
```

Abrir `http://localhost:3000` y verificar:
- [ ] La foto de bloques se ve de fondo con overlay azul
- [ ] El logo circular con borde crema aparece arriba-izquierda del contenido
- [ ] El nombre "Bloquera La Cadena" y "Paso la Cadena, Durazno" aparecen junto al logo
- [ ] El tagline "Calidad que construye. Entrega que cumple." se ve debajo del título
- [ ] El logo decorativo grande y semi-transparente se aprecia a la derecha en desktop
- [ ] Los botones de WhatsApp y "Ver catálogo" funcionan
- [ ] En mobile (≤768px) el hero se ve bien — el logo decorativo puede superponerse levemente al texto, lo que es aceptable

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: redesign Hero with photo background, prominent logo, and brand copy"
```

---

### Task 7: Build final y revisión completa

- [ ] **Step 1: Build de producción**

```bash
npm run build
```

Expected: compilación exitosa sin errores ni warnings críticos.

- [ ] **Step 2: Revisión visual completa del sitio**

```bash
npm run dev
```

Recorrer el sitio completo en `http://localhost:3000` y verificar cada sección:

| Sección | Qué verificar |
|---|---|
| Hero | Foto de fondo, logo, tagline, CTAs |
| QuickInfo | Iconos SVG (no emojis), "Paso la Cadena, Durazno", "A pie de obra" |
| Catálogo | Todas las cards con imagen, badge "Más vendido" en featured |
| Entregas | Heading "Llegamos a pie de obra", lista actualizada |
| Footer | "Fundada por José Ávila" visible |
| Mobile (≤768px) | Hero responsive, QuickInfo en 2 columnas, Catalog en 1 columna |

- [ ] **Step 3: Commit final**

```bash
git add -A
git commit -m "feat: complete landing page redesign for Bloquera La Cadena launch"
```
