"use client"

import { useCallback, useEffect, useState } from "react"
import { Navigation } from "./Navigation"
import { SocialMedia } from "./SocialMedia"
import clsx from "clsx"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div
      className={clsx(
        "fixed top-(--header-height) z-20 right-0 left-0 px-4 py-6 transition-all duration-300 lg:block hidden",
        scrolled ? "bg-black/70 top-0" : "bg-transparent top-(--header-height)"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Navigation />
        <div className="flex items-center gap-6">
          <SocialMedia />
          {/* <LocaleSwitcher /> */}
        </div>
      </div>
    </div>
  )
}
