"use client";

import { usePathname } from "next/navigation";
import css from "./Image.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LogoComponent() {
  const pathName = usePathname();

  return (
    <Link href="/" className={css.logoBox}>
      {pathName === "/" && (
        <Image
          src="/LogoHome.png"
          className={css.img}
          alt="Logo"
          width={32}
          height={32}
        />
      )}
      {pathName !== "/" && (
        <Image
          src="/Logo.png"
          className={css.img}
          alt="Logo"
          width={32}
          height={32}
        />
      )}
      <p className={`${css.logoText} ${pathName === "/" ? css.homeText : ""}`}>
        E-Pharmacy
      </p>
    </Link>
  );
}
