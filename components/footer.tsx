import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function Footer(){return <footer><Link href="/" className="wordmark">STILL / MOVING®</Link><span>© {new Date().getFullYear()} · An independent point of view.</span><Link href="/contact">Start a conversation <ArrowUpRight size={14}/></Link></footer>;}
