import { useTranslations } from "next-intl"
import { LocationIcon, LogoIcon, PhoneIcon } from "../icons"
import { Navigation, SocialMedia } from "../navbar"

export const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="bg-black lg:py-[72px] py-12 mt-auto px-4">
      <div className="container mx-auto border-t border-white/30 text-white">
        <div className="flex sm:flex-nowrap flex-wrap justify-between lg:pt-[70px] pt-10 pb-6">
          <div>
            <LogoIcon className="h-16 w-[236px] sm:mb-8 mb-4" />
            <p className="sm:max-w-[310px] text-sm! mb-10 opacity-100!">
              {t("text.footerDesc")}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 mb-10">
              <a
                href="https://www.google.com/maps/place/1520+Rock+Run+Dr,+Crest+Hill,+IL+60403,+USA/@41.5502088,-88.1410926,17z/data=!3m1!4b1!4m6!3m5!1s0x880e60520c177a03:0x56ec0cb1279f0d6d!8m2!3d41.5502088!4d-88.1385177!16s%2Fg%2F11bw3w_7ts?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                className="flex items-center text-sm gap-4"
              >
                <LocationIcon />
                <span>1520 Rock Run Dr Suite 4H, Crest Hill, IL 60403</span>
              </a>
              <a
                href="tel:+18722455555"
                className="flex items-center text-sm gap-4"
              >
                <PhoneIcon />
                <span>+1 872-245-5555</span>
              </a>
            </div>
            <div>
              <p className="text-sm! mb-5">{t("text.socialMedia")}</p>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 flex flex-wrap justify-between items-center sm:pt-8 pt-6 gap-8">
          <Navigation hideLogo uppercase />
          <span className="text-sm opacity-80 block sm:text-right text-center sm:w-auto w-full">
            {t("text.footerCopyright")}
          </span>
        </div>
      </div>
    </footer>
  )
}
