"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLabel = language === "id" ? "ID" : "ENG";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop
          ? "bg-[#17529E] shadow-none"
          : "bg-transparent backdrop-blur-md shadow-md"
      }`}
    >
      <div className="hidden md:block border-b border-white/20">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-5 py-1 text-[10px] text-white">
          <span>{t("header.socialLabel")}</span>

          <span className="text-white/40">|</span>

          <div className="flex items-center gap-2">
            <Instagram size={13} className="text-white hover:text-gray-200" />
            <Facebook size={13} className="text-white hover:text-gray-200" />
            <Youtube size={13} className="text-white hover:text-gray-200" />
            <Linkedin size={13} className="text-white hover:text-gray-200" />
          </div>

          <span className="text-white/40">|</span>

          <button className="hover:text-white text-[10px]">
            {t("header.signIn")}
          </button>

          <span className="text-white/40">|</span>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full bg-white px-2.5 py-[1px] text-[10px] font-medium text-[#333] hover:bg-gray-100"
          >
            {currentLabel}
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logoyay.png"
            alt={t("header.logoAlt")}
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        <div className="ml-auto flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-7 text-sm text-white font-medium">
            <Link href="/about" className="hover:text-gray-200">
              {t("header.nav.about")}
            </Link>
            <Link href="/berita" className="hover:text-gray-200">
              {t("header.nav.news")}
            </Link>
            <Link href="/unit" className="hover:text-gray-200">
              {t("header.nav.units")}
            </Link>
            <Link href="/kerja-sama" className="hover:text-gray-200">
              {t("header.nav.cooperation")}
            </Link>
            <Link href="/karir" className="hover:text-gray-200">
              {t("header.nav.career")}
            </Link>
          </nav>

          <button
            aria-label={t("header.searchAria")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white/15 cursor-pointer"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white/15 cursor-pointer md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-[#17529E]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 text-sm text-white">
            <Link href="/about" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t("header.nav.about")}</Link>
            <Link href="/berita" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t("header.nav.news")}</Link>
            <Link href="/unit" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t("header.nav.units")}</Link>
            <Link href="/kerja-sama" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t("header.nav.cooperation")}</Link>
            <Link href="/karir" className="hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>{t("header.nav.career")}</Link>

            <div className="mt-2 h-px w-full bg-white/20" />

            <div className="flex items-center justify-between pt-1 text-[12px]">
              <button className="hover:text-gray-200">
                {t("header.signIn")}
              </button>
              <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-full bg-white px-3 py-[2px] text-[11px] font-medium text-[#333] hover:bg-gray-100"
              >
                {currentLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
