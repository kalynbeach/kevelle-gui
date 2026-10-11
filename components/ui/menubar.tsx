"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/* Menubar popups, options, labels, and separators match Menu exactly. */

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex w-fit items-center gap-xxs rounded-s bg-neutral-1 p-xxs font-ui text-s text-neutral-10 shadow-s ring ring-neutral-4-transparent dark:ring-inset",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "flex cursor-default items-center rounded-s px-s py-xs text-s text-neutral-10 transition-colors select-none hover:bg-neutral-3 data-popup-open:bg-neutral-3 data-disabled:text-neutral-6",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  align = "start",
  alignOffset = -3,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

const MenubarGroup = DropdownMenuGroup
const MenubarPortal = DropdownMenuPortal
const MenubarLabel = DropdownMenuLabel
const MenubarItem = DropdownMenuItem
const MenubarCheckboxItem = DropdownMenuCheckboxItem
const MenubarRadioGroup = DropdownMenuRadioGroup
const MenubarRadioItem = DropdownMenuRadioItem
const MenubarSeparator = DropdownMenuSeparator
const MenubarShortcut = DropdownMenuShortcut
const MenubarSub = DropdownMenuSub
const MenubarSubTrigger = DropdownMenuSubTrigger
const MenubarSubContent = DropdownMenuSubContent

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
