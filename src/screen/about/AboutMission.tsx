"use client"
import { useUnit } from "effector-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { $partners } from "@/models/partner"
import clsx from "clsx"

export const AboutMission = () => {
  const data = useUnit($partners)
  const t = useTranslations()

  return (
    <section className="lg:pt-[380px] sm:py-12 py-6 bg-secondary px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:px-[10%] lg:gap-[7%] gap-6 sm:mb-25 mb-10">
          <div className="flex flex-col gap-4">
            <h6 className="uppercase text-base tracking-wider font-bold leading-5">
              {t("mission.subtitle")}
            </h6>
            <h4 className="lg:leading-10 lg:text-[28px] text-2xl leading-8 font-bold">
              {t("mission.title")}
            </h4>
            <p className="text-base!">{t("mission.desc")}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="uppercase text-base tracking-wider font-bold leading-5">
              {t("vision.subtitle")}
            </h6>
            <h4 className="lg:leading-10 lg:text-[28px] text-2xl leading-8 font-bold">
              {t("vision.title")}
            </h4>
            <p className="lg:text-base!">{t("vision.desc")}</p>
          </div>
        </div>
        <div className={clsx("grid lg:grid-cols-8 grid-cols-2 gap-6")}>
          {data.map((item, key) => (
            <div
              key={key}
              className={clsx(
                "bg-white p-4 lg:h-auto h-[90px] rounded-lg flex justify-center items-center",
                `col-span-${Math.ceil(8 / data.length)}`
              )}
            >
              <Image
                unoptimized
                className="max-w-full h-auto"
                src={item.logo_url}
                alt={item.name}
                width={150}
                height={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
