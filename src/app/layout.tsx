import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.headline,
  keywords: [
    "portfolio",
    "developer portfolio",
    "Next.js portfolio",
    "TypeScript",
    "web developer"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    type: "website",
    images: [
      {
        url: "/portfolio-hero.png",
        width: 1024,
        height: 1024,
        alt: `${profile.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.headline,
    images: ["/portfolio-hero.png"]
  },
  metadataBase: new URL("https://your-domain.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
