# SEO System Guide

Complete guide to the Pronova website SEO system — designed to match Rank Math functionality.

## Overview

The SEO system provides comprehensive search engine optimization with:

- **Advanced Meta Tags** — Title, description, Open Graph, Twitter Cards
- **Schema.org Markup** — Organization, Service, Product, Article, FAQ, Breadcrumb schemas
- **Structured Data** — Automatic and per-page schema injection
- **Breadcrumb Navigation** — Visual + schema markup
- **Sitemap Generation** — Automatic XML sitemap
- **Local SEO** — Geo tags and LocalBusiness schema
- **Keywords & Robots** — Full control over indexing and keywords

## File Structure

```
src/
├── lib/seo/
│   ├── config.ts          # Centralized SEO configuration
│   └── schema.ts          # Schema.org builders and types
├── components/seo/
│   ├── SEOHead.astro      # Main SEO component
│   └── Breadcrumbs.astro  # Breadcrumb component with schema
└── pages/_examples/       # Example implementations
    ├── service-page-example.astro
    ├── product-page-example.astro
    └── faq-page-example.astro
```

## Configuration

### SEO Config (`src/lib/seo/config.ts`)

Centralized configuration for all SEO settings:

```typescript
export const seoConfig = {
  siteName: 'Pronova',
  siteUrl: 'https://pronovadesigns.com',
  defaultTitle: 'Pronova — Apps. Websites. Marketing.',
  defaultDescription: '...',
  organization: {
    name: 'Pronova',
    email: 'chris@pronovadesigns.com',
    phone: '+19562540043',
    address: { /* ... */ },
    social: { /* ... */ },
  },
  // ...
};
```

**Update this file to change:**
- Site-wide defaults
- Organization information
- Contact details
- Social media links
- Service offerings

## Basic Usage

### Standard Page

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="Page description for meta tags and search results"
  keywords={['keyword1', 'keyword2', 'keyword3']}
>
  <!-- Your content -->
</BaseLayout>
```

### With Custom Image

```astro
<BaseLayout
  title="Page Title"
  description="Page description"
  image="/images/custom-og-image.png"
>
  <!-- Your content -->
</BaseLayout>
```

### Noindex Page

```astro
<BaseLayout
  title="Private Page"
  description="This page won't be indexed"
  noindex={true}
>
  <!-- Your content -->
</BaseLayout>
```

## Schema Markup

### Service Page

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Breadcrumbs from '@/components/seo/Breadcrumbs.astro';
import { buildServiceSchema } from '@/lib/seo/schema';

const serviceSchema = buildServiceSchema({
  name: 'Mobile App Development',
  description: 'Custom mobile app development for iOS and Android.',
  serviceType: 'Software Development',
  price: '15000',
  priceCurrency: 'USD',
});

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services/' },
  { name: 'Mobile App Development' },
];
---

<BaseLayout
  title="Mobile App Development"
  description="Custom mobile app development for iOS and Android."
  keywords={['mobile app', 'iOS', 'Android']}
  schemas={[serviceSchema]}
>
  <div class="section">
    <div class="container">
      <Breadcrumbs items={breadcrumbs} class="mb-8" />
      <!-- Content -->
    </div>
  </div>
</BaseLayout>
```

### Product Page

```astro
---
import { buildProductSchema } from '@/lib/seo/schema';

const productSchema = buildProductSchema({
  name: 'Pronova Productivity App',
  description: 'All-in-one productivity app for modern teams.',
  image: '/images/products/productivity-app.png',
  price: '29',
  priceCurrency: 'USD',
  url: 'https://pronovadesigns.com/products/pronova-productivity-app/',
  applicationCategory: 'BusinessApplication',
});
---

<BaseLayout
  title="Pronova Productivity App"
  description="All-in-one productivity app for modern teams."
  image="/images/products/productivity-app.png"
  schemas={[productSchema]}
>
  <!-- Content -->
</BaseLayout>
```

### Blog Post / Article

```astro
---
import { buildArticleSchema } from '@/lib/seo/schema';

const articleSchema = buildArticleSchema({
  headline: 'How to Build a Mobile App in 2024',
  description: 'Complete guide to mobile app development.',
  image: '/images/blog/mobile-app-guide.png',
  datePublished: '2024-03-15',
  dateModified: '2024-03-16',
  author: 'Chris Migliorini',
  url: Astro.url.href,
});
---

<BaseLayout
  title="How to Build a Mobile App in 2024"
  description="Complete guide to mobile app development."
  type="article"
  publishedDate="2024-03-15"
  modifiedDate="2024-03-16"
  author="Chris Migliorini"
  schemas={[articleSchema]}
>
  <!-- Content -->
</BaseLayout>
```

### FAQ Page

```astro
---
import { buildFAQSchema } from '@/lib/seo/schema';

const faqs = [
  {
    question: 'How long does it take to build a mobile app?',
    answer: 'Typical mobile app development takes 3-6 months...',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes, we offer comprehensive maintenance packages...',
  },
];

const faqSchema = buildFAQSchema(faqs);
---

<BaseLayout
  title="Frequently Asked Questions"
  description="Common questions about our services and pricing."
  schemas={[faqSchema]}
>
  <!-- FAQ content -->
</BaseLayout>
```

### Multiple Schemas

Combine multiple schema types on a single page:

```astro
---
import { 
  buildServiceSchema, 
  buildBreadcrumbSchema,
  buildFAQSchema 
} from '@/lib/seo/schema';

const serviceSchema = buildServiceSchema({ /* ... */ });
const breadcrumbSchema = buildBreadcrumbSchema([/* ... */]);
const faqSchema = buildFAQSchema([/* ... */]);
---

<BaseLayout
  title="Service Page"
  description="..."
  schemas={[serviceSchema, breadcrumbSchema, faqSchema]}
>
  <!-- Content -->
</BaseLayout>
```

## Breadcrumbs

Add breadcrumb navigation with automatic schema markup:

```astro
---
import Breadcrumbs from '@/components/seo/Breadcrumbs.astro';

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services/' },
  { name: 'App Development', url: '/services/app-development/' },
  { name: 'Current Page' }, // Last item has no URL
];
---

<Breadcrumbs items={breadcrumbItems} class="mb-8" />
```

## Available Schema Builders

### `buildOrganizationSchema(overrides?)`

Creates Organization schema with default company info.

```typescript
const orgSchema = buildOrganizationSchema({
  description: 'Custom description override',
});
```

### `buildLocalBusinessSchema()`

Creates LocalBusiness schema with service catalog.

```typescript
const localBizSchema = buildLocalBusinessSchema();
```

### `buildServiceSchema(data)`

```typescript
const schema = buildServiceSchema({
  name: string,
  description: string,
  serviceType?: string,
  price?: string,
  priceCurrency?: string,
});
```

### `buildProductSchema(data)`

```typescript
const schema = buildProductSchema({
  name: string,
  description: string,
  image?: string,
  price?: string,
  priceCurrency?: string,
  url?: string,
  applicationCategory?: string,
});
```

### `buildArticleSchema(data)`

```typescript
const schema = buildArticleSchema({
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified?: string,
  author?: string,
  url: string,
});
```

### `buildBreadcrumbSchema(items)`

```typescript
const schema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Current Page' },
]);
```

### `buildFAQSchema(faqs)`

```typescript
const schema = buildFAQSchema([
  { question: 'Question?', answer: 'Answer.' },
]);
```

### `buildWebPageSchema(data)`

```typescript
const schema = buildWebPageSchema({
  name: string,
  description: string,
  url: string,
});
```

## Meta Tags Generated

### Primary Meta Tags
- `<title>` — Page title with site name
- `<meta name="description">` — Page description
- `<meta name="keywords">` — Comma-separated keywords
- `<meta name="author">` — Content author
- `<meta name="robots">` — Index/noindex directives
- `<link rel="canonical">` — Canonical URL

### Open Graph (Facebook/LinkedIn)
- `og:type` — website or article
- `og:url` — Canonical URL
- `og:title` — Page title
- `og:description` — Page description
- `og:image` — Social share image (1200x630)
- `og:site_name` — Site name
- `og:locale` — Language locale
- `article:published_time` — For articles
- `article:modified_time` — For articles
- `article:author` — For articles

### Twitter Cards
- `twitter:card` — summary_large_image
- `twitter:url` — Canonical URL
- `twitter:title` — Page title
- `twitter:description` — Page description
- `twitter:image` — Social share image
- `twitter:site` — Twitter handle
- `twitter:creator` — Twitter handle

### Local SEO
- `geo.region` — US-TX
- `geo.placename` — Brownsville
- `geo.position` — Coordinates
- `ICBM` — Coordinates

## Sitemap

Sitemap is automatically generated at `/sitemap-index.xml` and `/sitemap-0.xml`.

**Configuration** (`astro.config.mjs`):

```javascript
sitemap({
  filter: (page) => !page.includes('/_examples/'),
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
})
```

**Exclude pages from sitemap:**
- Add to filter function in config
- Or use `noindex: true` in BaseLayout

## Best Practices

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Make it compelling for clicks
- Unique for every page

### Meta Descriptions
- 150-160 characters optimal
- Include call-to-action
- Use primary and secondary keywords naturally
- Unique for every page

### Keywords
- 3-5 keywords per page
- Mix of short-tail and long-tail
- Include location keywords for local SEO
- Don't keyword stuff

### Images
- Use descriptive alt text
- OG images should be 1200x630px
- Use absolute URLs for social sharing
- Optimize file sizes

### Schema Markup
- Use specific schema types (Service, Product, Article)
- Include all relevant properties
- Test with Google Rich Results Test
- Combine multiple schemas when appropriate

### Breadcrumbs
- Use on all pages except homepage
- Keep hierarchy logical
- Last item should be current page (no link)

## Testing & Validation

### Google Tools
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Social Media
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### SEO Checkers
- Google Search Console
- Bing Webmaster Tools
- Screaming Frog SEO Spider

## Updating Global SEO Settings

Edit `src/lib/seo/config.ts`:

```typescript
export const seoConfig = {
  siteName: 'Your Site Name',
  siteUrl: 'https://yoursite.com',
  defaultTitle: 'Your Default Title',
  defaultDescription: 'Your default description',
  twitterHandle: '@yourhandle',
  
  organization: {
    name: 'Your Company',
    email: 'contact@yoursite.com',
    phone: '+1234567890',
    // Update address, social links, etc.
  },
};
```

## TinaCMS Integration

SEO fields are available in TinaCMS for:
- Blog posts (`seo.metaTitle`, `seo.metaDescription`, `seo.ogImage`)
- Portfolio items
- Services
- Products

Access via `/admin` when running `npm run dev`.

## Troubleshooting

### Schema not appearing
- Check browser console for JSON errors
- Validate with schema.org validator
- Ensure schema is passed to `schemas` prop

### Wrong title/description
- Check if page overrides defaults
- Verify BaseLayout props
- Clear browser cache

### Sitemap missing pages
- Check filter function in `astro.config.mjs`
- Ensure page isn't marked `noindex`
- Rebuild site with `npm run build`

### Images not showing in social shares
- Use absolute URLs (include domain)
- Check image dimensions (1200x630 recommended)
- Clear social media cache (use debugger tools)

---

**Need help?** Check the example files in `src/pages/_examples/` for complete implementations.
