# PLEUNTAH Website

Offizielle Website für den YouTuber und Rapper **PLEUNTAH**.
Entwickelt mit Next.js 15 (App Router), TypeScript und Tailwind CSS v4.

## Features

- **Modernes Dark-Mode Design**: Neon-Akzente und responsive Layouts.
- **Diskografie**: Übersicht aller Releases (Alben, EPs, Singles) mit Filter.
- **Videos**: YouTube-Integration der beliebtesten Formate.
- **SEO**: Optimierte Metadaten für alle Seiten.

## Installation

1. Repository klonen:
   ```bash
   git clone <repo-url>
   cd pleuntah
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder
   yarn install
   # oder
   pnpm install
   ```

3. Development Server starten:
   ```bash
   npm run dev
   ```

   Die Seite ist nun unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Daten anpassen

Die Inhalte der Seite werden über strukturierte TypeScript-Dateien im `data/`-Ordner gesteuert. Dies ermöglicht eine einfache Pflege ohne Code-Änderungen an den Komponenten.

- **Releases**: `data/releases.ts`
  - Hier können neue Singles, EPs oder Alben hinzugefügt werden.
  - Typen: `'album' | 'ep' | 'single'`

- **Videos**: `data/videos.ts`
  - Hier werden die YouTube-Videos gepflegt.
  - Benötigt die YouTube-Video-ID (nicht die volle URL).

- **Social Links**: `data/socials.ts`
  - Zentrale Verwaltung aller Social-Media-Links.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: Geist Sans / Mono (Next.js Default)

## Lizenz

© 2025 PLEUNTAH. Alle Rechte vorbehalten.
