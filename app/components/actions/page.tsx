import type { Metadata } from "next"
import {
  ArrowSquareOutIcon,
  CopyIcon,
  DownloadSimpleIcon,
  LinkSimpleIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TrashIcon,
} from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from "@/components/ui/toolbar"
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"
import { previewState, StateMatrix } from "@/components/showcase/state-matrix"

export const metadata: Metadata = { title: "Actions" }

const buttonVariants = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "danger",
] as const

const interactionStates = ["rest", "hover", "focus", "pressed", "disabled"]

export default function ActionsPage() {
  return (
    <>
      <PageHeader title="Actions" />

      <Section title="Button">
        <Demo>
          <Button>Publish</Button>
          <Button variant="secondary">Duplicate</Button>
          <Button variant="outline">Share</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </Demo>

        <Subsection title="With icons">
          <Demo>
            <Button>
              <DownloadSimpleIcon />
              Export
            </Button>
            <Button variant="secondary">
              <CopyIcon />
              Copy link
            </Button>
            <Button variant="outline">
              Open in new tab
              <ArrowSquareOutIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Copy">
              <CopyIcon />
            </Button>
            <Button variant="danger" size="icon" aria-label="Delete">
              <TrashIcon />
            </Button>
          </Demo>
        </Subsection>

        <Subsection title="States">
          <StateMatrix
            rows={buttonVariants}
            states={interactionStates}
            render={(variant, state) => (
              <Button variant={variant} {...previewState(state)}>
                Publish
              </Button>
            )}
          />
        </Subsection>
      </Section>

      <Section title="Toggle">
        <Demo>
          <Toggle aria-label="Bold" size="icon" defaultPressed>
            <TextBIcon />
          </Toggle>
          <Toggle aria-label="Italic" size="icon">
            <TextItalicIcon />
          </Toggle>
          <Toggle defaultPressed>Show grid</Toggle>
        </Demo>

        <Subsection title="States">
          <StateMatrix
            rows={["toggle"] as const}
            states={["rest", "hover", "focus", "pressed", "disabled"]}
            render={(_, state) => (
              <Toggle
                pressed={state === "pressed"}
                {...(state === "pressed" ? {} : previewState(state))}
              >
                Show grid
              </Toggle>
            )}
          />
        </Subsection>
      </Section>

      <Section title="Toggle group">
        <Demo>
          <ToggleGroup defaultValue={["left"]} aria-label="Text alignment" size="icon">
            <ToggleGroupItem value="left" aria-label="Align left">
              <TextAlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <TextAlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <TextAlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup defaultValue={["week"]} aria-label="Range">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </Demo>
      </Section>

      <Section title="Toolbar">
        <Demo>
          <Toolbar aria-label="Formatting">
            <ToolbarGroup aria-label="Style">
              <ToolbarButton
                size="icon"
                aria-label="Bold"
                render={<Toggle />}
              >
                <TextBIcon />
              </ToolbarButton>
              <ToolbarButton
                size="icon"
                aria-label="Italic"
                render={<Toggle defaultPressed />}
              >
                <TextItalicIcon />
              </ToolbarButton>
              <ToolbarButton
                size="icon"
                aria-label="Underline"
                render={<Toggle />}
              >
                <TextUnderlineIcon />
              </ToolbarButton>
            </ToolbarGroup>
            <ToolbarSeparator />
            <ToolbarButton size="icon" aria-label="Insert link">
              <LinkSimpleIcon />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarLink href="#toolbar">Edited 2 minutes ago</ToolbarLink>
          </Toolbar>
        </Demo>
      </Section>
    </>
  )
}
