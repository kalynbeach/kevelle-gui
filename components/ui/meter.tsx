"use client"

import { Meter as MeterPrimitive } from "@base-ui/react/meter"

import { cn } from "@/lib/utils"

/*
 * Kevelle Meter: Progress geometry with status fills. Like the HTML meter,
 * `low` and `high` are thresholds: at or below `low` the indicator uses
 * warning, at or above `high` it uses error.
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
      className={cn(
        "group/meter flex w-full flex-wrap items-baseline gap-x-s gap-y-xs font-ui text-s",
        className
      )}
      {...props}
    >
      {children}
      <MeterPrimitive.Track
        data-slot="meter-track"
        className="relative h-control-xxs w-full overflow-hidden rounded-full bg-neutral-3"
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className="h-full rounded-full bg-color-1 transition-[width] group-data-[level=high]/meter:bg-error group-data-[level=low]/meter:bg-warning"
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      data-slot="meter-label"
      className={cn("text-s font-medium text-neutral-10", className)}
      {...props}
    />
  )
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      data-slot="meter-value"
      className={cn(
        "ms-auto text-xs text-neutral-7 tabular-nums",
        className
      )}
      {...props}
    />
  )
}

export { Meter, MeterLabel, MeterValue }
