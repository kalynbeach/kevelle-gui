import type { Metadata } from "next"

import { ContrastPair, Swatch } from "@/components/showcase/color"
import { PageHeader, Prose, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Color" }

const neutrals = Array.from({ length: 10 }, (_, index) => `neutral-${index + 1}`)
const palette = Array.from({ length: 6 }, (_, index) => `color-${index + 1}`)
const status = ["success", "warning", "error"]

const pairs = [
  ["neutral-10", "neutral-1", "Body text and titles on the canvas"],
  ["neutral-8", "neutral-1", "Panel and accordion content"],
  ["neutral-7", "neutral-1", "Descriptions and secondary text"],
  ["neutral-6", "neutral-1", "Placeholders, disabled labels, menu group labels"],
  ["neutral-1", "neutral-10", "Primary button and tooltip"],
  ["neutral-10", "neutral-3", "Selected tabs list and highlighted options"],
  ["neutral-1", "error", "Danger button"],
  ["error", "neutral-1", "Field error messages"],
  ["warning", "neutral-1", "Warning text"],
  ["success", "neutral-1", "Success text"],
] as const

function SwatchGrid({ tokens }: { tokens: readonly string[] }) {
  return (
    <div className="grid grid-cols-2 gap-l sm:grid-cols-3 md:grid-cols-5">
      {tokens.map((token) => (
        <Swatch key={token} token={token} />
      ))}
    </div>
  )
}

export default function ColorPage() {
  return (
    <>
      <PageHeader title="Color" />

      <Section title="Neutrals">
        <Prose>
          <p>
            Neutral 1 is the canvas in both modes: white in light, near black
            in dark. Higher steps move toward the text color.
          </p>
        </Prose>
        <SwatchGrid tokens={neutrals} />
      </Section>

      <Section title="Palette">
        <Prose>
          <p>
            Color 1 carries emphasis: checked controls, slider fills, focus
            rings. Colors 5 and 6 are neutral gray in light mode and vivid green
            and blue in dark mode, where their transparent variants are fully
            clear.
          </p>
        </Prose>
        <SwatchGrid tokens={palette} />
      </Section>

      <Section title="Status">
        <SwatchGrid tokens={status} />
      </Section>

      <Section title="Transparent variants">
        <Prose>
          <p>
            Each color has a -transparent variant at 20% opacity unless the
            theme sets another value. Edges and hover fills use them.
          </p>
        </Prose>
        <SwatchGrid
          tokens={[
            "neutral-3-transparent",
            "neutral-4-transparent",
            "neutral-6-transparent",
            "neutral-7-transparent",
            "neutral-10-transparent",
            "color-1-transparent",
            "color-5-transparent",
            "color-6-transparent",
            "error-transparent",
            "success-transparent",
          ]}
        />
      </Section>

      <Section title="Contrast">
        <Prose>
          <p>Ratios are measured live in the current mode. Values under 4.5:1 are marked.</p>
        </Prose>
        <div className="grid gap-l md:grid-cols-2">
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
