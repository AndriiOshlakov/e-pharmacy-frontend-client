"use client";

import { usePathname } from "next/navigation";
import css from "./HeaderWrapper.module.css";

interface Props {
  children: React.ReactNode;
}

export default function HeaderWrapper({ children }: Props) {
  const pathName = usePathname();
  return (
    <div
      className={`${css.wrapper} ${pathName === "/" ? css.homeWrapper : ""}`}
    >
      {children}
    </div>
  );
}
