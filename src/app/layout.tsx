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
  title: `${profile.name} - Full-Stack Software Developer | Portfolio`,
  description: profile.headline,
  keywords: [
    "Ishan Chinthaka",
    "Ishan Chinthaka portfolio",
    "Ishan Chinthaka developer",
    "Ishan Chinthaka software developer",
    "Ishan Chinthaka full-stack developer",
    "Ishan Chinthaka Sri Lanka",
    "Ishan Chinthaka web developer",
    "portfolio",
    "developer portfolio",
    "Next.js portfolio",
    "TypeScript",
    "web developer"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} - Full-Stack Software Developer | Portfolio`,
    description: profile.headline,
    type: "website",
    url: "https://ishan-chinthaka.vercel.app",
    siteName: `${profile.name} Portfolio`,
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
    title: `${profile.name} - Full-Stack Software Developer | Portfolio`,
    description: profile.headline,
    images: ["/portfolio-hero.png"]
  },
  metadataBase: new URL("https://ishan-chinthaka.vercel.app")
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ishan Chinthaka",
              "url": "https://ishan-chinthaka.vercel.app",
              "jobTitle": "Software Developer",
              "description": "Full-Stack Software Developer building scalable, secure, and user-focused digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Sri Lanka"
              },
              "sameAs": [
                "https://github.com/ish-22",
                "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
                "mailto:ishanchinthaka2002@gmail.com"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "PHP",
                "Laravel",
                "MySQL",
                "MongoDB",
                "Java",
                "Kotlin",
                "Full-Stack Development"
              ]
            }`
          }}
        />
      </body>
    </html>
  );
}
