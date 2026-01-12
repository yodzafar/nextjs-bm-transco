import { getPartnersEv } from "@/models/partner"
import { getServicesEv } from "@/models/service"
import { getSiteSettingsEv } from "@/models/settings"
import {
  DriveWithUs,
  FAQ,
  HomeAbout,
  HomeMain,
  HomeService,
  HomeTeam,
} from "@/screen/home"
import { HomePartner } from "@/screen/home/HomePartner"
import { EffectorNext } from "@effector/next"
import { allSettled, fork, serialize } from "effector"

// app/layout.js
export const metadata = {
  title: "BM Transco — Reliable Freight & Logistics Solutions in the USA",
  description:
    "BM Transco provides fast and reliable logistics, freight, and trucking services across the USA. We specialize in nationwide delivery, warehouse management, and customized transport solutions.",
  keywords:
    "BM Transco, logistics company, freight, trucking, transportation, warehouse, cargo delivery, USA logistics, dispatch services",
  openGraph: {
    title: "BM Transco — Reliable Freight & Logistics Solutions in the USA",
    description:
      "Fast and trusted logistics & freight company based in Illinois, providing delivery, trucking, and warehouse services across the USA.",
    url: "https://www.bmtransco.com/",
    siteName: "BM Transco",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bmtransco.com/images/bm-transco-dark-full-logo.png",
        width: 1200,
        height: 630,
        alt: "BM Transco Logistics — USA Freight Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BM Transco — Reliable Freight & Logistics Solutions in the USA",
    description:
      "Fast and trusted logistics & freight company based in Illinois, providing delivery, trucking, and warehouse services across the USA.",
    images: ["https://www.bmtransco.com/images/bm-transco-dark-full-logo.png"],
    site: "@BMTransco",
  },
  alternates: {
    canonical: "https://www.bmtransco.com/",
  },
  metadataBase: new URL("https://www.bmtransco.com"),
}

export default async function Home() {
  const scope = fork()
  await allSettled(getSiteSettingsEv, { scope })
  await allSettled(getPartnersEv, { scope })
  await allSettled(getServicesEv, { scope })

  return (
    <EffectorNext values={serialize(scope)}>
      <HomeMain />
      <DriveWithUs />
      <HomeAbout />
      <HomeService />
      <HomePartner />
      <HomeTeam />
      <FAQ />
    </EffectorNext>
  )
}
