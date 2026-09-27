import Link from 'next/link';
import { reels, photos, categories, Category } from '@/lib/portfolio';
import { ReelGrid } from './reels';
import { PhotoGrid } from './photos';

export function Archive({ category }: { category?: Category }) {
  const reelItems = reels.filter(reel => !category || reel.category === category);
  const photoItems = photos.filter(photo => !category || photo.category === category);

  return (
    <>
      <div className="page-intro section-pad">
        <span className="eyebrow">REELS &amp; PHOTOGRAPHY / 2025—2026</span>
        <h1>{category ? <>{category}<em>.</em></> : <>Watch the <em>work.</em></>}</h1>
        <p>
          {category
            ? 'Films and stills from this side of Ahmed’s practice. Reels play in-frame; photography placeholders will be replaced with final images.'
            : 'Social-first films and still photography. Choose a reel to play in its portrait frame, or browse the photo archive as new stills land.'}
        </p>
        <nav className="filter-nav" aria-label="Work categories">
          <Link href="/work" aria-current={!category ? 'page' : undefined}>
            All work ({reels.length + photos.length})
          </Link>
          {categories.map(c => (
            <Link key={c} href={`/work/category/${c.toLowerCase()}`} aria-current={category === c ? 'page' : undefined}>
              {c}
            </Link>
          ))}
        </nav>
      </div>

      {reelItems.length > 0 && (
        <section className="reel-archive section-pad" aria-label={category ? `${category} reels` : 'All Instagram reels'}>
          <div className="archive-medium-heading">
            <span className="eyebrow">{String(reelItems.length).padStart(2, '0')} REELS</span>
          </div>
          <ReelGrid items={reelItems} />
        </section>
      )}

      {photoItems.length > 0 && (
        <section className="photo-archive section-pad" aria-label={category ? `${category} photography` : 'All photography'}>
          <div className="archive-medium-heading" id="selected-photos-archive">
            <span className="eyebrow">{String(photoItems.length).padStart(2, '0')} PHOTOGRAPHY</span>
            <p>Placeholder frames for now — swap in JPEGs under <code>public/photos/</code> when ready.</p>
          </div>
          <PhotoGrid items={photoItems} />
        </section>
      )}
    </>
  );
}
