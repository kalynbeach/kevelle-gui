"use client"

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"
import { CaretRightIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

/* Kevelle Collapsible: a plain trigger over a neutral-2 panel. */

function Collapsible({ className, ...props }: CollapsiblePrimitive.Root.Props) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn(
        "flex flex-col gap-s font-ui text-s text-neutral-10 transition-[gap] motion-large data-closed:gap-zero",
        className
      )}
      {...props}
    />
  )
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "group/collapsible-trigger flex w-fit cursor-pointer items-center gap-xs rounded-s py-xs text-s font-medium text-neutral-10 data-disabled:cursor-default data-disabled:text-neutral-6",
        className
      )}
      {...props}
    >
      <span className="flex shrink-0 items-center text-m text-neutral-7 transition-transform motion-large group-data-panel-open/collapsible-trigger:rotate-90">
        <CaretRightIcon className="size-[1em]" />
      </span>
      {children}
    </CollapsiblePrimitive.Trigger>
  )
}

function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className="h-(--collapsible-panel-height) overflow-hidden transition-[height,opacity] motion-large data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0"
      {...props}
    >
      <div
        className={cn(
          "m-(--border-s) flex flex-col gap-s rounded-s bg-neutral-2 p-s text-s text-neutral-8 ring ring-neutral-4-transparent dark:ring-inset",
          className
        )}
      >
        {children}
      </div>
    </CollapsiblePrimitive.Panel>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
