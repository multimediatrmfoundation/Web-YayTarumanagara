import type { Metadata } from "next";
import { Roboto_Slab, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-roboto-slab",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tarumanagara Enterprise",
  description: "Enterprise • Creative • Tech",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${inter.variable}`}>
      <body className="antialiased font-inter bg-white text-slate-900">
        <LanguageProvider>
          <Header />
            {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
