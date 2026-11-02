import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';
import { getArticles, articleUrl } from '../lib/articles';

export async function GET(context: APIContext) {
  const articles = (await getArticles()).filter((a) => !a.data.draft);
  return rss({
    title: SITE.name,
    description: SITE.positioning,
    site: context.site!,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: articleUrl(a),
    })),
  });
}
