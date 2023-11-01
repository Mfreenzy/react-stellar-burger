import React from "react";
import styles from "../Autorisation/Login.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { LoginInput } from "./LoginInput";
import { LoginInputPass } from "./LoginInputPass";
import { FooterLinks } from "./FooterLinks";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <section className={`${styles.formContainer}`}>
      <p className="text text_type_main-medium">Вход</p>
      <div className={`${styles.loginInputs}`}>
        <LoginInput placeholder="E-mail" />
        <LoginInputPass placeholder="Пароль" />
      </div>
      <Button htmlType="button" type="primary" size="medium" extraClass={styles.buttonExtra}> Войти </Button>
      <div className={`${styles.recoverLinks}`}>
        <FooterLinks infoText="Вы-новый пользователь?"><Link to="/register" className={`${styles.link}`}>Зарегистрироваться</Link></FooterLinks> 
        <FooterLinks infoText="Забыли пароль?"><Link to="/forgot-password" className={`${styles.link}`}>Восстановить пароль</Link></FooterLinks>
      </div>
    </section>
  );
}
