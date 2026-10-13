"use client"

import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field"
import { cn } from "cn"

/*
 * Base UI's OTP field, which needs no extra dependency. InputOTP is the
 * registry alternative built on the input-otp package. Slots are recessed
 * text fields with Departure Mono digits.
 */

function OTPField({ className, ...props }: OTPFieldPrimitive.Root.Props) {
  return (
    <OTPFieldPrimitive.Root
      data-slot="otp-field"
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function OTPFieldInput({ className, ...props }: OTPFieldPrimitive.Input.Props) {
  return (
    <OTPFieldPrimitive.Input
      data-slot="otp-field-input"
      className={cn(
        "size-9 min-w-0 shrink-0 rounded-lg border border-input bg-transparent alloy-recessed text-center type-pixel-2x transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/20 dark:bg-input/30 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function OTPFieldSeparator({
  className,
  ...props
}: OTPFieldPrimitive.Separator.Props) {
  return (
    <OTPFieldPrimitive.Separator
      data-slot="otp-field-separator"
      className={cn("h-px w-2 shrink-0 bg-border", className)}
      {...props}
    />
  )
}

export { OTPField, OTPFieldInput, OTPFieldSeparator }
