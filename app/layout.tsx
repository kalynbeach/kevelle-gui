import type { Metadata } from "next"
import { preload } from "react-dom"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteShell } from "@/components/showcase/site-shell"

export const metadata: Metadata = {
  title: { default: "Kevelle", template: "%s · Kevelle" },
  description: "The Kevelle theme: foundations and components in both modes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  preload("/fonts/abc-areal/ABCArealVariable.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  })
  preload("/fonts/paper-mono/PaperMono-Variable.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="root">
          <ThemeProvider>
            <TooltipProvider>
              <Toaster>
                <SiteShell>{children}</SiteShell>
              </Toaster>
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
