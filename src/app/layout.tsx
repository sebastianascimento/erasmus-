import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cracow Heritage - Guia de Cracóvia",
  description:
    "Explore Cracóvia com um visual editorial, mapa interativo e filtros para descobrir os principais monumentos e experiências da cidade.",
  keywords: ["Cracóvia", "Turismo", "Monumentos", "Heritage", "Polônia", "Mapa"],
  openGraph: {
    title: "Cracow Heritage",
    description: "Descubra os principais monumentos de Cracóvia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${manrope.variable} ${cormorant.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/images/logokrakow.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logokrakow.jpg" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
