"use client";

import { useRouter } from "next/navigation";
import css from "./RegisterForm.module.css";
import { useState } from "react";
import { registerUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import * as yup from "yup";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationFormData } from "@/types/user";
import { AxiosError } from "axios";

type ApiError = AxiosError<{ error: string }>;

const registrationSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    ),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\+38\d{10}$/, "Invalid phone,it should start +380..."),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});

interface RegisterFormProps {
  onClose: () => void;
}

export default function RegisterForm({ onClose }: RegisterFormProps) {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);

  const togglePassword = () => setIsPassword(!isPassword);
  const setUser = useAuthStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const user = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      if (user) {
        setUser(user);
      }

      toast(`${user.name} registered successfuly`);

      router.push("/cart");
    } catch (error) {
      toast(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Registration falls",
      );
    }
  };
  const passwordValue = watch("password");
  return (
    <div className={css.box}>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width={20} height={20}>
          <use href="/symbol-defs.svg#x" />
        </svg>
      </button>
      <h2 className={css.title}>Sign Up</h2>
      <p className={css.text}>
        Before proceeding, please register on our site.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.label}>
          <input
            placeholder="User Name"
            {...register("name")}
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
          />
          {errors.name && (
            <p style={{ color: "#ef2447" }}>{errors.name.message}</p>
          )}
        </label>
        <label className={css.label}>
          <input
            placeholder="Email address"
            {...register("email")}
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
          />
          {errors.email && (
            <p style={{ color: "#ef2447" }}>{errors.email.message}</p>
          )}
        </label>
        <label className={css.label}>
          <input
            placeholder="Phone number"
            {...register("phone")}
            className={`${css.input} ${errors.phone ? css.inputError : ""}`}
          />
          {errors.phone && (
            <p style={{ color: "#ef2447" }}>{errors.phone.message}</p>
          )}
        </label>
        <label className={css.label}>
          <input
            type={isPassword ? "password" : "text"}
            placeholder="Password"
            {...register("password")}
            className={`${css.input} ${errors.password ? css.inputError : ""}  ${!errors.password && passwordValue?.length >= 7 ? css.inputSuccess : ""}`}
          />
          {!isPassword && (
            <svg
              className={css.eye}
              width={18}
              height={18}
              onClick={togglePassword}
            >
              <use href="/symbol-defs.svg#eye-off" />
            </svg>
          )}
          {isPassword && (
            <svg
              className={css.eye}
              width={18}
              height={18}
              onClick={togglePassword}
            >
              <use href="/symbol-defs.svg#eye" />
            </svg>
          )}
          {errors.password && (
            <p style={{ color: "#ef2447" }}>{errors.password.message}</p>
          )}
        </label>
        <div className={css.wrapper}>
          <button type="submit" disabled={isSubmitting} className={css.btn}>
            Sign Up
          </button>
          <Link href={"/login"} className={css.link}>
            Already have an account?
          </Link>
        </div>
        <Toaster />
      </form>
    </div>
  );
}
