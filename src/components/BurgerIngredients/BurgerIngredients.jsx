import React from "react";
import IngredientCards from "./components/IngredientCards";
import { ingredientPropType } from "../../utils/prop-types";



function BurgerIngredients({ingredients}) {
    return (
        <section>
            <IngredientCards ingredients={ingredients} />
        </section>
    )
}

BurgerIngredients.propTypes = ingredientPropType

export default React.memo(BurgerIngredients)