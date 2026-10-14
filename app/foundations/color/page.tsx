import type { Metadata } from "next"

import {
  ContrastPair,
  SignalGrid,
  SwatchGrid,
} from "@/components/showcase/color"
import { Notes, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Color" }

const neutrals = Array.from(
  { length: 10 },
  (_, index) => `neutral-${index + 1}`
)

const surfaces = [
  "background",
  "card",
  "popover",
  "secondary",
  "muted",
  "accent",
]

const ink = [
  "foreground",
  "muted-foreground",
  "primary",
  "primary-foreground",
  "border",
  "input",
  "ring",
  "backdrop",
]

const status = ["destructive", "success", "warning"]

const signals = ["phosphor", "astral", "flame", "magenta", "chrome"]

const pairs = [
  ["foreground", "background", "Titles and body text"],
  ["muted-foreground", "background", "Descriptions, labels, metadata"],
  ["foreground", "card", "Text on cards and popovers"],
  ["muted-foreground", "muted", "Captions on muted fills"],
  ["primary-foreground", "primary", "Primary buttons and tooltips"],
  ["accent-foreground", "accent", "Highlighted menu items"],
  ["destructive-foreground", "destructive", "Destructive buttons"],
  ["destructive", "background", "Field errors"],
  ["success", "background", "Success text"],
  ["warning", "background", "Warning text"],
] as const

export default function ColorPage() {
  return (
    <>
      <PageHeader title="Color" />

      <Section title="Neutral ramp">
        <SwatchGrid tokens={neutrals} />
        <Notes>
          <p>
            Ten steps from canvas to ink: white to near-black in light mode,
            near-black to near-white in dark mode. The middle steps carry a
            slight cool tint. Components never use the ramp directly; the roles
            below pick steps from it.
          </p>
          <p>
            Values are OKLCH as written in the theme, with sRGB hex for
            convenience.
          </p>
        </Notes>
      </Section>

      <Section title="Roles">
        <SwatchGrid tokens={surfaces} className="md:grid-cols-6" />
        <SwatchGrid tokens={ink} className="md:grid-cols-4" />
        <Notes>
          <p>
            shadcn/ui roles. Each fill pairs with a -foreground role for the
            text on it.
          </p>
        </Notes>
      </Section>

      <Section title="Status">
        <SwatchGrid tokens={status} />
        <Notes>
          <p>
            Destructive is scarlet, success is phosphor, and warning is amber,
            each with the most chroma sRGB allows at its lightness. They also
            color text, so each clears 4.5:1 on the canvas.
          </p>
        </Notes>
      </Section>

      <Section title="Signal">
        <SignalGrid tokens={signals} />
        <Notes>
          <p>
            From the KKB Images boards: oscilloscope phosphor, starry astral
            blue, and the flame&apos;s orange, magenta, and chrome. Each keeps
            its family&apos;s hue from the KKB Palette and takes the most chroma
            sRGB allows at its lightness. Charts read them through chart-1 to
            chart-5. Astral leads in light mode and phosphor in dark mode.
          </p>
          <p>Use them for data series. They do not mark status.</p>
        </Notes>
      </Section>

      <Section title="Contrast">
        <div className="grid gap-6 md:grid-cols-2">
          {pairs.map(([foreground, background, use]) => (
            <ContrastPair
              key={`${foreground}-${background}`}
              foreground={foreground}
              background={background}
              use={use}
            />
          ))}
        </div>
        <Notes>
          <p>
            Measured live in the current mode. Ratios under 4.5:1 are marked.
          </p>
        </Notes>
      </Section>
    </>
  )
}
