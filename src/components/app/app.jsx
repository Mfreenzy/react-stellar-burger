import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { useCallback, useState } from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import LoadIngredient from "./components/LoadIngredient";
import { SelectedComponentContext } from "../../services/BurgerConsctructorContext";
import { ShowModalContext } from "../../services/modalContext";
import { v4 as uuidv4 } from 'uuid';

function App() {
    //Создаём начальное состояние.
    const initialState = { bun: {}, other: [] };
    
    //Создаём начальное состояние для модального окна.
    const showModalIniState = {
        visible: false,
        type: "",
        ingredient: {},
        orderNumber: "",
    };

    //Напишем функцию reducer
    function reducerSelectedComponents(state, action) {
        switch (action.type) {
            case "defBun":
                return {
                    ...state,
                    bun: action.payload,
                };
                case "addOther":
                  const newIngredient = {
                    ...action.payload,
                    key: uuidv4()
                  };
                  return {
                    ...state,
                    other: [...state.other, newIngredient]
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

    // Напишем функцию reducer

    function reducerShowModal(state, action) {
        switch (action.type) {
            case "close":
                return {
                    visible: false,
                    type: "",
                    ingredient: {},
                    orderNumber: "",
                };
            case "open":
                return {
                    visible: true,
                    type: action.payload.type,
                    ingredient: action.payload.ingredient,
                    orderNumber: (action.payload.orderNumber ??= ""),
                };
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    // Заменяем useState на useReducer
    const [ingredientsConstructor, ingredientsConstructorDispatcher] = React.useReducer(reducerSelectedComponents, initialState, undefined);
    const [showModal, showModalDispatcher] = React.useReducer(reducerShowModal, showModalIniState, undefined);
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
            <SelectedComponentContext.Provider value={{ ingredientsConstructor, ingredientsConstructorDispatcher }}>
                <ShowModalContext.Provider value={{ showModal, showModalDispatcher }}>
                    <div className={styles.main}>
                        <LoadIngredient onDataLoaded={handleDataLoad} onError={handleError} />
                        <div>
                            {error && <p>{error}</p>}
                            {!error && ingredients.length === 0 && <p>Ингредиенты не доступны</p>}
                            {ingredients.length > 0 && <BurgerIngredients ingredients={ingredients} />}
                        </div>
                        <div>
                            <BurgerConstructor ingredients={ingredients} />
                        </div>
                    </div>
                </ShowModalContext.Provider>
            </SelectedComponentContext.Provider>
        </div>
    );
}

export default App;
