"use client";

import { useParams } from "next/navigation";
import css from "./SingleMedicine.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSingleProductClient } from "@/lib/api/clientApi";
import Container from "@/components/Container/Container";
import Image from "next/image";
import { useState } from "react";

export default function SingleMedicineClient() {
  const [quantity, setQuantity] = useState(1);
  const [isDescription, setIsDescription] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProductClient(id),
    refetchOnMount: false,
  });
  return (
    <Container>
      {data && (
        <div className={css.box}>
          <div className={css.productWrapper}>
            <Image
              width={335}
              height={337}
              src={data?.photo}
              alt="Medicine photo"
              className={css.img}
            />
            <div className={css.wrapper}>
              <div className={css.container}>
                <p className={css.text}>{data.name}</p>
                <p className={css.text}>৳{data.price}</p>
              </div>
              <div className={css.containerQuan}>
                <div className={css.quantityBox}>
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity === 1}
                    className={css.btn}
                  >
                    -
                  </button>
                  <p className={css.quantity}>{quantity}</p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={css.btn}
                  >
                    +
                  </button>
                </div>
                <button className={css.button}>Add to cart</button>
              </div>
            </div>
          </div>
          <div className={css.descriptionBox}>
            <div className={css.btnsBox}>
              <button
                onClick={() => setIsDescription(true)}
                className={`${css.descr} ${isDescription ? css.active : ""}`}
              >
                Description
              </button>
              <button
                onClick={() => setIsDescription(false)}
                className={`${css.descr} ${!isDescription ? css.active : ""}`}
              >
                Reviews
              </button>
            </div>
            {isDescription && (
              <div className={css.textBox}>
                <p className={css.subText}>
                  Although it is typically considered safe, excessive
                  consumption can lead to side effects. Therefore, it is
                  recommended to consult a healthcare professional before using
                  moringa, especially if you are pregnant, nursing, or taking
                  other medications. This balanced approach allows for the
                  benefits of moringa while recognizing the importance of proper
                  usage and caution.
                </p>
                <p className={css.subText}>
                  Medicinal Uses: Antioxidant Properties: Moringa is packed with
                  antioxidants that help fight oxidative stress and inflammation
                  in the body.
                </p>
                <p className={css.subText}>
                  Anti-Diabetic Effects: Some studies have shown that moringa
                  leaves might lower blood sugar levels, making it a valuable
                  supplement for managing diabetes.
                </p>
                <p className={css.subText}>
                  Heart Health: The plant has been linked to reduced cholesterol
                  levels, which is vital for heart health.
                </p>
                <p className={css.subText}>
                  Anti-Cancer Properties: Certain compounds in moringa, such as
                  niazimicin, have been found to suppress the growth of cancer
                  cells in laboratory studies.
                </p>
                <p className={css.subText}>
                  Immune Support: With its high vitamin C content, moringa can
                  boost the immune system.
                </p>
                <p className={css.subText}>
                  Digestive Aid: Moringa can help in treating digestive
                  disorders due to its anti-inflammatory properties.
                </p>
              </div>
            )}
            {!isDescription && (
              <ul className={css.list}>
                <li className={css.review}>
                  <div className={css.reviewerBox}>
                    <Image
                      width={44}
                      height={44}
                      className={css.avatar}
                      alt="Avatar"
                      src="/one.jpg"
                    />
                    <div className={css.nameBox}>
                      <h3 className={css.name}>Leroy Jenkins</h3>
                      <p className={css.date}>1 day ago</p>
                    </div>
                    <div className={css.rating}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                    <div className={css.ratingTab}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.starGrey}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                  </div>
                  <p className={css.comment}>
                    I have been using Moringa powder in my smoothies for a few
                    weeks now. My energy levels are up, and I feel great. I
                    followed the recommended dosage, and it seems to be a
                    perfect addition to my daily routine. Highly recommend!
                  </p>
                </li>
                <li className={css.review}>
                  <div className={css.reviewerBox}>
                    <Image
                      width={44}
                      height={44}
                      className={css.avatar}
                      alt="Avatar"
                      src="/two.jpg"
                    />
                    <div className={css.nameBox}>
                      <h3 className={css.name}>Kathie Brown</h3>
                      <p className={css.date}>2 days ago</p>
                    </div>
                    <div className={css.rating}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                    <div className={css.ratingTab}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.starGrey}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                  </div>
                  <p className={css.comment}>
                    I tried Moringa capsules as part of my wellness regimen, and
                    Ihave been pleasantly surprised by the results. My skin
                    looks healthier, and I have noticed an improvement in my
                    digestion. A natural and effective supplement!
                  </p>
                </li>
                <li className={css.review}>
                  <div className={css.reviewerBox}>
                    <Image
                      width={44}
                      height={44}
                      className={css.avatar}
                      alt="Avatar"
                      src="/three.jpg"
                    />
                    <div className={css.nameBox}>
                      <h3 className={css.name}>Peter Parker</h3>
                      <p className={css.date}>3 days ago</p>
                    </div>
                    <div className={css.rating}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                    <div className={css.ratingTab}>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.star}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <svg width={16} height={16} className={css.starGrey}>
                        <use href="/symbol-defs.svg#star" />
                      </svg>
                      <p>4</p>
                    </div>
                  </div>
                  <p className={css.comment}>
                    I added Moringa oil to my skincare routine, and the results
                    are amazing. My skin feels smoother and more nourished. I
                    was skeptical at first, but now I am a firm believer in its
                    benefits.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </Container>
  );
}
