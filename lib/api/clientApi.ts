import { LoginRequest, RegisterRequest } from "@/types/auth";
import { nextServer } from "./api";
import { User } from "@/types/user";

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
