# Diseño: Bloquera La Cadena — Landing Page

**Fecha:** 2026-05-06  
**Estado:** Aprobado

## Contexto

Landing page para Bloquera La Cadena, empresa fundada por José Ávila en Paso la Cadena, Durazno, Uruguay. Es la primera página pública de la empresa. Base existente: Next.js + Tailwind, con componentes ya construidos y 24 fotos de productos/fábrica disponibles en `/public/images/`.

## Objetivos

- Proyectar profesionalismo y confiabilidad desde el primer vistazo
- Logo prominente en el hero
- Valores de la empresa (calidad, entrega rápida, stock amplio, seriedad) transmitidos implícitamente — sin sección de Misión/Visión formal
- Usar fotos reales de productos para autenticidad

## Alcance — lo que cambia

### `data/site.ts`
- `address`: `"Paso la Cadena, Durazno, Uruguay"`
- `tagline`: `"Calidad que construye. Entrega que cumple."`
- `zone`: `"Durazno ciudad y zona rural"`

### `components/Hero.tsx` (cambio principal)
- **Fondo**: una de las fotos reales de `/public/images/` como background con overlay azul oscuro (~70% opacidad)
- **Layout** (opción C seleccionada): logo circular + nombre de empresa arriba-izquierda, título grande debajo, logo XXL semitransparente como elemento decorativo de fondo a la derecha
- **Copy actualizado**: transmite calidad y confiabilidad sin nombrar misión/visión
- **CTAs**: WhatsApp + "Ver catálogo" (sin cambios)

### `components/QuickInfo.tsx`
- Reemplazar emojis por SVG inline simples
- Ubicación: `"Paso la Cadena, Durazno"`
- Entrega: `"A pie de obra"`

### `components/Catalog.tsx` y `components/ProductCard.tsx`
- Confirmar que todas las cards muestren su imagen real (ya están en `data/site.ts`)
- Productos `featured: true` reciben etiqueta visual destacada
- Productos sin precio (`null`) muestran botón "Consultar por WhatsApp" directo

### `components/Delivery.tsx`
- Titular actualizado: `"Llegamos a pie de obra"`
- Lista de puntos actualizada para enfatizar confiabilidad y rapidez

### `components/Footer.tsx`
- Agregar línea: `"Fundada por José Ávila · Paso la Cadena, Durazno"`

## Lo que NO cambia
- Estructura de secciones (`page.tsx`): Navbar → Hero → QuickInfo → Catalog → Payments → Delivery → MapSection → Contact → Footer
- Paleta de colores (brand blue, cream)
- Tipografía (Barlow Condensed + DM Sans)
- Navbar
- Sección de Pagos
- Sección de Mapa y Contacto
- No hay sección nueva de Misión/Visión
- No hay sección "Por qué elegirnos"

## Foto para el Hero
Usar `/public/images/WhatsApp Image 2026-05-05 at 11.33.38.jpeg` (bloque de 15) como fondo del hero, o la que se vea mejor con overlay. El criterio es que muestre textura/material real de los bloques.

## Decisiones de diseño
- Los valores de calidad, seriedad y entrega se transmiten a través del copy y el tono visual, no con una sección explícita
- El logo aparece grande en el hero y pequeño en navbar y footer — consistencia sin redundancia
- La paleta azul oscuro + crema ya transmite seriedad industrial sin necesidad de agregar elementos
