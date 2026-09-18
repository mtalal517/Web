import { Opening, SelectedWork, CategoryIndex } from '@/components/portfolio';
import { StudioNote, ContactScene } from '@/components/studio';
export default function Home(){return <main id="main"><Opening/><div className="manifesto section-pad"><span className="eyebrow">STILL / MOVING STUDIO</span><p>Some things deserve<br/>a <em>second look.</em></p><span className="manifesto-note">Photographs that linger.<br/>Films that make you feel.<br/>A perspective of our own.</span></div><SelectedWork/><CategoryIndex/><StudioNote/><ContactScene/></main>;}
