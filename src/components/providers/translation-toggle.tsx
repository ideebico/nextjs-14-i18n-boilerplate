"use client"

import { usePathname, useRouter } from "next/navigation"
import i18nConfig from "i18nConfig"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TranslationToggle() {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChangeLanguage = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="size-[1.2rem]" />
          <span className="sr-only">{t("sr-translation")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage("es")}>
          {t("spanish")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
