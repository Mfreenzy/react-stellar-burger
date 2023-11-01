import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPassword } from "../../../services/actions/inputsActions";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectedPassword } from "../../../services/selectors/inputsSelectors";

export function FormInputPassword({placeholder = 'Пароль'}) {

    const passwordValue = useSelector(selectedPassword)
    const dispatch = useDispatch();
  
    const [iconP, setIconP] = React.useState('ShowIcon')
    const inputRef = React.useRef(null)
  
    const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0)
      if (inputRef.current.type === 'text') {
        inputRef.current.type = 'password'
        setIconP('ShowIcon')
      } else {
        inputRef.current.type = 'text'
        setIconP('HideIcon')
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