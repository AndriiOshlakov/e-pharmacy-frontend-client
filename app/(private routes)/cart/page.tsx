"use client";

import Container from "@/components/Container/Container";
import css from "./Cart.module.css";
import { useState } from "react";
import { useAuthStore } from "@/lib/store/authStore";
import {
  addToCartClient,
  decreaseCartClient,
  getCart,
  removeFromCart,
  setOrder,
} from "@/lib/api/clientApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Order } from "@/types/order";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";

export default function Cart() {
  const user = useAuthStore((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [activeRadio, setActiveRadio] = useState(true);

  const queryClient = useQueryClient();

  const { mutate: removeItem } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: addToCart } = useMutation({
    mutationFn: addToCartClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: decreaseCart } = useMutation({
    mutationFn: decreaseCartClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { data: list } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const total =
    list?.items?.reduce((sum, item) => sum + item.price * item.quantity, 0) ||
    0;

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: setOrder,
    onSuccess: () => {
      toast.success(
        "Ви вдало зробили замовлення. Наші менеджери скоро з вами зв`яжуться.",
      );

      // очистити кошик після замовлення
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(
        error.response?.data?.message || "❌ Всі поля мають бути заповнені.",
      );
    },
  });

  const handleSubmit = (data: Order) => {
    if (list?.items.length === 0) {
      return toast("Щоб зробити замовдення оберіть товар.");
    }
    if (data.address === "") {
      return toast.error("Щоб зробити замовдення вкакжіть адресу.");
    }
    if (data.email === "") {
      return toast.error("Щоб зробити замовдення вкажіть електронну пошту.");
    }
    if (data.phone === "") {
      return toast.error("Щоб зробити замовдення вкажіть номер телефону.");
    }
    if (!data.phone.startsWith("+380")) {
      return toast.error("Телефон має починатись з +380...");
    }
    if (data.userName === "") {
      return toast.error("Щоб зробити замовдення вкажіть ім`я.");
    }
    createOrder(data);
  };

  return (
    <main className={css.cart}>
      <Toaster />
      <Container>
        <h1 className={css.title}>Cart</h1>
        <div className={css.container}>
          <div className={css.wrapper}>
            <h3 className={css.subtitle}>Enter shipping info </h3>
            <p className={css.text}>
              Enter your delivery address where you get the product. You can
              also send any other location where you send the products.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                handleSubmit({
                  email: email || "",
                  address,
                  phone: phone || "",
                  userName: name || "",
                });
              }}
            >
              <div className={css.inputsBox}>
                <label className={css.label}>
                  <p className={css.textLabel}> Name</p>
                  <input
                    type="text"
                    className={css.input}
                    placeholder="Enter text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className={css.label}>
                  <p className={css.textLabel}> Email</p>
                  <input
                    type="email"
                    className={css.input}
                    placeholder="Enter text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className={css.label}>
                  <p className={css.textLabel}> Phone</p>
                  <input
                    type="tel"
                    className={css.input}
                    placeholder="Enter text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label className={css.label}>
                  <p className={css.textLabel}> Address</p>
                  <input
                    type="text"
                    className={css.input}
                    placeholder="Enter text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
              </div>
              <div className={css.box}>
                <h3 className={css.payment}>Payment method</h3>
                <p className={css.paymentText}>
                  You can pay us in a multiple way in our payment gateway
                  system.
                </p>
                <div className={css.radioBox}>
                  <label
                    className={`${css.radio} ${!activeRadio ? css.notActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={activeRadio}
                      onChange={() => setActiveRadio(true)}
                    />
                    <div
                      className={`${activeRadio ? css.outside : css.disabled}`}
                    >
                      <div
                        className={`${activeRadio ? css.inside : css.disactive}`}
                      ></div>
                    </div>
                    Cash On Delivery
                  </label>
                  <label
                    className={`${css.radio} ${activeRadio ? css.notActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={!activeRadio}
                      onChange={() => setActiveRadio(false)}
                    />
                    <div
                      className={`${!activeRadio ? css.outside : css.disabled}`}
                    >
                      <div
                        className={`${!activeRadio ? css.inside : css.disactive}`}
                      ></div>
                    </div>
                    Bank
                  </label>
                </div>
              </div>
              <h3 className={css.order}>Order details </h3>
              <p className={css.orderText}>
                Shipping and additionnal costs are calculated based on values
                you have entered.
              </p>
              <div className={css.totalBox}>
                <p className={css.totalText}>Total:</p>
                <p className={css.totalText}>৳{Number(total.toFixed(2))}</p>
              </div>
              <button
                type="submit"
                className={css.submitBtn}
                disabled={isPending}
              >
                Place order
              </button>
            </form>
          </div>
          <ul className={css.list}>
            {list?.items.map((item) => (
              <li key={item.productId._id} className={css.listItem}>
                <Image
                  alt="Product image"
                  className={css.image}
                  src={item.photo}
                  width={120}
                  height={120}
                />
                <div className={css.listItemBox}>
                  <div className={css.listItemWrapper}>
                    <div>
                      <h3 className={css.productName}>{item.productId.name}</h3>
                      <p className={css.productText}>
                        {item.productId.category}
                      </p>
                    </div>
                    <p className={css.productPrice}>৳{item.price}</p>
                  </div>
                  <div className={css.productWrapper}>
                    <div className={css.productBox}>
                      <button
                        disabled={item.quantity === 1}
                        onClick={() =>
                          decreaseCart({
                            productId: item.productId._id,
                            price: Number(item.productId.price),
                            photo: item.photo,
                            quantity: 1,
                          })
                        }
                      >
                        <svg width={18} height={18}>
                          <use href="/symbol-defs.svg#minus" />
                        </svg>
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          addToCart({
                            productId: item.productId._id,
                            price: Number(item.productId.price),
                            photo: item.photo,
                            quantity: 1,
                          })
                        }
                      >
                        <svg width={18} height={18}>
                          <use href="/symbol-defs.svg#plus" />
                        </svg>
                      </button>
                    </div>
                    <button
                      className={css.removeBtn}
                      onClick={() => removeItem(item.productId._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}
