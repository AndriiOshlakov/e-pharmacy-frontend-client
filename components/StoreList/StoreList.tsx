import { Store } from "@/types/store";
import css from "./StoreList.module.css";
import StoreItem from "../StoreItem/StoreItem";

interface StoreListProps {
  stores: Store[];
}

export default function StoreList({ stores }: StoreListProps) {
  return (
    <ul className={css.storeList}>
      {stores.map((item) => (
        <li key={item._id}>
          <StoreItem store={item} />
        </li>
      ))}
    </ul>
  );
}
