import { Store } from "@/types/store";
import css from "./StoreItem.module.css";

interface StoreItemProps {
  store: Store;
}

export default function StoreItem({ store }: StoreItemProps) {
  return (
    <div className={css.storeBox}>
      <div>
        <h3 className={css.subtitle}>
          {store.name.trim().length > 15
            ? store.name.slice(0, 12) + "..."
            : store.name}
        </h3>
        <div className={css.box}>
          <svg className={css.icon} width={18} height={18}>
            <use href="/symbol-defs.svg#map-pin" />
          </svg>
          <div className={css.textBox}>
            <p className={css.text}>{store.address}</p>
            <p className={css.text}>{store.city}</p>
          </div>
        </div>
        <div className={css.wrapper}>
          <svg className={css.icon} width={18} height={18}>
            <use href="/symbol-defs.svg#phone" />
          </svg>
          <p className={css.text}>{store.phone}</p>
        </div>
      </div>
      <div className={css.ratingWrapper}>
        <div className={css.ratingBox}>
          <svg width={16} height={16} className={css.star}>
            <use href="/symbol-defs.svg#star" />
          </svg>
          <p className={css.rating}>{store.rating}</p>
        </div>
        <div className={css.timeBox}>OPEN</div>
      </div>
    </div>
  );
}
