import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const background = location.state && location.state.background;

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

      </Routes>
    </div>
  );
}

export default App;
