import type { Metadata } from "next"
import {
  ArrowsClockwiseIcon,
  CaretDownIcon,
  CheckIcon,
  DownloadSimpleIcon,
  FolderIcon,
  GearSixIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  SpeakerHighIcon,
  TrashIcon,
  WaveformIcon,
  WarningIcon,
  XIcon,
} from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import { Demo, Notes, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Icons" }

const icons = [
  ["Play", PlayIcon],
  ["Pause", PauseIcon],
  ["Waveform", WaveformIcon],
  ["Microphone", MicrophoneIcon],
  ["Speaker", SpeakerHighIcon],
  ["Download", DownloadSimpleIcon],
  ["Folder", FolderIcon],
  ["Search", MagnifyingGlassIcon],
  ["Settings", GearSixIcon],
  ["Sync", ArrowsClockwiseIcon],
  ["Add", PlusIcon],
  ["Close", XIcon],
  ["Check", CheckIcon],
  ["Expand", CaretDownIcon],
  ["Warning", WarningIcon],
  ["Delete", TrashIcon],
] as const

export default function IconsPage() {
  return (
    <>
      <PageHeader title="Icons" />

      <Section title="Phosphor">
        <div className="grid grid-cols-4 border-t border-l sm:grid-cols-8">
          {icons.map(([label, Icon]) => (
            <div
              key={label}
              className="flex aspect-square flex-col items-center justify-center gap-2 border-r border-b"
            >
              <Icon className="size-6 text-foreground" aria-hidden="true" />
              <span className="type-pixel text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
        <Notes>
          <p>
            Phosphor at the regular weight. Components size icons from their own
            text; a button icon is 16px. Icon-only controls need an accessible
            name.
          </p>
        </Notes>
      </Section>

      <Section title="In controls">
        <Demo>
          <Button>
            <DownloadSimpleIcon data-icon="inline-start" />
            Export
          </Button>
          <Button variant="outline">
            Sync
            <ArrowsClockwiseIcon data-icon="inline-end" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <GearSixIcon />
          </Button>
        </Demo>
      </Section>
    </>
  )
}
