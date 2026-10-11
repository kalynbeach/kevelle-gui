<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Kevelle GUI

For UI work, follow GUI.md and use graphical-ui, graphical-convert, or graphical-audit as appropriate. The skills live in `.agents/skills/`.

- Theme values live in `app/styles/kevelle-tokens.css`; `app/globals.css` maps them to Tailwind utilities (`p-m`, `text-s`, `rounded-s`, `bg-neutral-3`, `shadow-m`). Default Tailwind scales are cleared, so numeric steps like `p-4` do not exist.
- `lib/utils.ts` configures `cn` for those scales. Update it with the `@theme` block.
- Components in `components/ui/` are shadcn base-nova files rewritten against `gui/themes/kevelle-components.md`. Edges are `ring` at the `border-s` width; `ring-inset` and `ring-outset` follow each part's authored placement per mode.
