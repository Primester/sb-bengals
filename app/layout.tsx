import { absoluteAssetUrl, publicSiteUrl } from "@/lib/paths";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
const anton = localFont({
  src: "../public/brand/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: {
    default: "Santa Barbara Bengals | Youth Tackle Football",
    template: "%s | Santa Barbara Bengals",
  },
  description:
    "Your city. Your team. Your next chapter. Get to know Santa Barbara Bengals youth tackle football: player-first development, a safety-focused vision, and a home field at San Marcos High School.",
  robots: {
    index: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
    follow: process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true",
  },
  openGraph: {
    title: "Santa Barbara Bengals | Youth Tackle Football",
    description:
      "Build confidence. Learn the game. Find your team in Santa Barbara.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteAssetUrl("/brand/wordmark.png"),
        width: 1983,
        height: 793,
        alt: "Santa Barbara Bengals",
      },
    ],
  },
  icons: { icon: absoluteAssetUrl("/brand/sb-mark.png") },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={anton.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
