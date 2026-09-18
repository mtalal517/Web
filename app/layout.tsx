import type { Metadata } from 'next';
import { Navbar, CustomCursor } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Still / Moving — Photography & Film', template: '%s — Still / Moving' }, description: 'An independent photography and film studio. Wedding stories, portraits, food, fashion, and considered commercial work. Islamabad & everywhere.', icons: { icon: '/favicon.svg' }, openGraph: { title: 'Still / Moving — Photography & Film', description: 'Six perspectives. One considered eye.', type: 'website' } };
const themeScript = `(function(){try{var t=localStorage.getItem('studio-theme');document.documentElement.dataset.theme=t||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}catch(e){document.documentElement.dataset.theme='dark'}})()`;
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body><a className="skip-link" href="#main">Skip to content</a><Navbar/>{children}<Footer/><CustomCursor/></body></html>; }
