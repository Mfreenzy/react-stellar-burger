import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Reg } from "../../pages/Registration";
import { Log } from "../../pages/Login";
import { Home } from "../../pages/Home";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { ProfileButton } from "../../components/Profile/ProfileButton/ProfileButton"
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { ProfileInputFields } from "../../pages/ProfileInputFields";
import Modal from "../Modal/Modal";
import IngredientDetail  from "../IngredientDetails/IngredientDetail"
import Orders from "../../pages/Orders/Orders";
import Feed from "../../pages/Feed/Feed";

function App() {
  const navigate = useNavigate()
  const location = useLocation();
  const background = location.state && location.state.background;
  
  const handleModalClose = () => {
    navigate(-1);
  }

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
      <Route path="/" element={<AppHeader/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OnlyUnAuth component={<Log/>} />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<OnlyUnAuth component={<Reg/>} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>} />} />
        <Route path="/profile" element={<OnlyAuth component={<ProfileButton/>} />} >
            <Route index element={<ProfileInputFields/>}/>
            <Route path="orders" element={<OnlyAuth component={<Orders/>} />} />
        </Route>
        <Route path="/ingredients/:ingredientId" element={<IngredientDetail /> } />
      </Route>
      </Routes>
      
      {background && <Routes>
        <Route path="/ingredients/:ingredientId" element={<Modal closeModal={handleModalClose} header={"Детали ингредиента"}>
          <IngredientDetail/>
        </Modal>}/>
      </Routes>}
    </div>
  );
}

export default App;
