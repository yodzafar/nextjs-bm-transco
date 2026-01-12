"use client"

import { InputMask, InputMaskProps } from "@react-input/mask"
import clsx from "clsx"

type Props = InputMaskProps & {
  type?: string
  label: string
  error?: boolean
  helpText?: string
}

export const MaskedField = ({ label, error, helpText, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-secondary-foreground text-sm tracking-wide">
        {label}
      </label>
      <InputMask
        {...props}
        replacement={props.replacement ?? { _: /\d/ }}
        className={clsx(
          "bg-secondary leading-5 p-[14px] rounded-md outline-0 text-base border",
          error ? "border-primary" : "border-secondary"
        )}
      />
      {error && <p className="text-primary text-xs!">{helpText}</p>}
    </div>
  )
}
