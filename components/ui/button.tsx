import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Kevelle Button. Each variant follows the effective assignments in
 * gui/themes/kevelle-components.md, including where its edge sits (inside or
 * outside the box) in each mode.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-xs rounded-s font-ui text-s font-medium whitespace-nowrap select-none ring transition-[background-color,color,box-shadow,translate] active:translate-y-(--motion-press-distance) data-disabled:pointer-events-none data-disabled:text-neutral-6 [&_svg]:pointer-events-none [&_svg]:size-[1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-10 text-neutral-1 shadow-s ring-inset ring-neutral-6-transparent surface-action hover:ring-neutral-7-transparent focus-visible:ring-neutral-7-transparent dark:ring-outset data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:shadow-none data-disabled:ring-outset data-disabled:ring-neutral-4-transparent data-disabled:before:hidden dark:data-disabled:ring-inset",
        secondary:
          "bg-neutral-1 text-neutral-10 shadow-s ring-neutral-6-transparent surface-action hover:bg-neutral-2 hover:ring-neutral-7-transparent focus-visible:bg-neutral-2 focus-visible:ring-neutral-7-transparent dark:ring-inset data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:shadow-none data-disabled:ring-neutral-4-transparent data-disabled:before:hidden",
        outline:
          "text-neutral-10 ring-neutral-6-transparent hover:bg-neutral-3-transparent focus-visible:ring-color-1-transparent dark:hover:ring-inset data-disabled:ring-neutral-4-transparent",
        ghost:
          "text-neutral-10 ring-transparent hover:bg-neutral-3-transparent focus-visible:ring-color-1-transparent",
        danger:
          "bg-error text-neutral-1 ring-inset ring-error-transparent surface-action hover:shadow-s focus-visible:ring-color-1-transparent data-disabled:bg-neutral-3 data-disabled:bg-none data-disabled:ring-outset data-disabled:ring-neutral-4-transparent data-disabled:before:hidden dark:data-disabled:ring-inset",
      },
      size: {
        default: "px-m py-xs",
        // Square, sized from the label line height plus the control padding.
        icon: "size-[calc(1lh+var(--space-xs)*2)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
