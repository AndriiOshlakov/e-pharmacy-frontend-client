import { getreviews } from "@/lib/api/serverApi";
import Container from "../Container/Container";
import css from "./Reviews.module.css";
import Image from "next/image";

export default async function Reviews() {
  const reviews = await getreviews();
  return (
    <section className={css.section}>
      <Container>
        <div className={css.box}>
          <h2 className={css.subtitle}>Reviews</h2>
          <p className={css.text}>
            Search for Medicine, Filter by your location
          </p>
          <ul className={css.list}>
            {reviews.map((item) => (
              <li key={item._id} className={css.item}>
                <Image
                  className={css.img}
                  width={64}
                  height={64}
                  alt="Avatar"
                  src={item.image}
                />
                <div className={css.wrapper}>
                  <h3 className={css.name}>{item.name}</h3>
                  <p className={css.testimonial}>{item.testimonial}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
