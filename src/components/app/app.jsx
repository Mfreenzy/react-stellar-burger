import styles from "./app.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import { useCallback, useState } from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import LoadIngredient from "./components/LoadIngredient";

function App() {
    const [ingredients, setIngredients] = useState([]);
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
        </div>
    );
}

export default App;
