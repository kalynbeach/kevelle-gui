import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Demo,
  Details,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { TokenTable } from "@/components/showcase/token-table"

export const metadata: Metadata = { title: "Radius and elevation" }

const block = "h-10 w-24 border bg-muted"

/* Utilities stay literal so Tailwind generates them. */
const radii = (
  [
    ["radius-none", "rounded-none", "Components and surfaces"],
    ["radius-xs", "rounded-xs"],
    ["radius-sm", "rounded-sm"],
    ["radius-md", "rounded-md"],
    ["radius-lg", "rounded-lg"],
    ["radius-xl", "rounded-xl"],
    ["radius-2xl", "rounded-2xl"],
    ["radius-3xl", "rounded-3xl"],
    ["radius-4xl", "rounded-4xl"],
  ] as const
).map(([token, utility, use]) => ({
  token,
  utility,
  preview: <div className={`${block} ${utility}`} />,
  use,
  property: "border-top-left-radius",
}))

const surface = "h-12 w-24 bg-card ring-1 ring-foreground/10"

const shadows = [
  {
    token: "shadow-sm",
    utility: "shadow-sm",
    preview: <div className={`${surface} shadow-sm`} />,
    use: "Filled buttons, toolbars",
  },
  {
    token: "shadow-md",
    utility: "shadow-md",
    preview: <div className={`${surface} shadow-md`} />,
    use: "Menus and popovers",
  },
  {
    token: "shadow-lg",
    utility: "shadow-lg",
    preview: <div className={`${surface} shadow-lg`} />,
    use: "Dialogs, sheets, toasts",
  },
]

export default function RadiusElevationPage() {
  return (
    <>
      <PageHeader title="Radius and elevation" />

      <Section title="Radius">
        <TokenTable rows={radii} />
        <Details>
          <p>
            Components are square: they use rounded-none. Radio buttons, scroll
            area thumbs, and the drawer handle stay round. The ramp is there for
            elements that opt into rounding. One knob, --radius at 8px, sets
            every step in whole pixels.
          </p>
        </Details>
      </Section>

      <Section title="Edges and elevation">
        <TokenTable rows={shadows} />
        <Details>
          <p>
            Edges are 1px hairlines in the border role. Shadows are reserved for
            layers that float: they read in light mode and fall away on the dark
            canvas, where the hairline carries the edge.
          </p>
        </Details>
      </Section>

      <Section title="Alloy">
        <div className="grid gap-6 md:grid-cols-3">
          <Subsection title="alloy-action">
            <Demo>
              <Button>Render</Button>
              <Button variant="secondary">Duplicate</Button>
            </Demo>
          </Subsection>
          <Subsection title="alloy-raised">
            <Demo>
              <Checkbox aria-label="Solo" defaultChecked />
              <Checkbox aria-label="Mute" />
              <Switch aria-label="Monitor" defaultChecked />
            </Demo>
          </Subsection>
          <Subsection title="alloy-recessed">
            <Demo>
              <Input aria-label="Bus name" defaultValue="Drum bus" />
            </Demo>
          </Subsection>
        </div>
        <Details>
          <p>
            Kevelle&apos;s machined surfaces. Filled buttons carry a lit top
            edge and a shaded base. Checkboxes, switch thumbs, and select
            triggers are raised; text fields are recessed.
          </p>
        </Details>
      </Section>
    </>
  )
}
