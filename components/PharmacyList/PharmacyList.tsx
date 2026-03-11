import { Store } from "@/types/store";
import css from "./PharmacyList.module.css";
import PharmacyItem from "../PharmacyItem/PharmacyItem";

interface PharmacyListProps {
  pharmacies: Store[];
}

export default function PharmacyList({ pharmacies }: PharmacyListProps) {
  return (
    <ul className={css.storeList}>
      {pharmacies.map((item) => (
        <li key={item._id}>
          <PharmacyItem pharmacy={item} />
        </li>
      ))}
    </ul>
  );
}
