import { LoginRequest, RegisterRequest } from "@/types/auth";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { RequestStore, ResponsetStore } from "@/types/store";
import { Product, ProductsRequest, ProductsResponse } from "@/types/product";

export async function register(data: RegisterRequest) {
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
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async (): Promise<User> => {
  const { data } = await nextServer.get<User>("/user/user-info");
  return data;
};

export const logout = async (): Promise<void> => {
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
  console.log(res.data);

  return res.data;
};

export const getSingleProductClient = async (id: string) => {
  const res = await nextServer.get<Product>(`/medicine/${id}`);
  console.log(res.data);

  return res.data;
};
