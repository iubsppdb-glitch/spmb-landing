import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "./data/content";

export const metadata: Metadata = {
  title: `SPMB ${SITE_CONFIG.year} | ${SITE_CONFIG.schoolName}`,
  description: `Pendaftaran Murid Baru ${SITE_CONFIG.year} ${SITE_CONFIG.schoolName}. ${SITE_CONFIG.tagline}`,
  keywords: [
    "SPMB",
    "penerimaan siswa baru",
    SITE_CONFIG.schoolName,
    "Tanjung Pinang",
    "Kepulauan Riau",
    "SMA terbaik",
  ],
  openGraph: {
    title: `SPMB ${SITE_CONFIG.year} | ${SITE_CONFIG.schoolName}`,
    description: SITE_CONFIG.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-dark bg-white antialiased">{children}</body>
    </html>
  );
}
