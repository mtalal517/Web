'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import type { InstagramReel } from '@/lib/portfolio';

function ReelCard({ reel, index, active, onPlay }: { reel: InstagramReel; index: number; active: boolean; onPlay: () => void }) {
  const ready = !reel.placeholder && Boolean(reel.video) && Boolean(reel.thumbnail);

  return (
    <article className="reel-card">
      <div className="reel-frame" id={reel.id}>
        {!ready ? (
          <div className="reel-placeholder" role="img" aria-label={`${reel.title} — reel coming soon`}>
            <span className="reel-number">REEL / {String(index + 1).padStart(2, '0')}</span>
            <strong>Coming soon</strong>
            <p>Add <code>{reel.id}.jpg</code> + <code>{reel.id}.mp4</code> to <code>public/reels/</code></p>
          </div>
        ) : active ? (
          <video
            className="reel-native-video"
            src={reel.video}
            poster={reel.thumbnail}
            controls
            controlsList="nodownload"
            autoPlay
            playsInline
            preload="metadata"
            aria-label={`${reel.title} video`}
          />
        ) : (
          <button className="reel-cover" type="button" onClick={onPlay} aria-label={`Watch ${reel.title}`} data-cursor="PLAY">
            <img src={reel.thumbnail} alt={`${reel.title} reel cover`} loading="lazy" />
            <span className="reel-cover-shade" />
            <span className="reel-number">REEL / {String(index + 1).padStart(2, '0')}</span>
            <span className="reel-play"><Play size={18} fill="currentColor" /> Watch reel</span>
          </button>
        )}
      </div>
      <div className="reel-caption">
        <div>
          <span>{reel.category.toUpperCase()} / {reel.year}</span>
          <h3>
            {ready ? (
              <button className="reel-title-button" type="button" onClick={onPlay}>{reel.title}</button>
            ) : (
              reel.title
            )}
          </h3>
          <p>{reel.client}</p>
        </div>
        {reel.url ? (
          <a href={reel.url} target="_blank" rel="noreferrer" aria-label={`Open ${reel.title} on Instagram`}>
            <ExternalLink size={17} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function ReelGrid({ items, compact = false }: { items: InstagramReel[]; compact?: boolean }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <div className={`reel-grid ${compact ? 'reel-grid-compact' : ''}`}>
      {items.map((reel, index) => (
        <ReelCard
          key={reel.id}
          reel={reel}
          index={index}
          active={activeId === reel.id}
          onPlay={() => {
            if (!reel.placeholder && reel.video) setActiveId(reel.id);
          }}
        />
      ))}
    </div>
  );
}
