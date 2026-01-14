import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOENTORG.UZ — ruxsat etilgan xodimlar uchun katalog",
  description:
    "O'zbekiston davlat xodimlari uchun harbiy va maxsus forma, aksessuarlar hamda mavsumiy mahsulotlar katalogi."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        {children}
      </body>
    </html>
  );
}
