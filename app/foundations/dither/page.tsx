import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "cn"

import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { AreaChartDemo } from "@/components/showcase/demos/data-display"
import {
  Code,
  Demo,
  Notes,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Dither" }

const densities = [
  { utility: "dither-12", use: "Ramps and faint grain" },
  { utility: "dither-25", use: "Chart areas" },
  { utility: "dither-50", use: "Tracks, skeletons, and backdrops" },
  { utility: "dither-75", use: "Ramps, the last step before solid" },
]

/* Utilities stay literal so Tailwind generates them. */
const ramp = [
  { label: "0", className: "" },
  { label: "12", className: "dither-12" },
  { label: "25", className: "dither-25" },
  { label: "50", className: "dither-50" },
  { label: "75", className: "dither-75" },
  { label: "100", className: "bg-current" },
]

/*
 * Framed blocks have odd inner sizes, so each dither meets opposite hairlines
 * the same way: 97px swatches inside 1px borders, and 63px ramp cells.
 */
function Ramp({ className }: { className: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={cn("grid grid-cols-6 border", className)}>
        {ramp.map((step) => (
          <div key={step.label} className={cn("h-15.75", step.className)} />
        ))}
      </div>
      <div className="grid grid-cols-6 type-pixel text-muted-foreground">
        {ramp.map((step) => (
          <span key={step.label}>{step.label}</span>
        ))}
      </div>
    </div>
  )
}

export default function DitherPage() {
  return (
    <>
      <PageHeader title="Dither" />

      <Section title="Density">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
          {densities.map((density) => (
            <div key={density.utility} className="flex flex-col gap-2">
              <div
                className={cn(
                  "size-24.25 border text-foreground",
                  density.utility
                )}
              />
              <div className="flex flex-col">
                <span className="font-mono text-xs text-foreground">
                  {density.utility}
                </span>
                <span className="text-sm text-muted-foreground">
                  {density.use}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Notes>
          <p>
            Kevelle shades with 1px ordered dither, like the meters on a machine
            report. Each utility draws in the current color, so a text color
            sets the dither color. Each density lights every pixel of the
            density below it, so neighboring steps line up.
          </p>
          <p>
            Give a dithered block inside a hairline an odd inner size. Across an
            even number of pixels, the pattern ends on a lit row at one edge and
            an empty row at the other.
          </p>
        </Notes>
      </Section>

      <Section title="Ramp">
        <div className="grid gap-6 md:grid-cols-2">
          <Subsection title="foreground">
            <Ramp className="text-foreground" />
          </Subsection>
          <Subsection title="chart-1">
            <Ramp className="text-chart-1" />
          </Subsection>
        </div>
        <Notes>
          <p>
            For a gradient, step through the densities instead of fading
            opacity. In a signal color it reads as a glow.
          </p>
        </Notes>
      </Section>

      <Section title="In components">
        <div className="grid gap-6 md:grid-cols-2">
          <Subsection title="Tracks">
            <Demo className="flex-col items-stretch">
              <Progress value={34}>
                <ProgressLabel>Rendering stems</ProgressLabel>
                <ProgressValue />
              </Progress>
              <Meter value={42} low={20} high={85}>
                <MeterLabel>Disk usage</MeterLabel>
                <MeterValue />
              </Meter>
            </Demo>
          </Subsection>
          <Subsection title="Skeleton">
            <Demo>
              <div className="flex w-full items-center gap-4">
                <Skeleton className="size-10" />
                <div className="flex flex-1 flex-col gap-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </Demo>
          </Subsection>
          <Subsection title="Chart area">
            <Demo>
              <AreaChartDemo />
            </Demo>
          </Subsection>
        </div>
        <Notes>
          <p>
            Empty capacity, unloaded content, and dimmed pages are dithered.
            Charts fill areas with <Code>DitherPattern</Code>, the SVG
            counterpart of the utilities.
          </p>
          <p>
            Dialogs, sheets, and drawers dim the page with a{" "}
            <Code>dither-50</Code> backdrop. Open one on the{" "}
            <Link
              href="/components/overlays"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Overlays
            </Link>{" "}
            page to see it.
          </p>
        </Notes>
      </Section>
    </>
  )
}
