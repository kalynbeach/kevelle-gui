"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { componentGroups, foundations } from "@/components/showcase/nav"
import { ModeToggle } from "@/components/showcase/mode-toggle"

function Wordmark() {
  const { setOpenMobile } = useSidebar()

  return (
    <Link
      href="/"
      onClick={() => setOpenMobile(false)}
      className="w-fit font-brand text-4xl leading-none text-foreground"
    >
      Kevelle
    </Link>
  )
}

function SiteSidebar() {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()
  const close = () => setOpenMobile(false)

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 pt-4 pb-2">
          <Wordmark />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={pathname === "/"}
                render={<Link href="/" onClick={close} />}
              >
                Overview
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Foundations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {foundations.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    render={<Link href={item.href} onClick={close} />}
                  >
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {componentGroups.map((group) => {
                const current = pathname === group.href

                return (
                  <SidebarMenuItem key={group.href}>
                    <SidebarMenuButton
                      isActive={current}
                      render={<Link href={group.href} onClick={close} />}
                    >
                      {group.label}
                    </SidebarMenuButton>
                    {current ? (
                      <SidebarMenuSub>
                        {group.items.map((item) => (
                          <SidebarMenuSubItem key={item.href}>
                            <SidebarMenuSubButton
                              render={<Link href={item.href} onClick={close} />}
                            >
                              {item.label}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 pb-2">
          <ModeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SiteSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4 md:hidden">
          <Wordmark />
          <SidebarTrigger />
        </header>
        <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-16 px-4 py-10 md:px-10 md:py-14">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
