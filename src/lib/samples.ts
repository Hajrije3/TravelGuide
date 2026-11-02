/**
 * Sample travel plans shown at /sample-plans/.
 * Only the "preview" parts live here (overview, budget, Day 1 and one teaser per
 * section). The rest of each plan is deliberately NOT on the website; it's what
 * customers get when they request a plan. Travelers are fictional.
 */

export interface Credit { author: string; license: string; licenseUrl: string; source: string }
export interface Activity { time: 'Morning' | 'Afternoon' | 'Evening'; title: string; text: string; places: string[] }

export interface SamplePlan {
  slug: string;
  number: string;
  city: string;
  country: string;
  days: number;
  theme: string;
  cover: string;
  coverAlt: string;
  credit: Credit;
  highlights: string[];
  traveler: { name: string; from: string; group: string; budget: string; style: string; notes: string };
  overview: string;
  budget: { item: string; amount: string }[];
  budgetTotal: string;
  day1: { title: string; activities: Activity[] };
  lockedDays: string[];
  food: { name: string; text: string; more: number };
  stay: { area: string; text: string; more: number };
  transport: string;
  tip: { text: string; more: number };
  mapsPins: number;
}

export const mapsUrl = (place: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

export const SAMPLES: SamplePlan[] = [
  {
    slug: 'budapest',
    number: '01',
    city: 'Budapest',
    country: 'Hungary',
    days: 3,
    theme: 'Weekend escape',
    cover: '/images/budapest/chain-bridge-night.jpg',
    coverAlt: 'The Chain Bridge and the illuminated Parliament on the Danube at night',
    credit: { author: 'Wilfredor', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg' },
    highlights: ['Parliament and Danube', "Fisherman's Bastion", 'Buda Castle', 'Central Market Hall', 'Evening city exploration'],
    traveler: { name: 'Arta & Blerim', from: 'Prishtina, Kosovo', group: 'Couple', budget: '€700 total, excl. flights', style: 'Balanced', notes: 'First visit · halal food' },
    overview:
      "A first-time weekend in Budapest for a couple flying from Prishtina. Day one covers the Pest riverside and the Parliament, day two the Buda Castle hill, and day three a thermal bath and the city's liveliest neighbourhood. Everything is walkable or one tram ride apart, with halal food options planned for every day.",
    budget: [
      { item: 'Accommodation: 3 nights, apartment in District VI', amount: '€210–300' },
      { item: 'Food and drink', amount: '€150–220' },
      { item: 'Transport: 72-hour passes and airport bus', amount: '€40–50' },
      { item: 'Sights and thermal bath', amount: '€110–150' },
    ],
    budgetTotal: '€510–720',
    day1: {
      title: 'Pest riverside & Parliament',
      activities: [
        { time: 'Morning', title: 'Parliament and the Danube bank', text: 'Start at the Hungarian Parliament. Book the guided interior tour online in advance, because same-day slots sell out. Then walk 5 minutes south along the river to the Shoes on the Danube Bank memorial.', places: ['Hungarian Parliament Building, Budapest', 'Shoes on the Danube Bank, Budapest'] },
        { time: 'Afternoon', title: "St Stephen's Basilica & Central Market Hall", text: "Walk to St Stephen's Basilica (15 min) and go up to the dome terrace for a 360° view. Then take tram 2 south along the river to Central Market Hall for a late lunch of lángos at the upstairs food stalls. The hall is closed on Sundays.", places: ["St. Stephen's Basilica, Budapest", 'Central Market Hall, Budapest'] },
        { time: 'Evening', title: 'The Danube at dusk', text: 'Ride tram 2 back north as the city lights come on, then cross the Chain Bridge on foot for the classic view of the Parliament lit up across the water.', places: ['Széchenyi Chain Bridge, Budapest'] },
      ],
    },
    lockedDays: ["Day 2 · Buda Castle Hill & Fisherman's Bastion", 'Day 3 · Thermal bath morning & District VII'],
    food: { name: 'Central Market Hall, upper floor', text: 'Lángos and Hungarian street food at market prices: a quick, cheap lunch.', more: 6 },
    stay: { area: 'District VI (Terézváros)', text: 'Central, calmer than District VII at night, and right on the M1 metro line.', more: 2 },
    transport: 'From the airport, take the 100E express bus straight to Deák Ferenc tér. It needs its own ticket, because regular passes are not valid on it.',
    tip: { text: 'Pay in forints (HUF). When a card machine offers to charge you in euros, decline, because the rate is worse.', more: 7 },
    mapsPins: 18,
  },
  {
    slug: 'prague',
    number: '02',
    city: 'Prague',
    country: 'Czech Republic',
    days: 3,
    theme: 'City break',
    cover: '/images/prague/vltava-charles-bridge.jpg',
    coverAlt: 'The Vltava river with Charles Bridge and the Old Town towers in evening light',
    credit: { author: 'DXR', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:North_view_of_Charles_Bridge_from_M%C3%A1nes%C5%AFv_most,_Prague_20160808_1.jpg' },
    highlights: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'Astronomical Clock', 'Local cafés and restaurants'],
    traveler: { name: 'Lena', from: 'Tirana, Albania', group: 'Solo traveler', budget: '€450, excl. flights', style: 'Budget-friendly', notes: 'Loves cafés & photography' },
    overview:
      "A three-day solo city break built around early starts to beat the crowds, walkable neighbourhoods and Prague's café culture. Day one covers the Old Town on foot, day two the castle and Malá Strana, and day three the quieter, local side of the city.",
    budget: [
      { item: 'Accommodation: 3 nights, private room in Vinohrady', amount: '€120–180' },
      { item: 'Food and drink', amount: '€70–100' },
      { item: 'Transport: 72-hour pass', amount: '~€15' },
      { item: 'Sights', amount: '€35–50' },
    ],
    budgetTotal: '€240–345',
    day1: {
      title: 'Old Town on foot',
      activities: [
        { time: 'Morning', title: 'Charles Bridge at sunrise', text: 'Be on Charles Bridge before 8am for photos without the crowds. Then walk into the Old Town for breakfast a street or two away from the main square, where prices drop.', places: ['Charles Bridge, Prague'] },
        { time: 'Afternoon', title: 'Old Town Square & the Astronomical Clock', text: 'See Týn Church and the Astronomical Clock. The show runs on the hour, so watching it once is enough. Then slow down at Café Louvre, a historic café open since 1902.', places: ['Old Town Square, Prague', 'Prague Astronomical Clock', 'Café Louvre, Prague'] },
        { time: 'Evening', title: 'Sunset over the bridges', text: "Cross the river to Letná Park (15 minutes' walk) for the best free view of Prague's bridges at sunset.", places: ['Letná Park, Prague'] },
      ],
    },
    lockedDays: ['Day 2 · Prague Castle & Malá Strana', 'Day 3 · Vyšehrad & local Prague'],
    food: { name: 'Café Louvre', text: 'A historic café on Národní street, good for coffee, cake or a set lunch.', more: 5 },
    stay: { area: 'Vinohrady', text: 'Leafy, safe and local, 10 minutes from the centre by tram or metro. Ideal for a solo traveler.', more: 2 },
    transport: "There's no train from the airport. Take a city bus to the metro, or the Airport Express bus straight to the main station.",
    tip: { text: 'When a card machine or ATM asks, always choose to pay in CZK, not euros.', more: 6 },
    mapsPins: 16,
  },
  {
    slug: 'vienna',
    number: '03',
    city: 'Vienna',
    country: 'Austria',
    days: 3,
    theme: 'Cultural escape',
    cover: '/images/vienna/belvedere.jpg',
    coverAlt: 'The Upper Belvedere palace lit up at dusk and reflected in its pond',
    credit: { author: 'Diego Delso', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Palacio_Belvedere,_Viena,_Austria,_2020-02-01,_DD_93-95_HDR.jpg' },
    highlights: ['Schönbrunn Palace', "St. Stephen's Cathedral", 'Belvedere Palace', 'Historic city center', 'Traditional cafés'],
    traveler: { name: 'The Hoxha family', from: 'Skopje, North Macedonia', group: '2 adults, 2 children (8 & 11)', budget: '€1,100, excl. travel', style: 'Comfort', notes: 'Child-friendly · halal food' },
    overview:
      'A relaxed three-day cultural break for a family. Day one covers the imperial centre and a classic coffee house, day two Schönbrunn Palace and its zoo, and day three the Belvedere and the Naschmarkt. Walking distances are short, there are plenty of breaks, and everything is linked by easy public transport.',
    budget: [
      { item: 'Accommodation: 3 nights, family room in the 7th district', amount: '€420–600' },
      { item: 'Food and drink', amount: '€300–420' },
      { item: 'Transport: public transport passes', amount: '€40–60' },
      { item: 'Sights (palace, zoo, museums)', amount: '€150–220' },
    ],
    budgetTotal: '€910–1,300',
    day1: {
      title: 'The imperial centre',
      activities: [
        { time: 'Morning', title: "St Stephen's Cathedral & the Hofburg", text: "Start at St Stephen's Cathedral. The entrance area is free, and climbing the south tower is a fun challenge for kids. Then stroll down the Graben to the Hofburg palace courtyards.", places: ["St. Stephen's Cathedral, Vienna", 'Hofburg, Vienna'] },
        { time: 'Afternoon', title: 'Coffee house & the Ringstrasse', text: "Rest at Café Central, one of Vienna's grand coffee houses (expect a short queue). Then ride tram 1 or 2 along the Ringstrasse past the Parliament, City Hall and the Opera, all on a normal ticket.", places: ['Café Central, Vienna'] },
        { time: 'Evening', title: 'Burggarten & an early dinner', text: 'Let the kids run around the Burggarten park, then head for an early dinner in the 7th district near your hotel.', places: ['Burggarten, Vienna'] },
      ],
    },
    lockedDays: ['Day 2 · Schönbrunn Palace & the zoo', 'Day 3 · Belvedere & the Naschmarkt'],
    food: { name: 'Café Central', text: 'A classic Viennese coffee house. Try the apple strudel and hot chocolate.', more: 5 },
    stay: { area: 'Neubau (7th district)', text: 'Family-friendly, close to the MuseumsQuartier and the U3 metro line.', more: 2 },
    transport: 'From the airport, the S7 train is the cheapest way into the city. The CAT express is faster but costs several times more.',
    tip: { text: 'Most shops close on Sundays, so plan your supermarket stop for Saturday.', more: 6 },
    mapsPins: 17,
  },
  {
    slug: 'venice',
    number: '04',
    city: 'Venice',
    country: 'Italy',
    days: 3,
    theme: 'Romantic getaway',
    cover: '/images/venice/rialto-bridge.jpg',
    coverAlt: 'The Rialto Bridge over the Grand Canal in warm evening light, with boats on the water',
    credit: { author: 'kallerna', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0', source: 'https://commons.wikimedia.org/wiki/File:Ponte_di_Rialto_Venice_1.jpg' },
    highlights: ['Rialto Bridge', "St. Mark's Square", 'Grand Canal', 'Burano island', 'Hidden streets and canals'],
    traveler: { name: 'Dafina & Ilir', from: 'Prizren, Kosovo', group: 'Couple · anniversary trip', budget: '€1,200, excl. flights', style: 'Comfort', notes: 'Romantic · avoid crowds' },
    overview:
      "A romantic three-day getaway timed around Venice's quiet hours. You'll see St Mark's early in the morning and the Grand Canal at sunset, spend a day on colourful Burano, and spend evenings in the backstreets where the day-trippers never go.",
    budget: [
      { item: 'Accommodation: 3 nights, guesthouse in Cannaregio', amount: '€390–600' },
      { item: 'Food and drink', amount: '€240–360' },
      { item: 'Transport: vaporetto (water bus) passes', amount: '€80–100' },
      { item: 'Sights and boat trips', amount: '€60–120' },
    ],
    budgetTotal: '€770–1,180',
    day1: {
      title: "St Mark's & the Grand Canal",
      activities: [
        { time: 'Morning', title: "St Mark's Square before the crowds", text: "Arrive at St Mark's Square by 8am, when it's at its most beautiful. Book a timed entry slot for St Mark's Basilica online to skip the long queue.", places: ["St. Mark's Square, Venice", "St Mark's Basilica, Venice"] },
        { time: 'Afternoon', title: 'Lose yourselves on the way to Rialto', text: 'Walk to the Rialto Bridge through the side streets of Castello rather than following the crowds and signs. Stop for cicchetti (Venetian small bites) at a bacaro near the Rialto Market.', places: ['Rialto Bridge, Venice', 'Rialto Market, Venice'] },
        { time: 'Evening', title: 'The Grand Canal at sunset', text: 'Take vaporetto line 1, the slow boat, along the whole Grand Canal at sunset. It is the cheapest way to see the palaces from the water.', places: ['Grand Canal, Venice'] },
      ],
    },
    lockedDays: ['Day 2 · Burano & Murano islands', 'Day 3 · Dorsoduro & hidden Venice'],
    food: { name: 'Cicchetti at a bacaro', text: 'Venetian bar snacks with a drink. It is the local way to eat well for less around Rialto.', more: 6 },
    stay: { area: 'Cannaregio', text: 'Quieter canals and local restaurants, a short walk from the train station.', more: 2 },
    transport: "From Marco Polo airport, take the bus to Piazzale Roma (cheapest), or the Alilaguna water bus (slower, but you arrive by water).",
    tip: { text: "Avoid sitting down at the cafés on St Mark's Square. A coffee at the table, with music, costs several times the price at the bar.", more: 7 },
    mapsPins: 15,
  },
  {
    slug: 'istanbul',
    number: '05',
    city: 'Istanbul',
    country: 'Türkiye',
    days: 5,
    theme: 'Cultural adventure',
    cover: '/images/istanbul/blue-mosque-courtyard.jpg',
    coverAlt: 'The courtyard of the Blue Mosque lit up at dusk under a deep blue sky',
    credit: { author: 'Benh LIEU SONG', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0', source: 'https://commons.wikimedia.org/wiki/File:Blue_Mosque_Courtyard_Dusk_Wikimedia_Commons.jpg' },
    highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus cruise', 'Kadıköy and Galata'],
    traveler: { name: 'Genta, Rina & Era', from: 'Prishtina, Kosovo', group: '3 friends', budget: '€1,200 total, excl. flights', style: 'Balanced', notes: 'Food, shopping & culture' },
    overview:
      'Five days across two continents. Day one covers the historic peninsula, day two the bazaars, day three a Bosphorus cruise, day four Galata and Karaköy, and day five the Asian side in Kadıköy. There is halal food everywhere and plenty of time for shopping.',
    budget: [
      { item: 'Accommodation: 4 nights, apartment in Karaköy', amount: '€320–480' },
      { item: 'Food and drink', amount: '€300–450' },
      { item: 'Transport: Istanbulkart and airport transfer', amount: '€50–70' },
      { item: 'Sights and Bosphorus cruise', amount: '€200–300' },
    ],
    budgetTotal: '€870–1,300',
    day1: {
      title: 'Sultanahmet: the historic peninsula',
      activities: [
        { time: 'Morning', title: 'Hagia Sophia', text: 'Arrive early, because the queues grow fast. Shoulders and knees should be covered, and women will need a headscarf. Foreign visitors pay an entry fee.', places: ['Hagia Sophia, Istanbul'] },
        { time: 'Afternoon', title: 'Blue Mosque & Basilica Cistern', text: 'Visit the Blue Mosque (Sultan Ahmed Mosque) between prayer times. It closes to visitors during prayers, and entry is free. Then go underground into the Basilica Cistern, 5 minutes away.', places: ['Blue Mosque, Istanbul', 'Basilica Cistern, Istanbul'] },
        { time: 'Evening', title: 'Sultanahmet at dusk', text: 'Watch the mosques light up from Sultanahmet Square, then have dinner at a lokanta (a traditional home-style restaurant) on a side street.', places: ['Sultanahmet Square, Istanbul'] },
      ],
    },
    lockedDays: ['Day 2 · Grand Bazaar & Spice Bazaar', 'Day 3 · Bosphorus cruise', 'Day 4 · Galata & Karaköy', 'Day 5 · Kadıköy on the Asian side'],
    food: { name: 'Karaköy Güllüoğlu', text: 'A famous baklava shop in Karaköy, worth the queue.', more: 7 },
    stay: { area: 'Karaköy / Galata', text: 'Central, well connected by tram and ferry, and full of good cafés.', more: 2 },
    transport: 'Buy an Istanbulkart (a rechargeable travel card) on arrival. It works on trams, the metro, buses and ferries, and one card can pay for several people.',
    tip: { text: 'Ferries are part of the public transport network. Crossing to Kadıköy costs about the same as a tram ride, and the views are spectacular.', more: 7 },
    mapsPins: 25,
  },
];
