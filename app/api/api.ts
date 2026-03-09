import axios from "axios";

export const api = axios.create({
  baseURL: "https://e-pharmacy-backend-ng6r.onrender.com/api",
  withCredentials: true,
});
