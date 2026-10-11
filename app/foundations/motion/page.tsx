import type { Metadata } from "next"

import { Demo, PageHeader, Prose, Section } from "@/components/showcase/page"
import { MotionDemo } from "@/components/showcase/motion-demo"
import { TokenValue } from "@/components/showcase/live-token"

export const metadata: Metadata = { title: "Motion" }

const tokens = [
  ["motion-duration", "Small: controls, menus, popovers, tooltips"],
  ["motion-easing", "Small curve"],
  ["motion-large-duration", "Large: dialogs, drawers, toasts, navigation, disclosure panels"],
  ["motion-large-easing", "Large curve"],
  ["motion-popup-scale", "Scale popups enter from and exit to"],
  ["motion-press-distance", "Button travel when pressed"],
] as const

export default function MotionPage() {
  return (
    <>
      <PageHeader title="Motion" />

      <Section title="Tokens">
        <div className="flex flex-col">
          {tokens.map(([token, use]) => (
            <div
              key={token}
              className="grid grid-cols-1 gap-xs py-s shadow-[inset_0_calc(var(--border-s)*-1)_0_0_var(--neutral-4-transparent)] last:shadow-none sm:grid-cols-[13rem_14rem_minmax(0,1fr)] sm:gap-l"
            >
              <span className="font-data text-xs text-neutral-8">{token}</span>
              <TokenValue name={`--${token}`} />
              <span className="text-s text-neutral-7">{use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Curves">
        <Demo>
          <MotionDemo />
        </Demo>
        <Prose>
          <p>
            With reduced motion enabled, both durations resolve to zero and
            loops run once.
          </p>
        </Prose>
      </Section>
    </>
  )
}
