import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c10" },
    { media: "(prefers-color-scheme: light)", color: "#0a0c10" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Full-Stack Software Engineer — Sri Lanka`,
    template: `%s | ${profile.name}`
  },
  description:
    "Ishan Chinthaka is a Full-Stack Software Engineer based in Sri Lanka specializing in React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL. Explore commercial work, production web apps, and system architecture case studies.",
  keywords: [
    "Ishan Chinthaka",
    "Ishan Chinthaka Software Engineer",
    "Full Stack Developer Sri Lanka",
    "React Developer Sri Lanka",
    "Next.js Developer Sri Lanka",
    "Software Engineer Portfolio Sri Lanka",
    "Full-Stack Software Engineer",
    "TypeScript Developer Sri Lanka",
    "Node.js REST API",
    "Spring Boot Developer Sri Lanka",
    "PostgreSQL",
    "Amazoft IT"
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: `${profile.name} Portfolio`,
  generator: "Next.js",
  category: "technology",
  classification: "Software Engineering Portfolio",
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
    siteName: `${profile.name} — Full-Stack Software Engineer Portfolio`,
    title: `${profile.name} | Full-Stack Software Engineer — Sri Lanka`,
    description:
      "Full-Stack Software Engineer in Sri Lanka with commercial experience building production web applications, scalable REST APIs, and database-driven solutions. Cardiff Metropolitan University BSc (Hons) 2:1.",
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
    title: `${profile.name} | Full-Stack Software Engineer — Sri Lanka`,
    description:
      "Full-Stack Software Engineer in Sri Lanka building responsive web applications, resilient REST APIs, and database systems.",
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
  },
  verification: {
    google: "f0JRFVeKNtv3mHGt-YSdEiffb5syykxJ8s603X_HpMY"
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
        disambiguatingDescription:
          "Associate Software Engineer at Amazoft IT and Cardiff Metropolitan University BSc (Hons) 2:1 Software Engineering graduate, specializing in React, Next.js, TypeScript, Spring Boot, and PostgreSQL. Distinct from Ishan Chinthaka (Dynamics CRM developer / SLIIT graduate).",
        worksFor: {
          "@type": "Organization",
          name: "Amazoft",
          alternateName: ["Amazoft IT", "AMAZOFT"],
          url: "https://www.amazoft.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 4, Dharmarama Rd",
            addressLocality: "Colombo",
            postalCode: "00600",
            addressCountry: "Sri Lanka"
          }
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Cardiff Metropolitan University",
            url: "https://www.cardiffmet.ac.uk",
            sameAs: "https://en.wikipedia.org/wiki/Cardiff_Metropolitan_University"
          },
          {
            "@type": "EducationalOrganization",
            name: "ICBT Campus",
            url: "https://www.icbt.lk"
          }
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Bachelor of Science with Honours (BSc Hons 2:1) in Software Engineering",
            recognizedBy: {
              "@type": "CollegeOrUniversity",
              name: "Cardiff Metropolitan University"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "diploma",
            name: "Higher National Diploma in Software Engineering",
            recognizedBy: {
              "@type": "EducationalOrganization",
              name: "ICBT Campus"
            }
          }
        ],
        description:
          "Associate Software Engineer at Amazoft IT based in Sri Lanka building fast, reliable web applications, secure REST APIs, and database solutions using React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL. Graduate of Cardiff Metropolitan University.",
        image: `${siteUrl}/portrait.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ambalangoda",
          addressRegion: "Southern Province",
          addressCountry: "Sri Lanka"
        },
        sameAs: [
          profile.github,
          profile.linkedin,
          profile.facebook,
          profile.tiktok,
          "mailto:ishanchinthaka2002@gmail.com"
        ],
        knowsAbout: [
          "Software Engineering",
          "Full-Stack Web Development",
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "Java",
          "Spring Boot",
          "PHP",
          "Laravel",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "RESTful APIs",
          "Docker",
          "AWS Cloud",
          "Git",
          "Tailwind CSS"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        name: "Ishan Chinthaka — Verified Professional Background",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Ishan Chinthaka?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ishan Chinthaka is an Associate Software Engineer at Amazoft IT based in Sri Lanka. He holds a BSc (Hons) 2:1 in Software Engineering from Cardiff Metropolitan University and specializes in React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL. He built Track My Bus (real-time IoT fleet transit tracking), MediSync Core, and AI Study Assistant."
            }
          },
          {
            "@type": "Question",
            name: "What university and degree did Ishan Chinthaka graduate from?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ishan Chinthaka earned a Bachelor of Science with Honours (BSc Hons 2:1) in Software Engineering from Cardiff Metropolitan University (UK) via ICBT Campus. He did not attend SLIIT."
            }
          },
          {
            "@type": "Question",
            name: "What is Ishan Chinthaka's current employer and role?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ishan Chinthaka currently works as an Associate Software Engineer at Amazoft (Amazoft IT) located in Colombo, Sri Lanka (No. 4, Dharmarama Rd, Colombo 06). He previously trained at Amazoft as a Trainee Software Developer from June 2022 to December 2025. He does not work at Synthesis or Moqdigital."
            }
          },
          {
            "@type": "Question",
            name: "What is Ishan Chinthaka's tech stack and specialization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ishan Chinthaka's core technology stack includes React, Next.js, TypeScript, Tailwind CSS, Node.js, Java Spring Boot, PostgreSQL, Docker, and AWS. He does not specialize in Microsoft Dynamics CRM, SSRS, or ASP.NET."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Ishan Chinthaka",
        alternateName: [
          "Ishan Chinthaka Portfolio",
          "Ishan Chinthaka Software Engineer",
          "Ishan Chinthaka Full-Stack Developer"
        ],
        publisher: {
          "@id": `${siteUrl}/#person`
        },
        description:
          "Official portfolio of Ishan Chinthaka — Full-Stack Software Engineer based in Sri Lanka specializing in React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL.",
        inLanguage: "en-US"
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#sitenavigation`,
        name: "Site Navigation",
        description: "Primary directory of Ishan Chinthaka's portfolio",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Projects & Work",
            description: "Production web applications, IoT transit tracking, and full-stack engineering case studies.",
            url: `${siteUrl}/projects`
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "About Ishan Chinthaka",
            description: "Biography, background, Cardiff Metropolitan University degree, and career journey.",
            url: `${siteUrl}/about`
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Work Experience",
            description: "Commercial software engineering experience at Amazoft IT as Associate and Trainee Developer.",
            url: `${siteUrl}/experience`
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Technical Skills",
            description: "Frontend, backend, database, and cloud competencies across React, Next.js, Node.js, Spring Boot, and PostgreSQL.",
            url: `${siteUrl}/skills`
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Contact & Inquiries",
            description: "Direct email, WhatsApp (+94 76 527 4750), and message form for hiring and collaboration.",
            url: `${siteUrl}/contact`
          }
        ]
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
