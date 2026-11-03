# Rahul Savsani — Portfolio

A single-page portfolio built with Next.js, React, and TypeScript. Portfolio content is stored in JSON files under `content/` and loaded by `lib/content/static.ts`.

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project checks

```bash
npm run typecheck
npm run build
```

## Content

Update the JSON files in `content/` to change profile details, experience, education, skills, projects, social links, and site settings. The primary page is `app/page.tsx`; shared layout components and cursor effects are in `components/`.

Set `SITE_URL` when deploying so canonical metadata, `robots.txt`, and the sitemap use the production origin.
