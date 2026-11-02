import { getCollection, type CollectionEntry } from 'astro:content';
import type { CategoryKey } from './categories';

export type Article = CollectionEntry<'articles'>;

/** Published articles, newest first. Drafts are included only during `astro dev`. */
export async function getArticles(category?: CategoryKey): Promise<Article[]> {
  const items = await getCollection(
    'articles',
    ({ data }) => (import.meta.env.DEV || !data.draft) && (!category || data.category === category),
  );
  return items.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const articleUrl = (a: Article) => `/guides/${a.id}/`;

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingMinutes(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 220));
}
