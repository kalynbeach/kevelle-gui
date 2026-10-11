"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* Moves a marker across a track on each curve so their timing can be compared. */
export function MotionDemo() {
  const [moved, setMoved] = React.useState(false)

  return (
    <div className="flex w-full flex-col gap-m">
      {(
        [
          ["small", "transition-[translate]"],
          ["large", "transition-[translate] motion-large"],
        ] as const
      ).map(([name, transition]) => (
        <div key={name} className="flex items-center gap-l">
          <span className="w-xxl shrink-0 font-data text-xs text-neutral-7">
            {name}
          </span>
          <div className="relative h-control-m flex-1 rounded-full bg-neutral-3">
            <div
              className={cn(
                "absolute inset-y-0 left-0 w-full",
                transition,
                moved ? "translate-x-[calc(100%-var(--control-size-m))]" : "translate-x-0"
              )}
            >
              <div className="size-control-m rounded-full bg-color-1" />
            </div>
          </div>
        </div>
      ))}
      <div>
        <Button variant="secondary" onClick={() => setMoved((value) => !value)}>
          {moved ? "Move back" : "Move"}
        </Button>
      </div>
    </div>
  )
}
