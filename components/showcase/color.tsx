"use client"

import * as React from "react"
import { cn } from "cn"

import { useTokenValues } from "@/components/showcase/live-token"

/* Swatches paint with SVG fills so they follow the live token in each mode. */
export function Swatch({
  token,
  label = token,
}: {
  token: string
  label?: string
}) {
  const [value] = useTokenValues([`--${token}`])

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <svg
        className="h-14 w-full border"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect width="100%" height="100%" fill={`var(--${token})`} />
      </svg>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm text-foreground">{label}</span>
        <span className="truncate type-pixel text-muted-foreground">
          {value || " "}
        </span>
      </div>
    </div>
  )
}

export function SwatchGrid({
  tokens,
  className,
}: {
  tokens: readonly string[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5",
        className
      )}
    >
      {tokens.map((token) => (
        <Swatch key={token} token={token} />
      ))}
    </div>
  )
}

/* Paints a color onto a 1px canvas to resolve any CSS color to sRGB. */
function toRgb(color: string, backdrop: string) {
  const canvas = document.createElement("canvas")

  canvas.width = canvas.height = 1
  const context = canvas.getContext("2d", { willReadFrequently: true })

  if (!context) return null
  context.fillStyle = backdrop
  context.fillRect(0, 0, 1, 1)
  context.fillStyle = color
  context.fillRect(0, 0, 1, 1)
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data

  return [r, g, b]
}

function luminance(rgb: number[]) {
  const [r, g, b] = rgb.map((value) => {
    const channel = value / 255

    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(foreground: string, background: string, canvas: string) {
  const bg = toRgb(background, canvas)
  const fg = bg && toRgb(foreground, `rgb(${bg.join(",")})`)

  if (!bg || !fg) return null
  const [light, dark] = [luminance(fg), luminance(bg)].sort((a, b) => b - a)

  return (light + 0.05) / (dark + 0.05)
}

/* A foreground role on a background role with its measured contrast. */
export function ContrastPair({
  foreground,
  background,
  use,
}: {
  foreground: string
  background: string
  use: string
}) {
  const [fg, bg, canvas] = useTokenValues([
    `--${foreground}`,
    `--${background}`,
    "--background",
  ])

  const ratio = fg && bg ? contrastRatio(fg, bg, canvas) : null

  return (
    <div className="flex min-w-0 items-center gap-4">
      <svg className="size-12 shrink-0 border" aria-hidden="true">
        <rect width="100%" height="100%" fill={`var(--${background})`} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          className="font-sans text-base font-medium"
          fill={`var(--${foreground})`}
        >
          Aa
        </text>
      </svg>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-foreground">
          {foreground} on {background}
        </span>
        <span className="text-sm text-muted-foreground">{use}</span>
      </div>
      <span
        className={cn(
          "type-pixel tabular-nums",
          ratio !== null && ratio < 4.5
            ? "text-destructive"
            : "text-muted-foreground"
        )}
      >
        {ratio ? `${ratio.toFixed(2)}:1` : " "}
      </span>
    </div>
  )
}
