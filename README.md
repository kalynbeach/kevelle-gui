# Kevelle GUI

A Next.js 16 app that shows the Kevelle design system: foundations and every shadcn/ui component, in light and dark modes. See [DESIGN.md](DESIGN.md).

```sh
bun install
bun run dev
```

## Checks

```sh
bun run check   # tsc (TypeScript 7), oxlint, oxfmt --check
bun run build
```

- `oxlint` runs the Oxc rules, [`@shadcn/lint`](https://github.com/shadcn-ui/lint), and [anti-slop](https://github.com/dmmulroy/anti-slop), vendored in `tools/oxlint/anti-slop/` (see its `UPSTREAM.md`). Config: `.oxlintrc.json`.
- `oxfmt` formats code and sorts Tailwind classes. Config: `.oxfmtrc.json`.

## Fonts

- **ABC Areal** is not committed. Its license bars storing the files on public servers. Download it from [Dinamo](https://abcdinamo.com/free/areal) and place `ABCArealVariable.woff2` in `public/fonts/abc-areal/`. Without it, text falls back to the system sans-serif.
- **MEKZANTINE** (© 2026 Michael Alexander, [mek.gallery](https://www.mek.gallery)) is not committed. It ships without a license. Place `MEKZANTINE-Regular.woff2` in `public/fonts/mekzantine/`. Without it, page titles fall back to ABC Areal.
- **Departure Mono** is in `public/fonts/departure-mono/` with its SIL Open Font License 1.1 notice. Source: [departuremono.com](https://departuremono.com).
- **Paper Mono** is in `public/fonts/paper-mono/` with its SIL Open Font License 1.1 notice. Source: [paper-design/paper-mono](https://github.com/paper-design/paper-mono).

## Layout

| Path                      | Contents                                                                      |
| ------------------------- | ----------------------------------------------------------------------------- |
| `DESIGN.md`               | The design system                                                             |
| `GUI.md`, `gui/`          | [Graphical](https://www.graphicalui.com/) guidance and Kevelle theme snapshot |
| `.agents/skills/`         | Graphical agent skills                                                        |
| `app/globals.css`         | Theme tokens for both modes, utilities, fonts                                 |
| `components/ui/`          | Kevelle-styled shadcn/ui components                                           |
| `components/showcase/`    | Showcase shell, page primitives, demos                                        |
| `tools/oxlint/anti-slop/` | Vendored anti-slop Oxlint plugin                                              |
