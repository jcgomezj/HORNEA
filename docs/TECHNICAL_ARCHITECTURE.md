# HORNEA - Arquitectura Técnica, SEO, Seguridad & Accesibilidad (WCAG 2.2 AA)

## 1. Arquitectura de Software & Patrones de Diseño

HORNEA implementa los principios de **Clean Architecture**, **Domain Driven Design (DDD)**, **Atomic Design** y **Separation of Concerns**.

```
  +-------------------------------------------------------------+
  |                     Presentation Layer                      |
  |     React Server Components, App Router Pages & UI          |
  +-------------------------------------------------------------+
                               |
                               v
  +-------------------------------------------------------------+
  |                      Application Layer                      |
  |         Use Cases: Cart, Order, Distributor Lead            |
  +-------------------------------------------------------------+
                               |
                               v
  +-------------------------------------------------------------+
  |                        Domain Layer                         |
  |             Entities: Product, Order, Lead, Recipe          |
  +-------------------------------------------------------------+
                               |
                               v
  +-------------------------------------------------------------+
  |                    Infrastructure Layer                     |
  |       Stripe, PostgreSQL (Prisma), Redis Caching, Resend    |
  +-------------------------------------------------------------+
```

---

## 2. Estrategia SEO Técnica completa (Día 1)

1. **JSON-LD Schemas**:
   - `Bakery / Organization Schema` en la Home Page.
   - `Recipe Schema` con instrucciones paso a paso en el blog de recetas.
   - `Product Schema` con precios, disponibilidades y valoraciones de 4.9+ estrellas.
2. **Metadata Dinámica**: Open Graph y Twitter Cards implementadas nativamente con Next.js Metadata API.
3. **Core Web Vitals**: Lighthouse Score target **> 95** mediante Next.js Image Optimization y font display swap.

---

## 3. Matriz de Accesibilidad WCAG 2.2 AA

- **Navegación por Teclado**: Anillos de foco visibles (`outline-[#D4AF37]`).
- **Lectores de Pantalla**: Etiquetas `aria-label`, `role="status"` para alertas toast y regiones semánticas HTML5 (`<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`).
- **Contraste de Color**: Relación de contraste mínimo de 4.5:1 entre el texto Crema `#F5EFE6` / Dorado `#D4AF37` y el fondo Obsidiana `#0B0B0B`.

---

## 4. Medidas de Seguridad & Escalabilidad

- **Protección contra CSRF & XSS**: Headers de seguridad (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`).
- **Rate Limiting**: Configurado para API de Server Actions y formularios de leads a 10 solicitudes / minuto por IP mediante Redis token bucket.
- **Estrategia de Caching & Edge Rendering**: ISR (Incremental Static Regeneration) para el catálogo de productos y recetas.
