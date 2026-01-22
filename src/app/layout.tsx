import type { Metadata } from "next";
import { Oswald, Manrope, Galada, Great_Vibes } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const galada = Galada({
  weight: "400",
  variable: "--font-galada",
  subsets: ["bengali", "latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanghati 2K26 | Swami Vivekananda University",
  description: "Unity in Rhythm, Heritage in Soul. The Official Cultural Fest of SVU.",
};

import StarBackground from "@/components/ui/StarBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${manrope.variable} ${galada.variable} ${greatVibes.variable} antialiased bg-black text-white`}
      >
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
