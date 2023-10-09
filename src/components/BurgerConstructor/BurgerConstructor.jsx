import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerCounstructor.module.css";
import BurgerConstTotal from "./components/BurgerConstTotal";
import BurgerFullPrice from "./components/BurgerFullPrice";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

const BurgerConstructor = ({onDropHandler}) => {
  const ingredientsConstructor = useSelector(
    (store) => store.currentIngredients
  );

  const burgerInfill = ingredientsConstructor.other;
  const burgerBun = ingredientsConstructor.bun;

  let nameBun = "";
  let imageBun = "";
  let priceBun = "";
  if (burgerBun) {
    nameBun = burgerBun.name;
    imageBun = burgerBun.image;
    priceBun = burgerBun.price;
  }

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "ingredients",
    drop(item) {
      console.log(item);
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const box = isOver ? styles.dropBoxOver : (canDrop ? styles.dropBoxOver1 : styles.dropBoxT);

  return (
    <div ref={dropRef} className={`${box} ${styles.dropBox}`}>
      <section className={`${styles.mainContainer} custom-scroll`}>
        <div className={styles.constContainer}>
          {burgerBun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${nameBun} (верх)`}
              price={priceBun}
              thumbnail={imageBun}
            />
          )}
        </div>
        {burgerInfill.length > 0 && (
          <BurgerConstTotal burgerInfill={burgerInfill} />
        )}
        <div className={styles.constContainer}>
          {burgerBun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${nameBun} (низ)`}
              price={priceBun}
              thumbnail={imageBun}
            />
          )}
          <BurgerFullPrice />
        </div>
      </section>
    </div>
  );
};

BurgerConstructor.propTypes = ingredientPropType;

BurgerConstructor.defaultProps = {
  ingredients: [],
};

export default BurgerConstructor;
