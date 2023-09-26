import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerCounstructor.module.css";
import BurgerConstTotal from "./components/BurgerConstTotal";
import BurgerFullPrice from "./components/BurgerFullPrice";
import { ingredientPropType } from "../../utils/prop-types";
import { SelectedComponentContext } from "../../services/BurgerConsctructorContext";


const BurgerConstructor = () => {

    const {ingredientsConstructor} = React.useContext(SelectedComponentContext);
    const burgerInfill = ingredientsConstructor.other;
    const burgerBun = ingredientsConstructor.bun;
    console.log(burgerBun);
    const nameBun = burgerBun.name;
    const imageBun = burgerBun.image;
    const priceBun = burgerBun.price;


    return (
         <section className={`${styles.mainContainer} custom-scroll`}>
            <div className={styles.constContainer}>
               {(Object.keys(burgerBun).length !== 0) && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${nameBun} (верх)`}
                    price={priceBun}
                    thumbnail={imageBun}
                    
                />}
            </div>
                 {(burgerInfill.length > 0) && <BurgerConstTotal burgerInfill={burgerInfill} />}
             <div className={styles.constContainer}>
             {(Object.keys(burgerBun).length !== 0) && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${nameBun} (низ)`}
                    price={priceBun}
                    thumbnail={imageBun}
                    
                />}
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