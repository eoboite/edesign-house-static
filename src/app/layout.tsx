import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eDesign House — Secure Software & Cloud Solutions for Government, Enterprise, and Communities",
  description:
    "We are a software-driven company building secure, scalable technologies that power government, enterprise, and everyday people. From e-commerce to events and mission solutions, we connect people through modern software.",
  metadataBase: new URL("https://edesignhouse.com"),
  openGraph: {
    title: "eDesign House — Secure Software & Cloud Solutions for Government, Enterprise, and Communities",
    description:
      "Secure, scalable software and cloud solutions for government and enterprise. Washington, DC.",
    url: "https://edesignhouse.com",
    siteName: "eDesign House",
    images: [
      {
        url: "/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eDesign House"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "eDesign House — Secure Software & Cloud Solutions for Government, Enterprise, and Communities",
    description:
      "Secure, scalable software and cloud solutions for government and enterprise. Washington, DC.",
    images: ["/imgs/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/imgs/favicon.ico" },
      { url: "/imgs/logo.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/imgs/apple-touch-icon.png" }]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "eDesign House",
        "url": "https://edesignhouse.com/",
        "logo": "https://edesignhouse.com/imgs/logo.svg",
        "description":
          "Custom software and cloud solutions for government and enterprise.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Washington",
          "addressRegion": "DC",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://linkedin.com/company/edesignhouse",
          "https://twitter.com/edesignhouse",
          "https://instagram.com/edesignhouse"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Shoe Junkyz",
        "operatingSystem": "iOS",
        "applicationCategory": "LifestyleApplication",
        "url": "https://shoejunkyz.com"
      },
      {
        "@type": "SoftwareApplication",
        "name": "POP-UP SHOP",
        "operatingSystem": "iOS, Android",
        "applicationCategory": "LifestyleApplication",
        "url": "https://popupshop.app"
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
