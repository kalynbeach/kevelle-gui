import type { Metadata } from "next"
import { CopyIcon, DownloadSimpleIcon, TrashIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
import { Field, FieldLabel } from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ToastDemo } from "@/components/showcase/demos/overlays"
import { Demo, PageHeader, Section } from "@/components/showcase/page"

export const metadata: Metadata = { title: "Overlays" }

export default function OverlaysPage() {
  return (
    <>
      <PageHeader title="Overlays" />

      <Section title="Dialog">
        <Demo>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Rename track</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename track</DialogTitle>
                <DialogDescription>The new name appears in the mixer and in exports.</DialogDescription>
              </DialogHeader>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input defaultValue="Bass DI" />
              </Field>
              <DialogFooter showCloseButton>
                <DialogClose render={<Button />}>Save</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </Section>

      <Section title="Alert dialog">
        <Demo>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>Delete project</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Night drive?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes 14 tracks and their recordings. It cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="danger">Delete project</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Demo>
      </Section>

      <Section title="Drawer">
        <Demo>
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>Export settings</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Export settings</DrawerTitle>
                <DrawerDescription>Applies to the next export only.</DrawerDescription>
              </DrawerHeader>
              <Label className="font-regular">
                <Switch defaultChecked />
                Normalize loudness
              </Label>
              <DrawerFooter showCloseButton>
                <DrawerClose render={<Button />}>
                  <DownloadSimpleIcon />
                  Export
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Demo>
      </Section>

      <Section title="Popover">
        <Demo>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>Share</PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Share mix</PopoverTitle>
                <PopoverDescription>Anyone with the link can listen.</PopoverDescription>
              </PopoverHeader>
              <div className="flex gap-xs">
                <Input readOnly defaultValue="kevelle.studio/m/4821" aria-label="Link" />
                <PopoverClose render={<Button aria-label="Copy link" size="icon" />}>
                  <CopyIcon />
                </PopoverClose>
              </div>
            </PopoverContent>
          </Popover>
        </Demo>
      </Section>

      <Section title="Preview card">
        <Demo>
          <p className="text-s text-neutral-8">
            Data text is set in{" "}
            <HoverCard>
              <HoverCardTrigger href="https://github.com/paper-design/paper-mono">
                Paper Mono
              </HoverCardTrigger>
              <HoverCardContent>
                <HoverCardTitle>Paper Mono</HoverCardTitle>
                <HoverCardDescription>
                  A monospace family from Paper, based on Geist Mono. Released under the SIL
                  Open Font License 1.1.
                </HoverCardDescription>
              </HoverCardContent>
            </HoverCard>
            .
          </p>
        </Demo>
      </Section>

      <Section title="Tooltip">
        <Demo>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="Copy" />}>
              <CopyIcon />
            </TooltipTrigger>
            <TooltipContent>Copy</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="Delete track" />}>
              <TrashIcon />
            </TooltipTrigger>
            <TooltipContent>Delete track</TooltipContent>
          </Tooltip>
        </Demo>
      </Section>

      <Section title="Toast">
        <Demo>
          <ToastDemo />
        </Demo>
      </Section>
    </>
  )
}
