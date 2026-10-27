import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/jetbrains-mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const SITE_URL = "https://proxeraa.com"; // TODO: replace with the live domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Proxeraa - AI, Automation, Technology & Growth",
  description:
    "Proxeraa helps businesses grow, automate and scale through AI, technology, software development, social media and performance marketing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Proxeraa",
    title: "Proxeraa - AI, Automation, Technology & Growth",
    description:
      "Build. Automate. Grow. AI, automation, software and performance marketing under one roof.",
    // TODO: add /og.png (1200x630) to /public and uncomment
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "Proxeraa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxeraa - AI, Automation, Technology & Growth",
    description:
      "Build. Automate. Grow. AI, automation, software and performance marketing under one roof.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Proxeraa",
      url: SITE_URL,
      slogan: "Build. Automate. Grow.",
      description:
        "Growth, technology and AI agency offering social media, paid advertising, AI automation, software development and data intelligence.",
      // TODO: add logo and sameAs (Instagram, LinkedIn, YouTube) once URLs are available
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Proxeraa",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      name: "Proxeraa",
      url: SITE_URL,
      serviceType: [
        "Social Media Management",
        "Performance Marketing",
        "AI Automation",
        "Software Development",
        "Data Intelligence",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
