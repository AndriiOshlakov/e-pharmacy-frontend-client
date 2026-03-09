"use client";

import { usePathname } from "next/navigation";
import css from "./HeaderNavigation.module.css";
import Link from "next/link";

export default function HeaderNavigation() {
  const path = usePathname();
  return (
    <ul className={css.navList}>
      <li className={css.navListItem}>
        <Link className={path === "/" ? css.active : css.link} href="/">
          Home
        </Link>
      </li>
      <li className={css.navListItem}>
        <Link
          className={path === "/medicine-store" ? css.active : css.link}
          href="/medicine-store"
        >
          Medicine store
        </Link>
      </li>
      <li className={css.navListItem}>
        <Link
          className={path === "/medicine" ? css.active : css.link}
          href="/medicine"
        >
          Medicine
        </Link>
      </li>
    </ul>
  );
}
