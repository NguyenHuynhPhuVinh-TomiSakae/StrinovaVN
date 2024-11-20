import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Strinova VN - Game bắn súng Anime thế hệ mới - Chơi miễn phí",
  description: "Strinova là một trò chơi bắn súng chiến thuật cạnh tranh theo phong cách anime với góc nhìn thứ ba. Chuyển đổi tự do giữa không gian ba chiều và hai chiều trong trải nghiệm bắn súng độc đáo này với hệ thống bắn súng chiến thuật đặc biệt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
