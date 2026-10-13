"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <div className="border">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    </div>
  )
}

export function SliderDemo() {
  const [gain, setGain] = React.useState(-6)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span id="slider-gain" className="text-sm font-medium">
          Gain
        </span>
        <span className="type-pixel text-muted-foreground tabular-nums">
          {gain > 0 ? `+${gain}` : gain} dB
        </span>
      </div>
      <Slider
        aria-labelledby="slider-gain"
        min={-24}
        max={12}
        value={[gain]}
        onValueChange={(value) => {
          const [next] = Array.isArray(value) ? value : [value]

          setGain(next)
        }}
      />
    </div>
  )
}
