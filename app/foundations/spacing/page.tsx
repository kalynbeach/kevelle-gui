import type { Metadata } from "next"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Code,
  Demo,
  PageHeader,
  Prose,
  Section,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Spacing" }

/* Static classes so Tailwind generates each bar. */
const steps = [
  ["0.5", "w-0.5", "2px", "Hairline offsets"],
  ["1", "w-1", "4px", "Menu and list padding"],
  ["1.5", "w-1.5", "6px", "Icon gaps in buttons"],
  ["2", "w-2", "8px", "Gaps inside fields and items"],
  ["2.5", "w-2.5", "10px", "Control inline padding"],
  ["3", "w-3", "12px", "Field rows, small cards"],
  ["4", "w-4", "16px", "Card padding, demo gaps"],
  ["6", "w-6", "24px", "Section content, dialogs"],
  ["10", "w-10", "40px", "Page padding"],
  ["16", "w-16", "64px", "Between sections"],
] as const

export default function SpacingPage() {
  return (
    <>
      <PageHeader title="Spacing" />

      <Section title="Scale">
        <Prose>
          <p>
            Tailwind&apos;s 4px scale. Components own their internal spacing;
            pages place them with gap and margin.
          </p>
        </Prose>
        <div className="flex flex-col">
          {steps.map(([step, width, value, use]) => (
            <div
              key={step}
              className="flex flex-wrap items-center gap-x-6 gap-y-1 border-b py-3 last:border-b-0"
            >
              <span className="w-10">
                <Code>{step}</Code>
              </span>
              <span className="w-12 type-pixel text-muted-foreground">
                {value}
              </span>
              <div className="flex h-4 w-24 items-center">
                <div className={cn("h-2 bg-foreground", width)} />
              </div>
              <span className="text-sm text-muted-foreground">{use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Control heights">
        <Prose>
          <p>
            Buttons, inputs, selects, and toggles share heights so they align in
            a row: 24, 28, 32, and 36px.
          </p>
        </Prose>
        <Demo>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <div className="w-48">
            <Input aria-label="Track name" placeholder="Track name" />
          </div>
        </Demo>
      </Section>
    </>
  )
}
