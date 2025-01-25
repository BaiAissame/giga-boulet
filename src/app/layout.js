import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/ui/header';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Giga-boulet-restaurant",
  description: "Giga-boulet est le meilleur restaurant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header (Navbar) */}
        <Header />

        {/* Contenu principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
          <p>&copy; 2025 Giga Boulet. Tous droits réservés.</p>
          <p>
            <Link href="/" className="text-teal-400 hover:underline">Accueil</Link> |&nbsp;
            <Link href="/Carte" className="text-teal-400 hover:underline">Menu</Link> |&nbsp;
            <Link href="/Offre" className="text-teal-400 hover:underline">Offre</Link>
          </p>
        </footer>

        {/* Indicateur Tailwind (pour le développement) */}
        <TailwindIndicator />
      </body>
    </html>
  );
}