import "./globals.css";

// app/layout.js

export const metadata = {
  title:
    "Ibrakan Micro Finance, General Merchandise & Progressive Association | Sierra Leone",

  description:
    "Ibrakan Micro Finance, General Merchandise & Progressive Association provides microfinance, business financing, agricultural loans, general merchandise, and community development services across Sierra Leone.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icons/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/icons/logo-192x192.png",
    apple: "/icons/logo-192x192.png",
  },

  keywords: [
    "Ibrakan",
    "Ibrakan Micro Finance",
    "Micro Finance Sierra Leone",
    "Micro Loans",
    "Business Loans",
    "Agricultural Finance",
    "General Merchandise",
    "Progressive Association",
    "MSME Finance",
    "Village Savings",
    "Financial Services Sierra Leone",
    "Small Business Loans",
    "Community Development",
    "Credit Services",
    "Sierra Leone",
  ],

  authors: [
    {
      name: "Ibrakan Micro Finance, General Merchandise & Progressive Association",
    },
  ],

  creator: "Ibrakan Micro Finance, General Merchandise & Progressive Association",

  publisher:
    "Ibrakan Micro Finance, General Merchandise & Progressive Association",

  metadataBase: new URL("https://www.ibrakan.sl"),

  applicationName:
    "Ibrakan Micro Finance, General Merchandise & Progressive Association",

  classification:
    "Microfinance, Financial Services, General Merchandise & Community Development",

  robots: {
    index: true,
    follow: true,
  },

  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "https://www.ibrakan.sl",
  },

  openGraph: {
    title:
      "Ibrakan Micro Finance, General Merchandise & Progressive Association",

    description:
      "Providing affordable microfinance, business loans, agricultural financing, general merchandise, and community development solutions across Sierra Leone.",

    url: "https://www.ibrakan.sl",

    siteName:
      "Ibrakan Micro Finance, General Merchandise & Progressive Association",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/icons/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "Ibrakan Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ibrakan Micro Finance, General Merchandise & Progressive Association",

    description:
      "Affordable loans, business financing, agricultural support, general merchandise and community development services in Sierra Leone.",

    images: ["/icons/logo-512x512.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="light" />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}