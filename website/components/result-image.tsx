'use client';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { birds } from '@/lib/quiz';

export default function ResultImage({ values, en }: { values: number[]; en: boolean }) {
 const [url, setUrl] = useState('');
 const [busy, setBusy] = useState(false);
 const [error, setError] = useState(false);
 useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
 async function create() {
  setBusy(true); setError(false);
  try {
   await document.fonts.ready;
   const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1350;
   const c = canvas.getContext('2d'); if (!c) throw Error('Canvas unavailable');
   c.fillStyle = '#101019'; c.fillRect(0, 0, 1080, 1350);
   for (let i = 0; i < 160; i++) { c.fillStyle = i % 3 ? '#464359' : '#b9abc9'; c.fillRect((i * 317 + 23) % 1080, (i * 173 + 19) % 1350, i % 3 ? 3 : 5, i % 3 ? 3 : 5); }
   c.fillStyle = '#191822'; c.fillRect(54, 54, 972, 1242);
   c.strokeStyle = '#777086'; c.lineWidth = 3; c.strokeRect(54, 54, 972, 1242);
   const text = (s: string, x: number, y: number, size: number, color = '#f3effa') => { c.fillStyle = color; c.font = `600 ${size}px Arial, "Microsoft JhengHei", sans-serif`; c.fillText(s, x, y); };
   text('DOPE TEST / INNER SPACE', 100, 124, 28, '#bcb0dd');
   const astronaut = new window.Image(); astronaut.src = '/astronaut-pixel.svg';
   await astronaut.decode(); c.imageSmoothingEnabled = false; c.drawImage(astronaut, 790, 155, 190, 190);
   text(en ? 'MY COMMUNICATION' : '我的溝通風格', 100, 225, 40);
   if (en) text('PROFILE', 100, 276, 40);
   const leaders = birds.filter((_, i) => values[i] === Math.max(...values));
   const names = leaders.map(b => b.name[en ? 1 : 0]);
   const lines = names.length > 2 ? [names.slice(0, 2).join(' + '), names.slice(2).join(' + ')] : [names.join(' + ')];
   lines.forEach((line, i) => text(line, 100, 375 + i * 60, 48, '#d5c1ff'));
   text(en ? 'Four styles. A constellation that is you.' : '四種特質，組成獨一無二的你。', 100, 492, 27, '#bcb7c9');
   birds.forEach((b, i) => {
    const y = 578 + i * 135;
    text(`${b.code}  ${b.name[en ? 1 : 0]}`, 100, y, 32);
    c.textAlign = 'right'; text(`${values[i]}%`, 976, y, 32, '#d5c1ff'); c.textAlign = 'left';
    c.fillStyle = '#302d3d'; c.fillRect(100, y + 23, 876, 28);
    c.fillStyle = '#c3aceb'; c.fillRect(100, y + 23, 876 * values[i] / 100, 28);
   });
   text(en ? 'Which bird are you? Take the free quiz.' : '你是哪一種鳥？一起來免費測驗！', 100, 1140, 30);
   text('twynzo.com', 100, 1200, 38, '#d5c1ff');
   text(en ? 'Self-reflection, not a psychological diagnosis.' : '自我探索參考，並非心理診斷。', 100, 1253, 21, '#aaa4b8');
   const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(b => b ? resolve(b) : reject(Error('Export failed')), 'image/png'));
   setUrl(URL.createObjectURL(blob));
  } catch { setError(true); } finally { setBusy(false); }
 }
 return <div className="result-export">
  <button className="secondary" disabled={busy} onClick={create}><Download size={17}/>{busy ? (en ? 'Creating image…' : '正在製作圖片…') : (en ? 'Save result image' : '儲存結果圖片')}</button>
  {error && <p role="alert">{en ? 'Could not create the image. Please try again.' : '圖片製作失敗，請再試一次。'}</p>}
  {url && <div className="result-image-preview"><img src={url} alt={en ? 'Your DOPE result card' : '你的 DOPE 測驗結果圖卡'} width={1080} height={1350}/><a className="primary" href={url} download="DOPE-result.png"><Download size={17}/>{en ? 'Download PNG' : '下載 PNG 圖片'}</a><p>{en ? 'Save the image, then upload it to Instagram or Threads. On mobile, you can also touch and hold the image to save it.' : '儲存圖片後，即可上傳至 IG 或 Threads。手機亦可長按圖片儲存。'}</p></div>}
 </div>;
}
