import type { Metadata } from "next"
import { CaretUpDownIcon } from "@phosphor-icons/react/ssr"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { DirectionProvider } from "@/components/ui/direction"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Demo, PageHeader, Details, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Layout" }

const faq = [
  {
    value: "rate",
    trigger: "Which sample rate should I record at?",
    content:
      "48 kHz for video and most releases; 96 kHz when you plan heavy time-stretching.",
  },
  {
    value: "headroom",
    trigger: "How much headroom should the mix leave?",
    content:
      "Peak around −6 dBFS on the master so the mastering engineer has room.",
  },
  {
    value: "stems",
    trigger: "What goes in a stem export?",
    content: "One file per bus, all starting at bar 1, with effects printed.",
  },
]

const plugins = Array.from(
  { length: 24 },
  (_, index) => `Plugin slot ${String(index + 1).padStart(2, "0")}`
)

export default function LayoutPage() {
  return (
    <>
      <PageHeader title="Layout" />

      <Section title="Accordion">
        <Demo>
          <Accordion defaultValue={["rate"]} className="max-w-lg">
            {faq.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Demo>
      </Section>

      <Section title="Collapsible">
        <Demo>
          <Collapsible className="w-full max-w-sm">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium">Inserts on Bass DI</span>
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Toggle inserts"
                  />
                }
              >
                <CaretUpDownIcon />
              </CollapsibleTrigger>
            </div>
            <div className="border px-3 py-2 text-sm">Compressor</div>
            <CollapsibleContent>
              <div className="mt-2 flex flex-col gap-2">
                <div className="border px-3 py-2 text-sm">EQ</div>
                <div className="border px-3 py-2 text-sm">Saturation</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Demo>
      </Section>

      <Section title="Separator">
        <Demo>
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium">Night drive</span>
            <Separator />
            <div className="flex h-5 items-center gap-3 text-muted-foreground">
              <span>120 BPM</span>
              <Separator orientation="vertical" />
              <span>F minor</span>
              <Separator orientation="vertical" />
              <span>3:41</span>
            </div>
          </div>
        </Demo>
      </Section>

      <Section title="Scroll area">
        <Demo>
          <div className="border">
            <ScrollArea className="h-56 w-64">
              <div className="flex flex-col p-3">
                {plugins.map((plugin, index) => (
                  <div key={plugin} className="flex flex-col">
                    {index > 0 ? <Separator className="my-2" /> : null}
                    <span className="type-pixel text-muted-foreground">
                      {plugin}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Demo>
      </Section>

      <Section title="Resizable">
        <div className="border">
          <ResizablePanelGroup orientation="horizontal" className="min-h-56">
            <ResizablePanel defaultSize="30%">
              <div className="flex h-full items-center justify-center p-6 text-sm">
                Browser
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="60%">
                  <div className="flex h-full items-center justify-center p-6 text-sm">
                    Arrange
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="40%">
                  <div className="flex h-full items-center justify-center p-6 text-sm">
                    Editor
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Section>

      <Section title="Direction">
        <Demo>
          <DirectionProvider direction="rtl">
            <div dir="rtl" className="flex w-full max-w-sm flex-col gap-3">
              <Field>
                <FieldLabel htmlFor="rtl-name">اسم الجلسة</FieldLabel>
                <Input id="rtl-name" defaultValue="قيادة ليلية" />
              </Field>
              <div>
                <Button>حفظ</Button>
              </div>
            </div>
          </DirectionProvider>
        </Demo>
        <Details>
          <p>
            DirectionProvider sets reading direction for Base UI parts. The
            wrapper also needs a dir attribute to flip layout.
          </p>
        </Details>
      </Section>
    </>
  )
}
