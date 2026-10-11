"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import {
  CheckCircleIcon,
  InfoIcon,
  SpinnerIcon,
  WarningIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/*
 * Kevelle Toast: popover surfaces stacked bottom-right on the s gap, moving on
 * the large motion curve. The action part is the secondary Button and the
 * close part is the ghost Button.
 */

const toast = ToastPrimitive.createToastManager()

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "fixed right-l bottom-l z-50 flex w-[min(360px,calc(100vw-var(--space-xl)))] flex-col gap-s outline-none",
        className
      )}
      {...props}
    />
  )
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        "relative flex translate-x-(--toast-swipe-movement-x) translate-y-(--toast-swipe-movement-y) touch-none flex-col gap-xs rounded-m bg-neutral-1 p-m font-ui text-s text-neutral-10 shadow-m ring ring-neutral-4-transparent transition-[opacity,translate,scale] motion-large select-none data-ending-style:opacity-0 data-limited:opacity-0 data-starting-style:scale-(--motion-popup-scale) data-starting-style:opacity-0 data-swiping:duration-0 dark:bg-neutral-2 dark:ring-inset",
        className
      )}
      {...props}
    />
  )
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn("flex items-start gap-s", className)}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-s font-medium text-neutral-10", className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-s text-neutral-7", className)}
      {...props}
    />
  )
}

function ToastAction({
  className,
  render = <Button variant="secondary" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Dismiss"
      render={render}
      className={cn("-me-xs -mt-xs shrink-0 text-neutral-7", className)}
      {...props}
    >
      {children ?? <XIcon aria-hidden="true" />}
    </ToastPrimitive.Close>
  )
}

const toastIcons: Record<string, React.ReactNode> = {
  success: <CheckCircleIcon className="text-success" />,
  info: <InfoIcon className="text-neutral-7" />,
  warning: <WarningIcon className="text-warning" />,
  error: <XCircleIcon className="text-error" />,
  loading: <SpinnerIcon className="animate-spin text-neutral-7" />,
}

function ToastIcon({ type }: { type: string | undefined }) {
  const icon = type ? toastIcons[type] : undefined
  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      aria-hidden="true"
      className="flex h-lh shrink-0 items-center text-m [&_svg]:size-[1em]"
    >
      {icon}
    </span>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()
  return toasts.map((toastItem) => (
    <Toast key={toastItem.id} toast={toastItem}>
      <ToastContent>
        <ToastIcon type={toastItem.type} />
        <div className="flex min-w-0 flex-1 flex-col gap-xxs">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastClose />
      </ToastContent>
      {toastItem.actionProps ? (
        <div className="flex justify-end">
          <ToastAction />
        </div>
      ) : null}
    </Toast>
  ))
}

function Toaster({
  children,
  toastManager = toast,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}
