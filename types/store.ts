export interface Store {
  _id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
}

export interface RequestStore {
  page: number;
  perPage: number;
}
export interface ResponsetStore {
  page: number;
  perPage: number;
  totalPages: number;
  totalPharmacies: number;
  pharmacies: Store[];
}
