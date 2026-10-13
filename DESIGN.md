# Kevelle design system

Kevelle is a sharp, high-contrast, technical interface language with machined "alloy" surfaces and 1px dither. Its references are the Interfaces and Visuals boards on the KKB Inspirations page of the KKB Paper file: machine reports, hardware labels, hairline grids, dithered meters, halftone flames, and oscilloscope traces. Its signal colors come from the KKB Images page.

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
| `color-1` to `color-10`                                                           | Signal colors through `chart-1` to `chart-5`, for data series only |
| `-transparent` colors                                                             | Opacity modifiers, such as `bg-primary/20`                         |
| `ui` and `editorial` fonts                                                        | `font-sans`                                                        |
| `brand` font                                                                      | `font-brand`, through `type-display`                               |
| `data` font                                                                       | `font-pixel` for values, `font-mono` for code and technical labels |
| Text steps `xxs` to `xxl`                                                         | Tailwind text sizes and the type roles under Typography            |
| `--space-*`                                                                       | Tailwind spacing                                                   |
| `--radius-*`                                                                      | `rounded-none` on components; `rounded-*` from `--radius`          |
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

Every color is written in OKLCH. The color page reads each token back as OKLCH, with sRGB hex for convenience. `package.json` sets `browserslist` to Next's default targets with Firefox raised to 113, the first version with native OKLCH. With the default Firefox 111 target, Lightning CSS rewrites every `oklch()` to a hex fallback and `lab()`.

A ten-step neutral ramp, `--neutral-1` to `--neutral-10`, runs from canvas to ink with a slight cool tint in the middle steps.

| Mode  | neutral-1                     | neutral-10                    |
| ----- | ----------------------------- | ----------------------------- |
| Dark  | `oklch(0.097 0 0)`, `#030303` | `oklch(0.985 0 0)`, `#fafafa` |
| Light | `oklch(1 0 0)`, `#ffffff`     | `oklch(0.097 0 0)`, `#030303` |

Components never use the ramp directly. The shadcn roles pick steps from it: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `border`, `input`, `ring`, and the `sidebar-*` set. Kevelle adds `success`, `warning`, `destructive-foreground`, and `scrim` (the modal overlay).

Status and signal colors follow one rule. The hue comes from a family in the KKB Palette artboard of the KKB Paper file, the lightness is whatever the role needs for contrast, and the chroma is the most sRGB allows at that lightness and hue. Every value stays inside sRGB, so its hex needs no gamut mapping.

Status colors also color text in alerts, badges, and field errors. Each clears 4.5:1 on the canvas and on its badge tint, and its `-foreground` clears 4.5:1 on its fill. In light mode, warning is a deep amber, because no yellow reaches 4.5:1 on white and stays saturated.

| Token           | Family                          | Light                   | Dark                   |
| --------------- | ------------------------------- | ----------------------- | ---------------------- |
| `--destructive` | Scarlet                         | `oklch(0.54 0.22 28)`   | `oklch(0.67 0.217 27)` |
| `--success`     | Phosphor                        | `oklch(0.51 0.147 148)` | `oklch(0.8 0.231 148)` |
| `--warning`     | Amber, between flame and chrome | `oklch(0.535 0.121 64)` | `oklch(0.84 0.163 82)` |

Five signal colors come from the KKB Images boards. Each has a deeper light-mode value and a brighter dark-mode value.

| Token        | Source                        | Light                   | Dark                    |
| ------------ | ----------------------------- | ----------------------- | ----------------------- |
| `--phosphor` | Oscilloscope traces           | `oklch(0.62 0.195 145)` | `oklch(0.86 0.262 146)` |
| `--astral`   | Starry astral blue            | `oklch(0.5 0.28 264.3)` | `oklch(0.64 0.192 262)` |
| `--flame`    | Flame orange                  | `oklch(0.64 0.182 45)`  | `oklch(0.72 0.19 50)`   |
| `--magenta`  | The purple edge of the flames | `oklch(0.58 0.271 325)` | `oklch(0.69 0.304 325)` |
| `--chrome`   | The yellow core of the flames | `oklch(0.665 0.137 80)` | `oklch(0.89 0.182 96)`  |

Charts read them through `chart-1` to `chart-5`. Astral leads in light mode and phosphor in dark mode, so `chart-1` and `chart-2` swap between modes; flame, magenta, and chrome stay `chart-3` to `chart-5`. Every value clears 3:1 against its canvas, and every pair in a mode is at least 20 apart in CIEDE2000. Use them for data series, not for status or decoration.

### Radius

Components are square: every part in `components/ui/` uses `rounded-none`. Radio buttons, scroll area thumbs, and the drawer handle keep `rounded-full`.

The `rounded-*` ramp is there for elements that opt into rounding. `--radius` is 8px, and each step is a whole-pixel multiple of it: `rounded-xs` 2px, `sm` 4px, `md` 6px, `lg` 8px, `xl` 12px, `2xl` 16px, `3xl` 24px, `4xl` 32px.

### Edges and elevation

Edges are 1px hairlines in the `border` or `input` role. `shadow-xs` is empty because the system relies on hairlines. `shadow-sm`, `md`, and `lg` lift filled buttons, menus, and dialogs in light mode and fade out on the dark canvas.

### Alloy

| Utility          | Treatment                                  | Used by                                                    |
| ---------------- | ------------------------------------------ | ---------------------------------------------------------- |
| `alloy-action`   | Lit top edge and shaded base on an overlay | Default, secondary, and destructive buttons                |
| `alloy-raised`   | Raised gradient and bevel                  | Checkbox, radio, switch and slider thumbs, select triggers |
| `alloy-recessed` | Inset shade                                | Inputs, textareas, input groups, OTP slots, number fields  |

The raised and recessed bevels compose with ring and shadow utilities.

### Dither

Kevelle shades with 1px ordered dither, like the meters on a machine report. The utilities draw in `currentColor`, so a `text-*` class sets the dither color. Each density lights every pixel of the density below it, so adjacent steps line up.

| Utility     | Pixels lit | Used by                                                     |
| ----------- | ---------- | ----------------------------------------------------------- |
| `dither-12` | 1 in 8     | Ramps and faint grain                                       |
| `dither-25` | 1 in 4     | Chart area fills                                            |
| `dither-50` | 1 in 2     | Progress, meter, and slider tracks; skeletons; modal scrims |
| `dither-75` | 3 in 4     | Ramps                                                       |

They set `background-image`, so they combine with `bg-*` fills but not with alloy surfaces. They are not named `bg-*` because `cn()` would merge them away as background colors. For a gradient, step through the densities rather than fading opacity.

`DitherPattern` in `components/ui/dither.tsx` is the SVG counterpart, for chart areas and other SVG graphics. It takes the same densities, matches the utilities pixel for pixel, and fills with any color, such as a chart's `var(--color-*)`.

### Motion

Every transition uses the `--ease-out` curve, `cubic-bezier(0.16, 1, 0.3, 1)`. A transition with no duration of its own takes 160ms. Components set their own durations by how far they move: popovers and menus 100ms, sheets and the sidebar 200ms, the navigation menu 300 to 350ms, the message scroller button 400ms, the drawer 450ms, and toasts 500ms. Reduced motion makes every transition and animation immediate.

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
- Every part uses `rounded-none` in place of the registry's radius steps. `rounded-full` stays on radio buttons, scroll area thumbs, and the drawer handle.
- Overlays dim with `bg-scrim` under a `dither-50` layer of the same color, which averages about 20% in light mode and 70% in dark mode.
- Skeletons are a `dither-50` pattern in `muted-foreground` instead of a muted fill.
- Indeterminate progress sweeps a third-width bar.
- The tinted bubble uses `accent` instead of fixed-lightness tints of `--primary`.
- `Field` is Base UI's `Field.Root`. Inside it, `FieldLabel`, `FieldDescription`, and `FieldError` use Base UI's parts, so Base UI controls get `htmlFor`, `aria-labelledby`, and `aria-describedby` automatically. Plain controls such as `Textarea` and `NativeSelect` still need `aria-describedby` by hand. Outside a `Field`, the parts render plain elements.

`autocomplete`, `checkbox-group`, `form`, `meter`, `number-field`, `otp-field`, and `toolbar` wrap Base UI parts the registry does not ship. They follow the same conventions. `dither` is Kevelle's own: it holds `DitherPattern`.

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
  - `CommandDialog` renders its visually hidden title and description inside `DialogContent`, so they mount with the popup instead of staying on the page while it is closed.

## Showcase

`app/` renders every foundation and component in both modes. `components/showcase/` holds the shell, page primitives, and client demos. Its state matrices pin hover, focus, and pressed with `data-preview`, which the custom variants at the top of `app/globals.css` read.
