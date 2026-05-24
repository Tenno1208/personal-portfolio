import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Futuristic Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}