"use client"

import * as React from "react"

function subscribeToMode(onChange: () => void) {
  const observer = new MutationObserver(onChange)

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "style"],
  })

  return () => observer.disconnect()
}

/*
 * Reads custom properties from the root in the current mode, so the showcase
 * prints live theme values instead of copies of them.
 */
export function useTokenValues(names: readonly string[]) {
  const key = names.join("|")

  const snapshot = React.useSyncExternalStore(
    subscribeToMode,
    () => {
      const style = getComputedStyle(document.documentElement)

      return key
        .split("|")
        .map((name) => style.getPropertyValue(name).trim())
        .join("|")
    },
    () => ""
  )

  return snapshot ? snapshot.split("|") : names.map(() => "")
}

let probe: HTMLElement | null = null

/*
 * Reads what utilities compute to in the current mode, for tokens whose
 * custom property is an unresolved calc() or is not emitted at all.
 */
export function useUtilityValues(
  utilities: readonly { className: string; property: string }[]
) {
  const key = utilities
    .map(({ className, property }) => `${className}~${property}`)
    .join("|")

  const snapshot = React.useSyncExternalStore(
    subscribeToMode,
    () => {
      if (!probe) {
        probe = document.createElement("div")
        probe.hidden = true
        document.body.append(probe)
      }

      const element = probe

      return key
        .split("|")
        .map((entry) => {
          const [className, property] = entry.split("~")

          element.className = className

          return getComputedStyle(element).getPropertyValue(property)
        })
        .join("|")
    },
    () => ""
  )

  return snapshot ? snapshot.split("|") : utilities.map(() => "")
}
