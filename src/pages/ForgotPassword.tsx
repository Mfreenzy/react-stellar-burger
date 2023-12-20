import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { postApiResetPassword } from "../utils/api";
import { useSelector } from "react-redux";
import { selectedEmail } from "../services/selectors/inputsSelectors";


export function ForgotPassword() {

    const navigate = useNavigate();
    const email = useSelector(selectedEmail);
  
    function onClick() {
      postApiResetPassword(email)
      if (localStorage.getItem('resetPasswordFlag')) {
        // Флаг существует в localStorage
        navigate('/reset-password', { replace: false });
      } else {
        // Флаг отсутствует в localStorage
        navigate('/login', { replace: false });
      }
    }
  
    const forgotPasswordFormHeader = "Восстановление пароля"
    const forgotPasswordInputs = [Inputs.specifyEmail];
    const forgotPasswordButton = navigateButton({onClick: onClick, label: "Восстановить"});
    const forgotPasswordLinks = [Links.rememberPassword];
  
    return (
      <FormContainerOther header={forgotPasswordFormHeader} inputs={forgotPasswordInputs} button={forgotPasswordButton}
                        links={forgotPasswordLinks}/>
    )
  }


