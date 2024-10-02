import { Noto_Sans_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const noto = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Douwe Westerdijk",
  description: "Portfolio - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='nl' className='scroll-smooth dark:text-text-dark'>
      <body className={`${noto.className} bg-primary-light dark:bg-primary-dark`}>{children}</body>
    </html>
  );
}
