// useToast.tsx
import { useCallback, useState } from "react"
import { ToastItem } from "./type"

type PushToastArgs = Omit<ToastItem, "id">

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const push = useCallback(
    (toast: PushToastArgs) => {
      const id = crypto.randomUUID()
      const item: ToastItem = { id, duration: 3500, ...toast }
      setToasts((prev) => [...prev, item])
      if (item.duration) {
        setTimeout(() => dismiss(id), item.duration)
      }
    },
    [dismiss]
  )

  const success = useCallback(
    (message: string, opts?: Omit<PushToastArgs, "type" | "message">) =>
      push({ type: "success", message, ...opts }),
    [push]
  )

  const error = useCallback(
    (message: string, opts?: Omit<PushToastArgs, "type" | "message">) =>
      push({ type: "error", message, ...opts }),
    [push]
  )

  return { toasts, success, error, dismiss }
}
