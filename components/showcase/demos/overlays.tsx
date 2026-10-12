"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export function ToastDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: "Mix saved", description: "Version 12 is now the latest." })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: "Export finished", description: "4 stems, 24-bit WAV.", type: "success" })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: "Clipping detected", description: "Master peaks at +0.4 dBFS.", type: "warning" })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: "Upload failed", description: "The connection dropped at 62%.", type: "error" })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toast.add({
            title: "Track deleted",
            description: "Bass DI was removed from the session.",
            actionProps: { children: "Undo", onClick: () => toast.close(id) },
          })
        }}
      >
        With action
      </Button>
    </>
  )
}
