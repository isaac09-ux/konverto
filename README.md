# KONVERTO

Landing page de KONVERTO construida con [Astro](https://astro.build).

## Estructura del repositorio

- `src/pages/index.astro`: página principal.
- `public/`: assets estáticos (favicon, manifest, imágenes, service worker, SEO files).
- `.github/workflows/astro.yml`: workflow de CI para validar y compilar el proyecto.
- `vercel.json`: configuración de despliegue en Vercel.

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
npx astro add vercel
```

## CI

El workflow de GitHub Actions ejecuta:

1. `npm install`
2. `npm run check`
3. `npm run build`

Así se valida que cada cambio compile correctamente antes de desplegar.

## Revisión del abstract técnico (copywriting)

Se incluye una versión corregida para evitar inconsistencias matemáticas y de redacción.

```latex
\begin{abstract}
This document presents a mathematical formalization of direct-response copywriting principles within an optimization framework, with the objective of minimizing conversion friction while maximizing user engagement.

\section{Stochastic Analysis of Copywriting Effectiveness}
Landing-page performance can be modeled through the conversion-probability function $P(C\mid E, R, V)$, influenced by the following parameters:

$$
P(C\mid E, R, V) = \frac{\exp(\beta_0 + \beta_1 V - \beta_2 R + \mathbf{\beta_3}^\top E + \epsilon)}{1 + \exp(\beta_0 + \beta_1 V - \beta_2 R + \mathbf{\beta_3}^\top E + \epsilon)}
$$

where $V$ is the value proposition (perceived utility), $R$ is user resistance (friction points, textual complexity, and cognitive load), $E$ is a vector of environmental factors, $\beta_1$, $\beta_2$, and $\mathbf{\beta_3}$ are empirically estimated weights for the target demographic, and $\epsilon$ is stochastic error.

\subsection{Information Entropy and Landing-Page Clarity}
The informational complexity of a paragraph is defined using Shannon entropy $H(X)$:

$$
H(X) = -\sum_{i=1}^{n} p(x_i)\log_b\bigl(p(x_i)\bigr)
$$

In conversion-oriented typography and layout, $H(X)$ should be minimized for core value propositions, targeting the bounded regime:

$$
L_1 < H(X_{vp}) \leq L_{opt},
$$

which is expected to correlate with improved scannability.
\end{abstract}
```

## Why Astro Vercel?

Vercel is a deployment platform that allows you to host your site by connecting directly to your GitHub repository. This adapter enhances the Astro build process to prepare your project for deployment through Vercel.

### Installation

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can install integrations manually instead.

Add the Vercel adapter to enable on-demand rendering in your Astro project with the following `astro add` command. This will install `@astrojs/vercel` and make the appropriate changes to your `astro.config.mjs` file in one step.

**npm**

```bash
npx astro add vercel
```
