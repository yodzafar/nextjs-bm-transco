"use client"
import { GradientCard } from "@/components/cards"
import { GradientSection } from "@/components/sections"
import { $services } from "@/models/service"
import { useUnit } from "effector-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const HomeService = () => {
  const t = useTranslations()
  const data = useUnit($services)
  return (
    <GradientSection className="lg:pt-25 lg:pb-30 sm:py-12 py-6 px-4">
      <div className="container mx-auto text-white">
        <h2 className="mb-6 lg:text-center">{t("title.ourServices")}</h2>
        <p className="sm:mb-10 mb-6 lg:text-center">{t("text.serviceDesc")}</p>
        <div className="grid lg:grid-cols-2 gap-6">
          {data.map((item, key) => (
            <GradientCard key={key}>
              <div className="flex items-center mb-5 gap-5">
                <div className="bg-white/10 p-1 rounded-lg flex items-center text-center sm:text-[26px] text-lg justify-center sm:w-12 sm:h-12 w-8 h-8">
                  <Image
                    unoptimized
                    className="w-full h-auto"
                    src={item.icon_url}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <h5 className="sm:text-2xl text-base">{item.name}</h5>
              </div>
              <p className="sm:text-base!">{item.caption}</p>
            </GradientCard>
          ))}
        </div>{" "}
      </div>
    </GradientSection>
  )
}
