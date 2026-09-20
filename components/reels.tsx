'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import type { InstagramReel } from '@/lib/portfolio';

export function ReelCard({ reel, index }: { reel: InstagramReel; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return <article className="reel-card">
    <div className="reel-frame">
      {loaded ? <iframe
        src={reel.embedUrl}
        title={`${reel.title} — Instagram reel`}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      /> : <button className="reel-placeholder" type="button" onClick={() => setLoaded(true)} aria-label={`Load reel: ${reel.title}`}>
        <span className="reel-number">REEL / {String(index + 1).padStart(2, '0')}</span>
        <img src="/brand/ahmad-logo-dark.png" alt="" loading="lazy" />
        <span className="reel-play"><Play size={18} fill="currentColor" /> Load reel</span>
        <span className="reel-runtime">PORTRAIT / 9:16</span>
      </button>}
    </div>
    <div className="reel-caption">
      <div><span>{reel.category.toUpperCase()} / {reel.year}</span><h3>{reel.title}</h3><p>{reel.client}</p></div>
      <a href={reel.url} target="_blank" rel="noreferrer" aria-label={`Open ${reel.title} on Instagram`}><ExternalLink size={17} /></a>
    </div>
  </article>;
}

export function ReelGrid({ items, compact = false }: { items: InstagramReel[]; compact?: boolean }) {
  return <div className={`reel-grid ${compact ? 'reel-grid-compact' : ''}`}>{items.map((reel, index) => <ReelCard key={reel.id} reel={reel} index={index} />)}</div>;
}
