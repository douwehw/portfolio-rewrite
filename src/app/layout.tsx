import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Douwe Westerdijk",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition duration-1000">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
