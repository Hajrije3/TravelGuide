/** The five editorial categories from the business plan (section 6). */
export const CATEGORIES = {
  destinations: {
    title: 'Destinations',
    description: 'City guides, neighborhoods and seasonal destination ideas.',
  },
  budgets: {
    title: 'Travel budgets',
    description: 'Realistic, date-stamped cost breakdowns and ways to save.',
  },
  itineraries: {
    title: 'Itineraries',
    description: '48-hour, three-day and one-week plans with real transport timing.',
  },
  accommodation: {
    title: 'Accommodation',
    description: 'Where to stay, area comparisons and booking tips.',
  },
  resources: {
    title: 'Travel resources',
    description: 'Packing lists, planning tools and transport explainers.',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
