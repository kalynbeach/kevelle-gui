"use client"

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { toggleVariants } from "@/components/ui/toggle"

/*
 * Toolbar is not in the shadcn registry. Buttons and toggles inside share
 * the Toggle treatment so pressed state reads the same everywhere.
 */

function Toolbar({ className, ...props }: ToolbarPrimitive.Root.Props) {
  return (
    <ToolbarPrimitive.Root
      data-slot="toolbar"
      className={cn(
        "flex w-fit items-center gap-1 rounded-lg bg-card p-1 text-card-foreground shadow-sm ring-1 ring-foreground/10",
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
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

function ToolbarButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: ToolbarPrimitive.Button.Props & VariantProps<typeof toggleVariants>) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function ToolbarLink({ className, ...props }: ToolbarPrimitive.Link.Props) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn(
        toggleVariants(),
        "font-normal text-muted-foreground hover:text-foreground",
        className
      )}
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
      className={cn("mx-1 w-px self-stretch bg-border", className)}
      {...props}
    />
  )
}

export { Toolbar, ToolbarGroup, ToolbarButton, ToolbarLink, ToolbarSeparator }
