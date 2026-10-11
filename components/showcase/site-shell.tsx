"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ListIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { componentGroups, foundations } from "@/components/showcase/nav"
import { ModeToggle } from "@/components/showcase/mode-toggle"

const navLabel = "px-s pb-xxs text-xs font-medium text-neutral-6"

/* Sidebar rows use the Navigation menu link treatment at a tighter density. */
const navLink =
  "block rounded-s px-s py-xxs text-s text-neutral-8 transition-colors hover:bg-neutral-3 hover:text-neutral-10 aria-[current=page]:bg-neutral-3 aria-[current=page]:text-neutral-10"

function SiteNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Showcase" className="flex flex-col gap-l">
      <div className="flex flex-col gap-xxs">
        <Link
          href="/"
          onClick={onNavigate}
          aria-current={pathname === "/" ? "page" : undefined}
          className={navLink}
        >
          Overview
        </Link>
      </div>
      <div className="flex flex-col gap-xxs">
        <h2 className={navLabel}>Foundations</h2>
        {foundations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={pathname === item.href ? "page" : undefined}
            className={navLink}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {componentGroups.map((group) => (
        <div key={group.href} className="flex flex-col gap-xxs">
          <h2
            className={cn(
              navLabel,
              pathname === group.href && "text-neutral-10"
            )}
          >
            {group.label}
          </h2>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={navLink}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

function Wordmark() {
  return (
    <Link
      href="/"
      className="rounded-s font-brand text-m font-medium text-neutral-10"
    >
      Kevelle
    </Link>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = React.useState(false)

  return (
    <div className="flex min-h-dvh">
      <aside className="sticky top-0 hidden h-dvh w-[232px] shrink-0 flex-col gap-l overflow-y-auto overscroll-contain px-s py-l shadow-[inset_calc(var(--border-s)*-1)_0_0_0_var(--neutral-4)] md:flex">
        <div className="flex items-center justify-between ps-s">
          <Wordmark />
          <ModeToggle />
        </div>
        <SiteNav />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between gap-s bg-neutral-1 px-l py-s shadow-[inset_0_calc(var(--border-s)*-1)_0_0_var(--neutral-4)] md:hidden">
          <Wordmark />
          <div className="flex items-center gap-xs">
            <ModeToggle />
            <Drawer open={navOpen} onOpenChange={setNavOpen}>
              <DrawerTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open navigation" />
                }
              >
                <ListIcon />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerTitle className="sr-only">Navigation</DrawerTitle>
                <SiteNav onNavigate={() => setNavOpen(false)} />
              </DrawerContent>
            </Drawer>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-[60rem] min-w-0 flex-col gap-xxl px-l py-xxl md:px-xxl">
          {children}
        </main>
      </div>
    </div>
  )
}
