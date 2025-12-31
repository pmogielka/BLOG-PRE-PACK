# PrePack.pl - Blog o przygotowanej likwidacji

Profesjonalny blog o procedurze pre-pack (przygotowanej likwidacji) w polskim prawie upadłościowym.

## Tech Stack

- **Next.js 15** z App Router
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4** z custom design system
- **Framer Motion** dla animacji
- **Radix UI** dla komponentów (Accordion)
- **React Hook Form + Zod** dla formularzy

## Uruchomienie

```bash
# Instalacja zależności
npm install
# lub
pnpm install

# Uruchomienie serwera dev
npm run dev
# lub
pnpm dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura projektu

```
src/
├── app/
│   ├── page.tsx           # Strona główna
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Globalne style
│   ├── blog/
│   │   ├── page.tsx       # Lista artykułów
│   │   └── [slug]/
│   │       └── page.tsx   # Szczegóły artykułu
│   └── kontakt/
│       └── page.tsx       # Formularz kontaktowy
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx # Nawigacja (glass morphism)
│   │   └── Footer.tsx     # Stopka
│   ├── home/
│   │   ├── Hero.tsx       # Sekcja hero
│   │   ├── Features.tsx   # Cechy pre-pack
│   │   ├── Stats.tsx      # Statystyki
│   │   ├── FAQ.tsx        # FAQ accordion
│   │   ├── CTA.tsx        # Call to action
│   │   └── FeaturedArticles.tsx
│   ├── blog/
│   │   ├── ArticleCard.tsx
│   │   └── TableOfContents.tsx
│   └── contact/
│       └── ContactForm.tsx
└── lib/
    ├── articles.ts        # Dane artykułów
    └── articleContent.ts  # Treść artykułów
```

## Design System

### Kolory
- **Brand**: Orange (#ea580c)
- **Neutral**: Slate scale

### Typografia
- **Headings**: Oswald
- **Body**: DM Sans

### Komponenty
- Glass morphism navigation
- Mesh gradient backgrounds
- Animated blobs
- Card hover effects
- FAQ accordion

## Artykuły

1. Czym jest Pre-Pack? Wprowadzenie
2. Podstawy prawne Pre-Pack w Polsce
3. Pre-Pack na świecie - UK, Niemcy, USA
4. Statystyki Pre-Pack w Polsce
5. Ekonomiczne skutki Pre-Pack
6. Kontrowersje i znane sprawy Pre-Pack

## Licencja

MIT
