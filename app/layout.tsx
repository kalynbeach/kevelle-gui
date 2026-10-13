import type { Metadata } from "next"
import { preload } from "react-dom"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteShell } from "@/components/showcase/site-shell"

export const metadata: Metadata = {
  title: { default: "Kevelle", template: "%s · Kevelle" },
  description: "The Kevelle design system: foundations and components.",
}

const fonts = [
  "/fonts/abc-areal/ABCArealVariable.woff2",
  "/fonts/mekzantine/MEKZANTINE-Regular.woff2",
  "/fonts/departure-mono/DepartureMono-Regular.woff2",
  "/fonts/paper-mono/PaperMono-Variable.woff2",
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  for (const href of fonts) {
    preload(href, { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="root">
          <ThemeProvider>
            <TooltipProvider>
              <Toaster>
                <SiteShell>{children}</SiteShell>
                <SonnerToaster />
              </Toaster>
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
