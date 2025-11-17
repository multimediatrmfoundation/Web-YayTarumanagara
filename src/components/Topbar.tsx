// src/components/Topbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type SocialItem = {
  name: "Instagram" | "TikTok" | "LinkedIn" | "YouTube";
  href: string;
};

type Props = {
  socials?: SocialItem[];
  onSignIn?: () => void;
  currentLang?: "ID" | "EN";
  onChangeLang?: (lang: "ID" | "EN") => void;
  className?: string;
};

export default function Topbar({
  socials = [
    { name: "Instagram", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "YouTube", href: "#" },
  ],
  onSignIn,
  currentLang = "ID",
  onChangeLang,
  className = "",
}: Props) {
  const [openLang, setOpenLang] = useState(false);

  return (
    <div
      role="region"
      aria-label="Topbar"
      className={`w-full bg-[#0F2F5A] text-white text-sm`}
    >
      <div
        className={`mx-auto flex h-9 max-w-screen-2xl items-center justify-end gap-4 px-3 sm:px-6 ${className}`}
      >
        {/* Media Sosial */}
        <div className="hidden md:flex items-center gap-3">
          <span className="opacity-90">Media Sosial</span>
          <span aria-hidden="true" className="opacity-60">
            |
          </span>
          <nav aria-label="Media Sosial" className="flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] bg-white/10 hover:bg-white/20 transition"
              >
                {iconFor(s.name)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sign In */}
        <button
          type="button"
          onClick={onSignIn}
          className="ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-white/10 transition"
        >
          <UserIcon className="h-4 w-4" />
          <span>Sign In</span>
        </button>

        {/* Language Switcher */}
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 font-medium hover:bg-white/25 transition"
            onClick={() => setOpenLang((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={openLang}
            aria-label="Switch language"
          >
            <span>{currentLang}</span>
            <ChevronDown className={`h-4 w-4 transition ${openLang ? "rotate-180" : ""}`} />
          </button>

          {openLang && (
            <ul
              role="listbox"
              className="absolute right-0 z-10 mt-1 w-28 overflow-hidden rounded-lg border border-white/15 bg-[#102845] p-1 shadow-lg"
            >
              {(["ID", "EN"] as const).map((lang) => (
                <li key={lang}>
                  <button
                    role="option"
                    aria-selected={currentLang === lang}
                    className={`w-full text-left rounded-md px-3 py-2 hover:bg-white/10 ${
                      currentLang === lang ? "bg-white/10" : ""
                    }`}
                    onClick={() => {
                      onChangeLang?.(lang);
                      setOpenLang(false);
                    }}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* --- Minimal inline icons (tanpa dependency eksternal) --- */

function iconFor(name: SocialItem["name"]) {
  switch (name) {
    case "Instagram":
      return <InstagramIcon className="h-3.5 w-3.5" />;
    case "TikTok":
      return <TikTokIcon className="h-3.5 w-3.5" />;
    case "LinkedIn":
      return <LinkedInIcon className="h-3.5 w-3.5" />;
    case "YouTube":
      return <YouTubeIcon className="h-3.5 w-3.5" />;
  }
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="8" r="4" strokeWidth="1.6" />
      <path d="M4 20c1.8-3.3 6-5 8-5s6.2 1.7 8 5" strokeWidth="1.6" />
    </svg>
  );
}

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
      <circle cx="12" cy="12" r="4.2" fill="#0F2F5A" />
      <circle cx="17" cy="7" r="1" fill="#0F2F5A" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 3c.4 2.6 1.9 4.8 5 5v3.1c-1.9 0-3.7-.6-5-1.7v5.7a6.1 6.1 0 11-3-5.3v3.2a2.9 2.9 0 102 2.7V3z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 104.99 8a2.5 2.5 0 00-.01-4.5zM3.5 9h3v12h-3V9zm6 0h2.9v1.7h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4.3 2.1 4.3 4.9V21h-3v-5.3c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21h-3V9z" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12s0-3.4-.4-5a3 3 0 00-2.1-2.1C17.9 4.4 12 4.4 12 4.4s-5.9 0-7.5.5A3 3 0 002.4 7C2 8.6 2 12 2 12s0 3.4.4 5a3 3 0 002.1 2.1c1.6.4 7.5.4 7.5.4s5.9 0 7.5-.4A3 3 0 0021.6 17c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}