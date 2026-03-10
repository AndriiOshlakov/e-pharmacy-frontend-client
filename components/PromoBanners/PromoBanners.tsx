import Container from "../Container/Container";
import css from "./PromoBanners.module.css";

export default function PromoBanners() {
  return (
    <section className={css.section}>
      <Container>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.box}>
              <div className={css.number}>1</div>
              <p className={css.text}>Huge Sale</p>
            </div>
            <div className={css.wrapper}>
              <p className={css.percents}>70%</p>
              <button className={css.btn}>Shop now</button>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.box}>
              <div className={css.number}>2</div>
              <p className={css.text}>Secure delivery</p>
            </div>
            <div className={css.wrapperSecond}>
              <p className={css.percents}>100%</p>
              <button className={css.btn}>Read more</button>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.box}>
              <div className={css.number}>3</div>
              <p className={css.text}>Off</p>
            </div>
            <div className={css.wrapper}>
              <p className={css.percents}>35%</p>
              <button className={css.btn}>Shop now</button>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
