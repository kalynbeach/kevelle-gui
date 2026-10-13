import * as React from "react"
import { cn } from "cn"

import { stage } from "@/components/showcase/page"

const stateLabel = "type-pixel text-muted-foreground"

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
      <div className={cn("flex flex-wrap gap-x-8 gap-y-6", stage)}>
        {states.map((state) => (
          <div key={state} className="flex flex-col items-start gap-2">
            <span className={stateLabel}>{state}</span>
            {render(row, state)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("w-full overflow-x-auto", stage)}>
      <table className="border-separate border-spacing-x-4 border-spacing-y-3 sm:border-spacing-x-6">
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Variant</span>
            </th>
            {states.map((state) => (
              <th
                key={state}
                scope="col"
                className={cn("text-start", stateLabel)}
              >
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
export function previewState(state: string) {
  switch (state) {
    case "disabled":
      return { disabled: true }
    case "hover":
    case "focus":
      return { "data-preview": state }
    case "pressed":
      return { "data-preview": "hover active" }
    case "invalid":
      return { "aria-invalid": true }
    default:
      return {}
  }
}
