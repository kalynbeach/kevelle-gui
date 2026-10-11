export type NavItem = { label: string; href: string }
export type NavGroup = { label: string; href: string; items: NavItem[] }

export function slugify(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-")
}

function group(label: string, path: string, items: string[]): NavGroup {
  const href = `/components/${path}`
  return {
    label,
    href,
    items: items.map((item) => ({
      label: item,
      href: `${href}#${slugify(item)}`,
    })),
  }
}

export const foundations: NavItem[] = [
  { label: "Color", href: "/foundations/color" },
  { label: "Typography", href: "/foundations/typography" },
  { label: "Spacing and sizing", href: "/foundations/spacing" },
  { label: "Radius and elevation", href: "/foundations/shape" },
  { label: "Motion", href: "/foundations/motion" },
  { label: "Icons", href: "/foundations/icons" },
]

/* Every component in gui/themes/kevelle-components.md, grouped by task. */
export const componentGroups: NavGroup[] = [
  group("Actions", "actions", ["Button", "Toggle", "Toggle group", "Toolbar"]),
  group("Text input", "text-input", [
    "Text field",
    "Field",
    "Fieldset",
    "Form",
    "Autocomplete",
    "Combobox",
    "Number field",
    "OTP field",
  ]),
  group("Selection", "selection", [
    "Select",
    "Checkbox",
    "Checkbox group",
    "Radio",
    "Radio group",
    "Switch",
    "Slider",
  ]),
  group("Menus and navigation", "navigation", [
    "Menu",
    "Context menu",
    "Menubar",
    "Navigation menu",
    "Tabs",
  ]),
  group("Overlays", "overlays", [
    "Dialog",
    "Alert dialog",
    "Drawer",
    "Popover",
    "Preview card",
    "Tooltip",
    "Toast",
  ]),
  group("Disclosure and layout", "disclosure", [
    "Accordion",
    "Collapsible",
    "Scroll area",
    "Separator",
  ]),
  group("Status", "status", ["Progress", "Meter", "Avatar"]),
]
