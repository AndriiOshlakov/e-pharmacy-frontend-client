import { Product } from "./product";

export interface Cart {
  productId: string;
  quantity: number;
  price: number;
  photo: string;
}

export interface FullCart {
  productId: Product;
  quantity: number;
  price: number;
  photo: string;
}

export interface CartResponse {
  _id: string;
  userId: string;
  items: FullCart[];
}
