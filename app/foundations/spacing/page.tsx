import type { Metadata } from "next"

import { PageHeader, Prose, Section } from "@/components/showcase/page"
import { TokenList } from "@/components/showcase/token-list"

export const metadata: Metadata = { title: "Spacing and sizing" }

const spacing = [
  { token: "space-zero" },
  { token: "space-xxs", use: "Gaps inside menus, lists, and toolbars" },
  { token: "space-xs", use: "Control padding (block), label gaps" },
  { token: "space-s", use: "Input padding (inline), group gaps" },
  { token: "space-m", use: "Button padding (inline), popover padding, form gaps" },
  { token: "space-l", use: "Dialog and drawer padding" },
  { token: "space-xl", use: "Popup inset from the viewport edge" },
  { token: "space-xxl", use: "Space between sections in this showcase" },
] as const

const controls = [
  { token: "control-size-xxs", use: "Progress, meter, and slider tracks" },
  { token: "control-size-xs", use: "Scrollbars" },
  { token: "control-size-m", use: "Checkbox, radio, slider and switch thumbs" },
  { token: "control-size-l", use: "Switch track height" },
  { token: "control-size-xl", use: "Avatar, OTP slots" },
] as const

const borders = [
  { token: "border-none" },
  { token: "border-s", use: "Every component edge and divider" },
  { token: "border-m" },
  { token: "border-l", use: "Focus outline width" },
] as const

export default function SpacingPage() {
  return (
    <>
      <PageHeader title="Spacing and sizing" />

      <Section title="Spacing">
        <TokenList
          rows={spacing}
          kind="length"
        />
      </Section>

      <Section title="Control sizes">
        <Prose>
          <p>
            Explicit control geometry resolves through the spacing scale.
            Buttons and inputs size from their content and padding instead.
          </p>
        </Prose>
        <TokenList
          rows={controls}
          kind="square"
        />
      </Section>

      <Section title="Border widths">
        <Prose>
          <p>
            Widths draw edges as box shadows, so they never change layout.
          </p>
        </Prose>
        <TokenList
          rows={borders}
          kind="border"
        />
      </Section>
    </>
  )
}
