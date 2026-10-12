import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

/*
 * Kevelle Text field control: recessed fill with a solid neutral-4 edge.
 * Field, Fieldset, Form, Combobox, and Autocomplete inputs share these
 * assignments. Invalid takes precedence over focus, and disabled over both.
 */
const textFieldSurface =
  "rounded-s bg-neutral-1 font-ui text-s text-neutral-10 ring ring-neutral-4 inset-shadow-recessed surface-recessed transition-[background-color,box-shadow] dark:ring-inset"

/** For a native input or textarea. */
export const textFieldControl = cn(
  textFieldSurface,
  "w-full min-w-0 px-s py-xs hover:ring-neutral-5 focus-visible:ring-color-1-transparent read-only:bg-neutral-2 read-only:text-neutral-8 aria-invalid:ring-error data-valid:ring-success data-invalid:ring-error data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:text-neutral-6 data-disabled:inset-shadow-none data-disabled:ring-neutral-4-transparent"
)

/** For a wrapper (input group) whose inner input holds focus. */
export const textFieldGroup = cn(
  textFieldSurface,
  "flex w-full min-w-0 items-center gap-xxs hover:ring-neutral-5 has-focus-visible:ring-color-1-transparent has-focus-visible:focus-ring data-readonly:bg-neutral-2 data-readonly:text-neutral-8 data-valid:ring-success data-invalid:ring-error data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:text-neutral-6 data-disabled:inset-shadow-none data-disabled:ring-neutral-4-transparent"
)

/** The bare input inside a textFieldGroup. */
export const textFieldGroupInput =
  "min-w-0 flex-1 bg-transparent py-xs ps-s text-inherit outline-none disabled:cursor-default"

function Input({ className, type, ...props }: InputPrimitive.Props) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(textFieldControl, className)}
      {...props}
    />
  )
}

export { Input }
