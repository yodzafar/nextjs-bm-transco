"use client"
import clsx from "clsx"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement>

export const GradientSection = ({ children, className, ...props }: Props) => {
  return (
    <>
      <style jsx>{`
        .wrapper {
          background: url("/images/gradient-bg.png") center center no-repeat;
          background-size: cover;
        }

        @media (max-width: 1023px) {
          .wrapper {
            background: url("/images/gradient-bg-mobile.png") top center
              no-repeat;
            background-size: cover;
          }
        }
      `}</style>
      <div {...props} className={clsx("wrapper", className)}>
        {children}
      </div>
    </>
  )
}
