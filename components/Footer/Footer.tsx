import Link from "next/link";
import Container from "../Container/Container";
import css from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.container}>
          <div>
            <Link href="/" className={css.logoBox}>
              <Image
                src="/LogoHome.png"
                className={css.img}
                alt="Logo"
                width={32}
                height={32}
              />

              <p className={css.logoText}>E-Pharmacy</p>
            </Link>
            <p className={css.text}>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </p>
          </div>
          <div className={css.box}>
            <div className={css.nav}>
              <Link href="/" className={css.navLink}>
                Home
              </Link>
              <Link href="/medicine-store" className={css.navLink}>
                Medicine store
              </Link>
              <Link href="/medicine" className={css.navLink}>
                Medicine
              </Link>
            </div>
            <div className={css.social}>
              <a
                target="blanc"
                className={css.socialLink}
                href="https://www.facebook.com/goITclub/  "
              >
                <svg width={28} height={28}>
                  <use href="/symbol-defs.svg#facebook" />
                </svg>
              </a>
              <a
                target="blanc"
                className={css.socialLink}
                href=" https://www.instagram.com/goitclub/ "
              >
                <svg width={28} height={28}>
                  <use href="/symbol-defs.svg#instagram" />
                </svg>
              </a>
              <a
                target="blanc"
                className={css.socialLink}
                href=" https://www.youtube.com/c/GoIT  "
              >
                <svg width={28} height={28}>
                  <use href="/symbol-defs.svg#youtube" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <div className={css.content}>
            <p>© E-Pharmacy 2023. All Rights Reserved</p>
            <Link href="#" className={css.middle}>
              Privacy Policy
            </Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
