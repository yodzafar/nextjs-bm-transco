import axios from "axios"

const axiosInstance = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_HOST || "" // SSR da env dan oladi
      : "", // Browserda bo'sh, rewrites ishlaydi
  timeout: 10000,
})

axiosInstance.interceptors.request.use((config) => {
  if (config.url && !config.url.startsWith("/api")) {
    config.url = `/api${config.url}`
  }
  return config
})

export default axiosInstance
