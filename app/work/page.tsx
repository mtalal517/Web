import { Archive } from '@/components/archive';
import { ContactScene } from '@/components/studio';
export const metadata={title:'The archive',description:'Explore photography and film across weddings, food, events, portraits, commercial, and editorial work.',openGraph:{title:'The archive — Still / Moving',description:'A collected view. Explore six worlds of photography and film.'}};
export default function Work(){return <main id="main" className="inner-page"><Archive/><ContactScene/></main>;}
