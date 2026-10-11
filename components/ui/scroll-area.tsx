"use client"

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"

import { cn } from "@/lib/utils"

/*
 * Kevelle Scroll area: a neutral-1 viewport with a translucent edge and m
 * padding. Scrollbars are control-xs wide, inset by xxs, with neutral-4 thumbs.
 */
function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn(
        "relative overflow-hidden rounded-s bg-neutral-1 font-ui text-s text-neutral-8 ring ring-neutral-4-transparent dark:ring-inset",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full overscroll-contain rounded-[inherit]"
      >
        <ScrollAreaPrimitive.Content className="flex flex-col gap-s p-m">
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "m-xxs flex touch-none rounded-full select-none data-[orientation=horizontal]:h-control-xs data-[orientation=vertical]:w-control-xs",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="flex-1 rounded-full bg-neutral-4 transition-colors hover:bg-neutral-5 active:bg-neutral-5"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
