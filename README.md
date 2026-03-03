# KONVERTO

<div align="center">
  <img src="https://konverto-alpha.vercel.app/konverto-logo.svg" alt="KONVERTO" width="420">
  
  <h2 style="font-family: 'Outfit', sans-serif; font-weight: 900; letter-spacing: -2px; color: #BFFF00;">
    Textos que convierten.
  </h2>

  <p><strong>Landing page oficial de KONVERTO</strong> — Agencia de copywriting para ads potenciada con IA.</p>

  **[Ver en vivo →](https://konverto-alpha.vercel.app)**
</div>

<br>

## ¿Qué es KONVERTO?

Te reescribimos **2 anuncios GRATIS** en 48 horas.  
Si convierten más → platicamos.  
Si no → te los quedas y no pagas nada.

Copy directo, sin rodeos, diseñado para negocios locales en Chihuahua y todo México.

---

## ✨ Características

- Diseño 100% fiel a la **Brand Identity Guide** (Febrero 2026)
- Hero impactante con efecto glow lime
- Sección Antes/Después ultra visual
- Precios transparentes y garantía real
- Optimizada para móvil (mobile-first)
- Carga ultra-rápida (< 1s) gracias a Astro
- Despliegue automático en Vercel

---

## 🛠 Tech Stack

- **[Astro 5](https://astro.build)** — Framework todo en uno
- **Tailwind CSS** — Estilos premium
- **Outfit + DM Sans** — Tipografía oficial de la marca
- **Vercel** — Hosting + CI/CD
- **TypeScript** — Tipado fuerte
- **GitHub Actions** — Validación automática

---

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollar localmente
npm run dev

# Validar tipos y código
npm run check

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura del proyecto

```text
konverto/
├── src/
│   ├── components/     # Hero, BeforeAfter, Pricing, etc.
│   ├── layouts/        # Layout base
│   ├── pages/
│   │   └── index.astro # Página principal
│   └── styles/         # Estilos globales
├── public/             # Imágenes, favicon, manifest
├── .github/workflows/  # CI con Astro
├── astro.config.mjs
├── tailwind.config.js
└── vercel.json
```

## 🔄 CI / CD

Cada push a `main` ejecuta automáticamente:

```bash
npm install
npm run check
npm run build
```

Si todo pasa → se despliega en Vercel.

## 🚀 Despliegue en Vercel

Ya configurado. Solo conecta tu repo de GitHub a Vercel y listo.

```bash
# Agregar adapter de Vercel (solo la primera vez)
npx astro add vercel
```

## 🎨 Brand Identity

Todo el diseño sigue fielmente la KONVERTO Brand Identity Guide (Febrero 2026):

- Color primario: Lime `#BFFF00`
- Tipografía: Outfit 900 (títulos) + DM Sans (cuerpo)
- Logo siempre en MAYÚSCULAS
- K acentuada en lime
