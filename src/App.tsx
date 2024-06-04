import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/header";
import StartPage from "./pages/start-page";


const App: FC = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
      </Routes>
    </>
  )
}

export default App
