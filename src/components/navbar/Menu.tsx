"use client"

import clsx from "clsx"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { navs, SocialMedia } from "."
import { LocationMountainIcon, LogoIcon, PhoneCircleIcon } from "../icons"

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const t = useTranslations()
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const body = document.body
    if (open) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "auto"
    }
    return () => {
      body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
      <div
        className={clsx("fixed top-0 left-0 right-0 lg:hidden z-30 p-4", {
          "bg-black/70": scrolled,
          "bg-transparent": !scrolled,
        })}
      >
        <div className="flex items-center justify-between">
          <div
            className={clsx("menu-burger", { open: open })}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link href="/" className="text-white">
            <LogoIcon
              className="w-[132px] h-[30px]"
              onClick={() => setOpen(false)}
            />
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          "fixed lg:hidden block bg-black text-white z-20 top-0 left-0 bottom-0 w-[300px]",
          open ? "translate-x-0" : "-translate-x-full",
          "transition-transform duration-300 ease-in-out pt-[80px] pb-6 max-h-screen"
        )}
      >
        <div className="overflow-y-auto flex flex-col px-4 gap-6 h-full">
          <Link href="/">
            <LogoIcon
              className="w-[132px] h-[30px]"
              onClick={() => setOpen(false)}
            />
          </Link>
          <ul className="inline-flex flex-col gap-4 mb-2">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={clsx(
                    " hover:text-primary transition leading-6",
                    "block text-base",
                    {
                      "text-primary font-bold": nav.href === pathname,
                    }
                  )}
                  onClick={() => setOpen(false)}
                >
                  {t(nav.title)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mb-2">
            <a
              href="https://www.google.com/maps/place/Rock+Run+Dr,+Crest+Hill,+IL+60403,+США/@41.5473329,-88.1427203,16.96z/data=!4m6!3m5!1s0x880e604d6a57b379:0x22f4703e6c24472!8m2!3d41.5473345!4d-88.1400601!16s%2Fg%2F1tfh_5b7?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
              className="inline-flex items-center gap-2"
              target="_blank"
            >
              <span className="text-primary w-6 h-6 flex items-center justify-center">
                <LocationMountainIcon />
              </span>
              <span className="text-xs max-w-40">
                520 Rock Run Dr Suite 4H, Crest Hill, IL 60403
              </span>
            </a>
            <a
              href="tel:+18722455555"
              className="inline-flex items-center gap-3"
            >
              <span className="text-primary flex w-6 h-6 items-center justify-center">
                <PhoneCircleIcon />
              </span>
              <span className="text-xs">+1 872-245-5555</span>
            </a>
          </div>
          {/* <div className="flex">
            <LocaleSwitcher />
          </div> */}
          <div className="mt-auto">
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  )
}
