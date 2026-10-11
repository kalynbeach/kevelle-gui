import * as React from "react"

/*
 * Renders a variant × state grid. States are pinned with data-preview (see
 * app/globals.css) so hover, focus, and pressed render without interaction.
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
  return (
    <div className="w-full overflow-x-auto rounded-m bg-neutral-2 p-l">
      <table className="border-separate border-spacing-x-l border-spacing-y-s">
        <thead>
          <tr>
            <td />
            {states.map((state) => (
              <th
                key={state}
                scope="col"
                className="text-start font-data text-xs font-regular text-neutral-6"
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
                className="pe-s text-start font-data text-xs font-regular whitespace-nowrap text-neutral-6"
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
