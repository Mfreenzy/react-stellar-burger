import React from "react";
import styles from "./AppHeader.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader () {
    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.nav}>
                <div className={styles.menuButton}>
                <a className={`${styles.link} pl-5 pr-5 pt-4 pb-4`} href='#'>
                    <BurgerIcon type="primary"/>
                    <p className="text text_type_main-default">Конструктор</p>
                </a>
                <a className={`${styles.link_inactive} pl-5 pr-5 pt-4 pb-4`} href="#">
                    <ListIcon type="secondary"/>
                    <p className="text text_type_main-default">Лента заказов</p>
                </a>
                </div>
                <a className={styles.logoLink} href="#">
                    <Logo />
                </a>
                <a className={styles.palink} href="#">
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default">Личный кабинет</p>
                </a>
            </nav>
        </header>
    )
}

export default React.memo(AppHeader)