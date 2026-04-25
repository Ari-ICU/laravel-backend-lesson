import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Laravel Expert | Advanced Backend Masterclass",
    template: "%s | Laravel Expert"
  },
  description: "The definitive curriculum for building elite-grade, high-performance applications with Laravel.",
  openGraph: {
    title: "Laravel Expert Masterclass",
    description: "Deep-dive into scalable backend engineering.",
    type: "website",
    locale: "en_US",
  },
};

import { GlobalBackground } from "@/components/GlobalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased bg-white text-black selection:bg-primary/20"
        )}
        suppressHydrationWarning
      >
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
