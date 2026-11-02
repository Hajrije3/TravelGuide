import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_KEYS } from './lib/categories';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    category: z.enum(CATEGORY_KEYS),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** When prices/fares in the article were last verified (plan: date-stamp all costs). */
    pricesCheckedOn: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    /** Required for licensed photos (e.g. Creative Commons): shown under the hero image. */
    heroCredit: z
      .object({
        author: z.string(),
        license: z.string(),
        licenseUrl: z.string().url().optional(),
        source: z.string().url(),
      })
      .optional(),
    /** Set true when the article contains affiliate links — shows the disclosure box. */
    affiliate: z.boolean().default(false),
    /** Sponsored / paid content — shows a clear sponsor label. */
    sponsored: z.boolean().default(false),
    /** Drafts are visible in `npm run dev` only, never in the production build. */
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
