import Container from "../Container/Container";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroBox}>
          <div className={css.heroWrapper}>
            <h1 className={css.title}>Your medication delivered</h1>
            <p className={css.text}>
              Say goodbye to all your healthcare worries with us
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
