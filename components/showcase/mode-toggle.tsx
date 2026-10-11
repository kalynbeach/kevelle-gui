"use client"

import * as React from "react"
import { DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useTheme } from "next-themes"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const modes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: DesktopIcon },
] as const

const subscribe = () => () => {}

/* The stored theme is only known on the client, so render it after mount. */
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  return (
    <ToggleGroup
      aria-label="Color mode"
      size="icon"
      value={mounted && theme ? [theme] : []}
      onValueChange={(value) => {
        if (value[0]) setTheme(value[0])
      }}
    >
      {modes.map(({ value, label, icon: Icon }) => (
        <Tooltip key={value}>
          <TooltipTrigger
            render={<ToggleGroupItem value={value} aria-label={label} />}
          >
            <Icon />
          </TooltipTrigger>
          <TooltipContent side="bottom">{label}</TooltipContent>
        </Tooltip>
      ))}
    </ToggleGroup>
  )
}
