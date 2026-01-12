import { HTMLAttributes } from "react"

type Props = HTMLAttributes<SVGElement>
export const StarIcon = (props: Props) => (
  <svg
    width="105"
    height="105"
    viewBox="0 0 105 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M52.5 0C45.2518 39.375 39.3745 45.2518 0 52.5C39.3745 59.7487 45.2518 65.6255 52.5 105C59.7482 65.6255 65.6255 59.7482 104.999 52.5C65.6245 45.2518 59.7487 39.375 52.5 0Z"
      fill="currentColor"
    />
  </svg>
)
