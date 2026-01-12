import { Breadcrumb } from "@/components/Breadcrumb"
import { useTranslations } from "next-intl"

export const ServiceInfo = () => {
  const t = useTranslations()
  return (
    <section className="lg:pt-25 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <Breadcrumb title={t("title.ourServices")} />
        <div className="grid pt-8 lg:pb-7 lg:grid-cols-2 gap-8">
          <h2>{t.rich("service.title", { br: () => <br /> })}</h2>
          <div className="flex justify-end">
            <div className="flex flex-col gap-4 lg:max-w-[496px]">
              <h5 className="leading-6 font-bold text-xl">
                {t("service.subtitle")}
              </h5>
              <p className="text-base!">{t("service.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
