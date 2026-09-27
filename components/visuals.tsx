'use client';
import { motion, useReducedMotion } from 'motion/react';
import Image, { getImageProps } from 'next/image';
import { ReactNode } from 'react';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzMTJlIi8+PC9zdmc+';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
 const reduce = useReducedMotion();
 return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-35px' }} transition={{ duration: .85, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Photo({ src, alt, priority = false, className = '', sizes = '(max-width: 700px) 100vw, 70vw' }: { src: string; alt: string; priority?: boolean; className?: string; sizes?: string }) {
 return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={75} placeholder="blur" blurDataURL={blurDataURL} /></div>;
}

/** Art-directed hero: one WebP/AVIF source for mobile, one for desktop — browser picks a single image. */
export function HeroPhoto({ desktop, mobile, alt, priority = false }: { desktop: string; mobile: string; alt: string; priority?: boolean }) {
  const shared = { alt, sizes: '100vw', quality: 72, placeholder: 'blur' as const, blurDataURL };
  // Priority preload only the desktop master to avoid fetching both art-directed assets.
  const { props: { srcSet: desktopSrcSet } } = getImageProps({ ...shared, width: 1920, height: 1280, src: desktop, priority });
  const { props: { srcSet: mobileSrcSet, ...img } } = getImageProps({ ...shared, width: 900, height: 1350, src: mobile });

  return (
    <div className="photo opening-photo">
      <picture>
        <source media="(max-width: 700px)" srcSet={mobileSrcSet} sizes="100vw" />
        <source media="(min-width: 701px)" srcSet={desktopSrcSet} sizes="100vw" />
        <img {...img} className="opening-photo-img" />
      </picture>
    </div>
  );
}
