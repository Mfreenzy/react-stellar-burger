import React from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { token } from "../../../services/actions/inputsActions";
import { useDispatch, useSelector } from "react-redux";

export function FormInputToken({ placeholder }) {
    
  const tokenValue = useSelector((store) => store.inputs.token)
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();

  return (
    <Input
      type={"text"}
      placeholder={placeholder}
      onChange={e => dispatch(token(e.target.value))}
      value={tokenValue}
      name={"name"}
      error={false}
      ref={inputRef}
      errorText={"Ошибка"}
      size={"default"}
      extraClass="ml-1"
    />
  );
}