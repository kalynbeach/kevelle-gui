import type { Metadata } from "next"

import { ContrastPair, SwatchGrid } from "@/components/showcase/color"
import { PageHeader, Prose, Section } from "@/components/showcase/page"

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
  "scrim",
]

const status = ["destructive", "success", "warning"]

const charts = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]

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
        <Prose>
          <p>
            Ten steps from canvas to ink. Dark mode starts at #030303 and ends
            at #fafafa; light mode runs from white to #030303. The middle steps
            carry a slight cool tint. Components never use the ramp directly;
            the roles below pick steps from it.
          </p>
        </Prose>
        <SwatchGrid tokens={neutrals} />
      </Section>

      <Section title="Roles">
        <Prose>
          <p>
            shadcn/ui roles. Each fill pairs with a -foreground role for the
            text on it.
          </p>
        </Prose>
        <SwatchGrid tokens={surfaces} className="md:grid-cols-6" />
        <SwatchGrid tokens={ink} className="md:grid-cols-4" />
      </Section>

      <Section title="Status">
        <SwatchGrid tokens={status} />
      </Section>

      <Section title="Charts">
        <Prose>
          <p>
            Signal colors for data series only: phosphor, astral, amber,
            scarlet, and magenta. They do not mark status.
          </p>
        </Prose>
        <SwatchGrid tokens={charts} />
      </Section>

      <Section title="Contrast">
        <Prose>
          <p>
            Measured live in the current mode. Ratios under 4.5:1 are marked.
          </p>
        </Prose>
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
      </Section>
    </>
  )
}
