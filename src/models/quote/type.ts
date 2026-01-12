export interface IQuoteRequestCreate {
  fullName: string
  email: string
  phone: string
  company?: string
  equipment: string
  trailerType: string
  commodity: string
  weight: string
  description: string
  pickupZipCode: string
  pickupDate: Date
  deliveryZipCode: string
  deliveryDate: Date
}
