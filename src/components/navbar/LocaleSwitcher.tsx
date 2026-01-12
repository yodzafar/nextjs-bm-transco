"use client"
import clsx from "clsx"
import { CheckIcon, ChevronDownIcon, MapIcon } from "../icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { useOutsideClicker } from "@/hooks/useOutsideClicker"
import { useLocale } from "next-intl"

export const LocaleSwitcher = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const ref = useOutsideClicker({ onOutsideClick: () => setOpen(false) })
  const locale = useLocale()

  function replaceLocaleInPath(path: string, newLocale: string) {
    const segments = path.split("/")
    segments[1] = newLocale
    return segments.join("/") || "/"
  }

  const currentLocalName = useMemo(() => {
    return list.find((item) => item.locale === locale)?.shortTitle
  }, [locale])

  return (
    <>
      <style jsx>{`
        .box {
          box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
          box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      <div
        ref={ref}
        className="rounded-full text-white border border-white px-2 relative"
      >
        <div
          className="flex items-center h-10 cursor-pointer gap-2"
          onClick={() => setOpen(!open)}
        >
          <MapIcon className="w-5 h-5" />
          <span>{currentLocalName || ""}</span>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div
          className={clsx(
            "top-full lg:right-0 left-0 absolute bg-background rounded-xl p-1 box w-30 text-foreground mt-2 transition-all duration-300",
            open ? "visible, opacity-100" : "invisible opacity-0"
          )}
        >
          <ul>
            {list.map((item) => (
              <li key={item.locale} className="">
                <Link
                  href={replaceLocaleInPath(pathName, item.locale)}
                  className="px-3 flex gap-2 py-[5px] justify-between items-center rounded-md text-sm hover:bg-[#e3e3e3] transition-all duration-200"
                >
                  <span>{item.title}</span>
                  {locale === item.locale ? (
                    <span className="text-primary">
                      <CheckIcon />
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const list = [
  { locale: "uz", title: "Uzbek", shortTitle: "Uzb" },
  { locale: "en", title: "English", shortTitle: "Eng" },
  { locale: "ru", title: "Russian", shortTitle: "Rus" },
]
