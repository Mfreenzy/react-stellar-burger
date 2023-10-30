import React from "react";
import IngredientCards from "./components/IngredientCards";

function BurgerIngredients() {
  return (
    <section>
      <IngredientCards />
    </section>
  );
}


export default React.memo(BurgerIngredients);
