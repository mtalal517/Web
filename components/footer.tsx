import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function Footer(){return <footer><Link href="/" className="wordmark">ahmed<span>photography</span></Link><span>© {new Date().getFullYear()} Ahmed · Films with feeling.</span><Link href="/contact">Work with me <ArrowUpRight size={14}/></Link></footer>;}
