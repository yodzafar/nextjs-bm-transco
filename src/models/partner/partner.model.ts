import { partnerApi } from "@/api/partner.api"
import { createEffect, createEvent, createStore, sample } from "effector"
import { IPartner } from "./type"

// Effects
export const fetchPartnersFx = createEffect({
  handler: partnerApi.getPartners,
})

// Events
export const getPartnersEv = createEvent()

// Stores
export const $partners = createStore<IPartner[]>([], { sid: "partners" })

// Stores Modifying
$partners.on(fetchPartnersFx.doneData, (_, { data }) => data)

// Samples
sample({
  clock: getPartnersEv,
  target: fetchPartnersFx,
})
