import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'DOPE TEST · 鳥類性格與溝通風格測驗', description: '20 道中英文情境題，探索鴿子、貓頭鷹、孔雀、老鷹四種溝通風格。Free bilingual bird personality quiz.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-Hant"><body>{children}</body></html>; }

