import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  // 1. Tampilan Utama di Google & Tab Browser
  title: "M. Tenno Haika Avvatar — Portfolio",
  description: "Full-Stack Developer specialized in frontend engineering, animations, and premium futuristic UI systems.",
  
  // 2. Tampilan Otomatis Saat Dibagikan ke WhatsApp, Telegram, dll (Open Graph)
  openGraph: {
    title: "M. Tenno Haika Avvatar — Portfolio",
    description: "Crafting premium digital expansions with clean layouts and futuristic UI systems.",
    url: "https://portofolio-futuristic.vercel.app", // <--- GANTI dengan URL asli Vercel kamu setelah live nanti
    siteName: "Avvatar Portfolio",
    images: [
      {
        url: "/profile.png", // <--- Menggunakan foto profil kamu yang ada di folder public
        width: 1200,
        height: 630,
        alt: "M. Tenno Haika Avvatar Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 3. Tampilan Khusus saat dibagikan ke Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "M. Tenno Haika Avvatar — Portfolio",
    description: "Full-Stack Developer specialized in building premium modern web experiences.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Tetap mempertahankan setelan font Space Grotesk dan background bawaanmu */}
      <body className={`${space.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}