import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerCounstructor.module.css";
import BurgerConstTotal from "./components/BurgerConstTotal";
import BurgerFullPrice from "./components/BurgerFullPrice";
import bun02 from "../../images/bun02.png";
import { ingredientPropType } from "../../utils/prop-types";



const BurgerConstructor = () => {
    return (
         <section className={`${styles.mainContainer} custom-scroll`}>
            <div className={styles.constContainer}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={bun02}
                    
                />
            </div>
                 <BurgerConstTotal />
             <div className={styles.constContainer}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={bun02}
                />
                 <BurgerFullPrice />
             </div>
        </section>

    )
}

BurgerConstructor.propTypes = ingredientPropType
  
BurgerConstructor.defaultProps = {
    ingredients: [],
  };

export default BurgerConstructor