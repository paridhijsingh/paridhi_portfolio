import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { PortfolioAssistant } from "@/components/PortfolioAssistant";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteDescription =
  "AI Engineer & Data Scientist portfolio focused on ML system design, RAG architectures, and multi-agent orchestration.";

export const metadata: Metadata = {
  metadataBase: new URL("https://workwithparidhi.vercel.app"),
  title: "Paridhi Jay Singh | AI Engineer & Data Scientist",
  description: siteDescription,
  openGraph: {
    title: "Paridhi Jay Singh | AI Engineer & Data Scientist",
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
    title: "Paridhi Jay Singh | AI Engineer & Data Scientist",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#08090D] font-sans text-[#F5F5F5]">
        {children}
        <PortfolioAssistant />
      </body>
    </html>
  );
}
