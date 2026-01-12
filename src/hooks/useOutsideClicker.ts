import { useEffect, useRef } from "react"

type UseOutsideClickerProps = {
  onOutsideClick: () => void
  enabled?: boolean
}

export function useOutsideClicker<T extends HTMLDivElement>({
  onOutsideClick,
  enabled = true,
}: UseOutsideClickerProps) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!enabled) return

    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick()
      }
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
    }
  }, [onOutsideClick, enabled])

  return ref
}
