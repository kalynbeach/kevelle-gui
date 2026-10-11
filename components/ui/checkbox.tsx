"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

/*
 * Kevelle Checkbox: a raised control-m box with a solid neutral-4 edge that
 * fills with color-1 when checked. The ::after expands the hit area.
 */
function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-control-m shrink-0 cursor-pointer items-center justify-center rounded-xs bg-neutral-1 text-neutral-1 ring ring-neutral-4 inset-shadow-raised surface-raised transition-[background-color,box-shadow] after:absolute after:-inset-xs hover:ring-neutral-5 focus-visible:ring-color-1-transparent data-checked:bg-color-1 data-checked:ring-inset data-checked:ring-color-1-transparent data-indeterminate:bg-color-1 data-indeterminate:ring-inset data-indeterminate:ring-color-1-transparent dark:ring-inset data-disabled:cursor-default data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:text-neutral-6 data-disabled:inset-shadow-none",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        keepMounted
        className="flex size-full items-center justify-center data-unchecked:hidden [&>svg]:size-[85%]"
      >
        {props.indeterminate ? (
          <MinusIcon />
        ) : (
          <CheckIcon />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
