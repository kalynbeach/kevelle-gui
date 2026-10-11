/*
 * Class sets shared by Kevelle's anchored popups. The surface and menu part
 * assignments are identical across Menu, Context menu, and Menubar in
 * gui/themes/kevelle-components.md; radius and padding vary per component and
 * stay in each component file.
 */

/** Fade and scale from the anchor on the small motion curve. */
export const popupMotion =
  "origin-(--transform-origin) transition-[opacity,scale] data-ending-style:scale-(--motion-popup-scale) data-ending-style:opacity-0 data-starting-style:scale-(--motion-popup-scale) data-starting-style:opacity-0"

/** The popover part: neutral-1 (neutral-2 in dark), translucent edge, m shadow. */
export const popupSurface =
  "bg-neutral-1 font-ui text-s text-neutral-10 shadow-m ring ring-neutral-4-transparent outline-none dark:bg-neutral-2 dark:ring-inset"

export const menuPositioner = "z-50 outline-none"

export const menuPopup = `${popupSurface} ${popupMotion} flex max-h-(--available-height) min-w-[min(220px,var(--available-width))] flex-col gap-xxs overflow-y-auto overscroll-contain rounded-m p-xxs`

export const menuOption =
  "relative flex cursor-default items-center gap-xs rounded-xs px-xs py-xxs text-s text-neutral-10 outline-none select-none data-highlighted:bg-neutral-3 data-popup-open:bg-neutral-3 data-disabled:pointer-events-none data-disabled:text-neutral-6 data-[variant=danger]:text-error [&_svg]:pointer-events-none [&_svg]:size-[1em] [&_svg]:shrink-0"

/** Keeps check and radio indicators in a 1em column so labels align. */
export const menuIndicator =
  "flex size-[1em] shrink-0 items-center justify-center text-neutral-10 group-data-disabled/menu-option:text-neutral-6"

export const menuLabel = "px-xs pt-xs pb-xxs text-xs font-medium text-neutral-6"

export const menuShortcut = "ms-auto ps-s text-xs text-neutral-6"

/** Dividers are one-sided inset shadows at the border-s width. */
export const menuSeparator =
  "-mx-xxs my-xxs h-(--border-s) shrink-0 shadow-[inset_0_var(--border-s)_0_0_var(--neutral-4)]"
