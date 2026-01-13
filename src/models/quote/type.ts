export interface IQuoteRequestCreate {
  full_name: string;
  email: string;
  company?: string;
  equipment: string;
  trailer_type: string;
  commodity: string;
  weight: string;
  description: string;
  pickup_zip_code: string;
  dropoff_zip_code: string;
  pickup_date: string;
  dropoff_date: string;
}
