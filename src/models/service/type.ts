export interface IService {
  id: number
  name: string
  caption: string
  description: string
  icon_url: string
  is_active: boolean
  created_at: string
  updated_at: string
  items: IServiceFeature[]
}

export interface IServiceFeature {
  id: number
  title: string
}
