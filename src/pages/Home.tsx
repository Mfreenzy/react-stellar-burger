import React from "react";
import styles from "../components/app/app.module.css";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import { useAppDispatch, useAppSelector } from "../services/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  addCurrentBun,
  addCurrentIngredient,
} from "../services/actions/currentIngredientsActions";
import { TIngredient } from "../types/types";

export function Home() {
    const dispatch = useAppDispatch();

      const handleDrop = (item:TIngredient) => {
        if (item.type === "bun") {
          dispatch(addCurrentBun(item));
        } else {
          dispatch(addCurrentIngredient(item));
        }
      };
    
      const { isLoading, ingredients, hasError } = useAppSelector(
        (store) => store.allIngredients
      );
    
      if (isLoading) {
        return <div className={`text text_type_main-default`}>Загрузка...</div>;
      } else {
        if (hasError) {
          return (
            <div className={`text text_type_main-default`}>Произошла ошибка</div>
          );
        }
}
return (
    <div className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <div>
              <BurgerIngredients ingredients={ingredients} />
            </div>
            <div>
              <BurgerConstructor onDropHandler={handleDrop} other={[]}/>
            </div>
          </DndProvider>
        </div>
)
}