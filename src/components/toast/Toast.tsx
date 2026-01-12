import { ToastItem } from "./type"

const base =
  "pointer-events-auto w-full max-w-sm rounded-lg border shadow-lg px-4 py-3 ring-1 backdrop-blur transition-all"
const success =
  "bg-emerald-50/90 border-emerald-200/60 ring-emerald-100 text-emerald-900"
const error = "bg-rose-50/90 border-rose-200/60 ring-rose-100 text-rose-900"

const iconCls =
  "mr-3 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full"

export function Toasts({
  toasts,
  onClose,
}: {
  toasts: ToastItem[]
  onClose: (id: string) => void
}) {
  return (
    <div className="fixed inset-x-0 top-4 z-[9999] flex flex-col items-center gap-2 px-2 sm:items-end sm:pr-4">
      {toasts.map((t) => {
        const theme = t.type === "success" ? success : error
        return (
          <div
            key={t.id}
            className={`${base} ${theme} animate-in fade-in slide-in-from-top-2`}
          >
            <div className="flex items-start">
              <span
                className={`${iconCls} ${
                  t.type === "success"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-700"
                }`}
              >
                {t.type === "success" ? "✓" : "!"}
              </span>
              <div className="min-w-0 flex-1">
                {t.title && (
                  <p className="text-sm font-semibold leading-5">{t.title}</p>
                )}
                <p className="text-sm leading-5">{t.message}</p>
              </div>
              <button
                onClick={() => onClose(t.id)}
                className="ml-3 rounded-md p-1.5 text-sm/none opacity-70 hover:opacity-100 focus:outline-none focus:ring"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
