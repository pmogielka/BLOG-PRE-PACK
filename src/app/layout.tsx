import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PrePack.pl - Przygotowana likwidacja | Ratuj swoją firmę",
    template: "%s | PrePack.pl",
  },
  description:
    "Kompleksowy przewodnik po procedurze pre-pack w Polsce. Dowiedz się, jak szybko i skutecznie przeprowadzić przygotowaną likwidację przedsiębiorstwa, chroniąc interesy wierzycieli i zachowując ciągłość działalności.",
  keywords: [
    "pre-pack",
    "przygotowana likwidacja",
    "upadłość",
    "prawo upadłościowe",
    "restrukturyzacja",
    "oddłużanie",
    "syndyk",
    "wierzyciele",
  ],
  authors: [{ name: "PrePack.pl" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://prepack.pl",
    siteName: "PrePack.pl",
    title: "PrePack.pl - Przygotowana likwidacja | Ratuj swoją firmę",
    description:
      "Kompleksowy przewodnik po procedurze pre-pack w Polsce. Szybka i skuteczna przygotowana likwidacja przedsiębiorstwa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrePack.pl - Przygotowana likwidacja",
    description: "Kompleksowy przewodnik po procedurze pre-pack w Polsce.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${oswald.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
