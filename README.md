# Ziyad Adamo Portfolio

Single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Features

- Data-driven content from a single source file
- Premium dark UI with one accent color
- Scroll reveal animations with staggered cards/lists
- Sticky header with active-section indicator (scrollspy)
- Back-to-top button after scroll
- SEO metadata + basic OpenGraph preview + SVG icon

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Content Management

All editable profile content is centralized in:

- `src/data/profile.ts`

That file contains:

- Personal info
- Hero copy
- UI labels (section titles, CTA labels, helper text)
- Experience
- Education
- Skills by category
- Courses and certifications
- Achievements
- Languages and qualities
- Contact links
- Nav items
- SEO metadata

To switch text to Portuguese later, edit only this file and keep components unchanged.

## CV File

The download button uses:

- `public/cv-ziyad-adamo.pdf`

To replace it:

1. Put your updated file at `public/cv-ziyad-adamo.pdf` (same name), or
2. Change the href in header/hero buttons if you want a different filename.

## SEO / Brand Assets

- Metadata source: `src/data/profile.ts` (`meta` object)
- OpenGraph preview image: `public/og-za.svg`
- App icon: `app/icon.svg`

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is optimized out-of-the-box for **Vercel** (free tier).

1. Push your code to a GitHub/GitLab repository.
2. Go to your Vercel Dashboard and click **Add New** -> **Project**.
3. Import your repository.
4. The framework will be automatically detected as **Next.js**.
5. Set your project name to a clean slug (e.g. `ziyad-adamo` or `ziyad-portfolio`).
6. Click **Deploy**.
7. Once finished, your URL will be live at `https://ziyad-adamo.vercel.app` (depending on availability).

## Setting up a Custom Domain (Optional)

When you buy a domain (e.g., from Namecheap, GoDaddy):
*We recommend `ziyadadamo.com` (or `.tech` / `.me`), or a subdomain like `portfolio.ziyadadamo.com`.*

1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Enter your custom domain name and click **Add**.
3. Vercel will give you a list of DNS records (usually an **A record** pointing to an IP address, or a **CNAME** pointing to `cname.vercel-dns.com`).
4. Log into your domain registrar's DNS settings panel.
5. Add the records exactly as Vercel instructs.
6. Wait a few minutes. Vercel will automatically verify the domain and provision a free SSL certificate for you.
