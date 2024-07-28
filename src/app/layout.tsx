import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviderNextTheme } from "@/utils/ThemeProvider";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/utils/site";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://sayedmurtaza.com"),
  title: {
    default: `${siteConfig.name} | Free-to-use UI`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React Tailwind",
    "tailwind css",
    "tailwind components",
    "react.js",
    "next.js",
    "vercel",
    "Tailwind template",
    "tailwind css theme",
    "tailwindcss components",
    "free to use",
    "React Tailwind Components",
    "ui",
    "ux",
    "sayed murtaza",
    "react tailwind",
  ],
  authors: [
    {
      name: "Sayed Murtaza",
      url: "https://sayedmurtaza.com",
    },
  ],
  creator: "Sayed Murtaza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Free-to-use UI`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Free-to-use UI`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/static/`],
    creator: "@sayedmurtaza",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderNextTheme
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ThemeProviderNextTheme>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
