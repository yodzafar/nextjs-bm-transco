import clsx from "clsx"
import { HtmlHTMLAttributes } from "react"

type Props = HtmlHTMLAttributes<HTMLButtonElement>

export const SecondaryButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        className,
        `text-center flex justify-center items-center font-semibold leading-6 md:py-[18px] py-[10px] md:px-12 px-4 rounded-[5px] border-2 
        text-base cursor-pointer transition-all duration-200`
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
