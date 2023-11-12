import React from "react";
import styles from "./AppHeader.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useMatch } from "react-router-dom";


function AppHeader () {
    const isConstructorActive = useMatch("/");
    const isFeedActive = useMatch("/feed");
    const isProfile = useMatch("/profile")

    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <div className={styles.menuButton}>
                <NavLink className={`${styles.link} pl-5 pr-5 pt-4 pb-4 ${isConstructorActive ? styles.active : ""}`} to="/">
                    <BurgerIcon type="primary"/>
                    <p className="text text_type_main-default">Конструктор</p>
                </NavLink>
                <NavLink className={`${styles.link} pl-5 pr-5 pt-4 pb-4 ${isFeedActive ? styles.active : ""}`} to="/feed">
                    <ListIcon type="secondary"/>
                    <p className="text text_type_main-default">Лента заказов</p>
                </NavLink>
                </div>
                <NavLink className={styles.logoLink} to="/">
                    <Logo />
                </NavLink>
                <NavLink className={`${styles.palink} ${isProfile ? styles.active : ""}`} to="/profile">
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default">Личный кабинет</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default React.memo(AppHeader)