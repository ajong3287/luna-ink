import type { Metadata } from "next";
import { Noto_Serif_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-noto-serif-kr",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "LUNA INK - 2주간의 마법",
  description: "당신의 피부 위에서 펼쳐지는 몽환적인 이야기",
  keywords: "타투, 일회용타투, 2주타투, 루나잉크, LUNA INK, 네일샵, 타투스티커",
  authors: [{ name: "MarketingPark & Elicon" }],
  openGraph: {
    title: "LUNA INK - 2주간의 마법",
    description: "당신의 피부 위에서 펼쳐지는 몽환적인 이야기",
    type: "website",
    locale: "ko_KR",
    siteName: "LUNA INK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSerifKr.variable} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
}