import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { RequestStore, ResponsetStore, Store } from "@/types/store";
import { Review } from "@/types/review";
import { Product, ProductsRequest, ProductsResponse } from "@/types/product";

export const getMeServer = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<User>("/user/user-info", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};

export async function refreshServerSession() {
  const cookieStore = await cookies();
  const response = await nextServer.post("/auth/refresh", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
}

export const getNearestStores = async () => {
  const res = await nextServer.get<Store[]>("/nearest");

  return res.data;
};

export const getreviews = async () => {
  const res = await nextServer.get<Review[]>("/reviews");

  return res.data;
};

export const getStores = async ({ page, perPage }: RequestStore) => {
  const res = await nextServer.get<ResponsetStore>("/medicine-store", {
    params: { page, perPage },
  });

  return res.data;
};

export const getProducts = async ({
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

export const getSingleProduct = async (id: string) => {
  const res = await nextServer.get<Product>(`/medicine/${id}`);
  console.log(res.data);

  return res.data;
};
