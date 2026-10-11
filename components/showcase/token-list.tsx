"use client"

import * as React from "react"

import { useTokenValues } from "@/components/showcase/live-token"

export type TokenRow = {
  token: string
  use?: string
}

type PreviewKind = "length" | "square" | "border" | "radius" | "shadow"

/* Specimens reference the variable, so they follow the active theme and mode. */
function Preview({ kind, value }: { kind: PreviewKind; value: string }) {
  switch (kind) {
    case "length":
      return <div className="h-s rounded-xs bg-color-1" style={{ width: value }} />
    case "square":
      return (
        <div className="rounded-xs bg-neutral-4" style={{ width: value, height: value }} />
      )
    case "border":
      return (
        <div
          className="h-l w-[8rem] rounded-s"
          style={{ boxShadow: `inset 0 0 0 ${value} var(--neutral-10)` }}
        />
      )
    case "radius":
      return (
        <div
          className="size-xxl bg-neutral-3 shadow-[inset_0_0_0_var(--border-s)_var(--neutral-5)]"
          style={{ borderRadius: value }}
        />
      )
    case "shadow":
      return (
        <div
          className="h-xxl w-[8rem] rounded-m bg-neutral-1"
          style={{ boxShadow: value }}
        />
      )
  }
}

export function TokenList({
  rows,
  kind,
}: {
  rows: readonly TokenRow[]
  kind: PreviewKind
}) {
  const values = useTokenValues(rows.map((row) => `--${row.token}`))

  return (
    <div className="flex flex-col">
      {rows.map((row, index) => (
        <div
          key={row.token}
          className="grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-x-l gap-y-xs py-s shadow-[inset_0_calc(var(--border-s)*-1)_0_0_var(--neutral-4-transparent)] last:shadow-none sm:grid-cols-[8rem_7rem_minmax(0,1fr)_minmax(0,15rem)]"
        >
          <span className="font-data text-xs text-neutral-8">{row.token}</span>
          <span className="truncate font-data text-xs text-neutral-7 tabular-nums">
            {values[index] || " "}
          </span>
          <div className="col-span-2 flex min-w-0 items-center py-xxs sm:col-span-1">
            <Preview kind={kind} value={`var(--${row.token})`} />
          </div>
          <span className="col-span-2 text-s text-neutral-7 sm:col-span-1">
            {row.use}
          </span>
        </div>
      ))}
    </div>
  )
}
