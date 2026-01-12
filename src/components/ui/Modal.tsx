import { useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"
import clsx from "clsx"

type ModalSize = "sm" | "md" | "lg" | "xl" | "full" | "responsive"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  size?: ModalSize
  className?: string
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = "md",
  className,
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClass = (() => {
    switch (size) {
      case "sm":
        return "max-w-sm"
      case "md":
        return "max-w-md"
      case "lg":
        return "max-w-lg"
      case "xl":
        return "max-w-xl"
      case "full":
        return "max-w-full"
      case "responsive":
        return "sm:w-[100vw] w-[90%]"
      default:
        return "max-w-md"
    }
  })()

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={clsx(
          "bg-white rounded-lg  lg:rounded-none shadow-lg lg:px-6 md:py-10 lg:py-6 p-4 relative animate-fade-in overflow-auto max-h-[90vh]",
          sizeClass,
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-2xl text-secondary-foreground transition-all duration-150 hover:text-foreground cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
