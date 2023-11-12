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
import { useDispatch } from "react-redux";
import { checkUserAuth } from "../../services/actions/userActions";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { ProfileInputFields } from "../../pages/ProfileInputFields";
import Modal from "../Modal/Modal";
import IngredientDetail  from "../IngredientDetails/IngredientDetail"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();
  const background = location.state && location.state.background;
  
  const handleModalClose = () => {
    navigate(-1);
  }

  React.useEffect(() => {
    dispatch(checkUserAuth());
  }, []);


  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OnlyUnAuth component={<Log/>} />} />
        <Route path="/register" element={<OnlyUnAuth component={<Reg/>} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword/>} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword/>} />} />
        <Route path="/profile" element={<OnlyAuth component={<ProfileButton/>} />} >
            <Route index element={<ProfileInputFields/>}/>
            <Route path="orders" element={<OnlyAuth component={<ProfileInputFields/>} />} />
        </Route>
        <Route path="/ingredients/:ingredientId" element={<IngredientDetail /> } />
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
