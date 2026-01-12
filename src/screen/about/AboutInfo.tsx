import { Breadcrumb } from "@/components/Breadcrumb"
import { useTranslations } from "next-intl"

export const AboutInfo = () => {
  const t = useTranslations()
  return (
    <section className="lg:pt-25 sm:py-12 py-6 px-4">
      <div className="container mx-auto">
        <Breadcrumb title={t("navigation.about")} />
        <div className="grid lg:py-8 py-4 lg:grid-cols-2 lg:gap-8 gap-6 lg:mb-10 mb-4">
          <h2>{t.rich("about.title", { br: () => <br /> })}</h2>
          <div className="flex justify-end">
            <div className="flex flex-col gap-4 lg:max-w-[496px]">
              <h5 className="leading-6 font-bold md:text-xl text-base">
                {t("about.subtitle")}
              </h5>
              <p className="md:text-base!">{t("about.desc")}</p>
            </div>
          </div>
        </div>
        <div className="h-[600px] relative lg:mb-[-300px] mb-0 rounded-xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover absolute left-0 top-0"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
