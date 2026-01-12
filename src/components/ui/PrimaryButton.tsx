import clsx from "clsx"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export const PrimaryButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={clsx(
        className,
        `text-center font-semibold leading-6 transition-all duration-200 md:py-[14px] py-[10px] md:px-12 px-4 bg-primary border-2 border-primary rounded-[5px]
         text-white text-base cursor-pointer hover:bg-primary-dark hover:border-primary-dark
         disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:border-gray-300`
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
