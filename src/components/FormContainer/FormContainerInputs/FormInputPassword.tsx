import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPassword } from "../../../services/actions/inputsActions";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectedPassword } from "../../../services/selectors/inputsSelectors";

enum IconType {
  ShowIcon = 'ShowIcon',
  HideIcon = 'HideIcon',
  // Добавьте другие значения иконок по мере необходимости
}

export function FormInputPassword({placeholder = 'Пароль'}) {

    const passwordValue = useSelector(selectedPassword)
    const dispatch = useDispatch();
  
    const [iconP, setIconP] = React.useState<IconType>(IconType.ShowIcon);
    const inputRef = React.useRef<HTMLInputElement>(null)
  
const onIconClick = () => {
  setTimeout(() => inputRef.current?.focus(), 0);
  if (inputRef.current && inputRef.current.type === 'text') {
    inputRef.current.type = 'password';
    setIconP(IconType.ShowIcon);
  } else if (inputRef.current) {
    inputRef.current.type = 'text';
    setIconP(IconType.HideIcon);
  }
}
  
    return (
      <Input
        type={'password'}
        placeholder={placeholder}
        onChange={e => dispatch(addPassword(e.target.value))}
        icon={iconP}
        value={passwordValue}
        name={'password'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
      />
    )
  }
