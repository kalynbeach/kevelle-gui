"use client"

import type * as React from "react"
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

import { cn } from "@/lib/utils"
import { popupMotion, popupSurface } from "@/components/ui/popup"

/* Kevelle Preview card. The trigger is an inline link in the color-1 role. */

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      className={cn(
        "rounded-s font-medium text-color-1 underline decoration-color-1-transparent underline-offset-2 transition-colors hover:decoration-color-1",
        className
      )}
      {...props}
    />
  )
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "center",
  alignOffset = 0,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            popupSurface,
            popupMotion,
            "flex w-2xs max-w-[min(var(--available-width),calc(100vw-var(--space-xl)),420px)] flex-col gap-xs rounded-m p-m",
            className
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

function HoverCardTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="hover-card-title"
      className={cn("text-m font-medium text-neutral-10", className)}
      {...props}
    />
  )
}

function HoverCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="hover-card-description"
      className={cn("text-s text-neutral-7", className)}
      {...props}
    />
  )
}

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardTitle,
  HoverCardDescription,
}
