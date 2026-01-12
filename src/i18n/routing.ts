import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en"],

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: 'never',
})
