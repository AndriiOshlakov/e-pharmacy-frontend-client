export interface User {
  email: string;
  name: string;
  phone?: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}
