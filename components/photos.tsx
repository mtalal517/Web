'use client';

import type { PortfolioPhoto } from '@/lib/portfolio';
import { Photo } from './visuals';

function PhotoCard({ photo, index }: { photo: PortfolioPhoto; index: number }) {
  const ready = !photo.placeholder && Boolean(photo.image);
  return (
    <article className={`photo-card photo-${photo.orientation}`} id={photo.id}>
      <div className="photo-frame">
        {ready ? (
          <Photo src={photo.image} alt={photo.alt} sizes="(max-width: 700px) 100vw, 35vw" />
        ) : (
          <div className="photo-placeholder" role="img" aria-label={photo.alt}>
            <span className="eyebrow">PHOTO / {String(index + 1).padStart(2, '0')}</span>
            <strong>Coming soon</strong>
            <p>Drop the final still into <code>public/photos/</code></p>
          </div>
        )}
      </div>
      <div className="photo-caption">
        <span>{photo.category.toUpperCase()} / {photo.year}</span>
        <h3>{photo.title}</h3>
        <p>{photo.client}</p>
      </div>
    </article>
  );
}

export function PhotoGrid({ items, compact = false }: { items: PortfolioPhoto[]; compact?: boolean }) {
  if (!items.length) return null;
  return (
    <div className={`photo-grid ${compact ? 'photo-grid-compact' : ''}`}>
      {items.map((photo, index) => <PhotoCard key={photo.id} photo={photo} index={index} />)}
    </div>
  );
}
