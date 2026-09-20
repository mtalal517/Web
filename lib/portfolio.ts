export const studio = {
  name: 'ahmedphotography',
  email: 'hello@example.com',
  phone: '+92 300 0000000',
  instagram: 'https://www.instagram.com/ahmedphotography_0/',
  location: 'Islamabad, Pakistan',
};

export const categories = ['Showreels', 'Hospitality', 'Brands', 'Process', 'Travel'] as const;

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

export type InstagramReel = {
  id: string;
  title: string;
  category: Category;
  client: string;
  year: number;
  description: string;
  thumbnail: string;
  video: string;
  url: string;
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
    category: 'Showreels',
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
    category: 'Process',
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
    category: 'Showreels',
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
    category: 'Travel',
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

export const reels: InstagramReel[] = [
  {
    id: '2025-showreel',
    title: 'The 2025 journey.',
    category: 'Showreels',
    client: 'Selected work',
    year: 2025,
    description: 'A portrait-format edit bringing together favourite frames, collaborations, and stories from across the year.',
    thumbnail: '/reels/2025-showreel.jpg',
    video: '/reels/2025-showreel.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DSIFCnAjJji/',
  },
  {
    id: 'brew-district',
    title: 'What you see / what we create.',
    category: 'Brands',
    client: 'Brew District',
    year: 2026,
    description: 'A behind-the-lens look at the craft and final cinematic result of a recent brand shoot.',
    thumbnail: '/reels/brew-district.jpg',
    video: '/reels/brew-district.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DXby_IMjKR7/',
  },
  {
    id: 'lasortie',
    title: 'A taste of Lasortie.',
    category: 'Hospitality',
    client: 'Lasortie Restaurant',
    year: 2025,
    description: 'Food, atmosphere, and service shaped into a concise hospitality reel.',
    thumbnail: '/reels/lasortie.jpg',
    video: '/reels/lasortie.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DRMzjEvDH9L/',
  },
  {
    id: 'hotel-crown-bts',
    title: 'Behind the Hotel Crown shoot.',
    category: 'Process',
    client: 'Hotel Crown',
    year: 2025,
    description: 'A quick look at the location, setup, and movement behind a commercial food shoot.',
    thumbnail: '/reels/hotel-crown-bts.jpg',
    video: '/reels/hotel-crown-bts.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DPqY0ABDHm-/',
  },
  {
    id: 'watandar',
    title: 'Watandar Restaurant.',
    category: 'Hospitality',
    client: 'Watandar Restaurant',
    year: 2025,
    description: 'An energetic food reel built around Afghani tikka, flame, texture, and place.',
    thumbnail: '/reels/watandar.jpg',
    video: '/reels/watandar.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DPbRmVPiOAY/',
  },
  {
    id: 'recent-shoot-bts',
    title: 'The frame behind the frame.',
    category: 'Process',
    client: 'Behind the scenes',
    year: 2025,
    description: 'A compact process reel showing how a cinematic setup comes together before the final shot.',
    thumbnail: '/reels/recent-shoot-bts.jpg',
    video: '/reels/recent-shoot-bts.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DPGPpG3jA6f/',
  },
  {
    id: 'rawalpindi-photowalk',
    title: 'Rawalpindi Photowalk.',
    category: 'Travel',
    client: 'Personal work',
    year: 2025,
    description: 'Behind the scenes from a day of observing Rawalpindi through movement, streets, and people.',
    thumbnail: '/reels/rawalpindi-photowalk.jpg',
    video: '/reels/rawalpindi-photowalk.mp4',
    url: 'https://www.instagram.com/ahmedphotography_0/reel/DO269_ECFjf/',
  },
];

export const services = [
  'Instagram Reels',
  'Social Content',
  'Brand Films',
  'Hospitality Films',
  'Event Aftermovies',
  'Music & Performance',
  'Portrait Films',
  'Photography',
];
