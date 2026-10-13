"use client"

import { Form as FormPrimitive } from "@base-ui/react/form"
import { cn } from "cn"

/*
 * Base UI Form: native submission with field-level errors. The shadcn
 * registry ships no base form, so this wraps the primitive. Lay out its
 * fields with FieldGroup.
 */
function Form({ className, ...props }: FormPrimitive.Props) {
  return (
    <FormPrimitive
      data-slot="form"
      className={cn("flex w-full flex-col gap-6", className)}
      {...props}
    />
  )
}

export { Form }
