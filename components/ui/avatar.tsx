"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

/* Kevelle Avatar: a control-xl neutral-3 circle with neutral-8 initials. */

function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative inline-grid size-control-xl shrink-0 place-items-center overflow-hidden rounded-full bg-neutral-3 font-ui text-s text-neutral-10 select-none",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("text-s font-medium text-neutral-8", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
