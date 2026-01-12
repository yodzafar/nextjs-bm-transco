"use client"
import { $siteSettings } from "@/models/settings"
import { useUnit } from "effector-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import CountUp from "react-countup"

export const AboutJourney = () => {
  const t = useTranslations()
  const siteSettings = useUnit($siteSettings)

  return (
    <section className="lg:py-20 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="bg-black rounded-xl lg:py-18 p-6 grid lg:grid-cols-2 lg:gap-12 gap-6 text-white">
          <div className="lg:pl-19">
            <h6 className="font-bold tracking-wider text-base leading-5 uppercase mb-4">
              {t("journey.subtitle")}
            </h6>
            <h2 className="mb-4">{t("journey.title")}</h2>
            <p className="text-base! mb-7">{t("journey.desc")}</p>
            <div className="flex items-center flex-wrap md:flex-nowrap sm:gap-8 gap-4">
              <div className="flex items-center gap-4 md:w-auto w-full">
                <span className="font-lexend-exa inline-block min-w-[80px] text-[42px] leading-[52px] font-bold">
                  <CountUp
                    startVal={1}
                    delay={0.3}
                    end={siteSettings?.partner_count || 0}
                    suffix="+"
                  />
                </span>
                <p className="leading-6 text-base!">
                  {t.rich("partner.trusted", { br: () => <br /> })}
                </p>
              </div>
              <div className="h-8 w-[1px] bg-white/30 md:block hidden" />
              <div className="flex items-center gap-4">
                <span className="font-lexend-exa inline-block min-w-[80px] text-[42px] leading-[52px] font-bold">
                  <CountUp
                    startVal={1}
                    delay={0.3}
                    end={siteSettings?.driver_count || 0}
                    suffix="+"
                  />
                </span>
                <p className="leading-6 text-base!">
                  {t.rich("driver.trusted", { br: () => <br /> })}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="rounded-xl lg:max-w-[90%] w-full h-auto"
              width={591}
              height={460}
              src="/images/about-banner-2.png"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
