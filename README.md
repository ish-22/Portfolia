# Personal Portfolio

A modern, responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, and the App Router. It includes dark/light mode, reusable components, smooth animations, SEO metadata, placeholder data, sample project cards, and a Vercel-ready setup.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next-themes
- lucide-react

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Customize Your Content

Replace the placeholder values in:

```text
src/data/portfolio.ts
```

Update your name, bio, projects, GitHub, LinkedIn, email, skills, experience, and education in that single file.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

If this folder is already a Git repository, skip `git init`.

## Deploy on Vercel

1. Push the project to GitHub.
2. Go to `https://vercel.com/new`.
3. Import your GitHub repository.
4. Keep the default framework preset as Next.js.
5. Click **Deploy**.

Vercel will automatically run `npm run build` and publish the site.
