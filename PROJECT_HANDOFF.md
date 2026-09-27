# ahmedphotography Portfolio — Project Handoff

Last updated: 22 September 2026

This document is the source of truth for continuing the project in a new ChatGPT/Codex account or with another developer. Read it before making changes so the current design direction and performance decisions are preserved.

## 1. Project goal

This is Ahmed's personal filmmaker and photographer portfolio—not a studio or agency website. The primary focus is portrait-format videography, Instagram reels, hospitality content, brand films, behind-the-scenes work, and personal travel films.

Brand name used in website copy: `ahmedphotography`

Instagram profile: <https://www.instagram.com/ahmedphotography_0/>

The user has explicitly requested local development for the current phase. Do not deploy unless they later ask for it.

## 2. Current visual direction

- Editorial, cinematic, personal, and restrained.
- Dark mode is the default; light mode is fully supported.
- Warm brown/gold accent color.
- Large serif display typography paired with neutral sans-serif utility text.
- Portrait reels are the primary portfolio content.
- Reel windows have subtle `18px` rounded corners.
- The visible browser scrollbar is intentionally hidden, but mouse, keyboard, touch, and trackpad scrolling still work.
- The reel archive is an asymmetric editorial wall rather than a uniform box grid:
  - Desktop: a 12-column composition with one larger leading reel and staggered supporting reels.
  - Tablet: staggered two-column composition.
  - Mobile: centered single-column reels with the caption aligned to the same width.
- Do not restore the `PORTRAIT / 9:16` label; the user explicitly asked to remove it everywhere.

## 3. Technology and build behavior

- Next.js 15 App Router
- React 19
- TypeScript
- Motion for selected transitions
- Lucide icons
- Tailwind is installed, but most of the established design is implemented as custom CSS in `app/globals.css`.
- The contact form requires a Node.js runtime, so the project no longer uses static export.
- Development uses `.next-dev`; production builds use `.next` and run with `npm start`.

Common commands:

```bash
npm install
npm run dev -- -p 3000
npm run build
npm run typecheck
```

Expected local URL: <http://localhost:3000/>

The most recent production build completed successfully with 19 statically generated pages.

## 4. Important routes

- `/` — home page, hero, selected reels, category index, personal introduction, contact call-to-action
- `/work` — complete reel archive
- `/work/category/[category]` — filtered reel archive
- `/about` — Ahmed's personal profile
- `/services` — services
- `/contact` — inquiry form and contact details
- `/api/contact` — Node.js POST endpoint that validates inquiries and sends them through Gmail/Nodemailer
- `/work/[slug]` — older long-form project pages; these remain in the codebase but are not the primary reel experience

There is intentionally no `/reels/[id]` detail page. The user rejected sending visitors to another page.

## 4.1 Contact email delivery

The contact form now submits directly to `/api/contact`; it no longer opens a `mailto:` draft.

Required local environment variables are documented in `.env.example`:

```text
GMAIL_USER=your-address@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password
CONTACT_TO_EMAIL=your-address@gmail.com
```

`CONTACT_TO_EMAIL` is optional and defaults to `GMAIL_USER`. Secrets must go in `.env.local`, which is ignored by Git. Never expose the Gmail App Password through a `NEXT_PUBLIC_` variable.

The form collects name, email, optional phone, optional location, service, optional target date, and the project message. The server performs length and email validation, validates the service against the site configuration, includes a honeypot field, and sends both a branded HTML email and a plain-text fallback. The visitor's email is used as `replyTo`, so Ahmed can reply directly.

The endpoint returns a safe `503` response until credentials are configured. Local validation has confirmed the invalid-payload `400` and missing-configuration `503` paths without sending a message.

## 5. Reel playback behavior

The reel implementation lives in `components/reels.tsx`.

- Archive cards initially render only their JPEG thumbnail.
- Clicking **Watch reel** replaces that thumbnail with a native HTML `<video>` inside the same 9:16 container.
- The selected reel starts automatically, uses native controls, supports fullscreen, plays inline on mobile, and has sound.
- Only one reel in a grid is active at a time. Selecting another reel unmounts the previous player.
- `preload="metadata"` is applied only after the visitor clicks. The MP4 is not inserted into the page before that click.
- `controlsList="nodownload"` hides the browser download control where supported. This is not DRM; any publicly served web video can technically be saved by a sufficiently technical visitor.
- Visitors do not receive a file in their Downloads folder during normal playback. The browser streams the selected MP4 with byte-range requests and may cache portions temporarily.
- Instagram embed widgets are intentionally not used.

Local verification confirmed that the video endpoint responds to range requests with HTTP `206`.

## 6. Reel data and media

Reel metadata is centralized in `lib/portfolio.ts` under the `reels` array. Every reel object contains:

- `id`
- `title`
- `category`
- `client`
- `year`
- `description`
- `thumbnail`
- `video`
- original public Instagram `url`

Current categories:

- Showreels
- Hospitality
- Brands
- Process
- Travel

Media is stored in `public/reels/`:

| Reel ID | Poster | Native video |
| --- | --- | --- |
| `2025-showreel` | `2025-showreel.jpg` | `2025-showreel.mp4` |
| `brew-district` | `brew-district.jpg` | `brew-district.mp4` |
| `lasortie` | `lasortie.jpg` | `lasortie.mp4` |
| `hotel-crown-bts` | `hotel-crown-bts.jpg` | `hotel-crown-bts.mp4` |
| `watandar` | `watandar.jpg` | `watandar.mp4` |
| `recent-shoot-bts` | `recent-shoot-bts.jpg` | `recent-shoot-bts.mp4` |
| `rawalpindi-photowalk` | `rawalpindi-photowalk.jpg` | `rawalpindi-photowalk.mp4` |

The videos total approximately 33 MB. `watandar.mp4` is the largest at roughly 13 MB. The MP4 files contain H.264 video and AAC audio, and their metadata is positioned at the start of the file for progressive playback.

Current source quality varies because these versions came from the public Instagram profile:

- 720×1280: Brew District, Recent Shoot BTS, Watandar
- 360×640: 2025 Showreel, Lasortie, Hotel Crown BTS, Rawalpindi Photowalk

When Ahmed supplies original masters, replace the lower-resolution files with compressed 720×1280 or 1080×1920 versions using the same filenames. Preserve H.264/AAC compatibility and fast-start metadata. Do not place all videos into the initial page bundle.

## 7. Adding or replacing a reel

1. Add a portrait JPEG poster to `public/reels/<reel-id>.jpg`.
2. Add the optimized MP4 to `public/reels/<reel-id>.mp4`.
3. Add or update the matching object in `lib/portfolio.ts`.
4. Use an existing category or deliberately update the `categories` tuple and category descriptions.
5. Keep the original Instagram URL only as the small external-link option beneath the native player.
6. Run `npm run build`.
7. Confirm `/work`, the relevant category route, and an MP4 range request all respond correctly.

The `.gitignore` keeps generic JPG and MP4 files ignored but explicitly includes `public/reels/*.jpg` and `public/reels/*.mp4`. Preserve those exceptions so the portfolio media is not lost when the project is moved.

## 8. Branding and logo assets

Logo files:

- `public/brand/ahmad-logo-dark.png`
- `public/brand/ahmad-logo-light.png`

The navigation and footer automatically swap logo variants based on the theme.

Important naming note: the user requested the website name `ahmedphotography`, while the supplied graphic says “Ahmad Photography & Videography.” Do not silently alter the logo artwork or website spelling. Ask the user which spelling is authoritative before making a global naming change.

## 9. Key source files

- `lib/portfolio.ts` — brand/contact configuration, categories, reels, older projects, service names
- `components/reels.tsx` — thumbnail-to-inline-video interaction
- `components/archive.tsx` — `/work` and filtered archive heading/content
- `components/portfolio.tsx` — homepage hero, category index, and selected reels
- `components/navigation.tsx` — navigation, theme switcher, mobile menu, custom cursor
- `components/footer.tsx` — theme-aware Instagram and email/contact icons plus footer CTA
- `components/inquiry.tsx` — contact fields, submission states, and client-side API call
- `components/studio.tsx` — personal introduction and call-to-action sections
- `app/globals.css` — shared theme and responsive design rules
- `app/api/contact/route.ts` — server-side validation and Nodemailer delivery
- `lib/contact-email.ts` — structured HTML and plain-text inquiry templates
- `app/layout.tsx` — metadata, root layout, theme initialization
- `next.config.ts` — Node-capable production build and separate development build directory
- `.env.example` — names and descriptions of required mail variables
- `.openai/hosting.json` — legacy static Sites hosting configuration; it is no longer compatible with the Nodemailer endpoint

`app/globals.css` is compact and contains later override sections for the Ahmad branding and editorial reel wall. Prefer small targeted edits near the relevant labelled section. Avoid reformatting or replacing the entire stylesheet during a minor change.

## 10. Hero section status

The hero still uses rotating stock Unsplash photographs from the older template. The user asked for advice but has not yet requested or supplied the final replacement assets.

Recommended next direction:

- Replace the stock carousel with one strong, authentic behind-the-scenes image of Ahmed filming.
- When a suitable horizontal master is available, optionally use an 8–12 second muted looping hero film on desktop.
- Use a static poster on mobile and for reduced-motion users.
- Do not stretch the existing 360×640 portrait reels across a landscape hero; they will crop heavily and appear soft.
- Ahmed plans to provide his own profile picture. Use that real image rather than generating a likeness.

## 11. Known placeholders and pending decisions

- `studio.email` and `studio.phone` in `lib/portfolio.ts` are placeholders and need real contact details.
- Gmail credentials still need to be added to `.env.local` before real inquiries can be delivered.
- The current studio portrait is still an Unsplash image and should be replaced with Ahmed's supplied profile picture.
- Several older photo/project records remain from the original template. They are secondary to the reel archive and can be retired later if the user wants a fully video-only site.
- The hero background requires authentic final media.
- Confirm whether the supplied logo spelling “Ahmad” or the requested brand spelling “Ahmed” should be canonical.
- Before a real public launch, confirm Ahmed has the rights and client permission to self-host every reel.
- For higher traffic, move the MP4 files to a video-capable CDN or object storage and retain posters locally. The current local/static files are appropriate for development and a modest portfolio but are not adaptive-bitrate streams.
- Nodemailer uses Gmail SMTP and therefore requires Node-compatible hosting with outbound SMTP access. OpenAI Sites static hosting—and hosting platforms that block SMTP—cannot run this endpoint. If deploying there later, replace Nodemailer with an HTTPS transactional-email API.

## 12. Local server troubleshooting

A previous issue produced repeated root-route `404` responses and the message:

```text
missing required error components, refreshing...
```

Cause: two Next.js development servers for the same project were running on ports 3000 and 3001 while sharing `.next-dev`.

Recovery procedure:

1. Confirm which processes belong to this exact project before stopping anything.
2. Stop duplicate project-local Next.js processes.
3. Move or delete only the generated `.next-dev` directory.
4. Start one server on port 3000.

Never run two development servers for this checkout simultaneously because both use the same `.next-dev` directory.

## 13. Current working-tree state

At the time this handoff was written, the latest committed baseline is:

```text
27fb16a version 1
```

There are intentional uncommitted changes after that commit. They include:

- native-player download-control preference
- removal of all 9:16 labels
- hidden visual scrollbar
- centered mobile reel frames
- rounded reel windows
- asymmetric editorial reel-wall layout
- reel JPG and MP4 assets
- `.gitignore` exceptions for those assets
- theme-aware footer Instagram and contact icons
- Node/Nodemailer contact endpoint, structured HTML email, form states, and `.env.example`
- removal of static export to support server-side email delivery
- this handoff document

Do not reset or discard the working tree. Review `git status` and preserve all existing media before making additional changes.

## 14. Completion checklist for future agents

Before handing back any new change:

- Preserve the personal-portfolio voice; do not turn it back into a studio/agency site.
- Keep reel playback inline unless the user explicitly changes their mind.
- Do not reintroduce Instagram widgets.
- Ensure mobile reels remain centered.
- Preserve light and dark logo behavior.
- Avoid autoplaying or preloading every reel.
- Run `npm run build`.
- Run `git diff --check`.
- Confirm `http://localhost:3000/` and `http://localhost:3000/work` return successful responses.
- For media changes, confirm an MP4 request supports byte ranges.
- For contact changes, test validation without real credentials before performing one authorized end-to-end email test.
- Do not deploy unless the user asks.
