import { HomeBanner } from "@/components/HomeBanner"
import { ContactInfo } from "@/screen/contacts"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "BM Transco Contact Us",
}

export default async function Contacts() {
  const t = await getTranslations()
  return (
    <>
      <HomeBanner
        title={t("contact.homeTitle")}
        text={t("breadcrumb.title", { title: t("navigation.contactUs") })}
      />
      <ContactInfo />
    </>
  )
}
