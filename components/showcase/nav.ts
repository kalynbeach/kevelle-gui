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
  { label: "Spacing", href: "/foundations/spacing" },
  { label: "Radius and elevation", href: "/foundations/shape" },
  { label: "Motion", href: "/foundations/motion" },
  { label: "Icons", href: "/foundations/icons" },
]

/* Every file in components/ui, grouped by task. */
export const componentGroups: NavGroup[] = [
  group("Actions", "actions", [
    "Button",
    "Button group",
    "Toggle",
    "Toggle group",
    "Toolbar",
    "Kbd",
  ]),
  group("Forms", "forms", [
    "Input",
    "Textarea",
    "Input group",
    "Field",
    "Form",
    "Autocomplete",
    "Combobox",
    "Number field",
    "Input OTP",
    "OTP field",
  ]),
  group("Selection", "selection", [
    "Select",
    "Native select",
    "Checkbox",
    "Checkbox group",
    "Radio group",
    "Switch",
    "Slider",
    "Calendar",
  ]),
  group("Navigation", "navigation", [
    "Sidebar",
    "Breadcrumb",
    "Pagination",
    "Tabs",
    "Navigation menu",
    "Menubar",
    "Dropdown menu",
    "Context menu",
    "Command",
  ]),
  group("Overlays", "overlays", [
    "Dialog",
    "Alert dialog",
    "Sheet",
    "Drawer",
    "Popover",
    "Hover card",
    "Tooltip",
    "Toast",
    "Sonner",
  ]),
  group("Data display", "data-display", [
    "Card",
    "Table",
    "Badge",
    "Avatar",
    "Item",
    "Chart",
    "Carousel",
    "Aspect ratio",
  ]),
  group("Feedback", "feedback", [
    "Alert",
    "Progress",
    "Meter",
    "Skeleton",
    "Spinner",
    "Empty",
  ]),
  group("Layout", "layout", [
    "Accordion",
    "Collapsible",
    "Separator",
    "Scroll area",
    "Resizable",
    "Direction",
  ]),
  group("Conversation", "conversation", [
    "Message",
    "Bubble",
    "Message scroller",
    "Attachment",
    "Marker",
    "Questionnaire",
  ]),
]
