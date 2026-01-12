"use client"

import clsx from "clsx"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement>

export const GradientCard = ({ children, className, ...props }: Props) => {
  return (
    <>
      <style jsx>{`
        .wrapper {
          overflow: hidden;
          border-radius: 5px;
          border: 0.5px solid oklch(1 0 0 / 15%);
          background-color: oklch(1 0 0 / 10%);
          backdrop-filter: blur(300px);
          box-shadow: 0px 4px 60px 0px oklch(0 0 0 / 8%);
        }
      `}</style>
      <div className={clsx("wrapper sm:p-6 p-4", className)} {...props}>
        {children}
      </div>
    </>
  )
}
