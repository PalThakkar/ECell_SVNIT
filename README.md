# E-Cell SVNIT

A Next.js website for E-Cell SVNIT. The app includes public-facing pages for events, team, jobs, contact, merch, and blog content, with shared layout and reusable UI components.

## Tech Stack

- Next.js 15 with the App Router
- React 18
- Tailwind CSS
- Framer Motion
- HeroUI, Radix UI, Lucide, React Icons
- Vercel Analytics and Speed Insights

## Getting Started

1. Install dependencies.

   ```bash
   npm install
   ```

2. Start the development server.

   ```bash
   npm run dev
   ```

3. Open the site in your browser.

   ```text
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build locally.
- `npm run lint` runs the Next.js lint check.

## Project Structure

- `src/app` contains route segments, layouts, and page files.
- `src/components` contains shared UI and section components.
- `src/config` contains site-level configuration such as metadata helpers.
- `src/lib` contains utility helpers.
- `public` stores static assets such as images and event media.

## Notes

- The site uses a shared root shell in `src/components/RootLayout.jsx`.
- Metadata is centralized through `src/config/site.js`.
- Most route pages are built from reusable sections rather than page-specific one-off layouts.