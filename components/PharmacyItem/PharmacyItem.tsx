import { Store } from "@/types/store";
import css from "./PharmacyItem.module.css";
import Link from "next/link";

interface PharmacyItemProps {
  pharmacy: Store;
}

export default function PharmacyItem({ pharmacy }: PharmacyItemProps) {
  return (
    <div className={css.storeBox}>
      <div className={css.leftBox}>
        <h3 className={css.subtitle}>
          {pharmacy.name.trim().length > 15
            ? pharmacy.name.slice(0, 12) + "..."
            : pharmacy.name}
        </h3>
        <div className={css.box}>
          <svg className={css.icon} width={18} height={18}>
            <use href="/symbol-defs.svg#map-pin" />
          </svg>
          <div className={css.textBox}>
            <p className={css.text}>{pharmacy.address}</p>
            <p className={css.text}>{pharmacy.city}</p>
          </div>
        </div>
        <div className={css.wrapper}>
          <svg className={css.icon} width={18} height={18}>
            <use href="/symbol-defs.svg#phone" />
          </svg>
          <p className={css.text}>{pharmacy.phone}</p>
        </div>
        <Link href="#" className={css.link}>
          Visit Store
        </Link>
      </div>
      <div className={css.ratingWrapper}>
        <div className={css.ratingBox}>
          <svg width={16} height={16} className={css.star}>
            <use href="/symbol-defs.svg#star" />
          </svg>
          <p className={css.rating}>{pharmacy.rating}</p>
        </div>
        <div className={css.timeBox}>OPEN</div>
      </div>
    </div>
  );
}
