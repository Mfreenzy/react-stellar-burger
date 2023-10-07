export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

export function fetchIngredientsSuccess(data) {
  return {
    type: FETCH_INGREDIENTS_SUCCESS,
    payload: data,
  };
}

export function fetchIngredientsFailed() {
  return {
    type: FETCH_INGREDIENTS_FAILURE,
  };
}

export function fetchIngredientsRequest() {
  return {
    type: FETCH_INGREDIENTS_REQUEST,
  };
}

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch(fetchIngredientsRequest());
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Request failed");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(fetchIngredientsSuccess(data.data));
      })
      .catch(() => {
        dispatch(fetchIngredientsFailed());
      });
  };
}
