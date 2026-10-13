# Kevelle design system

Kevelle is a sharp, high-contrast, technical interface language with machined "alloy" surfaces. Its references are the Interfaces and Visuals boards on the KKB Inspirations page of the KKB Paper file: machine reports, hardware labels, hairline grids, dithered meters, and oscilloscope traces.

Kevelle started as a [Graphical](https://www.graphicalui.com/) theme. Graphical's export supplies the general UI rules and agent workflows. This document records how Kevelle implements them with shadcn/ui and where it departs from them. Components live in `components/ui/` (base-nova on Base UI), and every theme value lives in `app/globals.css`.

## Graphical

Read `GUI.md` for UI work. Its skills live in `.agents/skills/`: `graphical-ui` builds UI, `graphical-convert` applies the theme to existing UI, and `graphical-audit` finds drift.

`gui/themes/kevelle.md` and `gui/themes/kevelle-components.md` are the Graphical snapshot committed in `7c1a3ed`, before the current revision. Graphical's theme contract gives the app's own definitions precedence over a snapshot, so `app/globals.css` and this document win wherever they disagree. The snapshot still lists the older values: a `#171719` dark canvas, ABC Areal as the brand font, 3 to 22px radii, and 0.55px edges.

Keep the Graphical files as downloaded. oxfmt skips `GUI.md`, `gui/`, and `.agents/`. To adopt a new download, replace those files, diff them, and port value changes into `app/globals.css` in shadcn form, keeping the departures below.

### Vocabulary

Graphical's guidance uses its own token names. Kevelle does the same jobs with shadcn roles and Tailwind scales.

| Graphical                                                                         | Kevelle                                                            |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `neutral-1` to `neutral-10`                                                       | `--neutral-*` in `app/globals.css`, read only through roles        |
| `--cte-canvas`, `--cte-surface`, `--cte-text`, `--cte-text-muted`, `--cte-accent` | `background`, `card`, `foreground`, `muted-foreground`, `primary`  |
| `success`, `warning`, `error`                                                     | `success`, `warning`, `destructive`                                |
| `color-1` to `color-10`                                                           | `chart-1` to `chart-5`, for data series only                       |
| `-transparent` colors                                                             | Opacity modifiers, such as `bg-primary/20`                         |
| `ui` and `editorial` fonts                                                        | `font-sans`                                                        |
| `brand` font                                                                      | `font-brand`, through `type-display`                               |
| `data` font                                                                       | `font-pixel` for values, `font-mono` for code and technical labels |
| Text steps `xxs` to `xxl`                                                         | Tailwind text sizes and the type roles under Typography            |
| `--space-*`                                                                       | Tailwind spacing                                                   |
| `--radius-*`                                                                      | `rounded-*`, derived from `--radius`                               |
| `--border-*`                                                                      | `border` hairlines in the `border` or `input` role                 |
| `--shadow-*`                                                                      | `shadow-sm`, `shadow-md`, `shadow-lg`                              |
| `--surface-raised-*`, `--surface-recessed-*`                                      | `alloy-raised`, `alloy-recessed`, `alloy-action`                   |
| `--motion-duration`, `--motion-easing`                                            | Tailwind's default transition (160ms) and `ease-out`               |
| Focus ring                                                                        | `ring-2 ring-ring/50`                                              |

shadcn's `accent` role is a hover fill. It is not Graphical's accent color.

### Departures

- **Edges.** GUI.md draws edges with box shadows and zero border width. Kevelle keeps shadcn's 1px `border` utilities so components stay close to the registry. The raised and recessed bevels still compose through `box-shadow`.
- **Token names.** Components use the names in the vocabulary table, not Graphical's `--space-*`, `--size-*`, and `--radius-*` variables.
- **Font roles.** Graphical has four roles. Kevelle adds Departure Mono (`font-pixel`) for data and small details, and keeps Paper Mono (`font-mono`) for code and technical labels.

### Lint and audit

`oxlint` checks part of `graphical-audit`'s drift rules on every run: `@shadcn/lint` rejects raw colors, arbitrary values, inline styles, and restyled components. Use `graphical-audit` for drift lint can't see, such as missing state or mode treatments, portal scope, and screen composition.

## Tokens

`app/globals.css` uses the shadcn layout: values in `:root` and `.dark`, mapped to Tailwind utilities in `@theme inline`. Tailwind's default spacing and text scales apply.

### Color

A ten-step neutral ramp, `--neutral-1` to `--neutral-10`, runs from canvas to ink with a slight cool tint in the middle steps.

| Mode  | neutral-1 | neutral-10 |
| ----- | --------- | ---------- |
| Dark  | `#030303` | `#fafafa`  |
| Light | `#ffffff` | `#030303`  |

Components never use the ramp directly. The shadcn roles pick steps from it: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `border`, `input`, `ring`, and the `sidebar-*` set. Kevelle adds `success`, `warning`, `destructive-foreground`, and `scrim` (the modal overlay).

`chart-1` to `chart-5` are signal colors for data series: phosphor, astral, amber, scarlet, and magenta. Do not use them for status or decoration.

### Radius

`--radius` is 2px. The scale derives whole pixels from it: `rounded-sm` 1px, `md` and `lg` 2px, `xl` 3px, `2xl` 4px. Checkboxes, switches, avatars, badges, progress tracks, slider thumbs, and carousel buttons are square. Radio buttons stay round.

### Edges and elevation

Edges are 1px hairlines in the `border` or `input` role. `shadow-xs` is empty because the system relies on hairlines. `shadow-sm`, `md`, and `lg` lift filled buttons, menus, and dialogs in light mode and fade out on the dark canvas.

### Alloy

| Utility          | Treatment                                  | Used by                                                    |
| ---------------- | ------------------------------------------ | ---------------------------------------------------------- |
| `alloy-action`   | Lit top edge and shaded base on an overlay | Default, secondary, and destructive buttons                |
| `alloy-raised`   | Raised gradient and bevel                  | Checkbox, radio, switch and slider thumbs, select triggers |
| `alloy-recessed` | Inset shade                                | Inputs, textareas, input groups, OTP slots, number fields  |
| `bg-dither`      | 1px checkerboard in `currentColor`         | Progress, meter, and slider tracks                         |

The raised and recessed bevels compose with ring and shadow utilities.

### Motion

Transitions default to 160ms on `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-out`). Every component uses the `--ease-out` curve. A few keep longer durations because they travel farther: toasts (500ms) slide 150% of their height and restack, the drawer (450ms) slides a full sheet, the message scroller button (400ms) fades out of the way, and the navigation menu (350ms) resizes between panels. Reduced motion makes every transition and animation immediate.

## Typography

| Utility      | Family         | Use                                                                   |
| ------------ | -------------- | --------------------------------------------------------------------- |
| `font-sans`  | ABC Areal      | Interface and editorial text: controls, body copy, titles             |
| `font-mono`  | Paper Mono     | Code, technical headings, group labels, table heads                   |
| `font-pixel` | Departure Mono | Data and small details: values, badges, keys, timestamps, chart ticks |
| `font-brand` | MEKZANTINE     | Page titles and the wordmark only                                     |

Type roles set family, size, line height, and tracking together. They are utilities rather than `--text-*` keys so `cn()` never mistakes them for colors.

| Utility         | Spec                                       | Use                                                                       |
| --------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| `type-display`  | MEKZANTINE, 36 to 48px                     | Each page's h1                                                            |
| `type-label`    | Paper Mono 11px, medium, uppercase, 0.06em | Menu, select, and sidebar group labels; table heads; calendar weekdays    |
| `type-pixel`    | Departure Mono 11/16                       | Badges, kbd, avatar initials, progress and meter values, message metadata |
| `type-pixel-2x` | Departure Mono 22/28                       | Large values, OTP digits                                                  |

Departure Mono is drawn on an 11px grid. Set it only at 11px or 22px.

## Components

Restyle components through their variants and tokens, not through `className` at call sites. `@shadcn/lint` enforces this: pages may pass layout classes only.

Kevelle changes to the registry components:

- Default, secondary, and destructive buttons are filled alloy actions. Destructive is a solid fill.
- Focus and invalid rings are 2px.
- Badge and Alert have `success` and `warning` variants.
- Overlays dim with `bg-scrim`.
- Indeterminate progress sweeps a third-width bar.
- The tinted bubble uses `accent` instead of fixed-lightness tints of `--primary`.
- `Field` is Base UI's `Field.Root`. Inside it, `FieldLabel`, `FieldDescription`, and `FieldError` use Base UI's parts, so Base UI controls get `htmlFor`, `aria-labelledby`, and `aria-describedby` automatically. Plain controls such as `Textarea` and `NativeSelect` still need `aria-describedby` by hand. Outside a `Field`, the parts render plain elements.

`autocomplete`, `checkbox-group`, `form`, `meter`, `number-field`, `otp-field`, and `toolbar` wrap Base UI parts the registry does not ship. They follow the same conventions.

Use Toast (Base UI) for notifications. Sonner is installed for parity with the registry.

Enabled buttons and `role="button"` elements get the pointer cursor from shadcn's `init --pointer` base rule in `app/globals.css`. Don't add `cursor-pointer` to individual components.

## Updating from the registry

The `components/ui/**` and `hooks/**` files stay close to upstream so `bunx --bun shadcn@latest add <name> --diff` remains readable. Linting there skips the generic code-style rules (anti-slop, some jsx-a11y and React rules) and the shadcn usage rules. The full rule set applies everywhere else.

Local deviations to keep when merging upstream changes:

- The Kevelle edits listed under Components.
- `"use client"` on accordion, attachment, badge, breadcrumb, bubble, button-group, item, marker, and navigation-menu, which the RSC pages need.
- Phosphor's `/ssr` entry in native-select, pagination, and spinner.
- Fixes for upstream bugs:
  - The checkbox shows a minus glyph and the checked fill when indeterminate.
  - Carousel arrow keys follow `orientation` and leave text fields, selects, and controls that handle arrow keys alone.
  - Tabs and ToggleGroup pass `orientation` to Base UI, so vertical lists use Up and Down.
  - A consumer `onClick` runs alongside the built-in handler on the carousel previous and next buttons, `SidebarRail`, and `InputGroupAddon`, and a consumer `onKeyDown` runs alongside carousel arrow-key navigation.
  - The combobox clear button, its icon-only trigger, and each chip's remove button ("Remove {value}") have labels.
  - A slider without an array value renders one thumb. Each thumb gets its `index`, and a name from `thumbLabels` or the slider's `aria-label`.
  - Calendar day buttons take focus during keyboard navigation, and the calendar formats months and `data-day` in `en-US` when no `locale` is given, so server and client agree.
  - `SidebarMenuSkeleton` derives its width from `useId` instead of `Math.random`, so server and client render the same width.
  - On mobile, `Sidebar` passes its DOM props and `className` to the sheet content instead of the non-rendering sheet root, and every `Sidebar` layout honors `dir`.
  - `ItemGroup` has no `role="list"`, since items render as plain elements, links, or buttons rather than list items.
  - `InputGroupAddon` focuses a textarea as well as an input.
  - `AspectRatio` keeps `--ratio`, `ToggleGroup` keeps `--gap`, and the Sonner `Toaster` keeps its theme variables when given a `style`.
  - A consumer `disabled` on the carousel previous and next buttons combines with the scroll boundary instead of replacing it.

## Showcase

`app/` renders every foundation and component in both modes. `components/showcase/` holds the shell, page primitives, and client demos. Its state matrices pin hover, focus, and pressed with `data-preview`, which the custom variants at the top of `app/globals.css` read.
