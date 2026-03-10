import Link from "next/link";
import css from "./Promo.module.css";
import Image from "next/image";

export default function Promo() {
  const arr = [
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed",
  ];
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.wrapper}>
            <div className={css.infoBox}>
              <h2 className={css.subtitle}>
                Add the medicines you need online now
              </h2>
              <p className={css.text}>
                Enjoy the convenience of having your prescriptions filled from
                home by connecting with your community pharmacy through our
                online platform.
              </p>
              <Link href="/medicine-store" className={css.link}>
                Buy medicine
              </Link>
            </div>

            <Image
              src="/Image.png"
              width={295}
              height={335}
              alt="Girl with pills"
              className={css.imgMob}
            />

            <Image
              src="/ImageTab.png"
              width={608}
              height={406}
              alt="Girl with pills"
              className={css.imgTab}
            />
          </div>
        </div>
        <ul className={css.list}>
          {arr.map((item, index) => (
            <li key={index} className={css.item}>
              <svg width={20} height={20} className={css.lightning}>
                <use href="/symbol-defs.svg#lightning" />
              </svg>
              <p className={css.itemText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
