import * as React from "react"

import { cn } from "@/lib/utils"

/* Kevelle field label part: s medium in neutral-10, neutral-6 when disabled. */
function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-xs font-ui text-s font-medium text-neutral-10 select-none group-data-disabled:text-neutral-6 peer-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

export { Label }
