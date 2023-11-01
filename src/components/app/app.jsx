import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/ingredientActions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  addCurrentBun,
  addCurrentIngredient,
} from "../../services/actions/currentIngredientsActions";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Register } from "../../pages/Registration";
import { Login } from "../../pages/Login";
import { Home } from "../../pages/Home";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
