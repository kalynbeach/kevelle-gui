# Kevelle GUI

A Next.js 16 app that shows the Kevelle theme: foundations and every component in the theme reference, in light and dark modes. Components are shadcn/ui (base-nova) on Base UI, restyled from `gui/themes/kevelle-components.md`.

```sh
bun install
bun run dev
```

## Fonts

- **Paper Mono** (data role) is in `public/fonts/paper-mono/` with its SIL Open Font License 1.1 notice. Source: [paper-design/paper-mono](https://github.com/paper-design/paper-mono).
- **ABC Areal** (ui, brand, editorial roles) is not committed. Its license bars storing the files on public servers. Download it from [Dinamo](https://abcdinamo.com/free/areal) and place `ABCArealVariable.woff2` in `public/fonts/abc-areal/`. Without it, text falls back to the system sans-serif.

## Layout

| Path | Contents |
| --- | --- |
| `GUI.md`, `gui/` | Kevelle design guidance and theme reference |
| `app/styles/kevelle-tokens.css` | Theme values for both modes |
| `app/globals.css` | Tailwind mapping, Kevelle utilities, fonts, base styles |
| `components/ui/` | Themed components |
| `components/showcase/` | Showcase shell, page primitives, demos |

## Next steps

The build, typecheck, and lint pass. Rendered review covered only the Actions page in both modes and the Select popup, so these remain:

- Review every page in light and dark mode at desktop and 375px widths. Fix spacing, alignment, and overflow, especially in the state matrices.
- Open each overlay and check it: dialog, alert dialog, drawer (including swipe to dismiss), popover, preview card, tooltip, and each toast type.
- Check keyboard behavior: focus outlines, menu and select navigation, tabs, and the mobile navigation drawer.
- Confirm the checkmark and minus glyphs read clearly inside the 11px checkbox. If they don't, decide between a heavier Phosphor weight and a larger control size in the theme.
- Check reduced motion: transitions should be immediate and the progress sweep should run once.
- Decide whether to add shadcn components the theme does not cover yet (card, table, badge, alert), and which Kevelle foundations they should use.
- Run graphical-audit against `gui/themes/kevelle-components.md` and fix any drift it finds.

These choices are derived rather than taken from the reference, and are worth confirming:

- Control sizes resolve through the spacing scale, which matches Graphical's renderer.
- Switch geometry: a control-l track with a control-m thumb inset by xxs.
- The action bevel overlay renders at 50% opacity, as Graphical's renderer does.
- Icons are 1em, so they follow the text step of their control.
