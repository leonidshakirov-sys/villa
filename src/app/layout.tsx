import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { property } from "@/config/property";
import { JsonLd } from "@/components/JsonLd";
import { YandexMetrika } from "@/components/YandexMetrika";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f2ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(property.siteUrl),
  title: property.seo.title,
  description: property.seo.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: property.siteUrl,
    siteName: property.title,
    title: property.seo.title,
    description: property.seo.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Дом в Житнево 281,5 м² — продажа от собственника",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: property.seo.title,
    description: property.seo.description,
    images: ["/opengraph-image.png"],
  },
  ...(property.yandexWebmasterVerification
    ? { verification: { yandex: property.yandexWebmasterVerification } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Перейти к содержимому
        </a>
        <JsonLd />
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}
