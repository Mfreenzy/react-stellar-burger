import React from "react";
import { navigateButton, Inputs, Links } from "../utils/InputsAndLinks/IAL";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { postApiRegister } from "../utils/requests/registration";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedEmail,
  selectedPassword,
  selectedUserName,
} from "../services/selectors/inputsSelectors";
import { checkUserAuth, login } from "../services/actions/userActions";

export function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(selectedEmail);
  const name = useSelector(selectedUserName);
  const pass = useSelector(selectedPassword);

  function onClick(evt) {
    evt.preventDefault();
    navigate('/login', {replace: false});
    postApiRegister(name, pass, email);
    dispatch(login());
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
      name="formRegister"
    />
  );
}
