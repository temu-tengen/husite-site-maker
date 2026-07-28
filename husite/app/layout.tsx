import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lexend } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Husite | Custom Web Development Built to Your Vision',
    template: '%s | Husite',
  },
  description:
    'Turn your ideas into high-quality, modern websites. Send me your site description, and I will build and bring your online vision to life.',
  keywords: [
    'custom web development',
    'hire Next.js developer',
    'freelance web developer',
    'custom website build',
    'Husite',
    'website request service',
  ],
  authors: [{ name: 'Husite' }],
  creator: 'Husite',
  metadataBase: new URL('https://husite-site-maker.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://husite-site-maker.vercel.app',
    title: 'Husite | Custom Web Development Built to Your Vision',
    description:
      'Turn your ideas into high-quality, modern websites. Send me your site description, and I will build and bring your online vision to life.',
    siteName: 'Husite',
    images: [
      {
        url: '/favicon.png', // Place an image in your /public folder for social sharing cards
        width: 1200,
        height: 630,
        alt: 'Husite - Custom Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Husite | Custom Web Development',
    description:
      'Send me your website description, and I will build a modern, high-performance site for you.',
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
