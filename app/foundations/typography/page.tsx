import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"
import { Kbd } from "@/components/ui/kbd"
import {
  Code,
  Notes,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Typography" }

const fonts = [
  {
    utility: "font-sans",
    family: "ABC Areal",
    use: "Interface and editorial text: controls, body copy, titles.",
    specimen: (
      <p className="font-sans text-2xl text-foreground">
        Bounce the mix at 48 kHz
      </p>
    ),
  },
  {
    utility: "font-mono",
    family: "Paper Mono",
    use: "Code, technical headings, group labels, and table heads.",
    specimen: (
      <p className="font-mono text-2xl text-foreground">render --stems 24bit</p>
    ),
  },
  {
    utility: "font-pixel",
    family: "Departure Mono",
    use: "Data and small details: values, badges, keys, timestamps.",
    specimen: (
      <p className="type-pixel-2x text-foreground">-14.2 LUFS / 0.98 dBTP</p>
    ),
  },
  {
    utility: "font-brand",
    family: "MEKZANTINE",
    use: "Page titles and the wordmark only.",
    specimen: <p className="font-brand text-4xl text-foreground">Kevelle</p>,
  },
]

const scale = [
  ["text-xs", "12 / 16", "Captions, field errors, tooltips"],
  ["text-sm", "14 / 20", "Controls, labels, body text in components"],
  ["text-base", "16 / 24", "Inputs on touch, page descriptions"],
  ["text-lg", "18 / 28", "Dialog and sheet titles"],
  ["text-xl", "20 / 28", "Section titles"],
  ["text-2xl", "24 / 32", "Large values"],
] as const

const scaleClass: Record<(typeof scale)[number][0], string> = {
  "text-xs": "text-xs",
  "text-sm": "text-sm",
  "text-base": "text-base",
  "text-lg": "text-lg",
  "text-xl": "text-xl",
  "text-2xl": "text-2xl",
}

export default function TypographyPage() {
  return (
    <>
      <PageHeader title="Typography" />

      <Section title="Font roles">
        <div className="flex flex-col">
          {fonts.map((font) => (
            <div
              key={font.utility}
              className="grid gap-x-6 gap-y-3 border-b py-6 first:pt-0 last:border-b-0 md:grid-cols-3"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm text-foreground">{font.family}</span>
                <Code>{font.utility}</Code>
              </div>
              <div className="min-w-0 md:col-span-2">
                {font.specimen}
                <p className="mt-2 text-sm text-muted-foreground">{font.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Type roles">
        <div className="grid gap-6 md:grid-cols-2">
          <Subsection title="type-display">
            <p className="type-display text-foreground">Mastering</p>
          </Subsection>
          <Subsection title="type-label">
            <p className="type-label text-foreground">Output routing</p>
          </Subsection>
          <Subsection title="type-pixel">
            <div className="flex flex-wrap items-center gap-3">
              <p className="type-pixel text-foreground">00:03:41.208</p>
              <Badge variant="outline">Bounced</Badge>
              <Kbd>⌘B</Kbd>
            </div>
          </Subsection>
          <Subsection title="type-pixel-2x">
            <p className="type-pixel-2x text-foreground">120 BPM</p>
          </Subsection>
        </div>
        <Notes>
          <p>
            Utilities that set family, size, line height, and tracking together.
            Departure Mono is drawn on an 11px grid, so its roles stay at 11px
            and 22px.
          </p>
        </Notes>
      </Section>

      <Section title="Text scale">
        <div className="flex flex-col">
          {scale.map(([utility, metrics, use]) => (
            <div
              key={utility}
              className="grid grid-cols-2 items-baseline gap-x-6 gap-y-1 border-b py-3 last:border-b-0 md:grid-cols-4"
            >
              <Code>{utility}</Code>
              <span className="type-pixel text-muted-foreground">
                {metrics}
              </span>
              <span className={`text-foreground ${scaleClass[utility]}`}>
                Sample rate
              </span>
              <span className="text-sm text-muted-foreground">{use}</span>
            </div>
          ))}
        </div>
        <Notes>
          <p>
            Tailwind&apos;s default scale. Each step sets size and line height.
          </p>
        </Notes>
      </Section>

      <Section title="Running text">
        <p className="max-w-prose text-base text-muted-foreground">
          Bounce the mix at 48 kHz, then render each stem separately so the
          mastering engineer can rebalance the low end. Keep peaks below
          &minus;1 dBTP and leave the limiter off the stem exports.
        </p>
        <Notes>
          <p>
            Wrapping text uses <Code>text-wrap: pretty</Code>, set once on the
            body so portalled popups inherit it.
          </p>
        </Notes>
      </Section>
    </>
  )
}
