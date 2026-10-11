"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

import { cn } from "@/lib/utils"

/*
 * Kevelle Tabs: a neutral-3 list. The selected tab's neutral-1 fill and s
 * shadow ride on Base UI's indicator, which moves on the small motion curve.
 */

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-xs font-ui text-s", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  children,
  ...props
}: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative isolate flex w-fit max-w-full items-center gap-xxs rounded-m bg-neutral-3 p-xxs text-neutral-10",
        className
      )}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        data-slot="tabs-indicator"
        className="absolute top-(--active-tab-top) left-(--active-tab-left) -z-1 h-(--active-tab-height) w-(--active-tab-width) rounded-s bg-neutral-1 shadow-s transition-[left,top,width,height]"
      />
    </TabsPrimitive.List>
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "flex cursor-pointer items-center justify-center gap-xs rounded-s px-s py-xxs text-s font-medium whitespace-nowrap text-neutral-7 transition-colors hover:text-neutral-10 data-active:text-neutral-10 data-disabled:cursor-default data-disabled:text-neutral-6 [&_svg]:size-[1em] [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "flex flex-col gap-s pt-xs text-s text-neutral-8",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
