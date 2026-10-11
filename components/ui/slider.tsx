"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

/*
 * Kevelle Slider: a control-xxs track with a color-1 indicator and raised
 * control-m thumbs edged in color-1.
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [value ?? defaultValue ?? min]

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("w-full font-ui text-s", className)}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center py-xs select-none">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative h-control-xxs w-full grow overflow-hidden rounded-full bg-neutral-3 select-none"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="h-full rounded-full bg-color-1 select-none data-disabled:bg-neutral-5"
          />
        </SliderPrimitive.Track>
        {values.map((_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-control-m shrink-0 cursor-grab rounded-full bg-neutral-1 shadow-s ring ring-color-1 inset-shadow-raised surface-raised select-none after:absolute after:-inset-xs has-focus-visible:focus-ring active:cursor-grabbing dark:ring-inset data-disabled:cursor-default data-disabled:bg-neutral-2 data-disabled:bg-none data-disabled:shadow-none data-disabled:inset-shadow-none data-disabled:ring-neutral-5-transparent"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return (
    <SliderPrimitive.Value
      data-slot="slider-value"
      className={cn(
        "text-xs text-neutral-7 tabular-nums data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

export { Slider, SliderValue }
