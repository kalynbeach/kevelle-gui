"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { CaretRightIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

/*
 * Kevelle Accordion. Items are separated by a one-sided neutral-4-transparent
 * divider; panels open on the large motion curve.
 */

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col font-ui text-s", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "min-w-0 shadow-[inset_0_calc(var(--border-s)*-1)_0_0_var(--neutral-4-transparent)] last:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 cursor-pointer items-center gap-xs rounded-s py-m text-start text-s font-medium text-neutral-10 data-disabled:cursor-default data-disabled:text-neutral-6",
          className
        )}
        {...props}
      >
        <span
          data-slot="accordion-indicator"
          className="flex shrink-0 items-center text-m text-neutral-7 transition-transform motion-large group-data-disabled/accordion-trigger:text-neutral-6 group-data-panel-open/accordion-trigger:rotate-90"
        >
          <CaretRightIcon className="size-[1em]" />
        </span>
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="h-(--accordion-panel-height) overflow-hidden transition-[height,opacity] motion-large data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0"
      {...props}
    >
      <div
        className={cn(
          "flex flex-col gap-s pb-m text-s text-neutral-8 data-disabled:text-neutral-6",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
