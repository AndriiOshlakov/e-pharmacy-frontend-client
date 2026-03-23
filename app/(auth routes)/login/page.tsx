"use client";

import { useRouter } from "next/navigation";
import css from "./SignInPage.module.css";
import { useState } from "react";
import { login } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import LogoComponent from "@/components/Image/Image";
import Image from "next/image";
import * as yup from "yup";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData } from "@/types/user";
import { AxiosError } from "axios";

type ApiError = AxiosError<{ error: string }>;

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email",
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});

export default function SignIn() {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);

  const togglePassword = () => setIsPassword(!isPassword);
  const setUser = useAuthStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await login({
        email: data.email,
        password: data.password,
      });

      if (user) {
        setUser(user);
      }

      toast(`${user.name} logined successfuly`);

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
    <main className={css.mainContent}>
      <Toaster />
      <div className={css.container}>
        <div className={css.logoBox}>
          <LogoComponent />
        </div>
        <Image
          width={95}
          height={93}
          alt="Pill"
          src="/pill.png"
          className={css.pill}
        />
        <Image
          width={179}
          height={175}
          alt="Pill"
          src="/pillTab.png"
          className={css.pillTab}
        />
        <div className={css.wrapper}>
          <h1 className={css.formTitle}>
            Your medication, delivered Say goodbye to all
            <span> your healthcare</span> worries with us
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
            <button type="submit" disabled={isSubmitting} className={css.btn}>
              Log in
            </button>
          </form>
        </div>

        <Link href={"/register"} className={css.link}>
          Do not have an account?
        </Link>
      </div>
    </main>
  );
}
