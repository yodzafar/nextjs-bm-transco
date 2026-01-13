import { IContactFormCreate } from "@/models/contact";
import { axiosInstance } from "@/shared/api";

export const contactApi = {
  sendContact: (data: IContactFormCreate) =>
    axiosInstance.post(`/contact-form`, data),
};
