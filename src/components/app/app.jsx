import styles from "./app.module.css";
import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import { useCallback, useState } from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import LoadIngredient from "./components/LoadIngredient";
import { SelectedComponentContext } from "../../services/BurgerConsctructorContext";

function App() {
    //Создаём начальное состояние.
    const initialState = {bun: {}, other: []}

    //Напишем функцию reducer
    function reducerSelectedComponents(state, action) {
        switch (action.type) {
          case "defBun":
            return {
              ...state,
              bun: action.payload
            };
          case "addOther":
            return {
              ...state,
              other: [...state.other,
                  action.payload
                ]
            };
          case "resetOnlyOther":
            return {
              ...state,
              other: [],
            };
          default:
            throw new Error(`Wrong type of action: ${action.type}`);
        }
      }

    const [ingredients, setIngredients] = useState([]);
    
    // Заменяем useState на useReducer
    const [ingredientsConstructor, ingredientsConstructorDispatcher] = React.useReducer(reducerSelectedComponents, initialState, undefined);

    const [error, setError] = useState(null);

    const handleDataLoad = useCallback((data) => {
        setIngredients(data);
    }, []);

    const handleError = useCallback((errorMessage) => {
        setError(errorMessage);
    }, []);

    return (
        <div className={styles.app}>
            <AppHeader />
            <SelectedComponentContext.Provider value={{ingredientsConstructor, ingredientsConstructorDispatcher}}>
            <div className={styles.main}>
                <LoadIngredient onDataLoaded={handleDataLoad} onError={handleError} />
                <div>
                    {error && <p>{error}</p>}
                    {!error && ingredients.length === 0 && <p>Ингредиенты не доступны</p>}
                    {ingredients.length > 0 && <BurgerIngredients ingredients={ingredients} />}
                </div>
                <div>
                    <BurgerConstructor ingredients={ingredients}/>
                </div>
            </div>
            </SelectedComponentContext.Provider>
        </div>
    );
}

export default App;
