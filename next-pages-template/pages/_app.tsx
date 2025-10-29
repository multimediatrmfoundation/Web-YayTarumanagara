import type { AppProps } from "next/app";

import * as React from "react";
/** Local shim for next-themes when it's not installed */
function NextThemesProvider({
  children,
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
}) {
  return <>{children}</>;
}
import { useRouter } from "next/router";

/** Fallback HeroUIProvider when @heroui/system is not installed */
function HeroUIProvider({
  children,
}: {
  children: React.ReactNode;
  navigate?: (url: string) => void;
}) {
  return <>{children}</>;
}

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
