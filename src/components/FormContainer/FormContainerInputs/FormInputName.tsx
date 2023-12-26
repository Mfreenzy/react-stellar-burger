import React from "react";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { addUser } from "../../../services/actions/inputsActions";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectedUserName } from "../../../services/selectors/inputsSelectors";

export function FormInputName({placeholder = 'Имя'}) {

    const dispatch = useAppDispatch();
    const inputRef = React.useRef(null)
    const nameValue = useAppSelector(selectedUserName) ?? '';

    return (
      <Input
        type={'text'}
        placeholder={placeholder}
        onChange={e => dispatch(addUser(e.target.value))}
        value={nameValue}
        name={'name'}
        error={false}
        ref={inputRef}
        errorText={'Ошибка'}
        size={'default'}
      />
    )
  }
