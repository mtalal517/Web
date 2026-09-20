'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import type { InstagramReel } from '@/lib/portfolio';

function ReelCard({ reel, index, active, onPlay }: { reel: InstagramReel; index: number; active: boolean; onPlay: () => void }) {
  return <article className="reel-card">
    <div className="reel-frame" id={reel.id}>
      {active ? <video
        className="reel-native-video"
        src={reel.video}
        poster={reel.thumbnail}
        controls
        autoPlay
        playsInline
        preload="metadata"
        aria-label={`${reel.title} video`}
      /> : <button className="reel-cover" type="button" onClick={onPlay} aria-label={`Watch ${reel.title}`} data-cursor="PLAY">
        <img src={reel.thumbnail} alt={`${reel.title} reel cover`} loading="lazy" />
        <span className="reel-cover-shade" />
        <span className="reel-number">REEL / {String(index + 1).padStart(2, '0')}</span>
        <span className="reel-play"><Play size={18} fill="currentColor" /> Watch reel</span>
        <span className="reel-runtime">PORTRAIT / 9:16</span>
      </button>}
    </div>
    <div className="reel-caption">
      <div><span>{reel.category.toUpperCase()} / {reel.year}</span><h3><button className="reel-title-button" type="button" onClick={onPlay}>{reel.title}</button></h3><p>{reel.client}</p></div>
      <a href={reel.url} target="_blank" rel="noreferrer" aria-label={`Open ${reel.title} on Instagram`}><ExternalLink size={17} /></a>
    </div>
  </article>;
}

export function ReelGrid({ items, compact = false }: { items: InstagramReel[]; compact?: boolean }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return <div className={`reel-grid ${compact ? 'reel-grid-compact' : ''}`}>{items.map((reel, index) => <ReelCard key={reel.id} reel={reel} index={index} active={activeId === reel.id} onPlay={() => setActiveId(reel.id)} />)}</div>;
}
