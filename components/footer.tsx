import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function Footer(){return <footer><Link href="/" className="footer-brand" aria-label="Ahmad Photography and Videography home"><img className="brand-logo brand-logo-dark" src="/brand/ahmad-logo-dark.png" alt=""/><img className="brand-logo brand-logo-light" src="/brand/ahmad-logo-light.png" alt=""/></Link><span>© {new Date().getFullYear()} Ahmed · Films with feeling.</span><Link href="/contact">Work with me <ArrowUpRight size={14}/></Link></footer>;}
