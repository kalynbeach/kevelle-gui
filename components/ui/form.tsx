"use client"

import { Form as FormPrimitive } from "@base-ui/react/form"

import { cn } from "@/lib/utils"

/*
 * Kevelle Form on Base UI: native submission with field-level errors.
 * Fields stack on the group gap (m); the action part is the primary Button.
 */
function Form({ className, ...props }: FormPrimitive.Props) {
  return (
    <FormPrimitive
      data-slot="form"
      className={cn(
        "flex w-full flex-col gap-m font-ui text-s text-neutral-10",
        className
      )}
      {...props}
    />
  )
}

export { Form }
