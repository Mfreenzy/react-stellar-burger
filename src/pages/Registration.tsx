import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useAppDispatch, useAppSelector } from "../services/store";
import {
  selectedEmail,
  selectedPassword,
  selectedUserName,
} from "../services/selectors/inputsSelectors";
import { tRegister } from "../utils/api";

export function Reg() {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectedEmail);
  const name = useAppSelector(selectedUserName);
  const pass = useAppSelector(selectedPassword);

  function onClick() {
    dispatch(tRegister(name, pass, email));
  }

  const registerFormHeader = "Регистрация";
  const registerInputs = [Inputs.name, Inputs.email, Inputs.password];
  const registerButton = navigateButton({
    onClick: onClick,
    label: "Зарегистрироваться",
  });
  const registerFooterLinks = [Links.alreadyRegistered];

  return (
    <FormContainerOther
      header={registerFormHeader}
      inputs={registerInputs}
      button={registerButton}
      links={registerFooterLinks}
    />
  );
}
