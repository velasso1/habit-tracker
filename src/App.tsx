import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import StartPage from "./pages/start-page";
import LoginPage from "./pages/login-page";
import RegistrationPage from "./pages/registration-page";
import CreateTargetPage from "./pages/create-target-page";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/create-target" element={<CreateTargetPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
