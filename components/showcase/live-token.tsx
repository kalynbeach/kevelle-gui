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
