import { getSocialMediaIcon, socialMediaList } from "@/data/social-media"
import { ContactCard } from "./cards"
import { LocationIcon, MailIcon, PhoneIcon } from "./icons"
import { useTranslations } from "next-intl"

export const ContactInfoCard = () => {
  const t = useTranslations()
  return (
    <>
      <div className="lg:p-6 py-6 px-4 bg-secondary rounded-xl wrapper">
        <h4 className="lg:text-2xl text-xl font-bold leading-6 mb-12">
          {t("contact.information")}
        </h4>
        <div className="flex flex-col gap-8 mb-12">
          {list.map((item, key) => (
            <ContactCard
              title={t(item.title)}
              texts={item.texts}
              icon={item.icon}
              key={key}
            />
          ))}
        </div>
        <h6 className="text-base font-bold leading-5 mb-4">
          {t("contact.connectWithUs")}
        </h6>
        <div className="flex items-center gap-4">
          {socialMediaList.map((item, key) => (
            <a
              href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              key={key}
              className="text-primary rounded-full w-10 h-10 bg-white flex justify-center items-center"
            >
              {getSocialMediaIcon(item.type)}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

const list = [
  {
    title: "label.address",
    texts: [
      {
        title: "1520 Rock Run Dr Suite 4H, Crest Hill, IL 60403",
        href: "https://www.google.com/maps/place/1520+Rock+Run+Dr,+Crest+Hill,+IL+60403,+USA/@41.5502088,-88.1410926,17z/data=!3m1!4b1!4m6!3m5!1s0x880e60520c177a03:0x56ec0cb1279f0d6d!8m2!3d41.5502088!4d-88.1385177!16s%2Fg%2F11bw3w_7ts?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
    icon: <LocationIcon />,
  },
  {
    title: "label.phone",
    texts: [{ title: "+1 872-245-5555", href: "tel:+18722455555" }],
    icon: <PhoneIcon />,
  },
  {
    title: "label.email",
    texts: [
      {
        title: "Distpatch@bmtransco.com",
        href: "mailto:Distpatch@bmtransco.com",
      },
      { title: "safety@bmtransco.com", href: "mailto:safety@bmtransco.com" },
      {
        title: "shakhriyor@bmtransco.com",
        href: "mailto:shakhriyor@bmtransco.com",
      },
    ],
    isLink: true,
    icon: <MailIcon />,
  },
  {
    title: "label.hoursOfOperation",
    texts: [
      { title: "Monday - Friday 8:00 AM - 6:00 PM" },
      { title: "Saturday: 9 AM - 2:00 PM" },
      { title: "Sunday: Closed" },
    ],
    icon: <MailIcon />,
  },
]
