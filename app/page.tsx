import Link from "next/link"

import { componentGroups, foundations } from "@/components/showcase/nav"
import { PageHeader, Section } from "@/components/showcase/page"

const link =
  "text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"

/* The neutral ramp as a strip, canvas to ink. */
const ramp = Array.from({ length: 10 }, (_, index) => `neutral-${index + 1}`)

export default function OverviewPage() {
  return (
    <>
      <PageHeader title="Kevelle" />

      <svg
        className="h-10 w-full border"
        viewBox="0 0 10 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {ramp.map((token, index) => (
          <rect
            key={token}
            x={index}
            width="1"
            height="1"
            fill={`var(--${token})`}
          />
        ))}
      </svg>

      <Section title="Foundations">
        <ul className="grid gap-3 sm:grid-cols-3">
          {foundations.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Components">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {componentGroups.map((group) => (
            <div key={group.href} className="flex flex-col gap-3">
              <Link
                href={group.href}
                className="w-fit type-label text-foreground"
              >
                {group.label}
              </Link>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={link}>
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
