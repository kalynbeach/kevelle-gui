"use client"

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete"

import { cn } from "@/lib/utils"
import { textFieldControl } from "@/components/ui/input"
import {
  menuLabel,
  menuSeparator,
  popupMotion,
  popupSurface,
} from "@/components/ui/popup"

/*
 * Kevelle Autocomplete. Its input differs from the Text field control: it
 * carries an s shadow, focuses to a solid color-1 edge, and disables to
 * neutral-2. Options use the s radius and neutral-3 for selection.
 */

const Autocomplete = AutocompletePrimitive.Root

function AutocompleteInput({
  className,
  ...props
}: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(
        textFieldControl,
        "shadow-s focus-visible:ring-color-1 data-disabled:bg-neutral-2 data-disabled:shadow-none data-disabled:ring-neutral-4",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  ...props
}: AutocompletePrimitive.Popup.Props &
  Pick<
    AutocompletePrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset"
  >) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="z-50"
      >
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-content"
          className={cn(
            popupSurface,
            popupMotion,
            "group/autocomplete-content w-(--anchor-width) max-w-(--available-width) overflow-hidden rounded-m",
            className
          )}
          {...props}
        />
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  )
}

function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "flex max-h-[min(22.5rem,var(--available-height))] scroll-py-xxs flex-col gap-xxs overflow-y-auto overscroll-contain p-xxs data-empty:p-zero",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteItem({
  className,
  ...props
}: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "flex cursor-default items-center gap-xs rounded-s px-xs py-xxs text-s text-neutral-10 outline-none select-none data-highlighted:bg-neutral-3 data-selected:bg-neutral-3 data-disabled:pointer-events-none data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn("flex flex-col gap-xxs", className)}
      {...props}
    />
  )
}

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(menuLabel, className)}
      {...props}
    />
  )
}

/* The content part: empty and status messages in neutral-7. */
function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "hidden px-xs py-s text-s text-neutral-7 group-data-empty/autocomplete-content:block",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteSeparator({
  className,
  ...props
}: AutocompletePrimitive.Separator.Props) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn(menuSeparator, className)}
      {...props}
    />
  )
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteEmpty,
  AutocompleteSeparator,
}
