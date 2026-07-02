# BokaMx

Sitio web institucional desarrollado para **Boka Clínica Dental Integral**, construido con **Next.js 15**, **React 18**, **TypeScript** y **Bootstrap 5**.

El proyecto está diseñado bajo una arquitectura basada en componentes reutilizables utilizando el **App Router** de Next.js, permitiendo una fácil adaptación para otros sitios del sector salud o servicios.

---

# Tabla de contenido

- Descripción
- Características
- Stack tecnológico
- Arquitectura
- Estructura del proyecto
- Flujo de navegación
- Componentes
- API
- Variables de entorno
- Instalación
- Scripts disponibles
- Assets
- Convenciones del proyecto
- Despliegue
- Mejoras sugeridas

---

# Descripción

BokaMx es un sitio web corporativo para una clínica dental.

Su objetivo es presentar:

- Información institucional
- Tratamientos dentales
- Instalaciones
- Información de contacto
- Formulario para solicitar información

La aplicación fue desarrollada utilizando el App Router de Next.js y una estructura modular que facilita la reutilización de componentes.

---

# Características

- Next.js App Router
- React 18
- TypeScript
- Bootstrap 5
- CSS tradicional
- Arquitectura basada en componentes
- Formularios de contacto
- API Route para envío de correo
- Responsive Design
- SEO Friendly
- Animaciones con AOS
- Animaciones con GSAP
- Carruseles con Swiper
- Organización modular

---

# Stack tecnológico

## Framework

- Next.js 15

## Lenguaje

- TypeScript

## UI

- React 18
- Bootstrap 5

## Librerías

- AOS
- GSAP
- Swiper
- React Icons
- React CountUp
- React Modal Video
- React ProgressBar
- React Scroll
- React Visibility Sensor

## Backend

- Next.js API Routes

## Envío de correo

- Nodemailer

---

# Arquitectura

El proyecto utiliza el **App Router** de Next.js.

La aplicación se encuentra organizada mediante componentes reutilizables separados por responsabilidad.

```
App
│
├── Layout
│
├── Header
│
├── Pages
│     ├── Home
│     ├── About
│     ├── Services
│     ├── Instalaciones
│     └── Contact
│
├── Components
│
├── Sections
│
├── Footer
│
└── API
      └── Contact
```

---

# Estructura del proyecto

```
BokaMx
│
├── app
│   ├── about
│   ├── api
│   │   └── contact
│   ├── contact
│   ├── instalaciones
│   ├── service
│   ├── 404
│   ├── loading.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── elements
│   ├── layout
│   │   ├── footer
│   │   ├── header
│   │   └── Layout.tsx
│   │
│   └── sections
│       └── home-1
│
├── public
│   └── assets
│       ├── css
│       ├── fonts
│       ├── images
│       └── js
│
├── util
│
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# Flujo de navegación

```
Inicio
│
├── Nosotros
│
├── Servicios
│
├── Instalaciones
│
└── Contacto
       │
       └── Formulario
              │
              └── API Contact
                     │
                     └── Nodemailer
```

---

# Rutas

| Ruta | Descripción |
|-------|-------------|
| / | Página principal |
| /about | Información de la clínica |
| /service | Tratamientos |
| /instalaciones | Instalaciones |
| /contact | Contacto |
| /api/contact | API para envío de correo |

---

# Componentes principales

## Layout

Se encarga de:

- Header
- Footer
- Scroll Top
- Menú móvil
- Wrapper general

Archivo:

```
components/layout/Layout.tsx
```

---

## Header

Responsable de:

- Navegación
- Menú principal
- Logo
- CTA

```
components/layout/header
```

---

## Footer

Incluye:

- Información de contacto
- Horarios
- Tratamientos
- Enlaces rápidos
- Copyright

```
components/layout/footer
```

---

## Home

La página principal está dividida en componentes independientes.

Ejemplo:

```
Hero

About

Services

Why Choose Us

Counter

Testimonials

Contact CTA

Footer
```

---

# API

El proyecto incluye una API Route para procesar el formulario de contacto.

Ruta:

```
app/api/contact/route.ts
```

Recibe:

```
name

phone

email

service

message
```

Posteriormente genera un correo utilizando Nodemailer.

---

# Variables de entorno

Crear un archivo:

```
.env.local
```

Contenido:

```env
GMAIL_USER=correo@gmail.com

GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx

GMAIL_RECEIVER=destino@gmail.com
```

Importante:

No utilizar la contraseña normal de Gmail.

Debe utilizarse una contraseña de aplicación.

---

# Instalación

Clonar repositorio

```
git clone https://github.com/IngeniaTex/BokaMx.git
```

Entrar al proyecto

```
cd BokaMx
```

Instalar dependencias

```
npm install
```

Ejecutar

```
npm run dev
```

Abrir

```
http://localhost:3000
```

---

# Scripts disponibles

Desarrollo

```
npm run dev
```

Producción

```
npm run build
```

Ejecutar producción

```
npm run start
```

Lint

```
npm run lint
```

---

# Assets

Todos los recursos estáticos se encuentran en:

```
public/assets
```

Distribución:

```
css

fonts

images

js
```

---

# Estilos

Los estilos son cargados desde el Layout principal.

Incluyen:

- Bootstrap
- AOS
- FontAwesome
- Estilos del Template
- Responsive
- Animaciones

---

# Alias de TypeScript

El proyecto utiliza alias:

```
@/*
```

Ejemplo

```ts
import Layout from "@/components/layout/Layout";
```

---

# Responsive

El sitio está preparado para:

- Desktop
- Tablet
- Mobile

Utilizando Bootstrap 5.

---

# SEO

La aplicación aprovecha las capacidades del App Router para:

- Metadata
- Mejor rendimiento
- Optimización para buscadores
- Renderizado del lado del servidor cuando aplica

---

# Despliegue

La aplicación puede desplegarse directamente en:

- Vercel (recomendado)
- VPS con Node.js
- Docker
- Cualquier hosting compatible con Next.js

Proceso recomendado:

```
npm run build

npm run start
```

---

# Convenciones del proyecto

- Componentes reutilizables
- Separación por responsabilidad
- Organización por secciones
- Assets centralizados
- Imports mediante alias
- Uso de TypeScript
- Layout único reutilizable

---

# Dependencias principales

- next
- react
- react-dom
- typescript
- bootstrap
- aos
- gsap
- swiper
- nodemailer
- react-icons
- react-countup
- react-scroll
- react-modal-video
- react-visibility-sensor

---

# Posibles mejoras

## Arquitectura

- Separar componentes comunes en una carpeta shared.
- Crear componentes UI reutilizables.
- Centralizar constantes.

## SEO

- Metadata específica por página.
- Open Graph.
- Twitter Cards.
- Sitemap.
- Robots.

## Rendimiento

- Optimizar imágenes utilizando next/image.
- Lazy Loading para componentes pesados.
- Optimización de fuentes.

## Accesibilidad

- Mejorar contraste.
- Agregar aria-labels.
- Navegación por teclado.

## Calidad

- ESLint más estricto.
- Prettier.
- Husky.
- Commitlint.

## Testing

Agregar:

- Jest
- React Testing Library
- Playwright

---

# Créditos

Proyecto desarrollado para **Boka Clínica Dental Integral** utilizando **Next.js**, **React**, **TypeScript** y **Bootstrap**, siguiendo una arquitectura modular basada en componentes reutilizables para facilitar futuras adaptaciones a nuevos proyectos del mismo tipo.