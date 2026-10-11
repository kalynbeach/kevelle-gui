"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

/*
 * Kevelle Switch. The track is control-l tall: a control-m thumb inset by
 * xxs on every side, so the thumb travels one thumb width.
 */
function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer group/switch relative inline-flex h-control-l w-[calc(var(--control-size-m)*2+var(--space-xxs)*2)] shrink-0 cursor-pointer items-center rounded-full bg-neutral-4 p-xxs transition-colors after:absolute after:-inset-xs data-checked:bg-color-1 data-disabled:cursor-default data-disabled:bg-neutral-3",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-control-m rounded-full bg-neutral-1 shadow-s ring ring-neutral-4-transparent inset-shadow-raised surface-raised transition-[translate,background-color] data-checked:translate-x-(--control-size-m) dark:ring-inset data-disabled:bg-neutral-6 data-disabled:bg-none data-disabled:shadow-none data-disabled:inset-shadow-none dark:data-disabled:ring-outset"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
