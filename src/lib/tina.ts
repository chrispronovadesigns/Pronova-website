/**
 * TinaCMS client helpers
 *
 * Once `npm run dev` or `tinacms build` has run, the generated client will
 * exist at `tina/__generated__/client`. Import from there for typed queries.
 *
 * Usage (in .astro files):
 *   import { getAllPosts, getPostBySlug } from '@/lib/tina';
 */

// ── Types (mirrors TinaCMS collection fields) ─────────────────────────────────

export interface TinaPost {
  _sys: { filename: string };
  title: string;
  description: string;
  category?: string;
  publishedDate: string;
  author?: string;
  readingTime?: string;
  heroImage?: string;
  featured?: boolean;
  draft?: boolean;
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
  body: object; // TinaMarkdown rich-text AST
}

export interface TinaPortfolioItem {
  _sys: { filename: string };
  title: string;
  description: string;
  category?: string;
  coverImage?: string;
  clientName?: string;
  liveUrl?: string;
  completedDate?: string;
  featured?: boolean;
  tags?: { tag: string }[];
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: string };
  body: object;
}

export interface TinaTeamMember {
  _sys: { filename: string };
  name: string;
  role: string;
  shortBio?: string;
  photo?: string;
  linkedin?: string;
  twitter?: string;
  body: object;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Derive a reading-time estimate from a word count.
 */
export function estimateReadingTime(wordCount: number): string {
  const mins = Math.ceil(wordCount / 200);
  return `${mins} min read`;
}

/**
 * Format a date string to a human-readable format.
 */
export function formatDate(dateStr: string, options?: Intl.DateTimeFormatOptions): string {
  return new Date(dateStr).toLocaleDateString('en-US', options ?? {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

/**
 * Build a canonical slug from a filename (strips extension).
 */
export function slugFromFilename(filename: string): string {
  return filename.replace(/\.(mdx?|json)$/, '');
}
