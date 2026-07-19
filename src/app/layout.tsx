import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-five-taupe-33.vercel.app"),
  title: {
    default: "Charles Luigi Mesa — Full-Stack Developer",
    template: "%s | Charles Luigi Mesa",
  },
  description:
    "Full-stack developer building reliable software that people actually use. Magna Cum Laude, Valedictorian, and highest GPA overall. Open to work.",
  keywords: [
    "full-stack developer",
    "Charles Luigi Mesa",
    "Laravel",
    "Flutter",
    "Oracle",
    "SAP FICO",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Charles Luigi Mesa" }],
  creator: "Charles Luigi Mesa",
  publisher: "Charles Luigi Mesa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-five-taupe-33.vercel.app",
    siteName: "Charles Luigi Mesa — Portfolio",
    title: "Charles Luigi Mesa — Full-Stack Developer",
    description:
      "Building reliable software that people actually use. Magna Cum Laude BSIT. 7× Oracle/SAP certified.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charles Luigi Mesa — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Luigi Mesa — Full-Stack Developer",
    description:
      "Building reliable software that people actually use. Magna Cum Laude BSIT. 7× Oracle/SAP certified.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}