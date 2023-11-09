import React from 'react';
import styles from "../ProfileButton/ProfileButton.module.css";
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../utils/api';
import { Link } from 'react-router-dom';

export function ProfileButton() {
    const dispatch = useDispatch();
    const isProfileActive = useMatch('/profile');
    const isProfileOrderActive = useMatch('/profile/orders');

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className={`${styles.profileNavigationLinks}`}>
            <Link to="/profile" className={`${styles.links} text text_type_main-medium text_color_inactive ${isProfileActive ? styles.active : ""}`}>Профиль</Link>
            <Link to="/profile/orders"  className={`${styles.links} text text_type_main-medium text_color_inactive ${isProfileOrderActive ? styles.active : ""}`}>История заказов</Link>
            <button className={`${styles.exitButton} text text_type_main-medium text_color_inactive`} onClick={handleLogout}>Выход</button> 
            <p className={`${styles.info} text text_type_main-default text_color_inactive`}>В этом разделе вы можете изменить свои персональные данные</p>
        </nav>
    )
}