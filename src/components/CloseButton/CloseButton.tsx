import React from "react";
import styles from "./CloseButton.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface CloseButtonProps {
  onClick: () => void;
}

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className={`${styles.closeButton}`} onClick={onClick}>
      <CloseIcon type="primary" />
    </button>
  );
}


export default CloseButton;
