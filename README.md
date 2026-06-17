# Alar Publications (Alar Veliyeedu)

Welcome to the **Alar Publications (அலர் வெளியீடு)** website repository. This is a Next.js web application built to showcase and catalog books, authors, and literary collections published by Alar Veliyeedu.

## 🌟 Features

- **Bilingual Support (i18n):** Seamless translation between English and Tamil (`en` and `ta`), supporting deeply localized URLs, navigation, and book metadata.
- **Modern Framework:** Built on **Next.js 16** with **React 19** server-side rendering for optimal performance and SEO.
- **Styling & Animations:** Crafted using **Tailwind CSS v4** and animated perfectly with **GSAP**.
- **Book Display System:** Detailed book catalog pages including components for showing prices, formats, bilingual descriptions, and author biographies.
- **Legacy Static Integrations:** Supports previous static pages gracefully under `legacy_static`.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) (Version 16.x)
- [React](https://react.dev/) (Version 19.x)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) for UI interactions
- [Lucide Icons](https://lucide.dev/)
- TypeScript

## 📂 Project Structure

```text
├── app/
│   ├── [lang]/           # Localized app routes (books, contact, privacy, etc.)
│   ├── books/            # Main book routing
│   ├── globals.css       # Global styles
│   └── page.tsx          # Index Page
├── components/           # Reusable UI component modules (Hero, BookList, Header, Footer)
├── data/                 # Data collections (e.g. `books.ts` for catalog content)
├── dictionaries/         # JSON translation files (`en.json`, `ta.json`)
├── i18n/                 # Internationalization configurations
├── legacy_static/        # Existing legacy static HTML pages
└── tailwind.config.*     # Tailwind CSS configuration rules
```

## 🛠️ Getting Started

First, install all necessary dependencies. Ensure you are on Node.js version `20.9.0` or higher.

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Content Management

To add or modify details for the books listed, edit the data inside `data/books.ts`. The bilingual structure expects both `en` (English) and `ta` (Tamil) values to be provided for elements like titles, desc, authors, and other metadata.

For translation dictionaries, you can update application-level string mappings via:
- `/dictionaries/en.json`
- `/dictionaries/ta.json`

## 📜 License

All rights reserved by Alar Publications (அலர் வெளியீடு).
