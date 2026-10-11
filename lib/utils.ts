import { createCn } from "cn/config"

const steps = ["zero", "xxs", "xs", "s", "m", "l", "xl", "xxl"]
const controlSteps = steps.map((step) => `control-${step}`)

/**
 * Class merging aware of the Kevelle scales, so `text-s` resolves as a font
 * size rather than a text color and `font-heavy` as a weight rather than a
 * family. Keep these lists in step with the @theme block in app/globals.css.
 */
export const cn = createCn({
  extend: {
    theme: {
      spacing: ["0", ...steps, ...controlSteps],
      text: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
      tracking: ["xs", "s", "m", "l", "xl"],
      "font-weight": ["regular", "medium", "heavy"],
      radius: ["zero", "xs", "s", "m", "l", "xl", "full"],
      shadow: ["s", "m", "l"],
      "inset-shadow": ["raised", "recessed"],
      ease: ["small", "large"],
    },
  },
})
