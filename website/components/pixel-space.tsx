'use client';
import { useEffect, useRef, useState } from 'react';

export default function PixelSpace({en}:{en:boolean}) {
 const host=useRef<HTMLDivElement>(null);
 const [paused,setPaused]=useState(false);
 useEffect(()=>{
  const element=host.current;
  if(!element)return;
  let disposed=false,cleanup=()=>{};
  void import('three').then(THREE=>{
   if(disposed)return;
   let renderer:InstanceType<typeof THREE.WebGLRenderer>;
   try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:false,powerPreference:'low-power'});}catch{return;}
   renderer.setPixelRatio(1);
   element.appendChild(renderer.domElement);
   const scene=new THREE.Scene();
   const camera=new THREE.PerspectiveCamera(60,1,0.1,100);
   camera.position.z=12;
   const geometry=new THREE.BufferGeometry();
   const positions=new Float32Array(650*3);
   let seed=412;
   const random=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
   for(let i=0;i<positions.length;i+=3){positions[i]=(random()-.5)*65;positions[i+1]=(random()-.5)*40;positions[i+2]=-random()*25;}
   geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));
   const material=new THREE.PointsMaterial({color:0xd7d3ed,size:1.7,sizeAttenuation:false,transparent:true,opacity:.65});
   const stars=new THREE.Points(geometry,material);scene.add(stars);
   const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
   let frame=0,last=0,elapsed=0,lost=false;
   const draw=()=>{if(!lost)renderer.render(scene,camera);};
   const tick=(now:number)=>{frame=requestAnimationFrame(tick);if(now-last<50)return;elapsed+=Math.min((now-last)/1000,.1);last=now;stars.rotation.z=Math.sin(elapsed*.025)*.018;stars.position.y=Math.sin(elapsed*.08)*.22;draw();};
   const sync=()=>{cancelAnimationFrame(frame);frame=0;last=performance.now();if(!document.hidden&&!paused&&!motion.matches&&!lost)frame=requestAnimationFrame(tick);else draw();};
   const resize=()=>{const w=window.innerWidth,h=window.innerHeight;renderer.setSize(Math.ceil(w/2),Math.ceil(h/2),false);camera.aspect=w/h;camera.updateProjectionMatrix();draw();};
   const contextLost=(event:Event)=>{event.preventDefault();lost=true;cancelAnimationFrame(frame);};
   const contextRestored=()=>{lost=false;resize();sync();};
   window.addEventListener('resize',resize);document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);
   renderer.domElement.addEventListener('webglcontextlost',contextLost);renderer.domElement.addEventListener('webglcontextrestored',contextRestored);
   resize();sync();
   cleanup=()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);document.removeEventListener('visibilitychange',sync);motion.removeEventListener('change',sync);renderer.domElement.removeEventListener('webglcontextlost',contextLost);renderer.domElement.removeEventListener('webglcontextrestored',contextRestored);geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();};
  }).catch(()=>{});
  return()=>{disposed=true;cleanup();};
 },[paused]);
 return <><div className="pixel-universe" ref={host} aria-hidden="true"/><button className="motion-toggle" aria-pressed={paused} onClick={()=>{setPaused(p=>!p);document.documentElement.classList.toggle('motion-paused',!paused);}}>{paused?(en?'▶ Play stars':'▶ 播放星空'):(en?'Ⅱ Pause stars':'Ⅱ 暫停星空')}</button></>;
}
