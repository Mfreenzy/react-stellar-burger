import React from 'react';
import { ProfileButton } from '../components/Profile/ProfileButton/ProfileButton';
import styles from '../components/Profile/ProfileButton/ProfileButton.module.css';

export const Profile = () => {
    return (
        <div className={`${styles.container}`}>
            <ProfileButton />
        </div>
    )
}