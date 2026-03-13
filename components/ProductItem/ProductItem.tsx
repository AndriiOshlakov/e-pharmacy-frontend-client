import Image from "next/image";
import css from "./ProductItem.module.css";
import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  return (
    <div className={css.product}>
      <Image
        src={product.photo}
        className={css.img}
        width={335}
        height={300}
        alt="Product image"
      />
      <div className={css.box}>
        <div className={css.wrapper}>
          <p className={css.text}>{product.name.slice(0, 14)}</p>
          <p className={css.text}>৳{product.price}</p>
        </div>
        <div className={css.wrapper}>
          <button className={css.btn}>Add to cart</button>
          <Link href={`/medicine/${product._id}`} className={css.link}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
