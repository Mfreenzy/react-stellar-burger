import React from "react";
import styles from "./BurgerConstTotal.module.css";
import { BurgerConstCard } from "./BurgerConstCard";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import update from "immutability-helper";
import { moveFilling } from "../../../services/actions/currentIngredientsActions";
import { TIngredient } from "../../../types/types";


function BurgerConstTotal() {
  const ingredientsConstructor = useAppSelector(
    (store) => store.currentIngredients
  );
  const other = ingredientsConstructor.other;

  const dispatch = useAppDispatch();
  const moveCard = React.useCallback((dragIndex, hoverIndex, other) => {
    const newOther = update(other, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, other[dragIndex]],
      ],
    });

    dispatch(moveFilling(dragIndex, hoverIndex));
  }, [dispatch]);

  return (
    <ul className={`${styles.burgerConstTotal} custom-scroll`}>
      {other.map((item:TIngredient, i:number) => (
        <BurgerConstCard
          item={item}
          key={item.key}
          moveCard={moveCard}
          index={i}
          id={item._id}
        />
      ))}
    </ul>
  );
}

export default BurgerConstTotal;
