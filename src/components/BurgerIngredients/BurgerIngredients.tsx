import React from "react";
import IngredientCards from "./components/IngredientCards";
import { TIngredient } from "../../types/types";

type Ingredients = {
  ingredients: TIngredient[]
}

function BurgerIngredients({ingredients}:Ingredients) {
  return (
    <section>
      <IngredientCards />
    </section>
  );
}


export default React.memo(BurgerIngredients);
