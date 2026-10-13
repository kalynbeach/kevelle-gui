import type { Metadata } from "next"
import {
  CheckCircleIcon,
  FolderOpenIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from "@phosphor-icons/react/ssr"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Demo, PageHeader, Prose, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Feedback" }

export default function FeedbackPage() {
  return (
    <>
      <PageHeader title="Feedback" />

      <Section title="Alert">
        <div className="flex max-w-xl flex-col gap-4">
          <Alert>
            <InfoIcon />
            <AlertTitle>Session opened read-only</AlertTitle>
            <AlertDescription>
              Another device has it open. Changes stay local until it closes.
            </AlertDescription>
          </Alert>
          <Alert variant="success">
            <CheckCircleIcon />
            <AlertTitle>Backup complete</AlertTitle>
            <AlertDescription>
              412 MB copied to the archive drive.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <WarningIcon />
            <AlertTitle>Input clipping on track 4</AlertTitle>
            <AlertDescription>
              Lower the preamp gain by about 3 dB.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <XCircleIcon />
            <AlertTitle>Render failed</AlertTitle>
            <AlertDescription>The disk is full.</AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                Retry
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </Section>

      <Section title="Progress">
        <Prose>
          <p>
            Tracks are dithered, like the bars on a machine report. Values set
            in Departure Mono.
          </p>
        </Prose>
        <Demo className="flex-col items-stretch">
          <Progress value={34}>
            <ProgressLabel>Rendering stems</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={null} aria-label="Scanning plugins" />
        </Demo>
      </Section>

      <Section title="Meter">
        <Demo className="flex-col items-stretch">
          <Meter value={42} low={20} high={85}>
            <MeterLabel>Disk usage</MeterLabel>
            <MeterValue />
          </Meter>
          <Meter value={12} low={20} high={85}>
            <MeterLabel>Battery</MeterLabel>
            <MeterValue />
          </Meter>
          <Meter value={92} low={20} high={85}>
            <MeterLabel>CPU</MeterLabel>
            <MeterValue />
          </Meter>
        </Demo>
      </Section>

      <Section title="Skeleton">
        <Demo>
          <div className="flex w-full max-w-sm items-center gap-4">
            <Skeleton className="size-10" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </Demo>
      </Section>

      <Section title="Spinner">
        <Demo>
          <Spinner />
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Rendering
          </Button>
        </Demo>
      </Section>

      <Section title="Empty">
        <Demo>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon />
              </EmptyMedia>
              <EmptyTitle>No sessions</EmptyTitle>
              <EmptyDescription>
                Record or import audio to start a session.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>New session</Button>
            </EmptyContent>
          </Empty>
        </Demo>
      </Section>
    </>
  )
}
