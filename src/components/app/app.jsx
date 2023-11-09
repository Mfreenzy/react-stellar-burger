import styles from "./app.module.css";
import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Reg } from "../../pages/Registration";
import { Log } from "../../pages/Login";
import { Home } from "../../pages/Home";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { Profile } from "../../pages/Profile";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className={styles.app}>
      <AppHeader />
      
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Log />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
    </div>
  );
}

export default App;
