import * as React from "react"

import { cn } from "@/lib/utils"
import { slugify } from "@/components/showcase/nav"

export function PageHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <header className="flex flex-col gap-s">
      <h1 className="font-brand text-xl font-medium text-neutral-10">
        {title}
      </h1>
      {children ? (
        <div className="max-w-[60ch] text-m text-neutral-8">{children}</div>
      ) : null}
    </header>
  )
}

/* A titled block with an anchor matching the sidebar link. */
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
      className={cn("flex scroll-mt-xxl flex-col gap-l", className)}
    >
      <h2 id={`${id}-title`} className="text-l font-medium text-neutral-10">
        {title}
      </h2>
      {children}
    </section>
  )
}

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
    <div className={cn("flex flex-col gap-s", className)}>
      <h3 className="text-s font-medium text-neutral-7">{title}</h3>
      {children}
    </div>
  )
}

/* The stage that holds live components. */
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
        "flex min-w-0 flex-wrap items-center gap-m rounded-m bg-neutral-2 p-l",
        className
      )}
    >
      {children}
    </div>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-[60ch] flex-col gap-s text-s text-neutral-8">
      {children}
    </div>
  )
}

/* Token names and values. */
export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-data text-xs text-neutral-8">{children}</code>
  )
}
