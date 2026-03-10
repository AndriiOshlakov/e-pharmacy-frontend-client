import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { Store } from "@/types/store";
import { Review } from "@/types/review";

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

export const getNearestStores = async () => {
  const res = await nextServer.get<Store[]>("/nearest");

  return res.data;
};

export const getreviews = async () => {
  const res = await nextServer.get<Review[]>("/reviews");
  console.log(res.data);

  return res.data;
};
