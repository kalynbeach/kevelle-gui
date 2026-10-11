"use client"

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"

import { cn } from "@/lib/utils"

/* Kevelle Checkbox group: rows of <Checkbox /> and label on the s gap. */
function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn(
        "flex flex-col gap-s font-ui text-s text-neutral-10",
        className
      )}
      {...props}
    />
  )
}

export { CheckboxGroup }
