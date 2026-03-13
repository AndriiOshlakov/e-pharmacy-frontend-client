import { Product } from "@/types/product";
import css from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <ul className={css.list}>
      {products.map((item) => (
        <li key={item._id}>{<ProductItem product={item} />}</li>
      ))}
    </ul>
  );
}
