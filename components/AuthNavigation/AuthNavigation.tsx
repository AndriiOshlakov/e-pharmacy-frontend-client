"use client";

import Link from "next/link";
import css from "./AuthNavigation.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/api/clientApi";

export default function AuthNavigation() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );
  const pathName = usePathname();

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/login");
  };

  return isAuthenticated ? (
    <>
      <button className={css.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </>
  ) : (
    <div className={css.authBox}>
      <Link
        href="/register"
        prefetch={false}
        className={`${css.register} ${pathName === "/" ? css.registerHome : ""}`}
      >
        Register
      </Link>

      <Link
        href="/login"
        prefetch={false}
        className={`${css.login} ${pathName === "/" ? css.loginHome : ""}`}
      >
        Login
      </Link>
    </div>
  );
}
