import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedEmail,
  selectedPassword,
  selectedUserName,
} from "../services/selectors/inputsSelectors";
import {login } from "../services/actions/userActions";
import { Register } from "../utils/api";

export function Reg() {
  const dispatch = useDispatch();
  const email = useSelector(selectedEmail);
  const name = useSelector(selectedUserName);
  const pass = useSelector(selectedPassword);

  function onClick() {
    Register(name, pass, email);
    dispatch(login(email, pass));
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
