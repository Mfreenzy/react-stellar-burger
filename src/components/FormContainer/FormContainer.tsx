import React from "react";
import styles from "../FormContainer/FormContainer.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs } from "../../utils/InputsAndLinks/IAL";
import { Links } from "../../utils/InputsAndLinks/IAL";

interface FormContainerProps {
  header: string;
  inputs: string[];
  links: string[];
  button: string;
  handleSubmit: () => void; // Replace '() => void' with the actual type of your handleSubmit function
  handleReset: () => void; // Replace '() => void' with the actual type of your handleReset function
}

export function FormContainerOther({header, inputs, links, button}:FormContainerProps) {

    return (
      <section className={`${styles.formContainer}`}>
        <p className="text text_type_main-medium">
          {header}
        </p>
        <form >
          <fieldset className={styles.formFieldset}>
            <div className={`${styles.formInputs}`}>
              {[...inputs]}
            </div>
            <div className={`${styles.buttonExtra}`}>
              {button}
            </div>
          </fieldset>
        </form>
        <div className={`${styles.formLinks}`}>
          {[...links]}
        </div>
      </section>
    )
  }

  export function FormContainerUser({inputs, button, handleSubmit, handleReset}:FormContainerProps) {

    return (
      <section className={`${styles.sectionUser}`}>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <fieldset className={styles.formFieldset}>
            <div className={`${styles.formInputs}`}>
              {[...inputs]}
            </div>
            <div className={`${styles.buttonExtra}`}>
              {button}
            </div>
          </fieldset>
        </form>
      </section>
    )
  }