import type { Metadata } from "next"
import {
  CheckIcon,
  FileAudioIcon,
  WarningIcon,
  WaveformIcon,
} from "@phosphor-icons/react/ssr"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChartDemo } from "@/components/showcase/demos/data-display"
import {
  Demo,
  PageHeader,
  Section,
  Subsection,
} from "@/components/showcase/page"

export const metadata: Metadata = { title: "Data display" }

const tracks = [
  { name: "Kick", bus: "Drums", peak: "−3.1", lufs: "−14.2" },
  { name: "Snare", bus: "Drums", peak: "−4.8", lufs: "−17.9" },
  { name: "Bass DI", bus: "Bass", peak: "−6.0", lufs: "−16.4" },
  { name: "Rhodes", bus: "Keys", peak: "−9.2", lufs: "−21.0" },
]

const takes = [
  "Take 1 · 3:41",
  "Take 2 · 3:38",
  "Take 3 · 3:44",
  "Take 4 · 3:40",
  "Take 5 · 3:42",
]

/* One period of a trace, drawn in the chart's first signal color. */
const trace = Array.from({ length: 81 }, (_, index) => {
  const x = (index / 80) * 320

  const y =
    90 - Math.sin((index / 80) * Math.PI * 4) * 48 * Math.exp(-index / 90)

  return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
}).join(" ")

export default function DataDisplayPage() {
  return (
    <>
      <PageHeader title="Data display" />

      <Section title="Card">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Night drive</CardTitle>
              <CardDescription>Mixdown, revision 4</CardDescription>
              <CardAction>
                <Badge variant="success">Ready</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Twelve tracks bounced to stems at 48 kHz. The master peaks at
                −1.0 dBTP.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Open session</Button>
            </CardFooter>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Integrated loudness</CardTitle>
              <CardDescription>Master bus, full length</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="type-pixel-2x text-foreground">−14.2 LUFS</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Table">
        <Demo>
          <Table>
            <TableCaption>Levels measured on the last bounce.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Track</TableHead>
                <TableHead>Bus</TableHead>
                <TableHead className="text-right">Peak dBFS</TableHead>
                <TableHead className="text-right">LUFS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tracks.map((track) => (
                <TableRow key={track.name}>
                  <TableCell>{track.name}</TableCell>
                  <TableCell>{track.bus}</TableCell>
                  <TableCell className="text-right">
                    <span className="type-pixel tabular-nums">
                      {track.peak}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="type-pixel tabular-nums">
                      {track.lufs}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Master</TableCell>
                <TableCell className="text-right">
                  <span className="type-pixel tabular-nums">−14.2</span>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Demo>
      </Section>

      <Section title="Badge">
        <Demo>
          <Badge>Mastered</Badge>
          <Badge variant="secondary">Draft</Badge>
          <Badge variant="outline">48 kHz</Badge>
          <Badge variant="success">
            <CheckIcon data-icon="inline-start" />
            Ready
          </Badge>
          <Badge variant="warning">
            <WarningIcon data-icon="inline-start" />
            Clipping
          </Badge>
          <Badge variant="destructive">Failed</Badge>
        </Demo>
      </Section>

      <Section title="Avatar">
        <Demo>
          <Avatar size="sm">
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>KB</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>KB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>HZ</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+4</AvatarGroupCount>
          </AvatarGroup>
        </Demo>
      </Section>

      <Section title="Item">
        <Demo>
          <ItemGroup className="w-full max-w-md">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <FileAudioIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>drums_bus.wav</ItemTitle>
                <ItemDescription>24-bit, 48 kHz, 3:41</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Reveal
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon">
                <WaveformIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Bass DI</ItemTitle>
                <ItemDescription>Input 3, armed</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Demo>
      </Section>

      <Section title="Chart">
        <Card>
          <CardHeader>
            <CardTitle>Studio hours</CardTitle>
            <CardDescription>Last six weeks, by phase</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartDemo />
          </CardContent>
        </Card>
      </Section>

      <Section title="Carousel">
        <Demo className="justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {takes.map((take) => (
                <CarouselItem key={take}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <span className="type-pixel-2x">{take}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Demo>
      </Section>

      <Section title="Aspect ratio">
        <Subsection title="16 / 9">
          <div className="max-w-xl border">
            <AspectRatio ratio={16 / 9}>
              <svg
                viewBox="0 0 320 180"
                className="size-full bg-background"
                aria-hidden="true"
              >
                <path
                  d="M0 90 H320 M160 0 V180"
                  stroke="var(--border)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d={trace}
                  stroke="var(--chart-1)"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </AspectRatio>
          </div>
        </Subsection>
      </Section>
    </>
  )
}
