"use client"

import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field"

import { cn } from "@/lib/utils"

/*
 * Kevelle OTP field. Each slot is control-xl wide with xs vertical padding,
 * on the raised neutral-1 surface with an s shadow. A complete code keeps the
 * color-1 edge; invalid uses error.
 */

function OTPField({ className, ...props }: OTPFieldPrimitive.Root.Props) {
  return (
    <OTPFieldPrimitive.Root
      data-slot="otp-field"
      className={cn("group/otp flex items-center gap-xs", className)}
      {...props}
    />
  )
}

function OTPFieldInput({
  className,
  ...props
}: OTPFieldPrimitive.Input.Props) {
  return (
    <OTPFieldPrimitive.Input
      data-slot="otp-field-input"
      className={cn(
        "w-control-xl min-w-0 shrink-0 rounded-s bg-neutral-1 py-xs text-center font-ui text-s font-medium text-neutral-10 tabular-nums shadow-s ring ring-neutral-4 transition-[background-color,box-shadow] hover:ring-neutral-5 focus-visible:ring-color-1 data-complete:ring-color-1 data-invalid:ring-error dark:ring-inset data-disabled:bg-neutral-2 data-disabled:text-neutral-6 data-disabled:shadow-none",
        className
      )}
      {...props}
    />
  )
}

/* A one-sided divider at the border-s width, xs wide. */
function OTPFieldSeparator({
  className,
  ...props
}: OTPFieldPrimitive.Separator.Props) {
  return (
    <OTPFieldPrimitive.Separator
      data-slot="otp-field-separator"
      className={cn(
        "h-(--border-s) w-xs shrink-0 shadow-[inset_0_var(--border-s)_0_0_var(--neutral-4)]",
        className
      )}
      {...props}
    />
  )
}

export { OTPField, OTPFieldInput, OTPFieldSeparator }
