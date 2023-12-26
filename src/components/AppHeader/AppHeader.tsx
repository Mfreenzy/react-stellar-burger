import React from "react";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../NavigationLink/NavigationLink";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FC } from "react";

const AppHeader: FC = () => {
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.panel}>
          <ul className={`${styles.links}`}>
            <li className={`${styles.link_home} cursor`}>
              <NavigationLink text="Конструктор" link={'/'} active={location.pathname === "/" ? true : false}>
                <BurgerIcon type={location.pathname === "/" ? 'primary' : 'secondary'} />
              </NavigationLink>  
            </li>
            <li className={`${styles.link_feed} cursor`}>
              <NavigationLink text="Лента заказов" link={'/feed'} active={location.pathname === "/feed" ? true : false}>
                <ListIcon type={location.pathname === "/feed" ? 'primary' : 'secondary'} />
              </NavigationLink>
            </li>
            <li className={`${styles.link_logo} cursorLogo`}>
              <Link to={"/"}>
                <Logo />
              </Link>
            </li>
            <li className={`${styles.link_profile} cursor`}>
              <NavigationLink text="Личный кабинет" link={'/profile'} active={location.pathname === "/" ? true : false}>
              <ProfileIcon type={location.pathname === "/profile" ? 'primary' : 'secondary'} />
              </NavigationLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default React.memo(AppHeader);
