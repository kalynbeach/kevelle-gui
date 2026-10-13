"use client"

import * as React from "react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Demo } from "@/components/showcase/page"

/* Slides a marker across a track on the default transition. */
export function MotionDemo() {
  const [end, setEnd] = React.useState(false)

  return (
    <Demo className="flex-col items-stretch">
      <div className="relative h-8 dither-50 text-muted-foreground/40">
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-8 bg-primary transition-all",
            end && "left-full -translate-x-full"
          )}
        />
      </div>
      <div>
        <Button variant="outline" onClick={() => setEnd((value) => !value)}>
          {end ? "Return" : "Move"}
        </Button>
      </div>
    </Demo>
  )
}
