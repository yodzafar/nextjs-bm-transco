import { TickCircleIcon } from "../icons"

type Props = {
  title: string
  desc: string
  subItems: string[]
}

export const ServiceCard = ({ title, desc, subItems }: Props) => {
  return (
    <div className="lg:px-6 px-4 lg:py-8 py-6 rounded-xl bg-secondary flex flex-col sm:gap-6 gap-4">
      <h4 className="lg:text-2xl text-base leading-5 font-bold">{title}</h4>
      <p className="lg:text-base!">{desc}</p>
      <ul className="flex flex-col gap-4">
        {subItems.map((item, index) => (
          <li key={index} className="flex gap-3">
            <TickCircleIcon className="min-w-6" />
            <span className="lg:text-base text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
