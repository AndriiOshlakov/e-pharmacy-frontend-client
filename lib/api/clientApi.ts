import { LoginRequest, RegisterRequest } from "@/types/auth";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { RequestStore, ResponsetStore } from "@/types/store";
import { Product, ProductsRequest, ProductsResponse } from "@/types/product";
import { Cart, CartResponse } from "@/types/cart";
import { Order } from "@/types/order";

export async function registerUser(data: RegisterRequest) {
  const response = await nextServer.post<User>("/auth/register", data);

  return response.data;
}

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);

  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.post<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async (): Promise<User> => {
  const { data } = await nextServer.get<User>("/user/user-info");

  return data;
};

export const logout = async () => {
  await nextServer.post("/auth/logout");
};

export const getStoresClient = async ({ page, perPage }: RequestStore) => {
  const res = await nextServer.get<ResponsetStore>("/medicine-store", {
    params: { page, perPage },
  });

  return res.data;
};

export const getProductsClient = async ({
  page,
  perPage,
  category,
  search,
}: ProductsRequest) => {
  const res = await nextServer.get<ProductsResponse>("/medicine", {
    params: { page, perPage, category, search },
  });

  return res.data;
};

export const getSingleProductClient = async (id: string) => {
  const res = await nextServer.get<Product>(`/medicine/${id}`);

  return res.data;
};

export const addToCartClient = async (data: Cart) => {
  const res = await nextServer.put("/cart", { items: [data] });
  console.log(res.data);

  return res.data;
};

export const decreaseCartClient = async (data: Cart) => {
  const res = await nextServer.put("/cart/decrease", { items: [data] });
  console.log(res.data);

  return res.data;
};

export const getCart = async () => {
  const res = await nextServer.get<CartResponse>("/cart");
  return res.data;
};

export const removeFromCart = async (productId: string) => {
  const res = await nextServer.delete(`/cart/${productId}`);
  return res.data;
};

export const setOrder = async (data: Order) => {
  const res = await nextServer.post("/order", data);
  console.log(res.data);

  return res.data;
};
