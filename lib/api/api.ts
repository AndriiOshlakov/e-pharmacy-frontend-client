import axios from "axios";

const baseURL =
  (process.env.NEXT_PUBLIC_API_URL ||
    "https://e-pharmacy-backend-ng6r.onrender.com") + "/api";
export const nextServer = axios.create({
  baseURL,
  withCredentials: true,
});
nextServer.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // якщо 401 і ще не пробували refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await nextServer.post("/auth/session"); // refresh

        return nextServer(originalRequest); // повторити запит
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
