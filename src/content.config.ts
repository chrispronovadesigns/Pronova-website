import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
  metaTitle:       z.string().optional(),
  metaDescription: z.string().optional(),
  ogImage:         z.string().optional(),
}).optional();

// Blog posts — matches TinaCMS 'post' collection
const post = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:         z.string(),
    description:   z.string(),
    category:      z.enum(['Productivity', 'Wellness', 'Mindfulness', 'Tech']).optional(),
    publishedDate: z.string(),
    author:        z.string().default('Pronova Designs'),
    readingTime:   z.string().optional(),
    heroImage:     z.string().optional(),
    featured:      z.boolean().default(false),
    draft:         z.boolean().default(false),
    seo:           seoSchema,
  }),
});

// Portfolio items — matches TinaCMS 'portfolio' collection
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title:         z.string(),
    description:   z.string(),
    category:      z.enum(['Mobile App', 'Web App', 'Website', 'Digital Marketing', 'UI/UX', 'Data Science']).optional(),
    coverImage:    z.string().optional(),
    completedDate: z.string().optional(),
    clientName:    z.string().optional(),
    liveUrl:       z.string().url().optional(),
    featured:      z.boolean().default(false),
    tags:          z.array(z.object({ tag: z.string() })).default([]),
    seo:           seoSchema,
  }),
});

// Team members — matches TinaCMS 'team' collection
const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name:     z.string(),
    role:     z.string(),
    shortBio: z.string().optional(),
    photo:    z.string().optional(),
    linkedin: z.string().url().optional(),
    twitter:  z.string().url().optional(),
  }),
});

export const collections = { post, portfolio, team };
