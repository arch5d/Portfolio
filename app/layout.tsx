import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Archita Dayal | Creative Technologist',
  description: 'Portfolio of Archita Dayal — Creative Technologist focused on AI, cybersecurity, and systems building.',
  metadataBase: new URL('https://architadayal.in')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
