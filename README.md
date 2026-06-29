
# Ozii Photos

A professional photography business website for **Ozii Photos** — built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

A sleek, dark-themed single-page marketing site showcasing Ozii Photos' photography services, client testimonials, and a contact/booking form. The browser tab displays the **OZII** brand favicon.

## Features

- **Hero Section** — Full-screen intro with gradient blobs, headline, CTA buttons, and stat counters
- **Services Grid** — Six photography service cards with hover animations
- **Social Proof** — Animated stat counters + auto-advancing testimonial carousel
- **CTA Section** — Prominent booking call-to-action with ambient glow effects
- **Contact Form** — Inquiry form with service selector, date picker, and success state
- **Footer** — Brand info, navigation links, services list, and social icons
- **OZII Favicon** — Custom SVG browser tab icon with amber branding

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [React Router DOM 7](https://reactrouter.com/) — client-side routing
- [Lucide React](https://lucide.dev/) — icon library

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx
│   ├── FeatureGrid.tsx
│   ├── SocialProof.tsx
│   ├── CTASection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/
│   └── HomePage.tsx
├── lib/
│   └── supabase.ts
├── App.tsx
├── main.tsx
└── index.css
```
  