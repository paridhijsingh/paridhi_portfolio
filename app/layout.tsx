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

const siteDescription =
  "AI & Data Science portfolio focused on Machine Learning system design, RAG architectures, and multi-agent orchestration.";

export const metadata: Metadata = {
  metadataBase: new URL("https://workwithparidhi.com"),
  title: "Paridhi Jay Singh | AI & Data Science",
  description: siteDescription,
  openGraph: {
    title: "Paridhi Jay Singh | AI & Data Science",
    description: siteDescription,
    url: "/",
    siteName: "Paridhi Jay Singh",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 678,
        height: 1024,
        alt: "Paridhi Jay Singh - Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paridhi Jay Singh | AI & Data Science",
    description: siteDescription,
    images: ["/profile.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-50 font-sans text-slate-700">
        {children}
      </body>
    </html>
  );
}
