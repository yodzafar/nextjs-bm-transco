import { contactApi } from "@/api/contact"
import { createEffect } from "effector"

export const createContactFormFx = createEffect({
  handler: contactApi.sendContact,
})
