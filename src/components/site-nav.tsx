"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/providers/theme-toggle"
import { TranslationToggle } from "@/components/providers/translation-toggle"

interface SiteNavProps {
  items?: NavItem[]
}

export function SiteNav({ items }: SiteNavProps) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex w-full justify-between md:justify-normal md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.nextLogo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {t(`${item.title}`)}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <div className="flex justify-end md:hidden">
        <button onClick={toggleMenu} className={cn(buttonVariants())}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-x-0 top-16 mx-8 flex flex-col items-center rounded-lg border bg-popover shadow-xl md:hidden">
          <div className="my-8 flex flex-col items-center gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link key={index} href={item.href}>
                    {t(`${item.title}`)}
                  </Link>
                )
            )}
            <div className="mx-auto h-px w-full max-w-[980px] bg-gradient-to-r from-background via-muted to-background" />
            <div className="flex gap-4">
              <Link
                href={siteConfig.socialNav.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.facebookLogo className="size-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.socialNav.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitterLogo className="size-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <ThemeToggle />
              <TranslationToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
