'use client';

import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { heroSlides, categories, reels, photos } from '@/lib/portfolio';
import { HeroPhoto } from './visuals';
import { MagneticLink } from './navigation';
import { ReelGrid } from './reels';
import { PhotoGrid } from './photos';

export function Opening() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return <section ref={ref} className="opening" aria-label="Featured films by Ahmed">
    <motion.div className="opening-image" style={reduce ? {} : { y }}><AnimatePresence mode="sync"><motion.div className="opening-frame" key={slide.id} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}><HeroPhoto desktop={slide.desktop} mobile={slide.mobile} alt={slide.alt} priority={active === 0} /></motion.div></AnimatePresence></motion.div>
    <div className="opening-shade" aria-hidden="true" />
    <div className="opening-top"><span>AHMED / FILMMAKER & PHOTOGRAPHER</span><span>ISLAMABAD · AVAILABLE WORLDWIDE</span></div>
    <div className="opening-title"><div className="eyebrow">CINEMATIC STORIES / REAL MOMENTS</div><h1>I frame<br /><em>what you feel.</em></h1></div>
    <div className="opening-bottom">
      <Link href="#selected" className="explore"><Play size={15} fill="currentColor" /> Watch my work <ArrowDown size={18} /></Link>
      <div className="slide-controls"><button aria-label="Previous featured film" onClick={() => setActive((active + heroSlides.length - 1) % heroSlides.length)}><ArrowLeft size={18} /></button><span>0{active + 1} / 0{heroSlides.length}</span><button aria-label="Next featured film" onClick={() => setActive((active + 1) % heroSlides.length)}><ArrowRight size={18} /></button></div>
    </div>
  </section>;
}

export function CategoryIndex() {
  const [active, setActive] = useState(0);
  const category = categories[active];
  const notes = {
    Restaurants: 'Food, dining rooms, and the feeling of a place—films and stills built around restaurants and hospitality.',
    Hospitality: 'Food, service, atmosphere, and place—films and stills that keep the details that make them memorable.',
    Brands: 'Social-first commercial stories and product photography built around craft, process, and people.',
    Process: 'The setups, movement, and decisions behind the final frame—in motion and in stills.',
    Travel: 'Street observations and personal work shaped by movement, people, texture, and a sense of place.',
  } as const;
  const reelCount = reels.filter(reel => reel.category === category).length;
  const photoCount = photos.filter(photo => photo.category === category).length;
  const mediumLabel = [
    reelCount ? `${String(reelCount).padStart(2, '0')} REEL${reelCount === 1 ? '' : 'S'}` : null,
    photoCount ? `${String(photoCount).padStart(2, '0')} PHOTO${photoCount === 1 ? '' : 'S'}` : null,
  ].filter(Boolean).join(' · ') || 'COMING SOON';

  return <section className="category-section section-pad"><div className="section-note"><span className="eyebrow">WHAT I CREATE</span><p>Films and photography.<br />Made for the way people watch—and look.</p></div><div className="category-layout"><div className="category-list">{categories.map((item, i) => <button className={`category-row ${active === i ? 'active' : ''}`} key={item} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-pressed={active === i}><span className="index">0{i + 1}</span><span>{item}</span><span className="category-indicator" aria-hidden="true" /></button>)}</div><motion.div className="category-manifest" key={category} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.35}}><span className="eyebrow">{mediumLabel}</span><h3>{category}</h3><p>{notes[category]}</p><Link className="text-link" href={`/work/category/${category.toLowerCase()}`}>Explore {category.toLowerCase()} <ArrowUpRight size={17}/></Link></motion.div></div></section>;
}

export function SelectedWork() {
  return (
    <>
      <section id="selected" className="selected section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PUBLIC REELS / COMING SOON</span>
            <h2>Made to move.<br/><em>Built to hold attention.</em></h2>
          </div>
          <MagneticLink href="/work">Watch all reels</MagneticLink>
        </div>
        <ReelGrid items={reels.slice(0, 3)} compact />
      </section>
      <section id="selected-photos" className="selected-photos section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PHOTOGRAPHY / COMING SOON</span>
            <h2>Frames that stay.<br/><em>Still, on purpose.</em></h2>
          </div>
          <MagneticLink href="/work#selected-photos-archive">View all photos</MagneticLink>
        </div>
        <PhotoGrid items={photos.slice(0, 3)} compact />
      </section>
    </>
  );
}
