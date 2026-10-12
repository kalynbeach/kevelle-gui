"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useTokenValues } from "@/components/showcase/live-token"

export function Swatch({ token }: { token: string }) {
  const [value] = useTokenValues([`--${token}`])
  return (
    <div className="flex min-w-0 flex-col gap-xs">
      <div
        className="h-xxl rounded-s shadow-[inset_0_0_0_var(--border-s)_var(--neutral-4-transparent)]"
        style={{ background: `var(--${token})` }}
      />
      <div className="flex flex-col">
        <span className="text-s text-neutral-10">{token}</span>
        <span className="font-data text-xs text-neutral-7">
          {value || " "}
        </span>
      </div>
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

/* A foreground token on a background token with its measured contrast. */
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
    "--cte-canvas",
  ])
  const ratio = fg && bg ? contrastRatio(fg, bg, canvas) : null

  return (
    <div className="flex min-w-0 items-center gap-m">
      <div
        className="flex size-xxl shrink-0 items-center justify-center rounded-s text-m font-medium shadow-[inset_0_0_0_var(--border-s)_var(--neutral-4-transparent)]"
        style={{ background: `var(--${background})`, color: `var(--${foreground})` }}
        aria-hidden="true"
      >
        Aa
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-s text-neutral-10">
          {foreground} on {background}
        </span>
        <span className="text-s text-neutral-7">{use}</span>
      </div>
      <span
        className={cn(
          "font-data text-xs tabular-nums",
          ratio !== null && ratio < 4.5 ? "text-error" : "text-neutral-7"
        )}
      >
        {ratio ? `${ratio.toFixed(2)}:1` : " "}
      </span>
    </div>
  )
}
