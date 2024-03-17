import * as React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { TranslationProvider } from "@/components/providers/translation-provider"
import initTranslations from "@/app/i18n"

const i18nNamespaces = ["page-home", "common"]

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <section
          id="hero"
          className="container grid items-center gap-6 py-12 md:py-20"
        >
          <div className="flex max-w-[800px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              {t("hero-headline")}
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              {t("hero-description")}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.ideebi.com/templates"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              {t("common:button-documentation")}
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ideebico/"
              className={buttonVariants({ variant: "outline" })}
            >
              {t("common:button-download")}
            </Link>
          </div>
        </section>
        <div className="mx-auto h-px max-w-[980px] bg-gradient-to-r from-background via-muted to-background" />
        <section
          id="modules"
          className="container grid items-center gap-6 py-12 md:py-20"
        >
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
              {t("modules-headline")}
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              {t("modules-description")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.reactLogo className="mr-2 size-6" />
                  React
                </CardTitle>
                <CardDescription>v18</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-react-description")}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.nextLogo className="mr-2 size-6" />
                  Next.js
                </CardTitle>
                <CardDescription>v14</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-next-description")}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.tailwindLogo className="mr-2 size-6" />
                  TailwindCSS
                </CardTitle>
                <CardDescription>v3</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-tailwind-description")}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.typescriptLogo className="mr-2 size-6" />
                  TypeScript
                </CardTitle>
                <CardDescription>v5</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-typescript-description")}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.i18nextLogo className="mr-2 size-6" />
                  React i18next
                </CardTitle>
                <CardDescription>v14</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-i18n-description")}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icons.nextLogo className="mr-2 size-6" />
                  Next Themes
                </CardTitle>
                <CardDescription>v0.2</CardDescription>
              </CardHeader>
              <CardContent>{t("modules-themes-description")}</CardContent>
            </Card>
          </div>
        </section>
      </main>
    </TranslationProvider>
  )
}
