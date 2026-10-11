"use client"

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import { MinusIcon, PlusIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { textFieldControl } from "@/components/ui/input"

/*
 * Kevelle Number field: a centered Text field input between round stepper
 * buttons. Each stepper is a square the height of the input (its line height
 * plus the xs padding), so the full radius makes it a circle.
 */

function NumberField({
  className,
  ...props
}: NumberFieldPrimitive.Root.Props) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("flex flex-col gap-xs font-ui text-s", className)}
      {...props}
    />
  )
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn("flex items-center gap-xs", className)}
      {...props}
    />
  )
}

function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={cn(
        textFieldControl,
        "w-[80px] text-center tabular-nums",
        className
      )}
      {...props}
    />
  )
}

const stepper =
  "flex size-[calc(1lh+var(--space-xs)*2)] shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-1 text-s font-medium text-neutral-10 shadow-s ring ring-neutral-4 transition-[background-color,box-shadow] select-none hover:ring-neutral-5 focus-visible:ring-color-1 dark:ring-inset data-disabled:cursor-default data-disabled:bg-neutral-2 data-disabled:text-neutral-6 data-disabled:shadow-none [&_svg]:size-[1em] [&_svg]:transition-[scale] active:[&_svg]:scale-75"

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      aria-label="Decrease"
      className={cn(stepper, className)}
      {...props}
    >
      <MinusIcon />
    </NumberFieldPrimitive.Decrement>
  )
}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      aria-label="Increase"
      className={cn(stepper, className)}
      {...props}
    >
      <PlusIcon />
    </NumberFieldPrimitive.Increment>
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
}
