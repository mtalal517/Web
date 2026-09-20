# ahmedphotography

A Next.js App Router personal filmmaker and photographer portfolio with TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Run

- `npm install`
- `npm run dev`
- `npm run build` creates a static production site in `out/`.
- `npm run typecheck`

## Replace demo content

Edit `lib/portfolio.ts` for all projects, categories, services, Ahmed’s contact details, and media links. The six stories are illustrative portfolio content, not claims of completed client commissions. Photography is provided through Unsplash remote placeholders; replace it with licensed film stills and client assets before launch. Set meaningful image descriptions when replacing assets.

All photo and video links are grouped in the `mediaLinks` block near the top of `lib/portfolio.ts`. Replace those values and the whole website updates automatically: the homepage, archive, category pages, project pages, and About section.

For local files, add your media to `public/media/`, then use paths like:

```ts
cover: '/media/my-wedding-cover.jpg',
photos: [
  '/media/my-wedding-01.jpg',
  '/media/my-wedding-02.jpg',
  '/media/my-wedding-03.jpg',
],
videos: [
  '/media/my-wedding-film.mp4',
],
```

For online files, paste the full URL:

```ts
cover: 'https://your-site.com/my-photo.jpg',
videos: [
  'https://your-site.com/my-film.mp4',
],
```

Project routes and category pages generate automatically. Add optional `videos: ['/films/example.mp4']` to a project to activate its click-to-load film player. No unrelated demo film is presented as Ahmed’s work.

Update the About text in `components/studio.tsx`, titles/descriptions in route metadata, and the inquiry destination in the central profile record. Contact is an honest mailto draft flow; there is no simulated backend or false delivery confirmation. Remove the demo-details notice from `app/contact/page.tsx` when configuring real contacts.

## Images and deployment

The static export uses Next Image with Unsplash's resize/format CDN parameters; images are lazy loaded except the opening. A custom image loader supplies responsive widths. No server image optimizer is required. The site uses no database or authentication. Sites hosting keeps this preview private by default.

The initial palette is dark; system light preference is respected until the visitor explicitly chooses a theme. That explicit choice persists locally. Animations respect reduced motion, and touch devices retain their native cursor.

During local development, the live preview uses `.next-dev/` to avoid locking the live preview's output on Windows.
