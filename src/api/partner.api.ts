import { IPartner } from "@/models/partner"
import { axiosInstance } from "@/shared/api"

export const partnerApi = {
  getPartners: () => axiosInstance.get<IPartner[]>("/partners/"),
}
