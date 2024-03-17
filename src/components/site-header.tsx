import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/providers/theme-toggle"
import { TranslationToggle } from "@/components/providers/translation-toggle"
import { SiteNav } from "@/components/site-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <SiteNav items={siteConfig.siteNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-1 md:flex">
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
          </nav>
        </div>
      </div>
    </header>
  )
}
