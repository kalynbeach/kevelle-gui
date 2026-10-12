import * as React from "react"

import { cn } from "@/lib/utils"
import { stage } from "@/components/showcase/page"

const stateLabel = "font-data text-xs font-regular text-neutral-6"

/*
 * Renders a variant × state grid. States are pinned with data-preview (see
 * app/globals.css) so hover, focus, and pressed render without interaction.
 * A single variant wraps as labeled cells instead, so wide controls fit
 * without scrolling.
 */
export function StateMatrix<Row extends string>({
  rows,
  states,
  render,
  rowLabel = (row) => row,
}: {
  rows: readonly Row[]
  states: readonly string[]
  render: (row: Row, state: string) => React.ReactNode
  rowLabel?: (row: Row) => string
}) {
  if (rows.length === 1) {
    const [row] = rows
    return (
      <div className={cn("flex flex-wrap gap-x-l gap-y-m", stage)}>
        {states.map((state) => (
          <div key={state} className="flex flex-col items-start gap-xs">
            <span className={stateLabel}>{state}</span>
            {render(row, state)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("w-full overflow-x-auto", stage)}>
      <table className="border-separate border-spacing-x-m border-spacing-y-s sm:border-spacing-x-l">
        <thead>
          <tr>
            <td />
            {states.map((state) => (
              <th key={state} scope="col" className={cn("text-start", stateLabel)}>
                {state}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th
                scope="row"
                className={cn("text-start whitespace-nowrap", stateLabel)}
              >
                {rowLabel(row)}
              </th>
              {states.map((state) => (
                <td key={state} className="align-middle">
                  {render(row, state)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* Spread onto a component to pin a state. */
export function previewState(state: string): Record<string, unknown> {
  switch (state) {
    case "disabled":
      return { disabled: true }
    case "hover":
    case "focus":
      return { "data-preview": state }
    case "pressed":
      return { "data-preview": "hover active" }
    default:
      return {}
  }
}
