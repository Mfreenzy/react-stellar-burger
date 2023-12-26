import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { selectedEmail, selectedPassword } from "../services/selectors/inputsSelectors";
import { useAppSelector, useAppDispatch } from "../services/store";
import { login } from "../services/actions/userActions";



export function Log() {
    const dispatch = useAppDispatch()
    const email = useAppSelector(selectedEmail);
    const pass = useAppSelector(selectedPassword);
    
    function onClick() {
      console.log("onClick", email);
      console.log("ocClick", pass);
      
      dispatch(login(email, pass))
    }
  
    const loginFormHeader = "Вход"
    const loginInputs = [Inputs.email, Inputs.password];
    const loginButton = navigateButton({onClick: onClick, label: "Войти"});
    const loginFooterLinks = [Links.newUser, Links.forgotPassword];
  
  
    return (
      <FormContainerOther header={loginFormHeader} inputs={loginInputs} button={loginButton} links={loginFooterLinks}/>
    )
  }