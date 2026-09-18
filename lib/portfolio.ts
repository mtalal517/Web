export const studio = { name: 'Still / Moving', email: 'hello@example.com', phone: '+92 300 0000000', instagram: 'https://www.instagram.com/', location: 'Islamabad, Pakistan' };
export const categories = ['Weddings', 'Food', 'Events', 'Portraits', 'Commercial', 'Editorial'] as const;
export type Category = typeof categories[number];
export type Project = { slug: string; title: string; category: Category; year: number; location: string; description: string; coverImage: string; images: string[]; alt: string; videos?: string[] };
export const photo = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const wedding = photo('photo-1519741497674-611481863552');
const food = photo('photo-1414235077428-338989a2e8c0');
const event = photo('photo-1492684223066-81342ee5ff30');
const portrait = photo('photo-1534528741775-53994a69daeb');
const commercial = photo('photo-1600210492486-724fe5c67fb0');
const editorial = photo('photo-1483985988355-763728e1935b');
export const projects: Project[] = [
 { slug: 'a-day-to-remember', title: 'A day, held still.', category: 'Weddings', year: 2026, location: 'Wedding stories', description: 'The anticipation. The unplanned glance. The space between celebrations. A wedding story told through the small things that stay with us.', coverImage: wedding, images: [wedding, photo('photo-1511795409834-ef04bbd61622'), photo('photo-1511285560929-80b456fea0bc')], alt: 'An intimate wedding celebration surrounded by greenery' },
 { slug: 'at-the-table', title: 'At the table.', category: 'Food', year: 2026, location: 'Food & hospitality', description: 'An exploration of texture, ritual, and the pleasure of a shared table. Honest ingredients, considered light, and a little room for imperfection.', coverImage: food, images: [food, photo('photo-1546069901-ba9599a7e63c'), photo('photo-1482049016688-2d3e1b311543')], alt: 'A beautifully plated dish in a warm restaurant setting' },
 { slug: 'after-hours', title: 'After hours.', category: 'Events', year: 2025, location: 'Live experiences', description: 'When the lights fall and the room comes alive. A study of collective energy, fleeting connections, and the feeling of being there.', coverImage: event, images: [event, photo('photo-1470229722913-7c0e2dbbafd3'), photo('photo-1501386761578-eac5c94b800a')], alt: 'An outdoor gathering beneath a canopy of warm lights' },
 { slug: 'in-your-own-light', title: 'In your own light.', category: 'Portraits', year: 2026, location: 'Personal portraits', description: 'No performance required. Just a conversation, a window, and the time to see someone a little differently.', coverImage: portrait, images: [portrait, photo('photo-1506794778202-cad84cf45f1d'), photo('photo-1500648767791-00dcc994a43e')], alt: 'A natural light portrait with an intimate, direct gaze' },
 { slug: 'a-sense-of-place', title: 'A sense of place.', category: 'Commercial', year: 2025, location: 'Architecture & interiors', description: 'Spaces have their own quiet language. Light tracing a wall, the curve of a chair, the balance of an empty room. An invitation to look closer.', coverImage: commercial, images: [commercial, photo('photo-1600607687920-4e2a09cf159d'), photo('photo-1600566753086-00f18fb6b3ea')], alt: 'A carefully composed interior with warm natural materials' },
 { slug: 'ordinary-muse', title: 'Ordinary muse.', category: 'Editorial', year: 2026, location: 'Fashion studies', description: 'A loose collection of gestures, silhouettes, and encounters. Fashion outside the frame, finding its rhythm in the everyday.', coverImage: editorial, images: [editorial, photo('photo-1483985988355-763728e1935b'), portrait], alt: 'Fashion captured on a sunlit city street' },
];
export const services = ['Wedding Photography', 'Wedding Films', 'Food Photography', 'Food Videography', 'Event Coverage', 'Portrait Photography', 'Commercial Photography', 'Brand Films'];
