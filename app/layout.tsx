import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profileData } from "@/src/data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profileData.meta.title,
  description: profileData.meta.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: profileData.meta.ogTitle,
    description: profileData.meta.ogDescription,
    type: "website",
    images: [
      {
        url: profileData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: profileData.personal.headline,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-white selection:bg-accent/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
