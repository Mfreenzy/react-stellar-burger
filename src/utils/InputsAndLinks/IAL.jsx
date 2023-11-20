import React from "react";
import { FormInputEmail } from "../../components/FormContainer/FormContainerInputs/FormInputEmail";
import { FormInputName } from "../../components/FormContainer/FormContainerInputs/FormInputName";
import { FormInputPassword } from "../../components/FormContainer/FormContainerInputs/FormInputPassword";
import { Link } from "react-router-dom";
import { FormFooterLinks } from "../../components/FormContainer/FormContainerLinks/FormFooterLinks";
import styles from "../../components/FormContainer/FormContainer.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormInputToken } from "../../components/FormContainer/FormContainerInputs/FormInputToken";

//Все типы инпутов, используемых в проекте
export const Inputs = {
    //1. Электронная почта 
    email: <FormInputEmail placeholder="E-mail" key="email" name="email" />,
    //2. Пароль
    password: <FormInputPassword placeholder="Пароль" key="password" name="password" />,
    //3. Новый пароль при восстановлении
    newPassword: <FormInputPassword placeholder="Введите новый пароль" key="newPassword" name="newPassword" />,
    //4. Проверочный код, полученный на E-mail, указанный при регистрации
    token: <FormInputToken placeholder="Введите проверочный код из письма" key="token" name="token" />,
    //5. Имя пользователя
    name: <FormInputName placeholder="Имя" key="name" name="name" />,
    //6. Ввод E-mail, для восстановления пароля, получения проверочного кода. 
    specifyEmail: <FormInputEmail placeholder="Введите E-mail" key="specifyEmail" name="specifyEmail" />,
    //7. Ввод имени в профиле.
    profileName: <FormInputName placeholder="Имя" key='name' name='name' disabled={true}/>,
    //8. Ввод почты в профиле.
    profileEmail: <FormInputEmail placeholder="E-mail" key='email' name='email'/>,
    //9. Ввод пароля в профиле. 
    profilePassword: <FormInputPassword placeholder="Пароль" key='password' name='password' />

}

//Все типы подвальных ссылок, используемых в работе
export const Links = {
    //1. Если вы уже зарегистрированы
    alreadyRegistered: <FormFooterLinks key="alreadyRegistered" infoText="Уже зарегистрированы?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    //2. Вспомнили пароль
    rememberPassword: <FormFooterLinks key="rememberPassword" infoText="Вспомнили пароль?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    //3. Всё-таки забыли пароль
    forgotPassword: <FormFooterLinks key="forgotPassword" infoText="Забыли пароль?"><Link to="/forgot-password" className={`${styles.link}`}>Восстановить пароль</Link></FormFooterLinks>,
    //4. Новый пользователь
    newUser: <FormFooterLinks key="newUser" infoText="Вы - новый пользователь?"><Link to="/register" className={`${styles.link}`}>Зарегистрироваться</Link></FormFooterLinks>
}

//Большая кнопка
export const navigateButton = ({onClick, label}) => {
    return <Button htmlType="submit" type="primary" size="medium" children={label} onClick={onClick}/>
  }

//Другие кнопки
export const Buttons = {
    save: <Button htmlType="submit" type="primary" size="medium" children="Сохранить" key='save'/>,
    cancel: <Button htmlType="reset" type="secondary" size="medium" children="Отмена" key='cancel'/>
}