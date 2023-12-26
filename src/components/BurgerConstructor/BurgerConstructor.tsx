import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerCounstructor.module.css";
import BurgerConstTotal from "./components/BurgerConstTotal";
import BurgerFullPrice from "./components/BurgerFullPrice";
import { useAppSelector } from "../../services/store";
import { useDrop } from "react-dnd";
import { TIngredient } from "../../types/types";

interface BurgerConstructorProps {
    onDropHandler: (item: TIngredient) => void;
    other: TIngredient[];
}

const BurgerConstructor = ({onDropHandler}:BurgerConstructorProps) => {
  const ingredientsConstructor = useAppSelector(
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
    priceBun = String(burgerBun.price);
  }

  const priceBunNum: number = parseFloat(priceBun);

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "ingredients",
    drop(item: TIngredient, monitor) {
      if (!monitor.isOver({ shallow: true })) {
        return;
      }
  
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
              price={priceBunNum}
              thumbnail={imageBun}
            />
          )}
        </div>
        {burgerInfill.length > 0 && (
          <BurgerConstTotal />
        )}
        <div className={styles.constContainer}>
          {burgerBun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${nameBun} (низ)`}
              price={priceBunNum}
              thumbnail={imageBun}
            />
          )}
          <BurgerFullPrice />
        </div>
      </section>
    </div>
  );
};



export default BurgerConstructor;
