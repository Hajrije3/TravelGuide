/**
 * Central site settings. The brand name, domain and handles are still
 * undecided (business plan, section 13) — change them here once finalized.
 */
export const SITE = {
  name: 'Weekend Europe', // PLACEHOLDER brand name
  url: 'https://example.com', // PLACEHOLDER — set to the real domain before launch
  tagline: 'Explore more. Spend less.',
  positioning:
    'Beautiful travel experiences, realistic budgets, and practical guides for people who want to explore more while spending less.',
  locale: 'en',
  author: 'The Weekend Europe team',

  /**
   * Email signup. Paste the form action URL from your email provider
   * (e.g. a free-tier Buttondown, MailerLite or Brevo form). Leave empty to
   * show the form in a disabled "coming soon" state.
   */
  newsletterAction: '',
  newsletterFieldName: 'email',

  /**
   * "Plan my trip" paid service (/plan-my-trip/).
   * Flow: visitor fills in the form → data is POSTed to `formEndpoint` with a
   * reference ID → visitor is redirected to the payment link of their package
   * with the same reference ID → you match payment + request and send the plan.
   */
  tripPlanning: {
    /**
     * URL that receives the form data as JSON (e.g. a Formspree form endpoint
     * like https://formspree.io/f/xxxxxxx, or your own API). Empty = form
     * shows a "not open yet" message and cannot be submitted.
     */
    formEndpoint: 'https://formspree.io/f/mdeepdqa',
    /** Query parameter used to pass the reference ID to the payment page. */
    paymentRefParam: 'client_reference_id', // Stripe Payment Links read this name
    currency: '€',
    deliveryTime: '3 working days',
    /** Packages are picked automatically from the number of days. */
    packages: [
      {
        id: 'weekend', name: 'Weekend plan', maxDays: 3, price: 9.99, popular: false, paymentLink: '',
        description: 'Personalized short-trip itinerary, attractions, food recommendations and estimated budget.',
      },
      {
        id: 'week', name: 'Full trip plan', maxDays: 7, price: 17.99, popular: true, paymentLink: '',
        description: 'Complete daily itinerary, accommodation suggestions, transport and budget breakdown.',
      },
      {
        id: 'extended', name: 'Extended trip plan', maxDays: 21, price: 29.99, popular: false, paymentLink: '',
        description: 'Multi-city itinerary, transportation between destinations, accommodation and detailed planning.',
      },
    ],
    includes: [
      'Day-by-day itinerary with realistic timing',
      'Best way to get there from your departure city',
      'Recommended areas and places to stay within your budget',
      'Budget breakdown: transport, accommodation, food and activities',
      'Food tips, matched to your dietary needs',
      'Booking checklist and useful links',
    ],
  },

  social: {
    pinterest: '', // e.g. https://www.pinterest.com/yourhandle
    instagram: '', // e.g. https://www.instagram.com/yourhandle
  },
} as const;
