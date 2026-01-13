import { IQuoteRequestCreate } from "@/models/quote";
import { axiosInstance } from "@/shared/api";

export const quoteApi = {
  createQuote: (data: IQuoteRequestCreate) =>
    axiosInstance.post("/freight-quote", data),
};
