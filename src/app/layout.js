import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/ui/header';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        {/* Ajout de Header */}
        <Header />
        
       
          {children}

        <TailwindIndicator />
      </body>
    </html>
  );
}
