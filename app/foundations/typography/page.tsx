import type { Metadata } from "next"

import { PageHeader, Prose, Section } from "@/components/showcase/page"
import {
  FontRoles,
  TrackingScale,
  TypeScale,
} from "@/components/showcase/type-specimen"

export const metadata: Metadata = { title: "Typography" }

export default function TypographyPage() {
  return (
    <>
      <PageHeader title="Typography" />

      <Section title="Font roles">
        <Prose>
          <p>
            ABC Areal sets the ui, brand, and editorial roles. Paper Mono sets
            data. Each role maps regular, medium, and heavy to its own weights.
          </p>
        </Prose>
        <FontRoles />
      </Section>

      <Section title="Text steps">
        <Prose>
          <p>
            Each step sets size, line height, and default tracking together:
            large steps tighten and small steps open up.
          </p>
        </Prose>
        <TypeScale />
      </Section>

      <Section title="Tracking">
        <Prose>
          <p>An independent scale a component can select instead of its step default.</p>
        </Prose>
        <TrackingScale />
      </Section>

      <Section title="Running text">
        <div className="flex max-w-[60ch] flex-col gap-s text-m text-neutral-8">
          <p>
            Bounce the mix at 48 kHz, then render each stem separately so the
            mastering engineer can rebalance the low end. Keep peaks below
            &minus;1 dBTP and leave the limiter off the stem exports.
          </p>
          <p className="text-s text-neutral-7">
            Wrapping text defaults to <code className="font-data text-xs">text-wrap: pretty</code>,
            set once on the body so portalled popups inherit it.
          </p>
        </div>
      </Section>
    </>
  )
}
