import React from "react";
import IngredientCards from "./components/IngredientCards";
import PropTypes from "prop-types";

function BurgerIngredients({ ingredients }) {
  return (
    <section>
      <IngredientCards ingredients={ingredients} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(BurgerIngredients);
