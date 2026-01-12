import { quoteApi } from "@/api"
import { createEffect } from "effector"

export const createQuoteRequestFx = createEffect({
  handler: quoteApi.createQuote,
})
