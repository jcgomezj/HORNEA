<div align="center">

# 🥐 HORNEA
### *Momentos Recién Horneados • Congelados Gourmet de Colombia*

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Wompi Colombia](https://img.shields.io/badge/Wompi-Colombia-FFD700?style=for-the-badge)](https://wompi.co/)

**Plataforma de E-commerce y canal mayorista B2B especializada en panadería artesanal colombiana ultracongelada para Air Fryer u horno.**

[Catálogo](#-catálogo-y-experiencia-de-usuario) • [Arquitectura](#-arquitectura-técnica) • [Pasarela Wompi](#-integración-de-pagos-wompi-colombia) • [Instalación Local](#-guía-de-instalación-local) • [Estructura](#-estructura-del-proyecto)

</div>

---

## 📖 Propuesta de Valor

> *"HORNEA no vende congelados. HORNEA vende momentos recién horneados."*

HORNEA resuelve el antojo de panadería artesanal premium (palitos de queso costeño, pasteles de hojaldre de pollo y carne, croissants, rollos de canela y pandebonos) listos en **menos de 20 minutos directo al Air Fryer**, preservando el crujido del hojaldre y el queso derretido mediante una estricta cadena de frío a -18°C.

---

## ✨ Características Principales

### 🛒 Experiencia de Compra (B2C)
* **Catálogo Interactivo con Filtros Dinámicos:** Clasificación por hojaldres salados, dulces, complementos y más vendidos.
* **Tarjeta de Producto Estrella con Zoom Inmersivo:** Efecto hover cinematográfico (`scale-[1.03]` y sombras profundas) con desplegable fluido de ingredientes y temperatura recomendada para Air Fryer.
* **Carrito "Tu Congelador":** Barra de progreso interactiva con meta de **Envío Refrigerado Gratis** (umbral de $70.000 COP) y canje de cupones (`HORNEA10`, `FRESCOS20`, `AIRFRYER`).
* **Checkout Especializado para Colombia:** Despachos a las principales ciudades del país (Medellín, Bogotá, Cali, Barranquilla, Bucaramanga, Eje Cafetero).
* **Portal del Cliente & Rastreo Frío:** Línea de tiempo en 4 etapas (*Recibido ➔ En Congelador ➔ En Camión Frío (-18°C) ➔ Entregado*) y lista de antojos guardados (*Wishlist*).

### 🏢 Canal Mayorista B2B (HORECA)
* **Formulario para Distribuidores:** Captura de volumen mensual estimado, cobertura y canal de WhatsApp para abastecer cafeterías, hoteles, minimarkets y restaurantes.

### 📊 Panel de Administración
* Métricas en tiempo real de facturación, inventario, pedidos activos y gestión de prospectos B2B protegida por PIN configurable.

---

## 🛠 Arquitectura Técnica

El proyecto fue construido bajo estándares modernos de desarrollo web, priorizando rendimiento (Core Web Vitals > 95), accesibilidad (WCAG 2.2 AA) y diseño limpio:

* **Framework:** [Next.js 16](https://nextjs.org/) con App Router y Turbopack.
* **Librería UI:** [React 19](https://react.dev/) con Hooks tipados.
* **Estilizado:** [Tailwind CSS v4](https://tailwindcss.com/) con paleta Warm Artisan (`#FDFBF7`, `#0F172A`, `#C59B27`).
* **Iconografía:** [Lucide React](https://lucide.dev/).
* **SEO Técnico:** Metadata OpenGraph dinámica y datos estructurados JSON-LD (`Bakery / LocalBusiness`).

---

## 💳 Integración de Pagos (Wompi Colombia)

La plataforma cuenta con un servicio y endpoints dedicados para procesar pagos seguros en moneda local (**COP**):

```
+-------------------+           +-----------------------+           +------------------+
|  Cliente Hornea   | --------> | /api/wompi/create-... | --------> |  Wompi Checkout  |
| (Carrito/Checkout)| <-------- | (Firma SHA-256 HMAC)  | <-------- | (PSE/Nequi/Card) |
+-------------------+           +-----------------------+           +------------------+
                                                                             |
                                                                             v
                                                                    +------------------+
                                                                    | /api/wompi/web...|
                                                                    | (Actualiza Orden)|
                                                                    +------------------+
```

1. **Endpoint de Creación:** `POST /api/wompi/create-checkout`
   - Calcula el monto en centavos.
   - Genera la firma de integridad: `SHA256(reference + amountInCents + currency + integritySecret)`.
   - Devuelve los parámetros para inicializar el checkout o redirigir al portal seguro de Wompi.
2. **Endpoint de Webhook:** `POST /api/wompi/webhook`
   - Valida el checksum firmado contra `WOMPI_EVENTS_SECRET`.
   - Procesa eventos `transaction.updated` para aprobar pedidos en tiempo real.

---

## 📂 Estructura del Proyecto

```text
hornea-web/
├── docs/
│   ├── BRAND_MANUAL.md             # Guía de marca, colores y tipografía
│   └── TECHNICAL_ARCHITECTURE.md   # Arquitectura técnica y lineamientos
├── public/
│   └── images/
│       └── products/               # Fotografías de alta resolución de productos
├── src/
│   ├── app/
│   │   ├── admin/                  # Dashboard de gestión administrativa
│   │   ├── api/
│   │   │   └── wompi/              # Endpoints de checkout y webhooks Wompi
│   │   ├── checkout/               # Pantalla de checkout y confirmación
│   │   ├── distribuidores/         # Portal de ventas mayoristas B2B
│   │   ├── mi-cuenta/              # Portal de usuario y rastreo refrigerado
│   │   ├── globals.css             # Design tokens y utilidades Tailwind v4
│   │   ├── layout.tsx              # Root Layout, tipografías y StoreProvider
│   │   └── page.tsx                # Landing page principal y catálogo
│   ├── components/
│   │   ├── layout/                 # Header, Footer, CartDrawer, HorneaLogo
│   │   └── store/                  # HeroSection, ProductCatalog, ProductCard, etc.
│   ├── context/
│   │   └── StoreContext.tsx        # Estado global (carrito, órdenes, wishlist)
│   ├── data/
│   │   └── mockData.ts             # 22 productos gourmet y testimonios
│   ├── lib/
│   │   └── wompi.ts                # Servicio de firma y validación Wompi
│   └── types/
│       └── index.ts                # Interfaces TypeScript del dominio
├── .env.example                    # Plantilla de variables de entorno
├── .gitignore                      # Reglas de exclusión para Git
├── next.config.ts                  # Configuración de Next.js y Turbopack
├── package.json                    # Dependencias y scripts
└── tsconfig.json                   # Configuración de compilador TypeScript
```

---

## 🚀 Guía de Instalación Local

### Requisitos Previos
* **Node.js:** Versión 18.18+ o 20+ recomendada.
* **npm:** Versión 9+ o pnpm/yarn.
* **Git:** Instalado en el sistema.

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/jcgomezj/HORNEA.git
cd HORNEA
```

### Paso 2: Instalar Dependencias
```bash
npm install
```

### Paso 3: Configurar Variables de Entorno
Copia el archivo de ejemplo y ajusta tus credenciales de prueba:
```bash
cp .env.example .env.local
```

### Paso 4: Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000).

### Paso 5: Compilar para Producción
```bash
npm run build
npm run start
```

---

## 🔒 Variables de Entorno

| Variable | Tipo | Descripción |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_APP_URL` | Público | URL base del despliegue (ej. `http://localhost:3000`). |
| `NEXT_PUBLIC_WHATSAPP_CONTACT` | Público | Número oficial de contacto comercial en WhatsApp. |
| `NEXT_PUBLIC_ADMIN_PIN` | Público | PIN numérico de acceso a `/admin` (por defecto: `1234`). |
| `NEXT_PUBLIC_WOMPI_PUBLIC_KEY` | Público | Llave pública de Wompi para inicializar transacciones. |
| `WOMPI_PRIVATE_KEY` | Privado | Llave secreta privada para consultar API de Wompi. |
| `WOMPI_INTEGRITY_SECRET` | Privado | Secreto para calcular la firma de integridad SHA256. |
| `WOMPI_EVENTS_SECRET` | Privado | Secreto para verificar autenticidad de Webhooks. |

---

## 📄 Licencia y Créditos

Desarrollado con dedicación para los amantes de la buena panadería colombiana.  
© 2026 HORNEA Colombia S.A.S. Todos los derechos reservados.
