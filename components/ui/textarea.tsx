import * as React from "react"

import { cn } from "@/lib/utils"
import { textFieldControl } from "@/components/ui/input"

/* Kevelle Text field control as a multi-line field. Grows with its content. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      data-disabled={props.disabled || undefined}
      className={cn(
        textFieldControl,
        "field-sizing-content min-h-[calc(3lh+var(--space-xs)*2)] resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
