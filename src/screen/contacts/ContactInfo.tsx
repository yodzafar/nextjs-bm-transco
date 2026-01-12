import { ApplyForm } from "@/components/ApplyForm"
import { Breadcrumb } from "@/components/Breadcrumb"
import { useTranslations } from "next-intl"

export const ContactInfo = () => {
  const t = useTranslations()
  return (
    <section className="lg:pb-27 lg:pt-25 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <Breadcrumb title={t("navigation.contactUs")} />
        <div className="grid pt-8 lg:grid-cols-2 lg:gap-8 gap-6 lg:mb-4">
          <h2>{t.rich("contact.title", { br: () => <br /> })}</h2>
          <div className="flex justify-end">
            <div className="flex flex-col gap-4 lg:max-w-[496px]">
              <h5 className="leading-6 font-bold lg:text-xl text-base">
                {t("contact.desc")}
              </h5>
            </div>
          </div>
        </div>
        <div className="lg:pb-18 lg:pt-27 py-12">
          <ApplyForm
            title={t("contact.applyTitle")}
            desc={t("contact.applyDesc")}
          />
        </div>
      </div>
    </section>
  )
}
