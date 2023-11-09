import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { selectedEmail, selectedPassword } from "../services/selectors/inputsSelectors";
import { useSelector } from "react-redux";
import { Login } from "../utils/api";

export function Log() {

    const email = useSelector(selectedEmail);
    const pass = useSelector(selectedPassword);
    const navigate = useNavigate();
    
  
    function onClick(evt) {
      evt.preventDefault()
      Login(email,pass)
      navigate('/', {replace: false});
    }
  
    const loginFormHeader = "Вход"
    const loginInputs = [Inputs.email, Inputs.password];
    const loginButton = navigateButton({onClick: onClick, label: "Войти"});
    const loginFooterLinks = [Links.newUser, Links.forgotPassword];
  
  
    return (
      <FormContainerOther header={loginFormHeader} inputs={loginInputs} button={loginButton} links={loginFooterLinks}/>
    )
  }