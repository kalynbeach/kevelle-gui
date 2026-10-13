import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Demo,
  PageHeader,
  Prose,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { TokenTable } from "@/components/showcase/token-table"

export const metadata: Metadata = { title: "Radius and elevation" }

const block = "h-10 w-24 border bg-muted"

const radii = [
  {
    token: "radius-xs",
    utility: "rounded-xs",
    preview: <div className={`${block} rounded-xs`} />,
    use: "Square controls",
  },
  {
    token: "radius-sm",
    utility: "rounded-sm",
    preview: <div className={`${block} rounded-sm`} />,
    use: "Keys and small accents",
  },
  {
    token: "radius-md",
    utility: "rounded-md",
    preview: <div className={`${block} rounded-md`} />,
    use: "Menu and list items",
  },
  {
    token: "radius-lg",
    utility: "rounded-lg",
    preview: <div className={`${block} rounded-lg`} />,
    use: "Buttons, inputs, popovers",
  },
  {
    token: "radius-xl",
    utility: "rounded-xl",
    preview: <div className={`${block} rounded-xl`} />,
    use: "Cards and dialogs",
  },
  {
    token: "radius-2xl",
    utility: "rounded-2xl",
    preview: <div className={`${block} rounded-2xl`} />,
    use: "Toasts",
  },
]

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
        <Prose>
          <p>
            One knob, --radius at 2px, sets every step in whole pixels.
            Checkboxes, switches, avatars, badges, and progress tracks are
            square.
          </p>
        </Prose>
        <TokenTable rows={radii} />
      </Section>

      <Section title="Edges and elevation">
        <Prose>
          <p>
            Edges are 1px hairlines in the border role. Shadows are reserved for
            layers that float: they read in light mode and fall away on the dark
            canvas, where the hairline carries the edge.
          </p>
        </Prose>
        <TokenTable rows={shadows} />
      </Section>

      <Section title="Alloy">
        <Prose>
          <p>
            Kevelle&apos;s machined surfaces. Filled buttons carry a lit top
            edge and a shaded base. Checkboxes, switch thumbs, and select
            triggers are raised; text fields are recessed. Meter and progress
            tracks are dithered.
          </p>
        </Prose>
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
        <Subsection title="bg-dither">
          <Demo>
            <Progress value={34} aria-label="Disk usage" className="w-full" />
          </Demo>
        </Subsection>
      </Section>
    </>
  )
}
