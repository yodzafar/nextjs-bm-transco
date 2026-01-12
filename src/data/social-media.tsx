import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "@/components/icons"

export const socialMediaList = [
  { type: "whatsapp", href: "https://wa.me/18722455555" },
  { type: "telegram", href: "https://t.me/bmtransco" },
  { type: "instagram", href: "https://www.instagram.com/bmtransco" },
  { type: "linkedin", href: "https://www.linkedin.com/company/bmtransco" },
]

export const getSocialMediaIcon = (type: string) => {
  switch (type) {
    case "whatsapp":
      return <WhatsappIcon />
    case "telegram":
      return <TelegramIcon />
    case "instagram":
      return <InstagramIcon />
    case "linkedin":
      return <LinkedinIcon />
    default:
      return <></>
  }
}
