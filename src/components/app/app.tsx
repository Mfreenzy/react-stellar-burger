import styles from "./app.module.css";
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Reg } from "../../pages/Registration";
import { Log } from "../../pages/Login";
import { Home } from "../../pages/Home";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { ProfileButton } from "../Profile/ProfileButton/ProfileButton";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { ProfileInputFields } from "../../pages/ProfileInputFields";
import Modal from "../Modal/Modal";
import IngredientDetail from "../IngredientDetails/IngredientDetail";
import Orders from "../../pages/Orders/Orders";
import Feed from "../../pages/Feed/Feed";
import OrderInfo from "../OrderInfo/OrderInfo";
import { useAppDispatch } from "../../services/store";
import { getBurgerIngredients } from "../../services/actions/ingredientActions";
import { checkUserAuth } from "../../services/actions/userActions";


function App() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const token = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const handleModalClose = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(checkUserAuth())
  }, [dispatch, token, refreshToken]);

  return (
    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/" element={<AppHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<OnlyUnAuth component={<Log />} />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/register"
            element={<OnlyUnAuth component={<Reg />} />}
          />
          <Route
            path="/forgot-password"
            element={<OnlyUnAuth component={<ForgotPassword />} />}
          />
          <Route
            path="/reset-password"
            element={<OnlyUnAuth component={<ResetPassword />} />}
          />
          <Route
            path="/profile"
            element={<OnlyAuth component={<ProfileButton />} />}
          >
            <Route index element={<ProfileInputFields />} />
            <Route
              path="orders"
              element={<OnlyAuth component={<Orders />} />}
            />
          </Route>
          <Route
            path="/ingredients/:ingredientId"
            element={<IngredientDetail />}
          />
          <Route path="/feed/:number" element={<OrderInfo />} />
          <Route
            path="/profile/orders/:number"
            element={<OnlyAuth component={<OrderInfo />} />}
          />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal
                closeModal={handleModalClose}
                header={"Детали ингредиента"}
              >
                <IngredientDetail />
              </Modal>
            }
          />
          <Route
            path="/feed/:number"
            element={
              <Modal closeModal={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:number"
            element={
              <OnlyAuth
                component={
                  <Modal closeModal={handleModalClose}>
                    <OrderInfo />
                  </Modal>
                }
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
