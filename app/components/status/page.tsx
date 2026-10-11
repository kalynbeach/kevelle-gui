import type { Metadata } from "next"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Demo, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Status" }

export default function StatusPage() {
  return (
    <>
      <PageHeader title="Status" />

      <Section title="Progress">
        <Demo className="flex-col items-stretch gap-l">
          <Progress value={64} className="max-w-[20rem]">
            <ProgressLabel>Uploading stems</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={null} className="max-w-[20rem]">
            <ProgressLabel>Preparing export</ProgressLabel>
          </Progress>
        </Demo>
      </Section>

      <Section title="Meter">
        <Demo className="flex-col items-stretch gap-l">
          <Meter value={54} low={20} high={85} className="max-w-[20rem]">
            <MeterLabel>Memory</MeterLabel>
            <MeterValue />
          </Meter>
          <Meter value={15} low={20} high={85} className="max-w-[20rem]">
            <MeterLabel>Battery</MeterLabel>
            <MeterValue />
          </Meter>
          <Meter value={92} low={20} high={85} className="max-w-[20rem]">
            <MeterLabel>Disk</MeterLabel>
            <MeterValue />
          </Meter>
        </Demo>
      </Section>

      <Section title="Avatar">
        <Demo>
          <Avatar>
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
        </Demo>
      </Section>
    </>
  )
}
