import type { Metadata } from "next"

import { MotionDemo } from "@/components/showcase/motion-demo"
import { Code, Notes, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Motion" }

export default function MotionPage() {
  return (
    <>
      <PageHeader title="Motion" />

      <Section title="Curve">
        <MotionDemo />
        <Notes>
          <p>
            Transitions default to 160ms on <Code>ease-out</Code>, a fast start
            that settles gently: cubic-bezier(0.16, 1, 0.3, 1). Overlays enter
            with a short fade and scale from their trigger. Reduced motion turns
            every transition and animation into an immediate change.
          </p>
        </Notes>
      </Section>
    </>
  )
}
