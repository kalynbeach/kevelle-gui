"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

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
