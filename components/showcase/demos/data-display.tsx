"use client"

import * as React from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { DitherPattern } from "@/components/ui/dither"

const sessions = [
  { week: "W1", tracking: 14, mixing: 6 },
  { week: "W2", tracking: 11, mixing: 9 },
  { week: "W3", tracking: 8, mixing: 12 },
  { week: "W4", tracking: 5, mixing: 15 },
  { week: "W5", tracking: 9, mixing: 10 },
  { week: "W6", tracking: 3, mixing: 18 },
]

const config = {
  tracking: { label: "Tracking", color: "var(--chart-1)" },
  mixing: { label: "Mixing", color: "var(--chart-2)" },
} satisfies ChartConfig

export function ChartDemo() {
  return (
    <ChartContainer config={config} className="min-h-56 w-full">
      <BarChart accessibilityLayer data={sessions}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="tracking" fill="var(--color-tracking)" />
        <Bar dataKey="mixing" fill="var(--color-mixing)" />
      </BarChart>
    </ChartContainer>
  )
}

const load = [
  { minute: "1", load: 22 },
  { minute: "2", load: 28 },
  { minute: "3", load: 26 },
  { minute: "4", load: 41 },
  { minute: "5", load: 57 },
  { minute: "6", load: 52 },
  { minute: "7", load: 63 },
  { minute: "8", load: 48 },
  { minute: "9", load: 71 },
  { minute: "10", load: 66 },
  { minute: "11", load: 38 },
  { minute: "12", load: 34 },
]

const loadConfig = {
  load: { label: "DSP load", color: "var(--chart-1)" },
} satisfies ChartConfig

/* A solid trace over a dithered area, like a meter on a machine report. */
export function AreaChartDemo() {
  const fill = React.useId()

  return (
    <ChartContainer config={loadConfig} className="min-h-56 w-full">
      <AreaChart accessibilityLayer data={load}>
        <defs>
          <DitherPattern id={fill} color="var(--color-load)" density={25} />
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="minute"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="load"
          type="step"
          stroke="var(--color-load)"
          fill={`url(#${fill})`}
          fillOpacity={1}
        />
      </AreaChart>
    </ChartContainer>
  )
}
