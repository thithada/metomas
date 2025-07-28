// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thithada Islam - Portfolio",
  description:
    "Software Engineering Student passionate about QA and Software Testing. University of Phayao.",
  keywords: [
    "Thithada Islam",
    "Software Engineering",
    "QA",
    "Testing",
    "Portfolio",
    "University of Phayao",
  ],
  authors: [{ name: "Thithada Islam" }],
  creator: "Thithada Islam",
  openGraph: {
    title: "Thithada Islam - Portfolio",
    description:
      "Software Engineering Student passionate about QA and Software Testing",
    url: "https://metomas.vercel.app",
    siteName: "Thithada Islam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thithada Islam - Portfolio",
    description:
      "Software Engineering Student passionate about QA and Software Testing",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/TomasLOGO.png", // ✅ favicon ของเว็บไซต์
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
