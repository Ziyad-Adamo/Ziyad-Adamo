import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profileData } from "@/src/data/profile";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { LanguageProvider } from "@/components/context/LanguageContext";

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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased text-foreground selection:bg-accent/30 selection:text-white`}
      >
        {/* Global ambient glow effect */}
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.08),transparent)]" />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
