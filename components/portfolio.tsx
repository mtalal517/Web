'use client';

import Link from 'next/link';
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { projects, categories, reels } from '@/lib/portfolio';
import { Photo } from './visuals';
import { MagneticLink } from './navigation';
import { ReelGrid } from './reels';

export function Opening() {
  const [active, setActive] = useState(0);
  const slides = [projects[4], projects[0], projects[3]];
  const project = slides[active];
  const featuredReel = reels.slice(0, 3)[active];
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return <section ref={ref} className="opening" aria-label="Featured films by Ahmed">
    <motion.div className="opening-image" style={reduce ? {} : { y }}><AnimatePresence mode="sync"><motion.div className="opening-frame" key={project.slug} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}><Photo src={project.coverImage} alt={project.alt} priority sizes="100vw" /></motion.div></AnimatePresence></motion.div>
    <div className="opening-shade" />
    <div className="opening-top"><span>AHMED / FILMMAKER & PHOTOGRAPHER</span><span>ISLAMABAD · AVAILABLE WORLDWIDE</span></div>
    <div className="opening-title"><div className="eyebrow">CINEMATIC STORIES / REAL MOMENTS</div><h1>I frame<br /><em>what you feel.</em></h1></div>
    <div className="opening-bottom">
      <Link href="#selected" className="explore"><Play size={15} fill="currentColor" /> Watch my work <ArrowDown size={18} /></Link>
      <Link href={`/work#${featuredReel.id}`} className="opening-caption" data-cursor="PLAY"><span>FEATURED REEL — 0{active + 1}</span><strong>{featuredReel.title}</strong></Link>
      <div className="slide-controls"><button aria-label="Previous featured film" onClick={() => setActive((active + 2) % 3)}><ArrowLeft size={18} /></button><span>0{active + 1} / 03</span><button aria-label="Next featured film" onClick={() => setActive((active + 1) % 3)}><ArrowRight size={18} /></button></div>
    </div>
  </section>;
}

export function CategoryIndex() {
  const [active, setActive] = useState(0);
  const category = categories[active];
  const notes = {
    Showreels: 'A fast, portrait-first edit of selected work, collaborations, and the moments that define a year.',
    Hospitality: 'Food, service, atmosphere, and place—cut for attention without losing the details that make them memorable.',
    Brands: 'Social-first commercial stories built around the product, the process, and the people behind it.',
    Process: 'The setups, movement, and decisions behind the final frame. A closer look at how the work gets made.',
    Travel: 'Street observations and personal films shaped by movement, people, texture, and a sense of place.',
  } as const;
  const count = reels.filter(reel => reel.category === category).length;
  return <section className="category-section section-pad"><div className="section-note"><span className="eyebrow">WHAT I CREATE</span><p>Portrait-first content.<br />Made for the way people watch.</p></div><div className="category-layout"><div className="category-list">{categories.map((item, i) => <button className={`category-row ${active === i ? 'active' : ''}`} key={item} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-pressed={active === i}><span className="index">0{i + 1}</span><span>{item}</span><span className="category-indicator" aria-hidden="true" /></button>)}</div><motion.div className="category-manifest" key={category} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.35}}><span className="eyebrow">{String(count).padStart(2,'0')} PUBLIC REEL{count===1?'':'S'}</span><h3>{category}</h3><p>{notes[category]}</p><Link className="text-link" href={`/work/category/${category.toLowerCase()}`}>Watch {category.toLowerCase()} <ArrowUpRight size={17}/></Link></motion.div></div></section>;
}

export function SelectedWork() {
  return <section id="selected" className="selected section-pad"><div className="section-heading"><div><span className="eyebrow">PUBLIC REELS / INSTAGRAM</span><h2>Made to move.<br/><em>Built to hold attention.</em></h2></div><MagneticLink href="/work">Watch all reels</MagneticLink></div><ReelGrid items={reels.slice(0,3)} compact /></section>;
}
