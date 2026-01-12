import { ReactNode } from "react"

type Props = {
  title: string
  texts: { title: string; href?: string }[]
  icon: ReactNode
}

export const ContactCard = ({ title, texts, icon }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="bg-white rounded-full lg:w-16 w-10 lg:h-16 h-10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h6 className="font-bold text-base leading-5 mb-[10px]">{title}</h6>
        <ul className="mt-2 flex flex-col gap-2">
          {texts.map(({ title, href }, index) => (
            <li key={index} className="text-sm leading-5  mb-2 last:mb-0">
              {href ? (
                <a href={href} target="_blank" rel="noopener nofollow">
                  {title}
                </a>
              ) : (
                <span>{title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
