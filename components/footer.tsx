import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';
import { studio } from '@/lib/portfolio';

export function Footer(){return <footer><Link href="/" className="footer-brand" aria-label="Ahmad Photography and Videography home"><img className="brand-logo brand-logo-dark" src="/brand/ahmad-logo-dark.png" alt=""/><img className="brand-logo brand-logo-light" src="/brand/ahmad-logo-light.png" alt=""/></Link><span>© {new Date().getFullYear()} Ahmed · Films with feeling.</span><nav className="footer-social" aria-label="Social and contact links"><a href={studio.instagram} target="_blank" rel="noreferrer" aria-label="Follow Ahmed on Instagram"><Instagram size={18}/></a><Link href="/contact" aria-label="Email Ahmed"><Mail size={18}/></Link></nav><Link className="footer-cta" href="/contact">Work with me <ArrowUpRight size={14}/></Link></footer>;}
