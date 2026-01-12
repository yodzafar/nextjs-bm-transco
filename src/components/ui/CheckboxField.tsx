"use client"

import clsx from "clsx"
import { CheckIcon } from "../icons"

type Props = {
  label: string
  checked?: boolean
  onChange?: (checked?: boolean) => void
  error?: boolean
  helpText?: string
}

export const CheckboxField = ({
  label,
  checked,
  onChange,
  error,
  helpText,
}: Props) => {
  const id = `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <label htmlFor={id} className="inline-flex space-x-2 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className="peer hidden"
      />
      <span
        className={clsx(
          "min-w-5 h-5 rounded-xs bg-secondary flex items-center justify-center transition-colors duration-200 border",
          error ? "border-primary" : "border-secondary"
        )}
      >
        <CheckIcon
          className={clsx(
            "text-primary",
            checked ? "opacity-100 visible" : "invisible opacity-0"
          )}
        />
      </span>
      <span className="font-semibold xl:text-lg text-base leading-5">
        {label}
      </span>
    </label>
  )
}
