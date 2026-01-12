import { IService } from "@/models/service"
import { axiosInstance } from "@/shared/api"

export const serviceApi = {
  getServices: () => axiosInstance.get<IService[]>(`/services/`),
}
