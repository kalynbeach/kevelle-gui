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

The build, typecheck, and lint pass. Every page has been reviewed in light and dark mode at 1280px and 375px. Overlays, keyboard navigation, and reduced motion have been checked in the browser. These remain:

- Decide on the checkbox glyphs. The check and minus are 9.3px with a 0.58px stroke inside the 11px control. They are clear on a 2x display and thin at 1x. The options are a heavier Phosphor weight or a larger control size in the theme.
- Decide whether to add shadcn components the theme does not cover yet (card, table, badge, alert), and which Kevelle foundations they should use.
- Run graphical-audit against `gui/themes/kevelle-components.md` and fix any drift it finds.
- Test drawer swipe-to-dismiss on a touch device. With a mouse, a swipe starts only from the popup padding, because Base UI ignores mouse drags inside `Drawer.Content`.

Two theme assignments are worth revisiting. They come from the reference, not the showcase:

- The disabled slider thumb uses a neutral-2 fill, so it nearly disappears on neutral-2 surfaces.
- Toggle hover and pressed share the neutral-3 fill, so a hovered toggle looks pressed.

These choices are derived rather than taken from the reference, and are worth confirming:

- Control sizes resolve through the spacing scale, which matches Graphical's renderer.
- Switch geometry: a control-l track with a control-m thumb inset by xxs.
- The action bevel overlay renders at 50% opacity, as Graphical's renderer does.
- Icons are 1em, so they follow the text step of their control.
