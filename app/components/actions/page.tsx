import type { Metadata } from "next"
import {
  ArrowSquareOutIcon,
  CaretDownIcon,
  CopyIcon,
  DownloadSimpleIcon,
  LinkSimpleIcon,
  MinusIcon,
  PlusIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TrashIcon,
} from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
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
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

const interactionStates = ["rest", "hover", "focus", "pressed", "disabled"]

export default function ActionsPage() {
  return (
    <>
      <PageHeader title="Actions" />

      <Section title="Button">
        <Demo>
          <Button>Render</Button>
          <Button variant="secondary">Duplicate</Button>
          <Button variant="outline">Share</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">View history</Button>
        </Demo>

        <Subsection title="Sizes and icons">
          <Demo>
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button>
              <DownloadSimpleIcon data-icon="inline-start" />
              Export
            </Button>
            <Button size="lg" variant="outline">
              Open in new tab
              <ArrowSquareOutIcon data-icon="inline-end" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Copy">
              <CopyIcon />
            </Button>
            <Button variant="destructive" size="icon" aria-label="Delete">
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
                Render
              </Button>
            )}
          />
        </Subsection>
      </Section>

      <Section title="Button group">
        <Demo>
          <ButtonGroup aria-label="Transport">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">Play</Button>
            <Button variant="outline">Next</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Gain">
            <Button variant="outline" size="icon" aria-label="Decrease gain">
              <MinusIcon />
            </Button>
            <ButtonGroupText>−6 dB</ButtonGroupText>
            <Button variant="outline" size="icon" aria-label="Increase gain">
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>Bounce</Button>
            <ButtonGroupSeparator />
            <Button size="icon" aria-label="Bounce options">
              <CaretDownIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Input
              aria-label="Session URL"
              defaultValue="kevelle.studio/s/41"
            />
            <Button variant="outline">Copy</Button>
          </ButtonGroup>
        </Demo>
      </Section>

      <Section title="Toggle">
        <Demo>
          <Toggle aria-label="Bold" defaultPressed>
            <TextBIcon />
          </Toggle>
          <Toggle aria-label="Italic">
            <TextItalicIcon />
          </Toggle>
          <Toggle variant="outline" defaultPressed>
            Show grid
          </Toggle>
        </Demo>

        <Subsection title="States">
          <StateMatrix
            rows={["default", "outline"] as const}
            states={["rest", "hover", "focus", "pressed", "on", "disabled"]}
            render={(variant, state) => (
              <Toggle
                variant={variant}
                pressed={state === "on"}
                {...(state === "on" ? {} : previewState(state))}
              >
                Snap
              </Toggle>
            )}
          />
        </Subsection>
      </Section>

      <Section title="Toggle group">
        <Demo>
          <ToggleGroup defaultValue={["left"]} aria-label="Text alignment">
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
          <ToggleGroup
            variant="outline"
            spacing={0}
            defaultValue={["bar"]}
            aria-label="Grid resolution"
          >
            <ToggleGroupItem value="beat">Beat</ToggleGroupItem>
            <ToggleGroupItem value="bar">Bar</ToggleGroupItem>
            <ToggleGroupItem value="phrase">Phrase</ToggleGroupItem>
          </ToggleGroup>
        </Demo>
      </Section>

      <Section title="Toolbar">
        <Demo>
          <Toolbar aria-label="Formatting">
            <ToolbarGroup aria-label="Style">
              <ToolbarButton aria-label="Bold" render={<Toggle />}>
                <TextBIcon />
              </ToolbarButton>
              <ToolbarButton
                aria-label="Italic"
                render={<Toggle defaultPressed />}
              >
                <TextItalicIcon />
              </ToolbarButton>
              <ToolbarButton aria-label="Underline" render={<Toggle />}>
                <TextUnderlineIcon />
              </ToolbarButton>
            </ToolbarGroup>
            <ToolbarSeparator />
            <ToolbarButton aria-label="Insert link">
              <LinkSimpleIcon />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarLink href="#toolbar">Edited 2 minutes ago</ToolbarLink>
          </Toolbar>
        </Demo>
      </Section>

      <Section title="Kbd">
        <Demo>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>B</Kbd>
          </KbdGroup>
          <span className="text-sm text-muted-foreground">
            Press <Kbd>Space</Kbd> to play or pause, <Kbd>D</Kbd> to switch
            color mode.
          </span>
        </Demo>
      </Section>
    </>
  )
}
