import type { Metadata } from "next"
import {
  ArrowSquareOutIcon,
  CaretDownIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CheckIcon,
  CopyIcon,
  DesktopIcon,
  DownloadSimpleIcon,
  InfoIcon,
  LinkSimpleIcon,
  ListIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SpinnerIcon,
  SunIcon,
  TrashIcon,
  WarningIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react/ssr"
import type { Icon } from "@phosphor-icons/react/lib"

import { Demo, PageHeader, Prose, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Icons" }

const icons: [string, Icon][] = [
  ["Check", CheckIcon],
  ["Minus", MinusIcon],
  ["Plus", PlusIcon],
  ["X", XIcon],
  ["CaretRight", CaretRightIcon],
  ["CaretDown", CaretDownIcon],
  ["List", ListIcon],
  ["Copy", CopyIcon],
  ["DownloadSimple", DownloadSimpleIcon],
  ["ArrowSquareOut", ArrowSquareOutIcon],
  ["LinkSimple", LinkSimpleIcon],
  ["Trash", TrashIcon],
  ["Info", InfoIcon],
  ["CheckCircle", CheckCircleIcon],
  ["Warning", WarningIcon],
  ["XCircle", XCircleIcon],
  ["Spinner", SpinnerIcon],
  ["Sun", SunIcon],
  ["Moon", MoonIcon],
  ["Desktop", DesktopIcon],
]

const steps = [
  ["xs", "text-xs"],
  ["s", "text-s"],
  ["m", "text-m"],
  ["l", "text-l"],
] as const

export default function IconsPage() {
  return (
    <>
      <PageHeader title="Icons" />

      <Section title="Phosphor, regular weight">
        <Prose>
          <p>
            Icons are 1em, so they follow the text step of their control.
            Decorative icons are hidden from assistive technology; icon-only
            controls carry a label.
          </p>
        </Prose>
        <div className="grid grid-cols-2 gap-x-l gap-y-m sm:grid-cols-4">
          {icons.map(([name, IconComponent]) => (
            <div key={name} className="flex items-center gap-s">
              <IconComponent aria-hidden="true" className="size-[1em] text-m text-neutral-10" />
              <span className="font-data text-xs text-neutral-7">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sizes">
        <div className="flex flex-col gap-s">
          {steps.map(([step, className]) => (
            <Demo key={step} className="gap-l py-s">
              <span className="w-xxl font-data text-xs text-neutral-7">{step}</span>
              <div className={`flex items-center gap-m ${className}`}>
                {icons.slice(0, 10).map(([name, IconComponent]) => (
                  <IconComponent
                    key={name}
                    aria-hidden="true"
                    className="size-[1em] text-neutral-10"
                  />
                ))}
              </div>
              <div className={`flex items-center gap-m ${className}`}>
                {icons.slice(0, 4).map(([name, IconComponent]) => (
                  <IconComponent
                    key={name}
                    aria-hidden="true"
                    className="size-[1em] text-neutral-7"
                  />
                ))}
              </div>
            </Demo>
          ))}
        </div>
      </Section>
    </>
  )
}
