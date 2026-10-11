"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { CaretDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { textFieldGroup, textFieldGroupInput } from "@/components/ui/input"
import {
  menuLabel,
  menuSeparator,
  popupMotion,
  popupSurface,
} from "@/components/ui/popup"

/* Kevelle Combobox: a Text field input with an anchored option list. */

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

const inlineIconButton =
  "flex size-[calc(1lh+var(--space-xxs)*2)] shrink-0 cursor-pointer items-center justify-center rounded-xs text-neutral-7 transition-colors outline-none hover:bg-neutral-3-transparent hover:text-neutral-10 focus-visible:focus-ring data-disabled:pointer-events-none [&_svg]:size-[1em]"

function ComboboxTrigger({
  className,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      aria-label="Open options"
      className={cn(inlineIconButton, className)}
      {...props}
    >
      <CaretDownIcon />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      aria-label="Clear selection"
      className={cn(inlineIconButton, className)}
      {...props}
    >
      <XIcon />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <ComboboxPrimitive.InputGroup
      data-slot="combobox-input-group"
      className={cn(textFieldGroup, "pe-xxs", className)}
    >
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        className={textFieldGroupInput}
        {...props}
      />
      {showClear && <ComboboxClear />}
      {showTrigger && <ComboboxTrigger />}
    </ComboboxPrimitive.InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          className={cn(
            popupSurface,
            popupMotion,
            "group/combobox-content w-(--anchor-width) max-w-(--available-width) overflow-hidden rounded-s",
            className
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "flex max-h-[min(22.5rem,var(--available-height))] scroll-py-xxs flex-col gap-xxs overflow-y-auto overscroll-contain p-xxs data-empty:p-zero",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-xs rounded-xs py-xxs ps-xs pe-xl text-s text-neutral-10 outline-none select-none data-highlighted:bg-neutral-3 data-selected:not-data-highlighted:bg-neutral-2 data-disabled:pointer-events-none data-disabled:text-neutral-6 [&_svg]:pointer-events-none [&_svg]:size-[1em] [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute end-xs flex items-center justify-center" />
        }
      >
        <CheckIcon />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("flex flex-col gap-xxs", className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(menuLabel, className)}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden px-s py-xs text-s text-neutral-7 group-data-empty/combobox-content:block",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn(menuSeparator, className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxValue,
  useComboboxAnchor,
}
