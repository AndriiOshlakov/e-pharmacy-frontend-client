import { getNearestStores } from "@/lib/api/serverApi";
import StoreList from "../StoreList/StoreList";
import css from "./NearestStores.module.css";

export default async function NearestStores() {
  const stores = await getNearestStores();
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.subtitle}>Your Nearest Medicine Store</h2>
        <p className={css.text}>Search for Medicine, Filter by your location</p>
        <StoreList stores={stores} />
      </div>
    </section>
  );
}
