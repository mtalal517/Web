'use client';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { ReactNode } from 'react';
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
 const reduce = useReducedMotion();
 return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-35px' }} transition={{ duration: .85, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function Photo({ src, alt, priority = false, className = '', sizes = '(max-width: 700px) 100vw, 70vw' }: { src: string; alt: string; priority?: boolean; className?: string; sizes?: string }) {
 return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzMTJlIi8+PC9zdmc+" /></div>;
}
