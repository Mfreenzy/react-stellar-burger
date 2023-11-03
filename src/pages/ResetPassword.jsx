import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";

export function ResetPassword() {

    const navigate = useNavigate()

    function onClick() {
        navigate('/login', {replace:false})
    }

    const resetPasswordFormHeadder = "Восстановление пароля";
    const resetPasswordInputs = [Inputs.newPassword, Inputs.verifyCode];
    const resetPasswordButton = navigateButton({onClick: onClick, label:"Сохранить"});
    const resetPasswordLinks = [Links.rememberPassword];

    return (
        <FormContainerOther header={resetPasswordFormHeadder} inputs={resetPasswordInputs} button={resetPasswordButton}
                        links={resetPasswordLinks}/>
    )
}