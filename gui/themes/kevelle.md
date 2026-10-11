# Kevelle

Generated from the current project, including edits awaiting autosave. Return to the [theme index](../themes.md). Install the selected fonts and icons using the setup below; assets are acquired separately from their official sources.

## Font and icon setup

Follow [asset installation](../assets.md) when implementing this theme. Download and configure the selected free assets from their official sources; no font files or icon artwork are bundled. Weights below are the authored requests: load matching static faces or a variable range and report any unavailable weight. Register the exact family aliases below, or map the role tokens to the loader’s actual family.

| Selected font | Roles | Weights | Family stack | Setup |
| --- | --- | --- | --- | --- |
| <code>ABC Areal</code> (free) | brand, ui, editorial | 400, 500, 600 | <code>"ABC Areal", sans-serif</code> | Download and load [ABC Areal](https://abcdinamo.com/free/areal) in the app. The official free download is emailed after the vendor form and its terms. If user participation is required, finish other assets and give this link and the remaining form step; do not substitute another font. |
| <code>Paper Mono</code> (unknown) | data | 400, 500, 600 | <code>"Paper Mono", monospace</code> | Verify the official source and web-use license before acquisition; report unresolved availability without guessing or silently substituting. |

### Icons

Selected: [Phosphor](https://github.com/phosphor-icons/react), outlined. Install and wire the selected free pack (React: <code>@phosphor-icons/react</code>); reuse it if already installed. Use the official adapter for other frameworks.

Preserve icon size, color, weight, style, and accessible names. Match the selected style only where the pack supports it; Lucide’s official pack supplies outlines, so report a filled-style gap rather than claiming exact filled artwork. Keep existing package versions and add only missing packages using the receiving project’s package manager.

## Foundations

```json
{
  "name": "Kevelle",
  "text": {
    "l": {
      "size": 20,
      "lineHeight": 27
    },
    "m": {
      "size": 14,
      "lineHeight": 21
    },
    "s": {
      "size": 12,
      "lineHeight": 18
    },
    "xl": {
      "size": 30,
      "lineHeight": 33
    },
    "xs": {
      "size": 11,
      "lineHeight": 14
    },
    "xxl": {
      "size": 39,
      "lineHeight": 42
    },
    "xxs": {
      "size": 9,
      "lineHeight": 13
    }
  },
  "fonts": {
    "ui": {
      "family": "\"ABC Areal\", sans-serif",
      "weights": {
        "heavy": 600,
        "medium": 500,
        "regular": 400
      }
    },
    "data": {
      "family": "\"Paper Mono\", monospace",
      "weights": {
        "heavy": 600,
        "medium": 500,
        "regular": 400
      }
    },
    "brand": {
      "family": "\"ABC Areal\", sans-serif",
      "weights": {
        "heavy": 600,
        "medium": 500,
        "regular": 400
      }
    },
    "editorial": {
      "family": "\"ABC Areal\", sans-serif",
      "weights": {
        "heavy": 600,
        "medium": 500,
        "regular": 400
      }
    }
  },
  "border": {
    "l": 1.1,
    "m": 0.53,
    "s": 0.5516438802083333,
    "none": 0
  },
  "radius": {
    "l": 14,
    "m": 9,
    "s": 6,
    "xl": 22,
    "xs": 3,
    "full": 9999,
    "zero": 0
  },
  "shadows": {
    "l": {
      "x": 0,
      "y": 12,
      "blur": 36,
      "color": {
        "light": "neutral-10",
        "dark": "neutral-1"
      },
      "spread": 0,
      "opacity": 14
    },
    "m": {
      "x": 0,
      "y": 4,
      "blur": 16,
      "color": {
        "light": "neutral-10",
        "dark": "neutral-1"
      },
      "spread": 0,
      "opacity": 10
    },
    "s": {
      "x": 0,
      "y": 1,
      "blur": 3,
      "color": {
        "light": "neutral-10",
        "dark": "neutral-1"
      },
      "spread": 0,
      "opacity": 12
    }
  },
  "spacing": {
    "l": 17,
    "m": 11,
    "s": 8,
    "xl": 22,
    "xs": 6,
    "xxl": 34,
    "xxs": 3,
    "zero": 0
  },
  "animation": {
    "type": "easing",
    "large": {
      "type": "easing",
      "bounce": 0.3,
      "easing": [
        0.16,
        1,
        0.3,
        1
      ],
      "duration": 280,
      "visualDuration": 0.36
    },
    "bounce": 0.2,
    "easing": [
      0.16,
      1,
      0.3,
      1
    ],
    "duration": 160,
    "popupScale": 0.98,
    "pressDistance": 1,
    "visualDuration": 0.2
  },
  "focusRing": {
    "color": "color-1",
    "width": "l",
    "opacity": 55
  },
  "iconStyle": "outlined",
  "iconFamily": "Phosphor",
  "neutralTone": "neutral",
  "buttonRadius": "s",
  "colorEmphasis": 10.328776041666666,
  "letterSpacing": {
    "l": 0.01,
    "m": 0,
    "s": -0.01,
    "xl": 0.02,
    "xs": -0.02
  },
  "surfaceDetails": {
    "dark": {
      "shade": 24,
      "highlight": 24,
      "gradientTop": 10,
      "recessedShade": 20,
      "gradientBottom": 12
    },
    "light": {
      "shade": 16,
      "highlight": 70,
      "gradientTop": 12,
      "recessedShade": 8,
      "gradientBottom": 5
    },
    "edgeColor": "neutral-6-transparent"
  },
  "primaryForeground": {
    "dark": "neutral-2",
    "light": "neutral-2"
  },
  "primaryActionColor": "neutral-10",
  "colorTranslucency": {
    "dark": {
      "color-6": 0,
      "color-5": 0
    },
    "light": {}
  }
}
```

## light CSS variables

Define these in the app’s existing theme scope for this mode. Keep component styles linked to the variables.

| Variable | Value |
| --- | --- |
| `--theme-name` | Kevelle |
| `--theme-icon-family` | Phosphor |
| `--theme-icon-style` | outlined |
| `--toolbar-divider-bleed` | 0 |
| `--focus-ring-outline` | 1.1px solid color-mix(in srgb, #28282c 55%, transparent) |
| `--icon-stroke-width` | 2 |
| `--icon-light-display` | none |
| `--icon-regular-display` | inline |
| `--icon-bold-display` | none |
| `--motion-duration` | 160ms |
| `--motion-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-type` | easing |
| `--motion-visual-duration` | 0.16 |
| `--motion-bounce` | 0.2 |
| `--motion-enabled` | 1 |
| `--motion-small-iterations` | infinite |
| `--motion-large-duration` | 280ms |
| `--motion-large-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-large-type` | easing |
| `--motion-large-visual-duration` | 0.28 |
| `--motion-large-bounce` | 0.3 |
| `--motion-large-iterations` | infinite |
| `--motion-popup-scale` | 0.98 |
| `--motion-press-distance` | 1px |
| `--option-badge-background` | #f2f2f3 |
| `--option-badge-foreground` | #202124 |
| `--navigation-active-foreground` | #202124 |
| `--emphasis-chart-fill` | #28282c33 |
| `--emphasis-balance-background` | #f2f2f3 |
| `--emphasis-rewards-background` | #f2f2f3 |
| `--emphasis-icon-background` | #f2f2f3 |
| `--emphasis-icon-foreground` | #202124 |
| `--emphasis-type-background` | #f2f2f3 |
| `--emphasis-type-foreground` | #202124 |
| `--navigation-active-background` | #f2f2f3 |
| `--surface-raised-image` | linear-gradient(180deg, #ffffff1f 0%, #ffffff00 48%, #2021240d 100%) |
| `--surface-raised-shadow` | inset 0px 1px 0px 0px #ffffffb3, inset 0px -1px 0px 0px #20212429 |
| `--surface-recessed-image` | linear-gradient(180deg, #2021240d 0%, #20212400 55%) |
| `--surface-recessed-shadow` | inset 0px 1px 2px 0px #20212414, inset 0px -1px 0px 0px #ffffff59 |
| `--space-zero` | 0px |
| `--space-xxs` | 3px |
| `--space-xs` | 6px |
| `--space-s` | 8px |
| `--space-m` | 11px |
| `--space-l` | 17px |
| `--space-xl` | 22px |
| `--space-xxl` | 34px |
| `--tracking-xs` | -0.02em |
| `--tracking-s` | -0.01em |
| `--tracking-m` | 0em |
| `--tracking-l` | 0.01em |
| `--tracking-xl` | 0.02em |
| `--size-xxs` | 9px |
| `--line-xxs` | 13px |
| `--letter-spacing-xxs` | 0.02em |
| `--size-xs` | 11px |
| `--line-xs` | 14px |
| `--letter-spacing-xs` | 0.01em |
| `--size-s` | 12px |
| `--line-s` | 18px |
| `--letter-spacing-s` | 0.01em |
| `--size-m` | 14px |
| `--line-m` | 21px |
| `--letter-spacing-m` | 0em |
| `--size-l` | 20px |
| `--line-l` | 27px |
| `--letter-spacing-l` | -0.01em |
| `--size-xl` | 30px |
| `--line-xl` | 33px |
| `--letter-spacing-xl` | -0.01em |
| `--size-xxl` | 39px |
| `--line-xxl` | 42px |
| `--letter-spacing-xxl` | -0.02em |
| `--radius-zero` | 0px |
| `--radius-xs` | 3px |
| `--radius-s` | 6px |
| `--radius-m` | 9px |
| `--radius-l` | 14px |
| `--radius-xl` | 22px |
| `--radius-full` | 9999px |
| `--border-none` | 0px |
| `--border-s` | 0.5516438802083333px |
| `--border-m` | 0.53px |
| `--border-l` | 1.1px |
| `--border-default-color` | #94949c33 |
| `--border-shadow-none` | 0 0 0 0 transparent |
| `--border-shadow-s` | 0 0 0 0.5516438802083333px #94949c33 |
| `--border-shadow-m` | 0 0 0 0.53px #94949c33 |
| `--border-shadow-l` | 0 0 0 1.1px #94949c33 |
| `--font-ui` | "ABC Areal", sans-serif |
| `--weight-ui-regular` | 400 |
| `--weight-ui-medium` | 500 |
| `--weight-ui-heavy` | 600 |
| `--font-brand` | "ABC Areal", sans-serif |
| `--weight-brand-regular` | 400 |
| `--weight-brand-medium` | 500 |
| `--weight-brand-heavy` | 600 |
| `--font-editorial` | "ABC Areal", sans-serif |
| `--weight-editorial-regular` | 400 |
| `--weight-editorial-medium` | 500 |
| `--weight-editorial-heavy` | 600 |
| `--font-data` | "Paper Mono", monospace |
| `--weight-data-regular` | 400 |
| `--weight-data-medium` | 500 |
| `--weight-data-heavy` | 600 |
| `--color-none` | transparent |
| `--color-1` | #28282c |
| `--color-1-transparent` | #28282c33 |
| `--color-2` | #74747a |
| `--color-2-transparent` | #74747a33 |
| `--color-3` | #bababf |
| `--color-3-transparent` | #bababf33 |
| `--color-4` | #e8e8eb |
| `--color-4-transparent` | #e8e8eb33 |
| `--color-5` | #808080 |
| `--color-5-transparent` | #80808033 |
| `--color-6` | #808080 |
| `--color-6-transparent` | #80808033 |
| `--neutral-1` | #ffffff |
| `--neutral-1-transparent` | #ffffff33 |
| `--neutral-2` | #fafafa |
| `--neutral-2-transparent` | #fafafa33 |
| `--neutral-3` | #f2f2f3 |
| `--neutral-3-transparent` | #f2f2f333 |
| `--neutral-4` | #e4e4e7 |
| `--neutral-4-transparent` | #e4e4e733 |
| `--neutral-5` | #c5c5ca |
| `--neutral-5-transparent` | #c5c5ca33 |
| `--neutral-6` | #94949c |
| `--neutral-6-transparent` | #94949c33 |
| `--neutral-7` | #6e6e76 |
| `--neutral-7-transparent` | #6e6e7633 |
| `--neutral-8` | #505057 |
| `--neutral-8-transparent` | #50505733 |
| `--neutral-9` | #343438 |
| `--neutral-9-transparent` | #34343833 |
| `--neutral-10` | #202124 |
| `--neutral-10-transparent` | #20212433 |
| `--success` | #247348 |
| `--success-transparent` | #24734833 |
| `--warning` | #94651e |
| `--warning-transparent` | #94651e33 |
| `--error` | #bd3d42 |
| `--error-transparent` | #bd3d4233 |
| `--shadow-none` | none |
| `--shadow-s` | 0px 0.25px 0.75px 0px #2021240d, 0px 1px 3px 0px #20212413 |
| `--shadow-m` | 0px 1px 4px 0px #2021240b, 0px 4px 16px 0px #20212410 |
| `--shadow-l` | 0px 3px 9px 0px #2021240f, 0px 12px 36px 0px #20212416 |
| `--cte-canvas` | #ffffff |
| `--cte-surface` | #fafafa |
| `--cte-surface-muted` | #f2f2f3 |
| `--cte-text` | #202124 |
| `--cte-text-muted` | #6e6e76 |
| `--cte-border` | #94949c33 |
| `--cte-accent` | #28282c |
| `--cte-accent-text` | #fafafa |
| `--cte-danger` | #bd3d42 |
| `--cte-focus` | #28282c |
| `--cte-font` | "ABC Areal", sans-serif |
| `--cte-font-size` | 12px |
| `--cte-font-weight` | 400 |
| `--cte-line-height` | 18px |
| `--cte-letter-spacing` | 0.01em |
| `--cte-detail-font-size` | 11px |
| `--cte-detail-line-height` | 14px |
| `--cte-detail-letter-spacing` | 0.01em |

## dark CSS variables

Define these in the app’s existing theme scope for this mode. Keep component styles linked to the variables.

| Variable | Value |
| --- | --- |
| `--theme-name` | Kevelle |
| `--theme-icon-family` | Phosphor |
| `--theme-icon-style` | outlined |
| `--toolbar-divider-bleed` | 0 |
| `--focus-ring-outline` | 1.1px solid color-mix(in srgb, #e8e8eb 55%, transparent) |
| `--icon-stroke-width` | 2 |
| `--icon-light-display` | none |
| `--icon-regular-display` | inline |
| `--icon-bold-display` | none |
| `--motion-duration` | 160ms |
| `--motion-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-type` | easing |
| `--motion-visual-duration` | 0.16 |
| `--motion-bounce` | 0.2 |
| `--motion-enabled` | 1 |
| `--motion-small-iterations` | infinite |
| `--motion-large-duration` | 280ms |
| `--motion-large-easing` | cubic-bezier(0.16, 1, 0.3, 1) |
| `--motion-large-type` | easing |
| `--motion-large-visual-duration` | 0.28 |
| `--motion-large-bounce` | 0.3 |
| `--motion-large-iterations` | infinite |
| `--motion-popup-scale` | 0.98 |
| `--motion-press-distance` | 1px |
| `--option-badge-background` | #2a2a2e |
| `--option-badge-foreground` | #fafafa |
| `--navigation-active-foreground` | #fafafa |
| `--emphasis-chart-fill` | #e8e8eb33 |
| `--emphasis-balance-background` | #2a2a2e |
| `--emphasis-rewards-background` | #2a2a2e |
| `--emphasis-icon-background` | #2a2a2e |
| `--emphasis-icon-foreground` | #fafafa |
| `--emphasis-type-background` | #2a2a2e |
| `--emphasis-type-foreground` | #fafafa |
| `--navigation-active-background` | #2a2a2e |
| `--surface-raised-image` | linear-gradient(180deg, #fafafa1a 0%, #fafafa00 48%, #1717191f 100%) |
| `--surface-raised-shadow` | inset 0px 1px 0px 0px #fafafa3d, inset 0px -1px 0px 0px #1717193d |
| `--surface-recessed-image` | linear-gradient(180deg, #1717191f 0%, #17171900 55%) |
| `--surface-recessed-shadow` | inset 0px 1px 2px 0px #17171933, inset 0px -1px 0px 0px #fafafa1f |
| `--space-zero` | 0px |
| `--space-xxs` | 3px |
| `--space-xs` | 6px |
| `--space-s` | 8px |
| `--space-m` | 11px |
| `--space-l` | 17px |
| `--space-xl` | 22px |
| `--space-xxl` | 34px |
| `--tracking-xs` | -0.02em |
| `--tracking-s` | -0.01em |
| `--tracking-m` | 0em |
| `--tracking-l` | 0.01em |
| `--tracking-xl` | 0.02em |
| `--size-xxs` | 9px |
| `--line-xxs` | 13px |
| `--letter-spacing-xxs` | 0.02em |
| `--size-xs` | 11px |
| `--line-xs` | 14px |
| `--letter-spacing-xs` | 0.01em |
| `--size-s` | 12px |
| `--line-s` | 18px |
| `--letter-spacing-s` | 0.01em |
| `--size-m` | 14px |
| `--line-m` | 21px |
| `--letter-spacing-m` | 0em |
| `--size-l` | 20px |
| `--line-l` | 27px |
| `--letter-spacing-l` | -0.01em |
| `--size-xl` | 30px |
| `--line-xl` | 33px |
| `--letter-spacing-xl` | -0.01em |
| `--size-xxl` | 39px |
| `--line-xxl` | 42px |
| `--letter-spacing-xxl` | -0.02em |
| `--radius-zero` | 0px |
| `--radius-xs` | 3px |
| `--radius-s` | 6px |
| `--radius-m` | 9px |
| `--radius-l` | 14px |
| `--radius-xl` | 22px |
| `--radius-full` | 9999px |
| `--border-none` | 0px |
| `--border-s` | 0.5516438802083333px |
| `--border-m` | 0.53px |
| `--border-l` | 1.1px |
| `--border-default-color` | #80808a33 |
| `--border-shadow-none` | 0 0 0 0 transparent |
| `--border-shadow-s` | inset 0 0 0 0.5516438802083333px #80808a33 |
| `--border-shadow-m` | inset 0 0 0 0.53px #80808a33 |
| `--border-shadow-l` | inset 0 0 0 1.1px #80808a33 |
| `--font-ui` | "ABC Areal", sans-serif |
| `--weight-ui-regular` | 400 |
| `--weight-ui-medium` | 500 |
| `--weight-ui-heavy` | 600 |
| `--font-brand` | "ABC Areal", sans-serif |
| `--weight-brand-regular` | 400 |
| `--weight-brand-medium` | 500 |
| `--weight-brand-heavy` | 600 |
| `--font-editorial` | "ABC Areal", sans-serif |
| `--weight-editorial-regular` | 400 |
| `--weight-editorial-medium` | 500 |
| `--weight-editorial-heavy` | 600 |
| `--font-data` | "Paper Mono", monospace |
| `--weight-data-regular` | 400 |
| `--weight-data-medium` | 500 |
| `--weight-data-heavy` | 600 |
| `--color-none` | transparent |
| `--color-1` | #e8e8eb |
| `--color-1-transparent` | #e8e8eb33 |
| `--color-2` | #bababf |
| `--color-2-transparent` | #bababf33 |
| `--color-3` | #74747a |
| `--color-3-transparent` | #74747a33 |
| `--color-4` | #3b3b40 |
| `--color-4-transparent` | #3b3b4033 |
| `--color-5` | oklch(0.8032 0.2335 146.9) |
| `--color-5-transparent` | oklch(0.8032 0.2335 146.9 / 0) |
| `--color-6` | oklch(0.5452 0.2357 263.7) |
| `--color-6-transparent` | oklch(0.5452 0.2357 263.7 / 0) |
| `--neutral-1` | #171719 |
| `--neutral-1-transparent` | #17171933 |
| `--neutral-2` | #202023 |
| `--neutral-2-transparent` | #20202333 |
| `--neutral-3` | #2a2a2e |
| `--neutral-3-transparent` | #2a2a2e33 |
| `--neutral-4` | #3b3b40 |
| `--neutral-4-transparent` | #3b3b4033 |
| `--neutral-5` | #55555d |
| `--neutral-5-transparent` | #55555d33 |
| `--neutral-6` | #80808a |
| `--neutral-6-transparent` | #80808a33 |
| `--neutral-7` | #ababB4 |
| `--neutral-7-transparent` | #ababB433 |
| `--neutral-8` | #cdCDD3 |
| `--neutral-8-transparent` | #cdCDD333 |
| `--neutral-9` | #e8e8ed |
| `--neutral-9-transparent` | #e8e8ed33 |
| `--neutral-10` | #fafafa |
| `--neutral-10-transparent` | #fafafa33 |
| `--success` | #8fd5ad |
| `--success-transparent` | #8fd5ad33 |
| `--warning` | #e5c279 |
| `--warning-transparent` | #e5c27933 |
| `--error` | #f49fa5 |
| `--error-transparent` | #f49fa533 |
| `--shadow-none` | none |
| `--shadow-s` | 0px 0.25px 0.75px 0px #1717190d, 0px 1px 3px 0px #17171913 |
| `--shadow-m` | 0px 1px 4px 0px #1717190b, 0px 4px 16px 0px #17171910 |
| `--shadow-l` | 0px 3px 9px 0px #1717190f, 0px 12px 36px 0px #17171916 |
| `--cte-canvas` | #171719 |
| `--cte-surface` | #202023 |
| `--cte-surface-muted` | #2a2a2e |
| `--cte-text` | #fafafa |
| `--cte-text-muted` | #ababB4 |
| `--cte-border` | #80808a33 |
| `--cte-accent` | #e8e8eb |
| `--cte-accent-text` | #202023 |
| `--cte-danger` | #f49fa5 |
| `--cte-focus` | #e8e8eb |
| `--cte-font` | "ABC Areal", sans-serif |
| `--cte-font-size` | 12px |
| `--cte-font-weight` | 400 |
| `--cte-line-height` | 18px |
| `--cte-letter-spacing` | 0.01em |
| `--cte-detail-font-size` | 11px |
| `--cte-detail-line-height` | 14px |
| `--cte-detail-letter-spacing` | 0.01em |

## Authored component assignments

These are project edits. The [component reference](kevelle-components.md) includes the effective assignments with defaults and shared parts resolved.

```json
{
  "componentTokens": {
    "button:outline:rest": {
      "borderColor": "neutral-6-transparent"
    },
    "button:primary:rest": {
      "shadow": "s",
      "borderColor": "neutral-6-transparent"
    },
    "button:primary:focus": {
      "shadow": "s",
      "borderColor": "neutral-7-transparent"
    },
    "button:primary:hover": {
      "shadow": "s",
      "borderColor": "neutral-7-transparent"
    },
    "button:secondary:rest": {
      "shadow": "s",
      "background": "neutral-1",
      "borderColor": "neutral-6-transparent"
    },
    "button:secondary:focus": {
      "shadow": "s",
      "background": "neutral-2",
      "borderColor": "neutral-7-transparent"
    },
    "button:secondary:hover": {
      "shadow": "s",
      "background": "neutral-2",
      "borderColor": "neutral-7-transparent"
    }
  },
  "componentVariants": {}
}
```
