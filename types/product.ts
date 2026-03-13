export interface Product {
  _id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category:
    | "Medicine"
    | "Heart"
    | "Head"
    | "Hand"
    | "Leg"
    | "Dental Care"
    | "Skin Care"
    | "";
}

export type Category =
  | "Medicine"
  | "Heart"
  | "Head"
  | "Hand"
  | "Leg"
  | "Dental Care"
  | "Skin Care"
  | "";

export interface ProductsRequest {
  page: number;
  perPage: number;
  search?: string;
  category?:
    | "Medicine"
    | "Heart"
    | "Head"
    | "Hand"
    | "Leg"
    | "Dental Care"
    | "Skin Care"
    | "";
}
export interface ProductsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalProducts: number;
  products: Product[];
}
