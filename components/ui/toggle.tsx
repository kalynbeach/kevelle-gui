"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* Kevelle Toggle. Toggle group and toolbar controls share this treatment. */
const toggleVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-xs rounded-s font-ui text-s font-medium whitespace-nowrap text-neutral-10 transition-colors select-none hover:bg-neutral-3 data-pressed:bg-neutral-3 data-disabled:pointer-events-none data-disabled:text-neutral-6 [&_svg]:pointer-events-none [&_svg]:size-[1em] [&_svg]:shrink-0",
  {
    variants: {
      size: {
        default: "px-s py-xs",
        // Square, sized from the label line height plus the control padding.
        icon: "size-[calc(1lh+var(--space-xs)*2)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Toggle({
  className,
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
