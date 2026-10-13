"use client"

import * as React from "react"
import { cn } from "cn"

import {
  useTokenValues,
  useUtilityValues,
} from "@/components/showcase/live-token"

export type TokenRow = {
  /* The custom property, without the leading dashes. */
  token: string
  /* The utility that applies it, shown and used for the preview. */
  utility: string
  preview: React.ReactNode
  use?: string
  /*
   * When set, the value column shows what the utility computes for this
   * property instead of the custom property's text.
   */
  property?: string
}

/* Token name, live value, specimen, and where Kevelle uses it. */
export function TokenTable({ rows }: { rows: readonly TokenRow[] }) {
  const tokens = useTokenValues(rows.map((row) => `--${row.token}`))

  const computed = useUtilityValues(
    rows.map((row) => ({
      className: row.property ? row.utility : "",
      property: row.property ?? "",
    }))
  )

  const values = rows.map((row, index) =>
    row.property ? computed[index] : tokens[index]
  )

  return (
    <div className="flex flex-col">
      {rows.map((row, index) => (
        <div
          key={row.token}
          className="grid grid-cols-2 items-center gap-x-6 gap-y-2 border-b py-3 last:border-b-0 md:grid-cols-4"
        >
          <span className="font-mono text-xs text-foreground">
            {row.utility}
          </span>
          <span
            className={cn(
              "type-pixel text-muted-foreground tabular-nums",
              "truncate"
            )}
          >
            {values[index] || " "}
          </span>
          <div className="flex min-w-0 items-center">{row.preview}</div>
          <span className="text-sm text-muted-foreground">{row.use}</span>
        </div>
      ))}
    </div>
  )
}
