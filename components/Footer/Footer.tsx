import Container from "../Container/Container";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.content}>
          <h1>Footer</h1>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
