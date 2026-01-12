import { HomeBanner } from "@/components/HomeBanner"
import { getServicesEv } from "@/models/service"
import { ServiceFeatures, ServiceInfo } from "@/screen/service"
import { EffectorNext } from "@effector/next"
import { allSettled, fork, serialize } from "effector"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "BM Transco Services",
}

export default async function Services() {
  const t = await getTranslations()
  const scope = fork()

  await allSettled(getServicesEv, {
    scope,
    params: "en",
  })

  return (
    <EffectorNext values={serialize(scope)}>
      <HomeBanner
        title={t("service.homeTitle")}
        text={t("breadcrumb.title", { title: t("navigation.services") })}
      />
      <ServiceInfo />
      <ServiceFeatures />
    </EffectorNext>
  )
}
