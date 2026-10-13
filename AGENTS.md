# Kevelle GUI

For UI work, follow GUI.md and use graphical-ui, graphical-convert, or graphical-audit as appropriate. The skills live in `.agents/skills/`. DESIGN.md records how Kevelle implements Graphical with shadcn/ui: tokens, font roles, alloy surfaces, component conventions, and a map from Graphical's token names to Kevelle's. Where DESIGN.md or `app/globals.css` disagrees with the `gui/themes/` snapshot, they win.

- Theme values live in `app/globals.css` in shadcn format: `:root` and `.dark` values, mapped to utilities in `@theme inline`. Use semantic roles (`bg-background`, `text-muted-foreground`, `border-border`) and Tailwind's default scales. Never use the `--neutral-*` ramp or raw palette colors in components.
- Components in `components/ui/` are shadcn base-nova on Base UI, restyled for Kevelle. Add registry components with `bunx --bun shadcn@latest add`, then apply the Kevelle treatments listed in DESIGN.md.
- Run `bun run check` (TypeScript 7, oxlint with `@shadcn/lint` and anti-slop, oxfmt) and `bun run build` before handing off.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
