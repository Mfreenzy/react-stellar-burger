import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedEmail } from "../../../services/selectors/inputsSelectors";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { addEmail } from "../../../services/actions/inputsActions";

export function FormInputEmail({placeholder = "E-mail"}) {

    const emailValue = useSelector(selectedEmail)
    const dispatch = useDispatch();
    const inputRef = React.useRef(null)
  
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