import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Presentation Maker | Javari AI',
  description: 'Create stunning presentations with AI. Generate professional slides from your ideas in minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
