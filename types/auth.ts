export type RegisterRequest = {
  name?: string;
  phone?: string;
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
