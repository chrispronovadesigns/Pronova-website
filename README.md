# Pronova Website

> You know the problem. We create the solution.

A modern, high-performance website for Pronova — a technology studio that builds apps, websites, and marketing systems. Built with Astro 6, TailwindCSS 4, and TinaCMS 3.

## Overview

This is the official website for Pronova, showcasing our services, products, portfolio, and blog. The site features:

- **Services:** App Development, Website Development, Digital Marketing, UI/UX Design, Data Science, Innovation Consulting
- **Products:** Digital Marketing Playbook, Pronova Productivity App, Hosting & Maintenance
- **Content Management:** Powered by TinaCMS for easy content updates
- **Performance:** Built with Astro for optimal speed and SEO
- **Styling:** TailwindCSS 4 with custom brand design system

## Tech Stack

- **Framework:** [Astro 6](https://astro.build/) — Static site generator
- **CMS:** [TinaCMS 3](https://tina.io/) — Git-based headless CMS
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) — Utility-first CSS
- **Fonts:** Space Grotesk (headings) + Inter (body)
- **Build Tool:** Vite 7

## Brand Guidelines

### Colors
- **Obsidian:** `#0A0A0F` — Primary background
- **Charcoal:** `#12121E` — Secondary background
- **Electric Violet:** `#7B2FFF` — Primary accent
- **Cyan Plasma:** `#00F0FF` — Secondary accent
- **Magenta:** `#FF2D8A` — Highlight

### Typography
- **Headings:** Space Grotesk (700 weight)
- **Body:** Inter (400/500/600 weights)
- **Style:** Sentence case, conversational, direct

### Gradient
Signature gradient: `#7B2FFF` → `#00F0FF`

## Getting Started

### Prerequisites

- **Node.js:** v18 or higher
- **npm:** v9 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Pronova-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with TinaCMS:

```bash
npm run dev
```

This will:
- Start Astro dev server at `http://localhost:4321`
- Start TinaCMS admin at `http://localhost:4321/admin`

**Note:** The `dev` script runs TinaCMS and Astro together. You can access the CMS admin panel to edit content while developing.

### Building for Production

Build the site for production:

```bash
npm run build
```

This will:
1. Build TinaCMS configuration
2. Generate static site in `dist/` directory

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### TinaCMS Only

Run TinaCMS development server independently:

```bash
npm run tina
```

## Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, CTABanner, ServicesGrid
│   │   └── ui/          # Smaller UI components
│   ├── content/         # Content collections (portfolio, blog, settings)
│   ├── layouts/         # Page layouts (BaseLayout, ServiceLayout)
│   ├── pages/           # File-based routing
│   │   ├── services/    # Service pages
│   │   ├── products/    # Product pages
│   │   ├── portfolio/   # Portfolio pages
│   │   └── blog/        # Blog pages
│   └── styles/          # Global CSS
├── tina/                # TinaCMS configuration
│   ├── config.ts        # Main TinaCMS config
│   └── collections/     # Content collection schemas
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # TailwindCSS configuration
└── package.json         # Dependencies and scripts
```

## Key Components

### Layouts
- **BaseLayout:** Main layout wrapper with SEO, fonts, header, footer
- **ServiceLayout:** Reusable layout for service pages with Hero and CTA

### Sections
- **Hero:** Page hero with badge, heading, subheading, CTAs, optional stats
- **ServicesGrid:** Grid of services with SVG icons
- **CTABanner:** Call-to-action banner with gradient background

## Content Management

### TinaCMS Admin

Access the CMS at `http://localhost:4321/admin` when running `npm run dev`.

**Content Collections:**
- **Portfolio:** Project case studies
- **Blog:** Articles and insights
- **Settings:** Global site settings (contact info, social links, SEO)

### Adding Content

1. Navigate to `/admin` in your browser
2. Log in with your credentials
3. Select a collection (Portfolio, Blog, etc.)
4. Create or edit content
5. Save — changes are committed to Git

## Deployment

The site is a static build and can be deployed to any static hosting provider:

- **Netlify:** Connect your Git repo, set build command to `npm run build`
- **Vercel:** Import project, build command `npm run build`, output directory `dist`
- **Cloudflare Pages:** Same as above

### Environment Variables

No environment variables are required for basic functionality. TinaCMS uses local file-based storage in development.

## SEO System

The site includes a comprehensive SEO system comparable to Rank Math:

- **Advanced Meta Tags** — Title, description, Open Graph, Twitter Cards
- **Schema.org Markup** — Organization, Service, Product, Article, FAQ, Breadcrumb
- **Structured Data** — Automatic and per-page schema injection
- **Breadcrumb Navigation** — Visual + schema markup
- **Sitemap Generation** — Automatic XML sitemap
- **Local SEO** — Geo tags and LocalBusiness schema

### Quick SEO Usage

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { buildServiceSchema } from '@/lib/seo/schema';

const serviceSchema = buildServiceSchema({
  name: 'Mobile App Development',
  description: 'Custom mobile app development.',
  price: '15000',
});
---

<BaseLayout
  title="Mobile App Development"
  description="Custom mobile app development for iOS and Android."
  keywords={['mobile app', 'iOS', 'Android']}
  schemas={[serviceSchema]}
>
  <!-- Content -->
</BaseLayout>
```

**Full Documentation:** See [`docs/SEO-GUIDE.md`](docs/SEO-GUIDE.md) for complete SEO system documentation.

**SEO Configuration:** Edit `src/lib/seo/config.ts` to update site-wide SEO settings.

## Contact Information

- **Email:** chris@pronovadesigns.com
- **Phone:** (956) 254-0043
- **Address:** 704 Paredes Line Rd, Brownsville, TX 78521
- **Website:** pronovadesigns.com (will migrate to pronova.tech)

## Social Media

- **LinkedIn:** [Pronova Designs](https://www.linkedin.com/company/pronova-designs)
- **Facebook:** [PronovaDesignsBTX](https://www.facebook.com/pronovadesignsbtx/)
- **Instagram:** [@pronova_Designs](https://www.instagram.com/pronova_Designs/)

## License

Private — All rights reserved by Pronova Designs.

---

Built with Astro and TinaCMS by [Pronova](https://pronovadesigns.com)
