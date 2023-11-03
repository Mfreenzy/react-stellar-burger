import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { postApiResetPassword } from "../utils/requests/reset";
import { login } from "../services/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { selectedEmail } from "../services/selectors/inputsSelectors";


export function ForgotPassword() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(selectedEmail);
  
    function onClick(evt) {
      evt.preventDefault();
      postApiResetPassword(email)
      dispatch(login());
      navigate('/reset-password', {replace: false});
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


