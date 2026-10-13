import type { Metadata } from "next"
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
  PageHeader,
  Prose,
  Section,
  Subsection,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Dither" }

const densities = [
  { utility: "dither-12", use: "Ramps and faint grain" },
  { utility: "dither-25", use: "Chart areas" },
  { utility: "dither-50", use: "Tracks, skeletons, and scrims" },
  { utility: "dither-75", use: "Ramps, the last step before solid" },
]

const buses = [
  ["Drum bus", "−3.1 dB"],
  ["Bass", "−6.0 dB"],
  ["Vocals", "−4.4 dB"],
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

function Ramp({ className }: { className: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={cn("grid grid-cols-6 border", className)}>
        {ramp.map((step) => (
          <div key={step.label} className={cn("h-16", step.className)} />
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
        <Prose>
          <p>
            Kevelle shades with 1px ordered dither, like the meters on a machine
            report. Each utility draws in the current color, so a text color
            sets the dither color. Each density lights every pixel of the
            density below it, so neighboring steps line up.
          </p>
        </Prose>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
          {densities.map((density) => (
            <div key={density.utility} className="flex flex-col gap-2">
              <div
                className={cn("h-24 border text-foreground", density.utility)}
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
      </Section>

      <Section title="Ramp">
        <Prose>
          <p>
            For a gradient, step through the densities instead of fading
            opacity. In a signal color it reads as a glow.
          </p>
        </Prose>
        <div className="grid gap-6 md:grid-cols-2">
          <Subsection title="foreground">
            <Ramp className="text-foreground" />
          </Subsection>
          <Subsection title="chart-1">
            <Ramp className="text-chart-1" />
          </Subsection>
        </div>
      </Section>

      <Section title="In components">
        <Prose>
          <p>
            Empty capacity, unloaded content, and dimmed pages are dithered.
            Charts fill areas with <Code>DitherPattern</Code>, the SVG
            counterpart of the utilities.
          </p>
        </Prose>
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
          <Subsection title="Scrim">
            <Demo className="relative flex-col items-stretch gap-2 overflow-hidden">
              {buses.map(([name, peak]) => (
                <div key={name} className="flex justify-between gap-4">
                  <span className="text-sm text-foreground">{name}</span>
                  <span className="type-pixel text-muted-foreground">
                    {peak}
                  </span>
                </div>
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-1/2 bg-scrim dither-50 text-scrim"
              />
            </Demo>
          </Subsection>
          <Subsection title="Chart area">
            <Demo>
              <AreaChartDemo />
            </Demo>
          </Subsection>
        </div>
      </Section>
    </>
  )
}
