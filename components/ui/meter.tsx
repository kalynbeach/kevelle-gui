"use client"

import { Meter as MeterPrimitive } from "@base-ui/react/meter"
import { cn } from "cn"

/*
 * Meter shares Progress geometry and adds status fills. Like the HTML meter,
 * `low` and `high` are thresholds: at or below `low` the indicator uses
 * warning, at or above `high` it uses destructive.
 */
function Meter({
  className,
  children,
  value,
  low,
  high,
  ...props
}: MeterPrimitive.Root.Props & { low?: number; high?: number }) {
  const level =
    high !== undefined && value >= high
      ? "high"
      : low !== undefined && value <= low
        ? "low"
        : undefined

  return (
    <MeterPrimitive.Root
      value={value}
      data-slot="meter"
      data-level={level}
      className={cn("group/meter flex w-full flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <MeterPrimitive.Track
        data-slot="meter-track"
        className="relative h-2 w-full overflow-hidden rounded-none dither-50 text-muted-foreground/50"
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className="h-full bg-primary transition-[width] group-data-[level=high]/meter:bg-destructive group-data-[level=low]/meter:bg-warning"
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      data-slot="meter-label"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      data-slot="meter-value"
      className={cn(
        "ml-auto type-pixel text-muted-foreground tabular-nums",
        className
      )}
      {...props}
    />
  )
}

export { Meter, MeterLabel, MeterValue }
