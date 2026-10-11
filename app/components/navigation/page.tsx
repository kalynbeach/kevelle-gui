import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { componentGroups, foundations } from "@/components/showcase/nav"
import { Demo, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Menus and navigation" }

export default function NavigationPage() {
  return (
    <>
      <PageHeader title="Menus and navigation" />

      <Section title="Menu">
        <Demo>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>Track</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Rename<DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Duplicate<DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Move to</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Drums bus</DropdownMenuItem>
                    <DropdownMenuItem>Vocal bus</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel>Monitoring</DropdownMenuLabel>
                <DropdownMenuCheckboxItem defaultChecked>Solo</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Mute</DropdownMenuCheckboxItem>
                <DropdownMenuItem disabled>Freeze</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="danger">Delete track</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Demo>
      </Section>

      <Section title="Context menu">
        <Demo>
          <ContextMenu>
            <ContextMenuTrigger className="h-[6rem] w-full max-w-[20rem]">
              Right-click for clip actions
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Split at playhead<ContextMenuShortcut>S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Reverse</ContextMenuItem>
              <ContextMenuItem>Normalize</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="danger">Delete clip</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Demo>
      </Section>

      <Section title="Menubar">
        <Demo>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New session<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                <MenubarItem>Open<MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Export<MenubarShortcut>⌘E</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                <MenubarItem disabled>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup defaultValue="arrange">
                  <MenubarRadioItem value="arrange">Arrange</MenubarRadioItem>
                  <MenubarRadioItem value="mixer">Mixer</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Demo>
      </Section>

      <Section title="Navigation menu">
        <Demo className="min-h-[14rem] items-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Foundations</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[14rem]">
                  {foundations.map((item) => (
                    <NavigationMenuLink key={item.href} render={<Link href={item.href} />}>
                      {item.label}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[14rem]">
                  {componentGroups.map((group) => (
                    <NavigationMenuLink key={group.href} render={<Link href={group.href} />}>
                      {group.label}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />}>Overview</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Demo>
      </Section>

      <Section title="Tabs">
        <Demo className="items-start">
          <Tabs defaultValue="arrange" className="w-full max-w-[24rem]">
            <TabsList>
              <TabsTrigger value="arrange">Arrange</TabsTrigger>
              <TabsTrigger value="mixer">Mixer</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
              <TabsTrigger value="history" disabled>History</TabsTrigger>
            </TabsList>
            <TabsContent value="arrange">14 tracks, 3:48 at 120 BPM.</TabsContent>
            <TabsContent value="mixer">Master bus peaks at −1.2 dBFS.</TabsContent>
            <TabsContent value="export">Last export: 4 stems, 24-bit WAV.</TabsContent>
          </Tabs>
        </Demo>
      </Section>
    </>
  )
}
