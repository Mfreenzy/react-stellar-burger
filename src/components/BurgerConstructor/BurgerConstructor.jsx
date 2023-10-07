import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerCounstructor.module.css";
import BurgerConstTotal from "./components/BurgerConstTotal";
import BurgerFullPrice from "./components/BurgerFullPrice";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";

const BurgerConstructor = () => {
    const ingredientsConstructor = useSelector((store) => store.currentIngredients);

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

    return (
        <section className={`${styles.mainContainer} custom-scroll`}>
            <div className={styles.constContainer}>{burgerBun && <ConstructorElement type="top" isLocked={true} text={`${nameBun} (верх)`} price={priceBun} thumbnail={imageBun} />}</div>
            {burgerInfill.length > 0 && <BurgerConstTotal burgerInfill={burgerInfill} />}
            <div className={styles.constContainer}>
                {burgerBun && <ConstructorElement type="bottom" isLocked={true} text={`${nameBun} (низ)`} price={priceBun} thumbnail={imageBun} />}
                <BurgerFullPrice />
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = ingredientPropType;

BurgerConstructor.defaultProps = {
    ingredients: [],
};

export default BurgerConstructor;
