import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "@telegram-apps/telegram-ui/dist/styles.css";
//import "@/styles/globals.css";
import Head from "next/head";
import { ColorSchemeScript } from "@mantine/core";
import { GlobalProviders } from "@/providers/app.providers";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className="antialiased">
        <GlobalProviders>{children} </GlobalProviders>
      </body>

    </html>
  );
}
