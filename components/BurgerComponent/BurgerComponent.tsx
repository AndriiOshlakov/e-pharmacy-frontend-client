"use client";

import { useState } from "react";
import css from "./BurgerComponent.module.css";
import Popup from "../Popup/Popup";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/lib/api/clientApi";

export default function BurgerComponent() {
  const { isAuthenticated } = useAuthStore();
  const user = useAuthStore((state) => state.user);
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const productsQuantity =
    data?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  return (
    <div className={css.wrapper}>
      {isAuthenticated && (
        <div className={css.box}>
          <Link href="/cart" className={css.basket}>
            <svg width={16} height={16}>
              <use href="/symbol-defs.svg#basket" />
            </svg>
            <div className={css.count}>{productsQuantity}</div>
          </Link>
          <div className={css.user}>{user?.name.slice(0, 1).toUpperCase()}</div>
        </div>
      )}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${css.burgerBtn} ${pathName === "/" ? css.homeBurger : ""}`}
      >
        <svg width={32} height={26} className={css.icon}>
          <use href="/symbol-defs.svg#burger" />
        </svg>
      </button>
      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
