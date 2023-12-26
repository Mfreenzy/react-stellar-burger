import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavigationLink.module.css"
import { FC } from "react";
import { TNavigationLink } from "../../types/types";


const NavigationLink: FC<TNavigationLink> = ({text, children, active, link}) => {

  return (
    <Link to={link} className={styles.linkNav} >
      {children}
      <p className={`${styles.text} ${active === true ? styles.active : null} text text_type_main-default text_color_inactive`}>{text}</p>
    </Link>
  )
}

export default NavigationLink

