import { serviceApi } from "@/api"
import { createEffect, createEvent, createStore, sample } from "effector"
import { IService } from "./type"

// Effects
export const fetchServicesFx = createEffect({
  handler: serviceApi.getServices,
})

// Events
export const getServicesEv = createEvent()

// Stores
export const $services = createStore<IService[]>([], { sid: "services-store" })

// Stores Modifying
$services.on(fetchServicesFx.doneData, (_, { data }) => data)

// Samples
sample({
  clock: getServicesEv,
  target: fetchServicesFx,
})
