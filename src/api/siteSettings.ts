import { ISettings } from "@/models/settings"
import { axiosInstance } from "@/shared/api"

export const siteSettingsApi = {
  getSettings: () => axiosInstance.get<ISettings>(`/site-settings/`),
}
