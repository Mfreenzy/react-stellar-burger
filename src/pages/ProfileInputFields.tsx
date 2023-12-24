import React from "react";
import { Buttons, Inputs } from "../utils/InputsAndLinks/IAL";
import { FormContainerUser } from "../components/FormContainer/FormContainer";
import { useAppDispatch, useAppSelector } from "../services/store";
import { updateUser} from "../utils/api";
import { getUser } from "../services/actions/userActions";
import { selectName, selectEmail } from "../services/selectors/userSelector";
import {
  addUser,
  addEmail,
  addPassword,
} from "../services/actions/inputsActions";
import {
  selectedEmail,
  selectedUserName,
  selectedPassword,
} from "../services/selectors/inputsSelectors";

export const ProfileInputFields = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector(selectName);
  const emailValue = useAppSelector(selectEmail);

  function setValue() {
    dispatch(getUser());
    dispatch(addEmail(String(emailValue)));
    dispatch(addUser(String(nameValue)));
    dispatch(addPassword(""));
  }

  React.useEffect(() => {
    setValue();
  }, [nameValue, emailValue]);

  const nameInput = useAppSelector(selectedUserName);
  const emailInput = useAppSelector(selectedEmail);
  const passwordInput = useAppSelector(selectedPassword);

  let isRedactName = nameValue !== nameInput;
  let isRedactEmail = emailValue !== emailInput;
  let isRedactPassword = passwordInput !== "";

  const isRedact = React.useMemo(() => {
    return [isRedactName, isRedactEmail, isRedactPassword].includes(true);
  }, [isRedactName, isRedactEmail, isRedactPassword]);

  console.log("isRedact", isRedact);

  function handleReset() {
    dispatch(getUser());
    console.log("isRedact", isRedact);
  }

  function handleSubmit() {
    dispatch(getUser());
    if (isRedact) {
      dispatch(updateUser(emailInput, nameInput, passwordInput));
      dispatch(addEmail(String(emailValue)));
      dispatch(addUser(String(nameValue)));
      dispatch(addPassword(""));
    }
  }

  const profileInputs = [Inputs.profileName, Inputs.profileEmail, Inputs.profilePassword]
  const profileButtons = isRedact ? [Buttons.cancel, Buttons.save] : []

  return (
    <FormContainerUser
      inputs={profileInputs}
      button={profileButtons}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
    />
)

};
