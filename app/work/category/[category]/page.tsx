import { categories } from '@/lib/portfolio';
import { Archive } from '@/components/archive';
import { ContactScene } from '@/components/studio';
import { notFound } from 'next/navigation';
export function generateStaticParams(){return categories.map(c=>({category:c.toLowerCase()}));}
export async function generateMetadata({params}:{params:Promise<{category:string}>}){const {category}=await params;const c=categories.find(c=>c.toLowerCase()===category);return {title:c?`${c} films`:'Category not found',description:`Explore ${c?.toLowerCase()} films by Ahmed.`,openGraph:{title:`${c} films — ahmedphotography`,description:`Ahmed’s cinematic perspective on ${c?.toLowerCase()}.`}};}
export default async function CategoryPage({params}:{params:Promise<{category:string}>}){const {category}=await params;const c=categories.find(c=>c.toLowerCase()===category);if(!c)notFound();return <main id="main" className="inner-page"><Archive category={c}/><ContactScene/></main>;}
