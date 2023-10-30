import React from "react";
import styles from "./BurgerConstTotal.module.css";
import { BurgerConstCard } from "../components/BurgerConstCard";
import { useDispatch, useSelector } from "react-redux";
import update from "immutability-helper";
import { moveFilling } from "../../../services/actions/currentIngredientsActions";

function BurgerConstTotal() {
  const ingredientsConstructor = useSelector(
    (store) => store.currentIngredients
  );
  const other = ingredientsConstructor.other;

  const dispatch = useDispatch();
  const moveCard = React.useCallback((dragIndex, hoverIndex, other) => {
    const newOther = update(other, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, other[dragIndex]],
      ],
    });

    dispatch(moveFilling(newOther));
  }, []);

  return (
    <ul className={`${styles.burgerConstTotal} custom-scroll`}>
      {other.map((item, i) => (
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
