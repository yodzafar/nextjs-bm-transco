"use client"
import { FeatureCard } from "@/components/cards"
import { BonusIcon, ScheduleIcon, SupportIcon } from "@/components/icons"
import { useTranslations } from "next-intl"

export const DriveWithUs = () => {
  const t = useTranslations()
  return (
    <section className="lg:pt-20 lg:pb-25 py-12 bg-secondary px-4">
      <div className="container mx-auto">
        <h2 className="text-center mb-6">{t("title.whyDriveWithUs")}</h2>
        <div className="lg:max-w-[75%] mx-auto lg:mb-20 mb-12">
          <p className="text-center text-secondary-foreground text-lg leading-8">
            {t("text.driveWithUsDesc")}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {list.map((item, index) => {
            const title = t(`choose.feature.${index + 1}.title`)
            const desc = t(`choose.feature.${index + 1}.desc`)
            return (
              <FeatureCard title={title} desc={desc} key={index} icon={item} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

const list = [
  <BonusIcon key={1} />,
  <ScheduleIcon key={2} />,
  <SupportIcon key={3} />,
]
