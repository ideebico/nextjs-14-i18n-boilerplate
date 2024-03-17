import type { Metadata } from "next"
import i18nConfig from "i18nConfig"
import { dir } from "i18next"

import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { TranslationProvider } from "@/components/providers/translation-provider"
import { SiteHeader } from "@/components/site-header"
import initTranslations from "@/app/i18n"

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

const i18nNamespaces = ["common"]

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <SiteHeader />
          </TranslationProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
