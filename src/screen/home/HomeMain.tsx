"use client";
import { ApplyForm } from "@/components/ApplyForm";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { QuoteForm } from "@/components/QuoteForm";
import { Modal } from "@/components/ui/Modal";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { $siteSettings } from "@/models/settings";
import { useUnit } from "effector-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export const HomeMain = () => {
  const [isOpenQuote, setIsOpenQuoute] = useState(false);
  const [isOpenRequest, setIsOpenRequest] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const [siteSettings] = useUnit([$siteSettings]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <Modal
        isOpen={isOpenQuote}
        onClose={() => setIsOpenQuoute(false)}
        size="responsive"
      >
        <div className="container mx-auto">
          <QuoteForm />
        </div>
      </Modal>
      <div className="relative">
        <div className="relative home-height text-white">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/65 z-2" />
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

        <div className="px-4 sm:bg-transparent bg-secondary md:absolute left-0 right-0 top-0 bottom-0 z-2 md:text-white">
          <div className="container flex flex-col mx-auto md:pt-8 pt-6 h-full relative z-3">
            <div className="flex lg:grow md:mt-[14%] lg:mt-0 flex-col justify-center">
              {mounted ? (
                <h1 className="sm:mb-8 mb-4 whitespace-pre-line">
                  {siteSettings?.homepage_title}
                </h1>
              ) : null}
              {mounted ? (
                <p className="text-xl md:max-w-132.5 leading-8 lg:mb-0 md:mb-12 mb-6">
                  {siteSettings?.homepage_description}
                </p>
              ) : null}
            </div>
            <div className="lg:mt-auto flex items-center lg:gap-8 gap-4 lg:mb-10 md:mb-[25%] mb-6">
              <div className="flex items-center gap-4">
                <span className="font-lexend-exa inline-block min-w-20 text-2xl sm:text-[42px] sm:leading-13 font-bold">
                  <CountUp
                    startVal={1}
                    delay={0.3}
                    end={siteSettings?.partner_count || 0}
                    suffix="+"
                  />
                </span>
                <p className="md:opacity-70! opacity-100! leading-6">
                  {t.rich("partner.trusted", { br: () => <br /> })}
                </p>
              </div>
              <div className="h-8 w-px sm:bg-white/30 bg-[#A0A0A0]" />
              <div className="flex items-center gap-4">
                <span className="font-lexend-exa inline-block min-w-20 text-2xl sm:text-[42px] sm:leading-13 font-bold">
                  <CountUp
                    startVal={1}
                    delay={0.3}
                    end={siteSettings?.driver_count || 0}
                    suffix="+"
                  />
                </span>
                <p className="sm:opacity-70! opacity-100! leading-6">
                  {t.rich("driver.trusted", { br: () => <br /> })}
                </p>
              </div>
            </div>
            <div className="flex items-center sm:gap-5 gap-4 sm:mb-12">
              <PrimaryButton
                onClick={() => setIsOpenRequest(true)}
                className="md:w-auto w-1/2"
              >
                {t("action.driveWithUs")}
              </PrimaryButton>
              <SecondaryButton
                className="border-foreground/45 md:border-white/12 text-foreground md:hover:border-white/70 md:text-white md:w-auto w-1/2 hover:border-foreground"
                onClick={() => setIsOpenQuoute(true)}
              >
                <span>{t("action.getQuote")}</span>
                <ArrowRight className="ml-1" />
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
