# Verdora — Organic Skincare Website Prototype

A 7-page responsive website prototype for **Verdora**, a small-batch organic skincare brand, built for the SafeX Solutions Week 4 Client-Ready Sprint.

## Pages
1. `index.html` — Home
2. `about.html` — About / founder story
3. `shop.html` — Shop (filterable product grid)
4. `gallery.html` — Behind the Brand (process gallery)
5. `sustainability.html` — Impact (sustainability metrics, extra page)
6. `blog.html` — Journal (blog/resources, extra page)
7. `contact.html` — Contact (working dev-mode form)

## Tech
Plain HTML5 / CSS3 / vanilla JS — no build step, so it deploys instantly to any static host (Netlify, Vercel, GitHub Pages). Fonts loaded from Google Fonts (Fraunces + Public Sans).

## Design decisions
- **Palette**: ivory (#FAF6F0), deep forest green (#2F3B2A), sage (#93A386), blush (#EBD3C5), muted rose (#C97F6B), soft gold (#B9975B) — chosen to read as botanical/editorial rather than the generic "clean beauty" mint-and-white look.
- **Typography**: Fraunces (organic serif with soft curves) paired with Public Sans (clean, neutral body face) — avoids the default cream-background/high-contrast-serif combo that's become an AI-design cliché.
- **Signature element**: a hand-drawn "vine" SVG divider that grows across the page on scroll (via IntersectionObserver), echoing the botanical/ingredient theme without being literal or twee. Used sparingly — once or twice per page.
- **Layout**: asymmetric editorial hero (not centered hero + stat blocks), magazine-style masonry gallery, filterable shop grid.
- **Accessibility**: skip link, visible focus states, semantic headings, descriptive `alt`/`aria-label` text on all visual placeholders, `prefers-reduced-motion` respected.
- **SEO**: unique `<title>` and meta description per page, Open Graph tags on home, semantic HTML structure (`header`, `main`, `footer`, `article`).

## Contact form
The form validates client-side and currently logs submissions to the browser console (`js/main.js`) — satisfies the "log to console/email in dev" requirement. In production this would POST to a serverless function or a service like Formspree.

## Deployment
Drag-and-drop this folder into Netlify, or run `npx serve .` locally, or push to a GitHub repo and enable GitHub Pages on the `main` branch root.

## Image placeholders
All imagery is currently CSS gradient placeholders with descriptive `alt`/`aria-label` text, ready to be swapped for real product photography before client delivery.
