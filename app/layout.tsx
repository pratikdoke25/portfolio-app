import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/helper/scroll-to-top";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import { personalData } from "@/utils/data/personal-data";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pratikdoke.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16f2b3" },
    { media: "(prefers-color-scheme: dark)", color: "#16f2b3" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${personalData.name} - ${personalData.designation}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.description || 
    "Full stack developer passionate about creating beautiful and functional web applications. Always open to collaborating and learning new technologies.",
  keywords: [
    personalData.name,
    personalData.designation,
    "developer",
    "portfolio",
    "frontend",
    "backend",
    "react",
    "nextjs",
    "typescript",
    "full stack",
    "web developer",
  ],
  authors: [{ name: personalData.name, url: baseUrl }],
  creator: personalData.name,
  publisher: personalData.name,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: `${personalData.name}'s Portfolio`,
    title: `${personalData.name} - ${personalData.designation}`,
    description: personalData.description || "Full stack developer",
    images: [
      {
        url: `${baseUrl}/og-image.png`, // Add your OG image
        width: 1200,
        height: 630,
        alt: `${personalData.name} - ${personalData.designation}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} - ${personalData.designation}`,
    description: personalData.description || "Full stack developer",
    creator: personalData.twitter ? `@${personalData.twitter.split("twitter.com/")[1]}` : "@",
    images: [`${baseUrl}/og-image.png`],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: personalData.name,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://api.anthropic.com" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta Tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={personalData.name} />
        <meta name="theme-color" content="#16f2b3" />
        <meta name="color-scheme" content="dark" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalData.name,
              jobTitle: personalData.designation,
              url: baseUrl,
              sameAs: [
                personalData.github,
                personalData.linkedIn,
                personalData.twitter,
              ],
              email: personalData.email,
              description: personalData.description,
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: baseUrl,
              name: `${personalData.name}'s Portfolio`,
              description: personalData.description,
              creator: {
                "@type": "Person",
                name: personalData.name,
              },
            }),
          }}
        />
      </head>
      <body 
        className={`${inter.className} bg-[#0a0e27] antialiased`}
        suppressHydrationWarning
      >
        {/* Toast Container */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        {/* Main Content */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}