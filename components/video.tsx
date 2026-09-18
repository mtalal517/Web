'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Photo } from './visuals';
export function VideoSection({src,poster,title}:{src:string;poster:string;title:string}){const [playing,setPlaying]=useState(false);return <section className="video-block" aria-label={title}>{playing?<video controls autoPlay playsInline preload="metadata" poster={poster} aria-label={title}><source src={src}/>Your browser does not support this video. <a href={src}>Download the film</a>.</video>:<button className="video-poster" onClick={()=>setPlaying(true)} data-cursor="PLAY" aria-label={`Play ${title}`}><Photo src={poster} alt={title}/><span><Play size={24}/> Watch the film</span></button>}</section>;}
