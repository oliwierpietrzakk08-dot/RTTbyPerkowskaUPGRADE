import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RTT by Perkowska - Szkoła Języka Angielskiego w Łowiczu",
  description: "Szkoła języka angielskiego w Łowiczu prowadzona z pasją przez Krystynę Perkowską. 100% skuteczności na egzaminach CAE.",
  keywords: ["angielski Łowicz", "szkoła językowa Łowicz", "RTT by Perkowska", "egzaminy CAE", "matura angielski"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-white text-gray-950">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
