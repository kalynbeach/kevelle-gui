"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

/* Kevelle Separator: a border-s line drawn as a one-sided inset shadow. */
function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-(--border-s) data-[orientation=horizontal]:w-full data-[orientation=horizontal]:shadow-[inset_0_var(--border-s)_0_0_var(--neutral-4)] data-[orientation=vertical]:w-(--border-s) data-[orientation=vertical]:self-stretch data-[orientation=vertical]:shadow-[inset_var(--border-s)_0_0_0_var(--neutral-4)]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
