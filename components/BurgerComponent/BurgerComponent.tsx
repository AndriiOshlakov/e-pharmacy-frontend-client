"use client";

import { useState } from "react";
import css from "./BurgerComponent.module.css";
import Popup from "../Popup/Popup";
import { usePathname } from "next/navigation";

export default function BurgerComponent() {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${css.burgerBtn} ${pathName === "/" ? css.homeBurger : ""}`}
      >
        <svg width={32} height={26} className={css.icon}>
          <use href="/symbol-defs.svg#burger" />
        </svg>
      </button>
      <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
