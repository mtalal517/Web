export const studio = {
  name: 'ahmedphotography',
  email: 'hello@example.com',
  phone: '+92 300 0000000',
  instagram: 'https://www.instagram.com/',
  location: 'Islamabad, Pakistan',
};

export const categories = ['Weddings', 'Hospitality', 'Events', 'Portraits', 'Brands', 'Editorial'] as const;

export type Category = typeof categories[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  alt: string;
  videos?: string[];
};

export const photo = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

/*
  Replace your website media here.

  Option 1: add files inside public/media and use links like:
  '/media/my-photo.jpg'
  '/media/my-video.mp4'

  Option 2: paste a full online URL:
  'https://your-cdn.com/my-photo.jpg'
  'https://your-cdn.com/my-video.mp4'

  Keep at least 3 photos for every project because each project page uses:
  coverImage + images[0] + images[1] + images[2].
*/
export const mediaLinks = {
  studioPortrait: photo('photo-1452587925148-ce544e77e70d'),

  weddings: {
    cover: photo('photo-1519741497674-611481863552'),
    photos: [
      photo('photo-1519741497674-611481863552'),
      photo('photo-1511795409834-ef04bbd61622'),
      photo('photo-1511285560929-80b456fea0bc'),
    ],
    videos: [
      // '/media/wedding-film.mp4',
    ],
  },

  food: {
    cover: photo('photo-1414235077428-338989a2e8c0'),
    photos: [
      photo('photo-1414235077428-338989a2e8c0'),
      photo('photo-1546069901-ba9599a7e63c'),
      photo('photo-1482049016688-2d3e1b311543'),
    ],
    videos: [
      // '/media/food-film.mp4',
    ],
  },

  events: {
    cover: photo('photo-1492684223066-81342ee5ff30'),
    photos: [
      photo('photo-1492684223066-81342ee5ff30'),
      photo('photo-1470229722913-7c0e2dbbafd3'),
      photo('photo-1501386761578-eac5c94b800a'),
    ],
    videos: [
      // '/media/event-film.mp4',
    ],
  },

  portraits: {
    cover: photo('photo-1534528741775-53994a69daeb'),
    photos: [
      photo('photo-1534528741775-53994a69daeb'),
      photo('photo-1506794778202-cad84cf45f1d'),
      photo('photo-1500648767791-00dcc994a43e'),
    ],
    videos: [
      // '/media/portrait-film.mp4',
    ],
  },

  commercial: {
    cover: photo('photo-1600210492486-724fe5c67fb0'),
    photos: [
      photo('photo-1600210492486-724fe5c67fb0'),
      photo('photo-1600607687920-4e2a09cf159d'),
      photo('photo-1600566753086-00f18fb6b3ea'),
    ],
    videos: [
      // '/media/commercial-film.mp4',
    ],
  },

  editorial: {
    cover: photo('photo-1483985988355-763728e1935b'),
    photos: [
      photo('photo-1483985988355-763728e1935b'),
      photo('photo-1483985988355-763728e1935b'),
      photo('photo-1534528741775-53994a69daeb'),
    ],
    videos: [
      // '/media/editorial-film.mp4',
    ],
  },
};

export const projects: Project[] = [
  {
    slug: 'a-day-to-remember',
    title: 'A day in motion.',
    category: 'Weddings',
    year: 2026,
    location: 'Wedding film',
    description:
      'The anticipation, the voices, the unplanned glance. A wedding film built from the small moments that bring the whole day back.',
    coverImage: mediaLinks.weddings.cover,
    images: mediaLinks.weddings.photos,
    videos: mediaLinks.weddings.videos,
    alt: 'An intimate wedding celebration surrounded by greenery',
  },
  {
    slug: 'at-the-table',
    title: 'Made to be savoured.',
    category: 'Hospitality',
    year: 2026,
    location: 'Hospitality film',
    description:
      'A sensory hospitality film shaped by texture, movement, and the rhythm of service—from the first flame to the final plate.',
    coverImage: mediaLinks.food.cover,
    images: mediaLinks.food.photos,
    videos: mediaLinks.food.videos,
    alt: 'A beautifully plated dish in a warm restaurant setting',
  },
  {
    slug: 'after-hours',
    title: 'When the room moves.',
    category: 'Events',
    year: 2025,
    location: 'Event aftermovie',
    description:
      'An event aftermovie cut to the pulse of the room—light, sound, fleeting connections, and the feeling of being right there.',
    coverImage: mediaLinks.events.cover,
    images: mediaLinks.events.photos,
    videos: mediaLinks.events.videos,
    alt: 'An outdoor gathering beneath a canopy of warm lights',
  },
  {
    slug: 'in-your-own-light',
    title: 'In your own rhythm.',
    category: 'Portraits',
    year: 2026,
    location: 'Portrait film',
    description:
      'A quiet moving portrait with no performance required—just conversation, natural light, and space for personality to come through.',
    coverImage: mediaLinks.portraits.cover,
    images: mediaLinks.portraits.photos,
    videos: mediaLinks.portraits.videos,
    alt: 'A natural light portrait with an intimate, direct gaze',
  },
  {
    slug: 'a-sense-of-place',
    title: 'Built for belonging.',
    category: 'Brands',
    year: 2025,
    location: 'Brand film',
    description:
      'A brand film about design, craft, and the feeling of place. Thoughtful camera movement lets the space speak for itself.',
    coverImage: mediaLinks.commercial.cover,
    images: mediaLinks.commercial.photos,
    videos: mediaLinks.commercial.videos,
    alt: 'A carefully composed interior with warm natural materials',
  },
  {
    slug: 'ordinary-muse',
    title: 'Between takes.',
    category: 'Editorial',
    year: 2026,
    location: 'Editorial motion',
    description:
      'An editorial motion study of gestures, silhouettes, and encounters—fashion finding its rhythm in the everyday.',
    coverImage: mediaLinks.editorial.cover,
    images: mediaLinks.editorial.photos,
    videos: mediaLinks.editorial.videos,
    alt: 'Fashion captured on a sunlit city street',
  },
];

export const services = [
  'Wedding Films',
  'Brand Films',
  'Event Aftermovies',
  'Hospitality Films',
  'Social Content',
  'Music & Performance',
  'Portrait Films',
  'Photography',
];
