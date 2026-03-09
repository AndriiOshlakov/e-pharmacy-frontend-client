"use client";

import AuthNavigation from "../AuthNavigation/AuthNavigation";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import css from "./Popup.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: Props) {
  return (
    isOpen && (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <button onClick={onClose} className={css.closeBtn}>
            <svg width={32} height={32}>
              <use href="/symbol-defs.svg#x" />
            </svg>
          </button>
          <HeaderNavigation />
          <AuthNavigation />
        </div>
      </div>
    )
  );
}
