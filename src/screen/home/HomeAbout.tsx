import { ShieldIcon, TeamIcon } from "@/components/icons"
import { StarIcon } from "@/components/icons/Star"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const HomeAbout = () => {
  const t = useTranslations()
  return (
    <section className="lg:py-30 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-14 gap-6">
          <div className="relative">
            <div className="absolute top-[-40px] left-[-40px]">
              <StarIcon />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                width={591}
                height={460}
                sizes="100vw"
                className="w-full h-auto lg:max-w-[634px]"
                src="/images/about-banner.jpg"
                alt="banner"
              />
            </div>
          </div>
          <div>
            <h2 className="sm:mb-6 mb-4">{t("title.about")}</h2>
            <p className="lg:max-w-[85%] text-justify sm:leading-8! leading-[18px]! sm:mb-8 mb-4">
              {t("text.aboutDesc")}
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              {list.map((item, key) => {
                const title = t(`about.feature.${key + 1}.title`)
                const desc = t(`about.feature.${key + 1}.desc`)
                return (
                  <div key={key} className="flex flex-col">
                    <div className="mb-7 text-primary">{item}</div>
                    <h5 className="text-lg font-bold leading-7 mb-4">
                      {title}
                    </h5>
                    <p className="text-base">{desc}</p>
                  </div>
                )
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const list = [<TeamIcon key={1} />, <ShieldIcon key={2} />]
