import { defineConfig, defineSchema } from 'tinacms';

const schema = defineSchema({
  collections: [
    // ─────────────────────────────────────────────
    // BLOG POSTS
    // ─────────────────────────────────────────────
    {
      name: 'post',
      label: 'Blog Posts',
      path: 'src/content/blog',
      format: 'mdx',
      fields: [
        { type: 'string',   name: 'title',         label: 'Title',          required: true, isTitle: true },
        { type: 'string',   name: 'description',   label: 'Excerpt / Meta Description', required: true, ui: { component: 'textarea' } },
        {
          type: 'string', name: 'category', label: 'Category',
          options: ['Productivity', 'Wellness', 'Mindfulness', 'Tech'],
        },
        { type: 'datetime', name: 'publishedDate', label: 'Published Date',  required: true },
        { type: 'string',   name: 'author',        label: 'Author',          required: true },
        { type: 'string',   name: 'readingTime',   label: 'Reading Time',    placeholder: 'e.g. 5 min read' },
        { type: 'image',    name: 'heroImage',     label: 'Hero Image' },
        { type: 'boolean',  name: 'featured',      label: 'Featured Post?' },
        { type: 'boolean',  name: 'draft',         label: 'Draft (hide from site)?' },
        // SEO
        {
          type: 'object', name: 'seo', label: 'SEO',
          fields: [
            { type: 'string', name: 'metaTitle',       label: 'SEO Title (overrides page title)' },
            { type: 'string', name: 'metaDescription',  label: 'SEO Description', ui: { component: 'textarea' } },
            { type: 'image',  name: 'ogImage',          label: 'OG / Social Share Image' },
          ],
        },
        // Body
        { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
      ],
      ui: {
        filename: {
          readonly: false,
          slugify: (values) => values?.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ?? '',
        },
      },
    },

    // ─────────────────────────────────────────────
    // PORTFOLIO ITEMS
    // ─────────────────────────────────────────────
    {
      name: 'portfolio',
      label: 'Portfolio',
      path: 'src/content/portfolio',
      format: 'mdx',
      fields: [
        { type: 'string',   name: 'title',       label: 'Project Title',  required: true, isTitle: true },
        { type: 'string',   name: 'description', label: 'Short Description', required: true, ui: { component: 'textarea' } },
        {
          type: 'string', name: 'category', label: 'Category',
          options: ['Mobile App', 'Web App', 'Website', 'Digital Marketing', 'UI/UX', 'Data Science'],
        },
        { type: 'image',    name: 'coverImage',  label: 'Cover Image' },
        { type: 'datetime', name: 'completedDate', label: 'Completion Date' },
        { type: 'string',   name: 'clientName',  label: 'Client Name' },
        { type: 'string',   name: 'liveUrl',     label: 'Live URL' },
        { type: 'boolean',  name: 'featured',    label: 'Featured on Homepage?' },
        {
          type: 'object', name: 'tags', label: 'Tech Tags', list: true,
          ui: { itemProps: (item: { tag: string }) => ({ label: item.tag }) },
          fields: [{ type: 'string', name: 'tag', label: 'Tag' }],
        },
        // SEO
        {
          type: 'object', name: 'seo', label: 'SEO',
          fields: [
            { type: 'string', name: 'metaTitle',      label: 'SEO Title' },
            { type: 'string', name: 'metaDescription', label: 'SEO Description', ui: { component: 'textarea' } },
            { type: 'image',  name: 'ogImage',         label: 'OG Image' },
          ],
        },
        { type: 'rich-text', name: 'body', label: 'Case Study Content', isBody: true },
      ],
      ui: {
        filename: {
          readonly: false,
          slugify: (values) => values?.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ?? '',
        },
      },
    },

    // ─────────────────────────────────────────────
    // TEAM MEMBERS
    // ─────────────────────────────────────────────
    {
      name: 'team',
      label: 'Team Members',
      path: 'src/content/team',
      format: 'mdx',
      fields: [
        { type: 'string', name: 'name',     label: 'Full Name',   required: true, isTitle: true },
        { type: 'string', name: 'role',     label: 'Role / Title', required: true },
        { type: 'string', name: 'shortBio', label: 'Short Bio (card)', ui: { component: 'textarea' } },
        { type: 'image',  name: 'photo',    label: 'Photo' },
        { type: 'string', name: 'linkedin', label: 'LinkedIn URL' },
        { type: 'string', name: 'twitter',  label: 'Twitter / X URL' },
        { type: 'rich-text', name: 'body',  label: 'Full Bio', isBody: true },
      ],
    },

    // ─────────────────────────────────────────────
    // SERVICES (for dynamic content)
    // ─────────────────────────────────────────────
    {
      name: 'service',
      label: 'Services',
      path: 'src/content/services',
      format: 'mdx',
      fields: [
        { type: 'string', name: 'title',       label: 'Service Name',    required: true, isTitle: true },
        { type: 'string', name: 'slug',        label: 'URL Slug',        required: true, placeholder: 'e.g. app-development' },
        { type: 'string', name: 'description', label: 'Short Description', required: true, ui: { component: 'textarea' } },
        { type: 'string', name: 'icon',        label: 'Emoji Icon',      placeholder: 'e.g. 📱' },
        { type: 'boolean', name: 'featured',   label: 'Show on Homepage?' },
        {
          type: 'object', name: 'seo', label: 'SEO',
          fields: [
            { type: 'string', name: 'metaTitle',      label: 'SEO Title' },
            { type: 'string', name: 'metaDescription', label: 'SEO Description', ui: { component: 'textarea' } },
            { type: 'image',  name: 'ogImage',         label: 'OG Image' },
          ],
        },
        { type: 'rich-text', name: 'body', label: 'Service Page Content', isBody: true },
      ],
    },

    // ─────────────────────────────────────────────
    // PRODUCTS
    // ─────────────────────────────────────────────
    {
      name: 'product',
      label: 'Products',
      path: 'src/content/products',
      format: 'mdx',
      fields: [
        { type: 'string', name: 'title',       label: 'Product Name',    required: true, isTitle: true },
        { type: 'string', name: 'slug',        label: 'URL Slug',        required: true },
        { type: 'string', name: 'tagline',     label: 'Tagline' },
        { type: 'string', name: 'description', label: 'Description',     ui: { component: 'textarea' } },
        { type: 'string', name: 'icon',        label: 'Emoji Icon' },
        { type: 'string', name: 'badge',       label: 'Badge Label',     placeholder: 'e.g. App, Guide, Service' },
        { type: 'string', name: 'ctaLabel',    label: 'CTA Button Text' },
        { type: 'string', name: 'ctaUrl',      label: 'CTA Button URL' },
        { type: 'image',  name: 'heroImage',   label: 'Hero Image' },
        { type: 'boolean', name: 'comingSoon', label: 'Coming Soon?' },
        {
          type: 'object', name: 'seo', label: 'SEO',
          fields: [
            { type: 'string', name: 'metaTitle',      label: 'SEO Title' },
            { type: 'string', name: 'metaDescription', label: 'SEO Description', ui: { component: 'textarea' } },
            { type: 'image',  name: 'ogImage',         label: 'OG Image' },
          ],
        },
        { type: 'rich-text', name: 'body', label: 'Product Page Content', isBody: true },
      ],
    },

    // ─────────────────────────────────────────────
    // SITE SETTINGS (global)
    // ─────────────────────────────────────────────
    {
      name: 'siteSettings',
      label: 'Site Settings',
      path: 'src/content/settings',
      format: 'json',
      ui: { allowedActions: { create: false, delete: false }, global: true },
      match: { include: 'global' },
      fields: [
        // Brand
        { type: 'string', name: 'siteName',    label: 'Site Name' },
        { type: 'string', name: 'tagline',     label: 'Site Tagline' },
        { type: 'image',  name: 'logo',        label: 'Logo' },
        { type: 'image',  name: 'favicon',     label: 'Favicon' },
        // Contact
        {
          type: 'object', name: 'contact', label: 'Contact Info',
          fields: [
            { type: 'string', name: 'email',    label: 'Email' },
            { type: 'string', name: 'phone',    label: 'Phone' },
            { type: 'string', name: 'address',  label: 'Address' },
            { type: 'string', name: 'city',     label: 'City' },
            { type: 'string', name: 'state',    label: 'State' },
          ],
        },
        // Social
        {
          type: 'object', name: 'social', label: 'Social Links',
          fields: [
            { type: 'string', name: 'linkedin',  label: 'LinkedIn URL' },
            { type: 'string', name: 'facebook',  label: 'Facebook URL' },
            { type: 'string', name: 'instagram', label: 'Instagram URL' },
            { type: 'string', name: 'twitter',   label: 'Twitter / X URL' },
            { type: 'string', name: 'youtube',   label: 'YouTube URL' },
          ],
        },
        // Default SEO
        {
          type: 'object', name: 'defaultSeo', label: 'Default SEO',
          fields: [
            { type: 'string', name: 'metaTitle',      label: 'Default Meta Title' },
            { type: 'string', name: 'metaDescription', label: 'Default Meta Description', ui: { component: 'textarea' } },
            { type: 'image',  name: 'ogImage',         label: 'Default OG Image' },
          ],
        },
        // Analytics
        { type: 'string', name: 'googleAnalyticsId', label: 'Google Analytics ID (GA4)', placeholder: 'G-XXXXXXXXXX' },
      ],
    },
  ],
});

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.VERCEL_GIT_COMMIT_REF ?? 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema,
});
