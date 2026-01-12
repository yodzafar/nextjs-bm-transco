"use client"

import clsx from "clsx"

type Props = {
  label: string
  placeholder?: string
  type?: string
  value?: string
  multiple?: boolean
  onChange?: (value: string) => void
  rows?: number
  error?: boolean
  helpText?: string
}

export const TextField = ({
  label,
  multiple,
  type,
  onChange,
  error,
  helpText,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-secondary-foreground text-sm tracking-wide">
        {label}
      </label>
      {multiple ? (
        <textarea
          {...props}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={clsx(
            "bg-secondary leading-5 p-[14px] rounded-md outline-0 text-base border resize-none",
            error ? "border-primary" : "border-secondary"
          )}
        />
      ) : (
        <input
          {...props}
          type={type || "text"}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={clsx(
            "bg-secondary leading-5 p-[14px] rounded-md outline-0 text-base border",
            error ? "border-primary" : "border-secondary"
          )}
        />
      )}
      {error && <p className="text-primary text-xs!">{helpText}</p>}
    </div>
  )
}
