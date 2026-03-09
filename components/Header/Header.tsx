import AuthNavigation from "../AuthNavigation/AuthNavigation";
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import LogoComponent from "../Image/Image";

import css from "./Header.module.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <header className={css.header}>
        <LogoComponent />
        <nav className={css.navContainer}>
          <HeaderNavigation />
        </nav>
        <div className={css.burgerBox}>
          <BurgerComponent />
        </div>
        <div className={css.authBox}>
          <AuthNavigation />
        </div>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
