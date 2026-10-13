"use client"

import * as React from "react"
import { cn } from "cn"

import { useTokenValues } from "@/components/showcase/live-token"

let shared: CanvasRenderingContext2D | null = null

let probe: HTMLElement | null = null

/* A shared 1px canvas for reading colors back as sRGB bytes. */
function context() {
  if (!shared) {
    const element = document.createElement("canvas")

    element.width = element.height = 1
    shared = element.getContext("2d", { willReadFrequently: true })
  }

  return shared
}

/* Paints a color onto the canvas, over a backdrop when given. */
function toRgba(color: string, backdrop?: string) {
  const ctx = context()

  if (!ctx) return null

  ctx.clearRect(0, 0, 1, 1)

  if (backdrop) {
    ctx.fillStyle = backdrop
    ctx.fillRect(0, 0, 1, 1)
  }

  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)

  return [...ctx.getImageData(0, 0, 1, 1).data]
}

/* Hex for convenience: sRGB, with an alpha byte for translucent colors. */
function toHex(color: string) {
  const rgba = toRgba(color)

  if (!rgba) return ""
  const [r, g, b, a] = rgba
  const bytes = a === 255 ? [r, g, b] : [r, g, b, a]

  return `#${bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("")}`
}

/*
 * Resolves any CSS color to OKLCH with the browser's own conversion, so the
 * readout stays in OKLCH even if a build step rewrites the authored value.
 * Achromatic colors print hue 0, since their hue is noise.
 */
function toOklch(color: string) {
  if (!probe) {
    probe = document.createElement("span")
    probe.hidden = true
    document.body.append(probe)
  }

  probe.style.color = ""
  probe.style.color = `oklch(from ${color} l c h / alpha)`
  const resolved = getComputedStyle(probe).color
  const match = /^oklch\(([^/)]+)(?:\/\s*([^)]+))?\)$/.exec(resolved)

  if (!match) return color

  const [l, c, h] = match[1]
    .trim()
    .split(/\s+/)
    .map((channel) => Number.parseFloat(channel) || 0)

  const chroma = +c.toFixed(3)
  const hue = chroma === 0 ? 0 : +h.toFixed(1)

  const alpha = match[2] ? ` / ${+Number.parseFloat(match[2]).toFixed(2)}` : ""

  return `oklch(${+l.toFixed(3)} ${chroma} ${hue}${alpha})`
}

/* Swatches paint with SVG fills so they follow the live token in each mode. */
export function Swatch({
  token,
  label = token,
  note,
}: {
  token: string
  label?: string
  note?: string
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
        <span className="truncate text-sm text-foreground">
          {label}
          {note ? <span className="text-muted-foreground"> {note}</span> : null}
        </span>
        <span className="type-pixel text-muted-foreground">
          {value ? toOklch(value) : " "}
        </span>
        <span className="type-pixel text-muted-foreground">
          {value ? toHex(value) : " "}
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

const charts = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]

/* Signal colors, each labeled with the chart role that reads it in this mode. */
export function SignalGrid({ tokens }: { tokens: readonly string[] }) {
  const values = useTokenValues([...tokens, ...charts].map((t) => `--${t}`))
  const chartValues = values.slice(tokens.length)

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
      {tokens.map((token, index) => {
        const chart = values[index] ? chartValues.indexOf(values[index]) : -1

        return (
          <Swatch
            key={token}
            token={token}
            note={chart === -1 ? undefined : charts[chart]}
          />
        )
      })}
    </div>
  )
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
  const bg = toRgba(background, canvas)
  const fg = bg && toRgba(foreground, `rgb(${bg.slice(0, 3).join(" ")})`)

  if (!bg || !fg) return null

  const [light, dark] = [
    luminance(fg.slice(0, 3)),
    luminance(bg.slice(0, 3)),
  ].sort((a, b) => b - a)

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
