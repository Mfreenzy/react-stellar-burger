import React from "react";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { selectedEmail } from "../../../services/selectors/inputsSelectors";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { addEmail } from "../../../services/actions/inputsActions";

export function FormInputEmail({placeholder = "E-mail"}) {

    const dispatch = useAppDispatch();
    const inputRef = React.useRef(null)
    const emailValue = useAppSelector(selectedEmail) ?? '';
  
    return (
      <Input
        type={'email'}
        placeholder={placeholder}
        onChange={e => dispatch(addEmail(e.target.value))}
        value={emailValue}
        name={'email'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
    )
  }
