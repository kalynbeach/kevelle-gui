"use client"

import * as React from "react"
import {
  ArchiveIcon,
  CopyIcon,
  FolderIcon,
  GearSixIcon,
  MetronomeIcon,
  MicrophoneIcon,
  PlayIcon,
  ScissorsIcon,
  TrashIcon,
  WaveformIcon,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

function CommandItems({ onSelect }: { onSelect?: () => void }) {
  return (
    <>
      <CommandEmpty>No results.</CommandEmpty>
      <CommandGroup heading="Transport">
        <CommandItem value="play" onSelect={onSelect}>
          <PlayIcon />
          Play from cursor
          <CommandShortcut>Space</CommandShortcut>
        </CommandItem>
        <CommandItem value="record" onSelect={onSelect}>
          <MicrophoneIcon />
          Arm and record
          <CommandShortcut>R</CommandShortcut>
        </CommandItem>
        <CommandItem value="metronome" onSelect={onSelect}>
          <MetronomeIcon />
          Toggle metronome
          <CommandShortcut>C</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Project">
        <CommandItem value="bounce" onSelect={onSelect}>
          <WaveformIcon />
          Bounce stems
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem value="settings" onSelect={onSelect}>
          <GearSixIcon />
          Project settings
          <CommandShortcut>⌘,</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </>
  )
}

/*
 * cmdk scrolls its first item into view on mount, which would jump the page.
 * A controlled value that starts on no item prevents it.
 */
export function CommandDemo() {
  const [value, setValue] = React.useState("none")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full max-w-md border">
        <Command value={value} onValueChange={setValue}>
          <CommandInput placeholder="Search commands" />
          <CommandList>
            <CommandItems />
          </CommandList>
        </Command>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open palette
        </Button>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search commands" />
          <CommandList>
            <CommandItems onSelect={() => setOpen(false)} />
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export function DropdownMenuDemo() {
  const [snap, setSnap] = React.useState(true)
  const [grid, setGrid] = React.useState("bar")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Region
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Region</DropdownMenuLabel>
          <DropdownMenuItem>
            <ScissorsIcon />
            Split at playhead
            <DropdownMenuShortcut>S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem checked={snap} onCheckedChange={setSnap}>
            Snap to grid
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Grid</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={grid} onValueChange={setGrid}>
            <DropdownMenuRadioItem value="beat">Beat</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bar">Bar</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="phrase">Phrase</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Delete region
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ContextMenuDemo() {
  const [locked, setLocked] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full">
        <div className="flex h-32 w-full items-center justify-center border border-dashed text-sm text-muted-foreground">
          Right-click the clip
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Clip</ContextMenuLabel>
          <ContextMenuItem>
            Rename
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                <FolderIcon />
                Drums
              </ContextMenuItem>
              <ContextMenuItem>
                <ArchiveIcon />
                Archive
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuCheckboxItem checked={locked} onCheckedChange={setLocked}>
            Lock position
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function MenubarDemo() {
  const [follow, setFollow] = React.useState(true)
  const [view, setView] = React.useState("arrange")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New session <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Revert to saved</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem>
            Bounce <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={follow} onCheckedChange={setFollow}>
            Follow playhead
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value={view} onValueChange={setView}>
            <MenubarRadioItem value="arrange">Arrange</MenubarRadioItem>
            <MenubarRadioItem value="mixer">Mixer</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

const libraries = [
  { label: "Sessions", count: 12 },
  { label: "Samples", count: 418 },
  { label: "Presets", count: 64 },
]

/* A contained sidebar; the site navigation is the full-height example. */
export function SidebarDemo() {
  const [active, setActive] = React.useState("Samples")

  return (
    <div className="border">
      <SidebarProvider className="min-h-0 w-fit">
        <Sidebar collapsible="none">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Library</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {libraries.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        isActive={active === item.label}
                        onClick={() => setActive(item.label)}
                      >
                        {item.label}
                      </SidebarMenuButton>
                      <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}
