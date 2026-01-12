import { GradientCard } from "@/components/cards"
import { GradientSection } from "@/components/sections"
import { useTranslations } from "next-intl"

export const FAQ = () => {
  const t = useTranslations()
  return (
    <GradientSection className="px-4 lg:py-30 sm:py-12 py-6">
      <div className="container mx-auto text-white">
        <h2 className="ms:mb-6 mb-3 sm:text-center text-left">
          {t.rich("title.faq", {
            br: () => <br />,
          })}
        </h2>
        <div className="max-w-[780px] mx-auto">
          <p className="sm:text-center sm:mb-20 mb-8">{t("text.faqDesc")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {list.map((item, key) => {
            const question = t(`faq.feature.${item}.question`)
            const answer = t(`faq.feature.${item}.answer`)
            return (
              <GradientCard key={key}>
                <h6 className="font-semibold sm:text-xl text-base leading-7 mb-4">{`Q. ${question}`}</h6>
                <p className="sm:text-base!">{answer}</p>
              </GradientCard>
            )
          })}
        </div>
      </div>
    </GradientSection>
  )
}

const list = Array.from({ length: 4 }, (_, index) => index + 1)
