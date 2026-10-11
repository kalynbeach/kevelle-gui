"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

/* Kevelle Radio group: rows of <RadioGroupItem /> and label on the s gap. */
function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn(
        "flex flex-col gap-s font-ui text-s text-neutral-10",
        className
      )}
      {...props}
    />
  )
}

/*
 * Kevelle Radio: a raised control-m circle with a solid neutral-5 edge. When
 * checked the edge turns color-1 and a color-1 dot fills the inner 40%.
 */
function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "peer relative flex size-control-m shrink-0 cursor-pointer rounded-full bg-neutral-1 ring ring-neutral-5 inset-shadow-raised surface-raised transition-[background-color,box-shadow] after:absolute after:-inset-xs hover:ring-neutral-7 focus-visible:ring-color-1 data-checked:ring-color-1 dark:ring-inset data-disabled:cursor-default data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:inset-shadow-none data-disabled:ring-neutral-4",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="absolute inset-[30%] rounded-full bg-color-1 data-disabled:bg-neutral-6"
      />
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
