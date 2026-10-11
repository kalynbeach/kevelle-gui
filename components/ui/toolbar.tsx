"use client"

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

/*
 * Kevelle Toolbar: a raised neutral-1 group on the xxs gap. Buttons and
 * toggles inside share the Toggle treatment.
 */

function Toolbar({ className, ...props }: ToolbarPrimitive.Root.Props) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={cn(
        "flex w-fit items-center gap-xxs rounded-s bg-neutral-1 p-xxs font-ui text-s text-neutral-10 shadow-s ring ring-neutral-4-transparent dark:ring-inset",
        className
      )}
      {...props}
    />
  )
}

function ToolbarGroup({ className, ...props }: ToolbarPrimitive.Group.Props) {
  return (
    <ToolbarPrimitive.Group
      data-slot="toolbar-group"
      className={cn("flex items-center gap-xxs", className)}
      {...props}
    />
  )
}

function ToolbarButton({
  className,
  size = "default",
  ...props
}: ToolbarPrimitive.Button.Props & VariantProps<typeof toggleVariants>) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      className={cn(toggleVariants({ size }), className)}
      {...props}
    />
  )
}

function ToolbarLink({ className, ...props }: ToolbarPrimitive.Link.Props) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn(toggleVariants(), "font-regular text-neutral-7 hover:text-neutral-10", className)}
      {...props}
    />
  )
}

function ToolbarSeparator({
  className,
  ...props
}: ToolbarPrimitive.Separator.Props) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn(
        "mx-xxs w-(--border-s) self-stretch shadow-[inset_var(--border-s)_0_0_0_var(--neutral-4)]",
        className
      )}
      {...props}
    />
  )
}

export { Toolbar, ToolbarGroup, ToolbarButton, ToolbarLink, ToolbarSeparator }
