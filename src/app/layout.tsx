import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackgroundGlow from "@/components/BackgroundGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billal Benzazoua",
  description:
    "Personal portfolio of Billal Benzazoua, a passionate software developer and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${inter.variable} antialiased bg-white dark:bg-slate-950 relative`}
      >
        <BackgroundGlow />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
