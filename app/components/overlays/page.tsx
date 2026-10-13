import type { Metadata } from "next"
import { TrashIcon } from "@phosphor-icons/react/ssr"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Kbd } from "@/components/ui/kbd"
import { SonnerDemo, ToastDemo } from "@/components/showcase/demos/overlays"
import { Demo, PageHeader, Prose, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Overlays" }

export default function OverlaysPage() {
  return (
    <>
      <PageHeader title="Overlays" />

      <Section title="Dialog">
        <Demo>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Rename session
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename session</DialogTitle>
                <DialogDescription>
                  The folder on disk is renamed too.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
                  <Input id="dialog-name" defaultValue="Night drive" />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <DialogClose render={<Button />}>Rename</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </Section>

      <Section title="Alert dialog">
        <Demo>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete take
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <TrashIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete take 3?</AlertDialogTitle>
                <AlertDialogDescription>
                  The audio file is removed from the session folder. This cannot
                  be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep take</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Demo>
      </Section>

      <Section title="Sheet">
        <Demo>
          {(["right", "left", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger render={<Button variant="outline" />}>
                {side === "bottom"
                  ? "Bottom"
                  : side === "left"
                    ? "Left"
                    : "Right"}
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Track settings</SheetTitle>
                  <SheetDescription>Bass DI, input 3.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor={`sheet-name-${side}`}>
                        Name
                      </FieldLabel>
                      <Input id={`sheet-name-${side}`} defaultValue="Bass DI" />
                    </Field>
                  </FieldGroup>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button />}>Save</SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </Demo>
      </Section>

      <Section title="Drawer">
        <Demo>
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>
              Open mixer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Mixer</DrawerTitle>
                <DrawerDescription>Swipe down to close.</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-6 p-4">
                {["Drums", "Bass", "Keys"].map((bus) => (
                  <div key={bus} className="flex items-center gap-4">
                    <span className="w-16 text-sm">{bus}</span>
                    <Slider aria-label={`${bus} level`} defaultValue={[70]} />
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>
                  Done
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Demo>
      </Section>

      <Section title="Popover">
        <Demo>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Loop length
            </PopoverTrigger>
            <PopoverContent align="start">
              <PopoverHeader>
                <PopoverTitle>Loop length</PopoverTitle>
                <PopoverDescription>
                  In bars, from the playhead.
                </PopoverDescription>
              </PopoverHeader>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="popover-bars">Bars</FieldLabel>
                <Input id="popover-bars" type="number" defaultValue={8} />
              </Field>
            </PopoverContent>
          </Popover>
        </Demo>
      </Section>

      <Section title="Hover card">
        <Demo>
          <HoverCard>
            <HoverCardTrigger
              render={<Button variant="link" />}
              delay={100}
              closeDelay={100}
            >
              @kevelle
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>KB</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Kevelle</span>
                  <span className="text-sm text-muted-foreground">
                    Sound and software. 41 sessions.
                  </span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Demo>
      </Section>

      <Section title="Tooltip">
        <Demo>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Record
            </TooltipTrigger>
            <TooltipContent>
              Arm and record <Kbd>R</Kbd>
            </TooltipContent>
          </Tooltip>
        </Demo>
      </Section>

      <Section title="Toast">
        <Prose>
          <p>Base UI toasts, the default for this project.</p>
        </Prose>
        <Demo>
          <ToastDemo />
        </Demo>
      </Section>

      <Section title="Sonner">
        <Prose>
          <p>
            The registry&apos;s Sonner toaster, themed with the popover role.
            Use Toast unless a feature depends on Sonner&apos;s API.
          </p>
        </Prose>
        <Demo>
          <SonnerDemo />
        </Demo>
      </Section>
    </>
  )
}
