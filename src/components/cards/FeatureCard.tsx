import { ReactNode } from "react"

type Props = {
  icon: ReactNode
  title: string
  desc: string
}

export const FeatureCard = ({ icon, title, desc }: Props) => {
  return (
    <div className="bg-background px-4 pt-10 pb-5 flex flex-col text-center rounded-[5px] shadow-md">
      <div className="flex justify-center text-primary mb-8">{icon}</div>
      <h5 className="text-xl leading-7 font-bold mb-4 font-inter">{title}</h5>
      <p className="text-sm!">{desc}</p>
    </div>
  )
}
