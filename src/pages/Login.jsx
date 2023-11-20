import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { selectedEmail, selectedPassword } from "../services/selectors/inputsSelectors";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/actions/userActions";


export function Log() {
    const dispatch = useDispatch()
    const email = useSelector(selectedEmail);
    const pass = useSelector(selectedPassword);

    
    function onClick(evt) {
      evt.preventDefault()
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