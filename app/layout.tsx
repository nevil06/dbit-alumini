import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DBIT Alumni Association | Once a Boscoite, Always Connected",
  description:
    "The official alumni network of Don Bosco Institute of Technology, Bangalore. Connect with 10,000+ alumni across the globe, explore achievements, mentorship, and give back.",
  keywords: [
    "DBIT", "Don Bosco Institute of Technology", "DBITAA", "Alumni Association",
    "Bangalore engineering college alumni", "MILAN alumni meet",
  ],
  openGraph: {
    title: "DBIT Alumni Association",
    description: "Celebrating the legacy, achievements, and lifelong bond of DBIT Alumni across the world.",
    type: "website",
    url: "https://alumni.dbit.co.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "DBIT Alumni Association",
    description: "Once a Boscoite. Always Connected.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} bg-[#F8FAFC]`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
