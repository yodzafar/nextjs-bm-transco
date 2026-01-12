import { HomeBanner } from "@/components/HomeBanner"
import { getSiteSettingsEv } from "@/models/settings"
import { getPartnersEv } from "@/models/partner"
import { AboutInfo, AboutJourney, AboutMission } from "@/screen/about"
import { EffectorNext } from "@effector/next"
import { allSettled, fork, serialize } from "effector"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "About BM Transco",
}

export default async function About() {
  const t = await getTranslations()
  const scope = fork()
  await allSettled(getSiteSettingsEv, { scope })
  await allSettled(getPartnersEv, { scope })
  return (
    <EffectorNext values={serialize(scope)}>
      <HomeBanner
        title={t("about.homeTitle")}
        text={t("breadcrumb.title", { title: t("navigation.about") })}
      />
      <AboutInfo />
      <AboutMission />
      <AboutJourney />
    </EffectorNext>
  )
}
