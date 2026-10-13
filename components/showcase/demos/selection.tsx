"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"

// The page is prerendered, so the calendar uses a fixed date for its
// selection, displayed month, and today marker instead of the clock.
const showcaseDate = new Date(2026, 9, 12)

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(showcaseDate)

  return (
    <div className="border">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        today={showcaseDate}
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
