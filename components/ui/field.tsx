"use client"

import * as React from "react"
import { Field as FieldPrimitive } from "@base-ui/react/field"
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Kevelle Field and Fieldset on Base UI, which supplies label association,
 * validation, and data-disabled / data-invalid on every part. Use <Input />
 * as the control; it is Base UI's Field.Control.
 */

/* Fields within a fieldset or form are separated by the group gap (m). */
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("flex w-full flex-col gap-m", className)}
      {...props}
    />
  )
}

function FieldSet({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return (
    <FieldsetPrimitive.Root
      data-slot="field-set"
      className={cn(
        "flex min-w-0 flex-col gap-m font-ui text-s text-neutral-10",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  ...props
}: FieldsetPrimitive.Legend.Props) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="field-legend"
      className={cn(
        "text-m font-medium text-neutral-10 data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full min-w-0 gap-xs font-ui text-s text-neutral-10",
  {
    variants: {
      orientation: {
        vertical: "flex-col",
        // Checkbox, radio, and switch rows: control first, then the label.
        horizontal: "flex-row items-start",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: FieldPrimitive.Root.Props & VariantProps<typeof fieldVariants>) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

/* Holds a label and description beside a horizontal control. */
function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-xxs", className)}
      {...props}
    />
  )
}

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-xs text-s font-medium text-neutral-10 data-disabled:text-neutral-6 group-data-[orientation=horizontal]/field:font-regular",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn(
        "text-s text-neutral-7 data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn(
        "text-xs text-error data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

/* Groups a checkbox or radio with its label inside a field. */
function FieldItem({ className, ...props }: FieldPrimitive.Item.Props) {
  return (
    <FieldPrimitive.Item
      data-slot="field-item"
      className={cn("flex items-center gap-xs", className)}
      {...props}
    />
  )
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldItem,
  FieldLabel,
  FieldLegend,
  FieldSet,
}
