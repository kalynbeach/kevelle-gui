import type { Metadata } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { componentGroups } from "@/components/showcase/nav"
import { Demo, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Disclosure and layout" }

const components = componentGroups.flatMap((group) => group.items)

export default function DisclosurePage() {
  return (
    <>
      <PageHeader title="Disclosure and layout" />

      <Section title="Accordion">
        <Demo>
          <Accordion defaultValue={["fonts"]} className="max-w-[28rem]">
            <AccordionItem value="fonts">
              <AccordionTrigger>Fonts</AccordionTrigger>
              <AccordionContent>
                ABC Areal for the ui, brand, and editorial roles. Paper Mono for data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="icons">
              <AccordionTrigger>Icons</AccordionTrigger>
              <AccordionContent>Phosphor at the regular weight, sized at 1em.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="motion">
              <AccordionTrigger>Motion</AccordionTrigger>
              <AccordionContent>
                160ms for controls and popups, 280ms for dialogs, drawers, toasts, and panels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sizes" disabled>
              <AccordionTrigger>Component sizes</AccordionTrigger>
              <AccordionContent>Each component has one size.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Demo>
      </Section>

      <Section title="Collapsible">
        <Demo>
          <Collapsible className="w-full max-w-[28rem]">
            <CollapsibleTrigger>Primary button assignment</CollapsibleTrigger>
            <CollapsibleContent className="font-data text-xs">
              <p>background neutral-10 · foreground neutral-1</p>
              <p>edge neutral-6-transparent · radius s · shadow s</p>
              <p>padding xs / m · text ui s medium</p>
            </CollapsibleContent>
          </Collapsible>
        </Demo>
      </Section>

      <Section title="Scroll area">
        <Demo>
          <ScrollArea className="h-[15rem] w-full max-w-[20rem]">
            {components.map((item) => (
              <span key={item.href}>{item.label}</span>
            ))}
          </ScrollArea>
        </Demo>
      </Section>

      <Section title="Separator">
        <Demo className="flex-col items-stretch gap-s">
          <p className="text-s text-neutral-10">Night drive</p>
          <Separator />
          <div className="flex items-center gap-s text-s text-neutral-7">
            <span>120 BPM</span>
            <Separator orientation="vertical" />
            <span>A minor</span>
            <Separator orientation="vertical" />
            <span>3:48</span>
          </div>
        </Demo>
      </Section>
    </>
  )
}
