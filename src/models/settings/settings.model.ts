import { createEffect, createEvent, createStore, sample } from "effector"
import { ISettings } from "./type"
import { siteSettingsApi } from "@/api"

// Effects
export const fetchSiteSettingsFx = createEffect({
  handler: siteSettingsApi.getSettings,
})

// Events
export const getSiteSettingsEv = createEvent()

// Stores
export const $siteSettings = createStore<ISettings | null>(null, {
  sid: "settings-store",
})

// Stores Modifying
$siteSettings.on(fetchSiteSettingsFx.doneData, (_, { data }) => data)

// Samples
sample({
  clock: getSiteSettingsEv,
  target: fetchSiteSettingsFx,
})
