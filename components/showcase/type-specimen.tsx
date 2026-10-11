"use client"

import { useTokenValues } from "@/components/showcase/live-token"

const steps = ["xxl", "xl", "l", "m", "s", "xs", "xxs"] as const

const stepClass: Record<(typeof steps)[number], string> = {
  xxl: "text-xxl",
  xl: "text-xl",
  l: "text-l",
  m: "text-m",
  s: "text-s",
  xs: "text-xs",
  xxs: "text-xxs",
}

const uses: Record<(typeof steps)[number], string> = {
  xxl: "Not assigned to components",
  xl: "Page titles in this showcase",
  l: "Section titles in this showcase",
  m: "Dialog, popover, and fieldset titles",
  s: "Controls, labels, and body text",
  xs: "Tooltips, menu group labels, field errors, values",
  xxs: "Not assigned to components",
}

function StepRow({ step }: { step: (typeof steps)[number] }) {
  const [size, line, tracking] = useTokenValues([
    `--size-${step}`,
    `--line-${step}`,
    `--letter-spacing-${step}`,
  ])

  return (
    <tr className="align-baseline">
      <th scope="row" className="py-s pe-l text-start font-data text-xs font-regular text-neutral-8">
        {step}
      </th>
      <td className="py-s pe-l font-data text-xs whitespace-nowrap text-neutral-7 tabular-nums">
        {size ? `${size} / ${line} / ${tracking}` : " "}
      </td>
      <td className="max-w-0 py-s pe-l">
        <span className={`block truncate text-neutral-10 ${stepClass[step]}`}>
          Sample rate and bit depth
        </span>
      </td>
      <td className="py-s text-s text-neutral-7">{uses[step]}</td>
    </tr>
  )
}

export function TypeScale() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-start font-data text-xs text-neutral-6">
            <th scope="col" className="pe-l pb-xs text-start font-regular">Step</th>
            <th scope="col" className="pe-l pb-xs text-start font-regular">Size / line / tracking</th>
            <th scope="col" className="w-1/2 pe-l pb-xs text-start font-regular">Specimen</th>
            <th scope="col" className="pb-xs text-start font-regular">Use</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => (
            <StepRow key={step} step={step} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const roles = [
  { role: "ui", className: "font-ui" },
  { role: "brand", className: "font-brand" },
  { role: "editorial", className: "font-editorial" },
  { role: "data", className: "font-data" },
] as const

const weights = ["regular", "medium", "heavy"] as const
const weightClass = {
  regular: "font-regular",
  medium: "font-medium",
  heavy: "font-heavy",
} as const

export function FontRoles() {
  const families = useTokenValues(roles.map(({ role }) => `--font-${role}`))
  const roleWeights = useTokenValues(
    roles.flatMap(({ role }) =>
      weights.map((weight) => `--weight-${role}-${weight}`)
    )
  )

  return (
    <div className="flex flex-col gap-l">
      {roles.map(({ role, className }, index) => (
        <div key={role} className="flex flex-col gap-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-s">
            <span className="text-s font-medium text-neutral-10">{role}</span>
            <span className="font-data text-xs text-neutral-7">
              {families[index] || " "}
            </span>
          </div>
          <div className={`flex flex-wrap gap-x-l gap-y-xs text-l text-neutral-10 ${className}`}>
            {weights.map((weight, weightIndex) => (
              <span key={weight} className={weightClass[weight]}>
                <span className="capitalize">{weight}</span>{" "}
                {roleWeights[index * weights.length + weightIndex]}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const tracking = ["xs", "s", "m", "l", "xl"] as const
const trackingClass: Record<(typeof tracking)[number], string> = {
  xs: "tracking-xs",
  s: "tracking-s",
  m: "tracking-m",
  l: "tracking-l",
  xl: "tracking-xl",
}

export function TrackingScale() {
  const values = useTokenValues(tracking.map((step) => `--tracking-${step}`))
  return (
    <div className="flex flex-col gap-s">
      {tracking.map((step, index) => (
        <div key={step} className="flex items-baseline gap-l">
          <span className="w-xxl shrink-0 font-data text-xs text-neutral-8">{step}</span>
          <span className="w-[5rem] shrink-0 font-data text-xs text-neutral-7 tabular-nums">
            {values[index] || " "}
          </span>
          <span className={`text-m text-neutral-10 ${trackingClass[step]}`}>
            Export stems as 24-bit WAV
          </span>
        </div>
      ))}
    </div>
  )
}
