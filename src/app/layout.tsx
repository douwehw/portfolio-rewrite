import { Noto_Sans_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const noto = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ["100" ,"200", "300", "400", "500", "600", "700", "800", "900"],
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
		<html lang='nl' className='scroll-smooth text-[#131515] dark:text-[#f2f4f3]'>
			<body className={`${noto.className}`}>{children}</body>
		</html>
	);
}
