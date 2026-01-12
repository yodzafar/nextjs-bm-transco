"use client"
import clsx from "clsx"
import { LogoIcon } from "../icons"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const navs = [
  { title: "navigation.home", href: "/" },
  { title: "navigation.about", href: "/about" },
  { title: "navigation.services", href: "/services" },
  // { title: "navigation.drive", href: "/contacts" },
  { title: "navigation.contactUs", href: "/contacts" },
]

type Props = {
  hideLogo?: boolean
  uppercase?: boolean
}

export const Navigation = ({ hideLogo, uppercase }: Props) => {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <div className="flex items-center text-white">
      {!hideLogo ? (
        <Link href="/" className="inline-block mr-12">
          <LogoIcon className="h-[30px] w-[132px]" />
        </Link>
      ) : null}

      <ul className="flex sm:flex-nowrap flex-wrap items-center sm:gap-12 gap-4">
        {navs.map((nav, index) => (
          <li key={index}>
            <Link
              href={nav.href}
              className={clsx("hover:text-primary transition text-base", {
                uppercase: uppercase,
                "text-primary font-bold": nav.href === pathname,
              })}
            >
              {t(nav.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
