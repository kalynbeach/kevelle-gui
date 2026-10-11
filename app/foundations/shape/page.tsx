import type { Metadata } from "next"

import {
  Demo,
  PageHeader,
  Prose,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { TokenList } from "@/components/showcase/token-list"

export const metadata: Metadata = { title: "Radius and elevation" }

const radii = [
  { token: "radius-zero", use: "Square bottom corners on the drawer" },
  { token: "radius-xs", use: "Checkbox, menu and select options" },
  { token: "radius-s", use: "Buttons, inputs, tooltips, toolbar" },
  { token: "radius-m", use: "Popovers, menus, dialogs, tabs list" },
  { token: "radius-l" },
  { token: "radius-xl" },
  { token: "radius-full", use: "Radio, switch, avatar, tracks, steppers" },
] as const

const shadows = [
  { token: "shadow-s", use: "Buttons, toolbar, menubar, tooltip, thumbs" },
  { token: "shadow-m", use: "Menus, popovers, selects, toasts" },
  { token: "shadow-l", use: "Dialogs and drawers" },
] as const

function Surface({
  label,
  className,
}: {
  label: string
  className: string
}) {
  return (
    <div className="flex flex-col gap-xs">
      <div className={`h-xxl w-[8rem] rounded-s ${className}`} />
      <span className="font-data text-xs text-neutral-7">{label}</span>
    </div>
  )
}

export default function ShapePage() {
  return (
    <>
      <PageHeader title="Radius and elevation" />

      <Section title="Radius">
        <TokenList rows={radii} kind="radius" />
      </Section>

      <Section title="Elevation">
        <Prose>
          <p>
            Each level combines a contact layer and an ambient layer. Dark mode
            uses neutral-1 for the shadow color.
          </p>
        </Prose>
        <TokenList rows={shadows} kind="shadow" />
      </Section>

      <Section title="Edges">
        <Prose>
          <p>
            Component edges are box shadows at the border-s width, with native
            borders at zero. Each part sets whether its edge sits outside or
            inside the box. In light mode, filled actions take inside edges;
            in dark mode most filled surfaces do.
          </p>
        </Prose>
        <Demo className="gap-xl">
          <Surface
            label="outside edge"
            className="bg-neutral-1 ring ring-neutral-6-transparent"
          />
          <Surface
            label="inside edge"
            className="bg-neutral-1 ring ring-inset ring-neutral-6-transparent"
          />
          <Surface
            label="solid neutral-4"
            className="bg-neutral-1 ring ring-neutral-4"
          />
        </Demo>
      </Section>

      <Section title="Surfaces">
        <Prose>
          <p>
            Three material treatments pair a gradient fill with an inner bevel.
          </p>
        </Prose>
        <Demo className="gap-xl">
          <Surface
            label="raised"
            className="bg-neutral-1 ring ring-neutral-4 inset-shadow-raised surface-raised dark:ring-inset"
          />
          <Surface
            label="recessed"
            className="bg-neutral-1 ring ring-neutral-4 inset-shadow-recessed surface-recessed dark:ring-inset"
          />
          <Surface
            label="action"
            className="bg-neutral-10 shadow-s ring ring-inset ring-neutral-6-transparent surface-action dark:ring-outset"
          />
        </Demo>
        <Subsection title="Where they apply">
          <Prose>
            <p>
              Raised: checkbox, radio, select trigger, slider and switch thumbs.
              Recessed: text inputs. Action: primary, secondary, and danger
              buttons, including dialog, popover, form, and toast actions.
            </p>
          </Prose>
        </Subsection>
      </Section>

      <Section title="Focus">
        <Prose>
          <p>
            Keyboard focus draws an outline in color-1 at 55% opacity and the
            border-l width. Options and menu items show focus with their
            highlight fill instead.
          </p>
        </Prose>
        <Demo>
          <div
            data-preview="focus"
            className="h-xxl w-[8rem] rounded-s bg-neutral-1 ring ring-color-1-transparent"
          />
        </Demo>
      </Section>
    </>
  )
}
