# Travel publication website

Static site built with [Astro](https://astro.build), based on the travel media business plan
(affordable European travel niche).

## Commands

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Local dev server at http://localhost:4321 (shows drafts) |
| `npm run build`   | Production build to `dist/` (drafts excluded)        |
| `npm run preview` | Preview the production build                         |
| `npm run check`   | Type-check the project                               |

## Before launch

1. **Brand & domain**: edit `src/site.config.ts` (`name`, `url`, `tagline`, social links).
2. **Email signup**: paste your email provider's form action URL into `newsletterAction`.
3. **Privacy policy**: replace the placeholder in `src/pages/privacy.astro`.
4. **About page**: add your own story in `src/pages/about.astro`.

## "Plan my trip" paid service (`/plan-my-trip/`)

Visitors fill in a 4-step form (trip, budget, preferences, contact). On submit:

1. The request is POSTed as JSON, with a reference ID like `TRIP-1102-K7QX`, to `tripPlanning.formEndpoint`.
2. The visitor is redirected to the payment link of their package. Packages are picked by number
   of days, and the reference is passed as `?client_reference_id=…`.
3. You match payment ↔ request by reference, write the plan and email it.

Setup in `src/site.config.ts` → `tripPlanning`:

- `formEndpoint`: e.g. a free [Formspree](https://formspree.io) form URL. Requests then arrive in your inbox.
  While empty, the form shows "Not open yet" and can't be submitted.
- `packages[].paymentLink`: a payment link per package (e.g. Stripe Payment Links, Lemon Squeezy, Paddle).
  If a link is empty, the visitor sees "request received, we'll email payment instructions" instead.
- `packages[].price` / `maxDays`, `deliveryTime`, `includes`: prices are placeholders.
- In your payment provider, set the success URL to `https://YOUR-DOMAIN/plan-my-trip/thanks/`.

Check that your payment provider supports businesses based in your country before choosing it.

## Sample plans (`/sample-plans/`)

Five preview plans (Budapest, Prague, Vienna, Venice, Istanbul) are defined in `src/lib/samples.ts`.
Each shows the overview, budget, Day 1 in full and one teaser per section. The other days are
**not** in the page code (blurred placeholders only), so visitors have to request a plan to get them.
Travelers in the samples are fictional. "Request my plan" pre-fills the destination and number of days.

## Writing articles

Unwritten article outlines from the backlog are kept in `content-backlog/`, which isn't published.
Move a file back into `src/content/articles/` when you start writing it.

Articles live in `src/content/articles/*.md`. The 15 backlog topics from the plan are there as
draft outlines (`draft: true`). They show in `npm run dev` with a "Draft" badge but are never
published.

Frontmatter fields (validated in `src/content.config.ts`):

- `category`: one of `destinations`, `budgets`, `itineraries`, `accommodation`, `resources`
- `pricesCheckedOn`: date prices were verified; shows a "Prices checked on…" notice
- `affiliate: true`: shows the affiliate disclosure box at the top of the article
- `sponsored: true`: shows a "Sponsored" label
- `heroImage` / `heroAlt`: put images in `public/images/` and reference as `/images/…`
- `draft: false`: publishes the article

## Built in

Sitemap, RSS (`/rss.xml`), `robots.txt`, canonical URLs, Open Graph tags, Article JSON-LD,
category pages, related guides, table of contents, and a mobile-friendly layout.

Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, Vercel and GitHub Pages all
have free tiers).
