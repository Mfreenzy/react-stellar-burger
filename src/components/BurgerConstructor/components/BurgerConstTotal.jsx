import React from "react";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstTotal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentIngredient } from "../../../services/actions/currentIngredientsActions";

function BurgerConstTotal({ burgerInfill }) {
  const dispatch = useDispatch();

  function deleteCard(item) {
    // вызов действия, которое будет удалять элемент из состояния
    dispatch(removeCurrentIngredient(item));
  }

  return (
    <ul className={`${styles.burgerConstTotal} custom-scroll`}>
      {burgerInfill.map((item) => (
        <li key={item.key} className={`${styles.totalContainer} mt-4 mb-4`}>
          <DragIcon />
          <div className={`${styles.elementTotal} pt-4 pr-6 pb-4 pl-6`}>
            <img src={item.image} alt="" className={`${styles.elementImage}`} />
            <span
              className={`${styles.elementTitle} text text_type_main-default mr-5`}
            >
              {item.name}
            </span>
            <div className={`${styles.containerPrice} mr-4`}>
              <span
                className={`${styles.elementPrice} text text_type_digits-default`}
              >
                {item.price}
              </span>
              <CurrencyIcon />
            </div>
            <DeleteIcon type="primary" onClick={() => deleteCard(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BurgerConstTotal;
