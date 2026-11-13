import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const siteUrl = "https://ishan-chinthaka.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Full-Stack Software Engineer`,
    template: `%s | ${profile.name}`
  },
  description:
    "Full-Stack Software Engineer with commercial experience building production web applications, scalable REST APIs, and database-driven systems using React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL.",
  keywords: [
    "Ishan Chinthaka",
    "Ishan Chinthaka portfolio",
    "Full-Stack Software Engineer",
    "Software Developer Sri Lanka",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Node.js REST API",
    "Spring Boot Developer",
    "PostgreSQL",
    "Amazoft IT"
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: `${profile.name} Portfolio`,
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} — Digital Engineering Lab`,
    title: `${profile.name} | Full-Stack Software Engineer`,
    description:
      "Commercial experience building production web applications, scalable REST APIs, and database-driven solutions. Cardiff Metropolitan University BSc (Hons) 2:1.",
    images: [
      {
        url: "/portfolio-hero.jpeg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - Full-Stack Software Engineer Portfolio Preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-Stack Software Engineer`,
    description:
      "Full-Stack Software Engineer building responsive web applications, resilient REST APIs, and database systems.",
    images: ["/portfolio-hero.jpeg"],
    creator: "@ish_22"
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        jobTitle: "Associate Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Amazoft IT"
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Cardiff Metropolitan University"
        },
        description: profile.subhead,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Meetiyagoda",
          addressRegion: "Ambalangoda",
          addressCountry: "Sri Lanka"
        },
        sameAs: [
          profile.github,
          profile.linkedin,
          "mailto:ishanchinthaka2002@gmail.com"
        ],
        knowsAbout: [
          "Frontend Engineering",
          "React.js",
          "Next.js",
          "TypeScript",
          "Backend Systems",
          "Node.js",
          "Express.js",
          "Java Spring Boot",
          "PHP & Laravel",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "RESTful APIs",
          "Cloud & Docker"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        publisher: {
          "@id": `${siteUrl}/#person`
        },
        description: profile.headline,
        inLanguage: "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: `${profile.name} — Full-Stack Software Engineer Portfolio`,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </body>
    </html>
  );
}
