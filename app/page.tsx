import Link from "next/link"

import { componentGroups, foundations } from "@/components/showcase/nav"
import { PageHeader, Section } from "@/components/showcase/page"

const linkClass =
  "rounded-s text-s text-neutral-8 underline decoration-neutral-4 underline-offset-2 transition-colors hover:text-neutral-10 hover:decoration-neutral-7"

const swatches = [
  ...Array.from({ length: 10 }, (_, index) => `neutral-${index + 1}`),
  "color-1",
  "success",
  "warning",
  "error",
]

export default function OverviewPage() {
  return (
    <>
      <PageHeader title="Kevelle" />

      <div className="grid grid-cols-7 gap-xxs sm:grid-cols-14" aria-hidden="true">
        {swatches.map((token) => (
          <div
            key={token}
            className="h-xxl rounded-s shadow-[inset_0_0_0_var(--border-s)_var(--neutral-4-transparent)]"
            style={{ background: `var(--${token})` }}
          />
        ))}
      </div>

      <Section title="Foundations">
        <ul className="grid gap-s sm:grid-cols-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Components">
        <div className="grid gap-l sm:grid-cols-2 md:grid-cols-3">
          {componentGroups.map((group) => (
            <div key={group.href} className="flex flex-col gap-xs">
              <Link href={group.href} className="w-fit rounded-s text-s font-medium text-neutral-10">
                {group.label}
              </Link>
              <ul className="flex flex-col gap-xxs">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
