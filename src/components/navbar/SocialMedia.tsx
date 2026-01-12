import { getSocialMediaIcon, socialMediaList } from "@/data/social-media"

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-4">
      {socialMediaList.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
          >
            {getSocialMediaIcon(item.type)}
          </a>
        </li>
      ))}
    </ul>
  )
}
