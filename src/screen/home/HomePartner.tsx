"use client"
import { $partners } from "@/models/partner"
import { useUnit } from "effector-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const HomePartner = () => {
  const data = useUnit($partners)
  const t = useTranslations()
  return (
    <section className="lg:py-30 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap gap-10">
          <div className="sm:w-auto w-full grid sm:grid-cols-4 grid-cols-2 lg:gap-[30px] gap-6 lg:order-1 order-2">
            {data.map((item, key) => (
              <div key={key} className="p-4 flex justify-center items-center">
                <Image
                  unoptimized
                  className="max-w-full h-25 w-auto object-contain"
                  src={item.logo_url}
                  alt={item.name}
                  width={150}
                  height={80}
                />
              </div>
            ))}
          </div>
          <div className="xl:pl-20 lg:order-2 order-1 lg:min-w-[500px]">
            <h2 className="mb-6">{t("title.partners")}</h2>
            <p className="lg:max-w-[420px]">{t("text.partnerDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
