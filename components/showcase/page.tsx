import * as React from "react"
import { cn } from "cn"
import { CaretRightIcon } from "@phosphor-icons/react/ssr"

import { slugify } from "@/components/showcase/nav"

/* Page titles use the brand face; nothing else on the page does. */
export function PageHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="type-display text-foreground">{title}</h1>
      {children ? (
        <div className="max-w-prose text-base text-muted-foreground">
          {children}
        </div>
      ) : null}
    </header>
  )
}

/* A titled block on a hairline rule, with an anchor matching the sidebar. */
export function Section({
  title,
  id = slugify(title),
  children,
  className,
}: {
  title: string
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        // Below md the sticky header covers the top of the viewport.
        "flex scroll-mt-20 flex-col gap-6 border-t pt-6 md:scroll-mt-8",
        className
      )}
    >
      <h2 id={`${id}-title`} className="text-xl font-medium text-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

/* Paper Mono technical heading for a group inside a section. */
export function Subsection({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="type-label text-muted-foreground">{title}</h3>
      {children}
    </div>
  )
}

/* The frame that holds live components. */
export const stage = "border p-6"

export function Demo({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-wrap items-center gap-4",
        stage,
        className
      )}
    >
      {children}
    </div>
  )
}

/*
 * Supporting notes, collapsed at the end of a section so the specimens come
 * first. Find in page still opens them.
 */
export function Notes({ children }: { children: React.ReactNode }) {
  return (
    <details className="group text-sm text-muted-foreground">
      {/* Unselectable, so repeated clicks toggle without selecting text. */}
      <summary className="-mx-1 flex w-fit cursor-pointer items-center gap-1.5 px-1 py-1 transition-colors outline-none select-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
        <CaretRightIcon
          aria-hidden="true"
          className="size-4 transition-transform group-open:rotate-90"
        />
        Notes
      </summary>
      <div className="flex flex-col gap-3 pt-2">{children}</div>
    </details>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-prose flex-col gap-3 text-sm text-muted-foreground">
      {children}
    </div>
  )
}

/* Token names and values in running text. */
export function Code({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-xs text-foreground">{children}</code>
}
