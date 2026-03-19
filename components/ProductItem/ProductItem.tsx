"use client";

import Image from "next/image";
import css from "./ProductItem.module.css";
import { Product } from "@/types/product";
import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";
import { useState } from "react";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Cart } from "@/types/cart";
import { addToCartClient } from "@/lib/api/clientApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const { isAuthenticated } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: addToCart } = useMutation({
    mutationFn: addToCartClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleAddToCart = (item: Cart) => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
    addToCart(item);
  };
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
          <button
            className={css.btn}
            onClick={() =>
              handleAddToCart({
                productId: product._id,
                price: Number(product.price),
                photo: product.photo,
                quantity: 1,
              })
            }
          >
            Add to cart
          </button>
          <Link href={`/medicine/${product._id}`} className={css.link}>
            Details
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <RegisterForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
