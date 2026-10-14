import type { Metadata } from "next"
import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CommandDemo,
  ContextMenuDemo,
  DropdownMenuDemo,
  MenubarDemo,
  SidebarDemo,
} from "@/components/showcase/demos/navigation"
import {
  Demo,
  PageHeader,
  Details,
  Section,
  Subsection,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Navigation" }

const guides = [
  {
    title: "Gain staging",
    href: "#navigation-menu",
    description: "Set levels before the first insert so plugins see −18 dBFS.",
  },
  {
    title: "Bus routing",
    href: "#navigation-menu",
    description: "Group drums and vocals for shared compression.",
  },
  {
    title: "Stem export",
    href: "#navigation-menu",
    description: "Render each bus to its own file for mastering.",
  },
]

export default function NavigationPage() {
  return (
    <>
      <PageHeader title="Navigation" />

      <Section title="Sidebar">
        <Demo>
          <SidebarDemo />
        </Demo>
        <Details>
          <p>
            The site navigation is a full-height Sidebar. This one is contained,
            with group labels in Paper Mono and counts in Departure Mono.
          </p>
        </Details>
      </Section>

      <Section title="Breadcrumb">
        <Demo>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>
                  Sessions
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#breadcrumb">Night drive</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mixdown</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Demo>
      </Section>

      <Section title="Pagination">
        <Demo>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#pagination" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#pagination" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Demo>
      </Section>

      <Section title="Tabs">
        <div className="grid gap-6 md:grid-cols-2">
          <Subsection title="Default">
            <Demo>
              <Tabs defaultValue="arrange" className="w-full">
                <TabsList>
                  <TabsTrigger value="arrange">Arrange</TabsTrigger>
                  <TabsTrigger value="mixer">Mixer</TabsTrigger>
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                </TabsList>
                <TabsContent value="arrange">
                  Twelve tracks, 3:41 at 120 BPM.
                </TabsContent>
                <TabsContent value="mixer">Four buses, two sends.</TabsContent>
                <TabsContent value="editor">No region selected.</TabsContent>
              </Tabs>
            </Demo>
          </Subsection>
          <Subsection title="Line">
            <Demo>
              <Tabs defaultValue="inputs" className="w-full">
                <TabsList variant="line">
                  <TabsTrigger value="inputs">Inputs</TabsTrigger>
                  <TabsTrigger value="outputs">Outputs</TabsTrigger>
                  <TabsTrigger value="midi" disabled>
                    MIDI
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="inputs">
                  Interface: 8 in, 8 out.
                </TabsContent>
                <TabsContent value="outputs">Main out on 1–2.</TabsContent>
              </Tabs>
            </Demo>
          </Subsection>
        </div>
      </Section>

      <Section title="Navigation menu">
        <Demo className="pb-48">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-80 flex-col">
                    {guides.map((guide) => (
                      <li key={guide.title}>
                        <NavigationMenuLink render={<Link href={guide.href} />}>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="font-medium">{guide.title}</span>
                            <span className="text-muted-foreground">
                              {guide.description}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Demo>
      </Section>

      <Section title="Menubar">
        <Demo>
          <MenubarDemo />
        </Demo>
      </Section>

      <Section title="Dropdown menu">
        <Demo>
          <DropdownMenuDemo />
        </Demo>
      </Section>

      <Section title="Context menu">
        <Demo>
          <ContextMenuDemo />
        </Demo>
      </Section>

      <Section title="Command">
        <Demo>
          <CommandDemo />
        </Demo>
      </Section>
    </>
  )
}
