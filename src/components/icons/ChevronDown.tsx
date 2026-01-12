import { SVGAttributes } from "react"

type Props = SVGAttributes<HTMLOrSVGElement>

export const ChevronDownIcon = (props: Props) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.8334 8.33331L10.5001 11.6666L7.16675 8.33331"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
