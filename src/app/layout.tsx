import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Yayasan Tarumanagara",
  description: "Pride in Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${robotoSlab.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  );
}