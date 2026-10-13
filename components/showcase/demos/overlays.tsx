"use client"

import { toast as sonner } from "sonner"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Stems bounced",
            description: "Twelve files written to ~/Music/Stems.",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toast.add({
            title: "Region deleted",
            description: "Bass DI, bars 17–24.",
            actionProps: {
              children: "Undo",
              onClick() {
                toast.close(id)
                toast.add({ description: "Region restored." })
              },
            },
          })
        }}
      >
        With action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise<{ files: number }>((resolve) => {
              window.setTimeout(() => resolve({ files: 12 }), 1600)
            }),
            {
              loading: "Rendering stems…",
              success: (data) => `${data.files} stems rendered.`,
              error: "Render failed.",
            }
          )
        }
      >
        Promise
      </Button>
    </>
  )
}

export function SonnerDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          sonner("Session saved", { description: "Night drive, 3:41" })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => sonner.error("Input clipped on track 4")}
      >
        Error
      </Button>
    </>
  )
}
