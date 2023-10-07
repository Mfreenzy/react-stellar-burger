import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/ingredientActions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  const {isLoading, ingredients, hasError} = useSelector((store) => store.allIngredients)

  if (isLoading) {
    return <div className={`text text_type_main-default`}>Загрузка...</div>;
  } else {
    if (hasError) {
      return (
        <div className={`text text_type_main-default`}>Произошла ошибка</div>
      );
    } 
      return (
        <div className={styles.app}>
          <AppHeader />
          <div className={styles.main}>
            <div>
              {Array.isArray(ingredients) ? (
                <BurgerIngredients ingredients={ingredients} />
              ) : (
                <div className={`text text_type_main-default`}>Нет данных</div>
              )}
            </div>
            <div>
              <BurgerConstructor />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
