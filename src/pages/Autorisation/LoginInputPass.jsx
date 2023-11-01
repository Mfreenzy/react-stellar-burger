import React from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export function LoginInputPass({ placeholder }) {
  const [value, setValue] = React.useState("");
  const [icon, setIcon] = React.useState("ShowIcon");
  const inputRef = React.useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
      setIcon("ShowIcon");
    } else {
      inputRef.current.type = "text";
      setIcon("HideIcon");
    }
  };

  return (
    <Input
      type={"password"}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      icon={icon}
      value={value}
      name={"name"}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={"Ошибка"}
      size={"default"}
      extraClass="ml-1"
    />
  );
}
