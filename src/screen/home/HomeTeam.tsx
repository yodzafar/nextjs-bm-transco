"use client"
import { ApplyForm } from "@/components/ApplyForm"
import { Modal } from "@/components/ui/Modal"
import { PrimaryButton } from "@/components/ui/PrimaryButton"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"

export const HomeTeam = () => {
  const t = useTranslations()
  const [isOpenRequest, setIsOpenRequest] = useState(false)
  return (
    <>
      <Modal
        isOpen={isOpenRequest}
        onClose={() => setIsOpenRequest(false)}
        size="responsive"
      >
        <div className="container mx-auto">
          <ApplyForm
            isModal
            title="Apply to drive with us"
            desc="Fill our the form below, and our team will get you back to you with a customized quote for your logistics needs"
          />
        </div>
      </Modal>
      <section className="lg:pt-20 lg:pb-25 py-12 bg-secondary px-4">
        <div className="container mx-auto">
          <h2 className="text-center mb-6">{t("title.teamDrivers")}</h2>
          <div className="lg:max-w-[847px] mx-auto lg:mb-20 mb-12">
            <p className="text-center text-secondary-foreground text-lg leading-8">
              {t("text.teamDrivers")}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-14">
            {list.map((item, key) => (
              <div
                className="lg:col-span-3 md:col-span-4 col-span-12 flex flex-col items-center text-center p-8 gap-6 rounded-lg bg-white"
                key={key}
              >
                <Image
                  src={`/images/team-ico-${key + 1}.png`}
                  alt={`team-ico-${key + 1}.png`}
                  width={100}
                  height={100}
                  className="w-[100px] h-auto"
                />
                <h6 className="font-medium lg:text-2xl text-base leading-9 max-w-[240px]">
                  {item}
                </h6>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <PrimaryButton
              onClick={() => setIsOpenRequest(true)}
              className="min-w-[200px]"
            >
              {t("navigation.contactUs")}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}

const list = [
  "24/7 nonstop driving – faster delivery times",
  "Experienced CDL drivers with clean records",
  "Equipped trucks and full compliance with FMCSA/DOT regulations",
  "Flexible lanes – regional & long haul",
]
