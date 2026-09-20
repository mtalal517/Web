import Link from 'next/link';
import { reels, categories, Category } from '@/lib/portfolio';
import { ReelGrid } from './reels';

export function Archive({category}:{category?:Category}) {
  const items = reels.filter(reel => !category || reel.category === category);
  return <><div className="page-intro section-pad"><span className="eyebrow">PUBLIC REELS / 2025—2026</span><h1>{category?<>{category}<em>.</em></>:<>Watch the <em>work.</em></>}</h1><p>{category?'Portrait-first work from this side of Ahmed’s practice. Play every film directly in its frame.':'Social-first films made for attention, rhythm, and replay. Choose a reel and it plays directly in the full portrait frame.'}</p><nav className="filter-nav" aria-label="Reel categories"><Link href="/work" aria-current={!category?'page':undefined}>All reels ({reels.length})</Link>{categories.map(c=><Link key={c} href={`/work/category/${c.toLowerCase()}`} aria-current={category===c?'page':undefined}>{c}</Link>)}</nav></div><section className="reel-archive section-pad" aria-label={category?`${category} reels`:'All Instagram reels'}><ReelGrid items={items}/></section></>;
}
