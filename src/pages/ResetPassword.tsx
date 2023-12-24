import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../services/store";
import { postApiReset } from "../utils/api";
import { DefaultRootState } from "../services/store";


export function ResetPassword() {
   
    const navigate = useNavigate()
    const password = useAppSelector((store:DefaultRootState) => store.inputs.password)
    const token = useAppSelector((store:DefaultRootState) => store.inputs.token)

    function onClick() {
        postApiReset(password, token)
        navigate('/login', {replace:false})
    }

    const resetPasswordFormHeadder = "Восстановление пароля";
    const resetPasswordInputs = [Inputs.newPassword, Inputs.token];
    const resetPasswordButton = navigateButton({onClick: onClick, label:"Сохранить"});
    const resetPasswordLinks = [Links.rememberPassword];

    return (
        <FormContainerOther header={resetPasswordFormHeadder} inputs={resetPasswordInputs} button={resetPasswordButton}
                        links={resetPasswordLinks}/>
    )
}