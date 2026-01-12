import { HTMLAttributes } from "react"

type Props = HTMLAttributes<SVGElement>

export const ArrowRight = (props: Props) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 4.25L15.75 9.5M15.75 9.5L10.5 14.75M15.75 9.5L2.25 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
