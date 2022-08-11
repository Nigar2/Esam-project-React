import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login ";
import Signup from "./components/Signup/Signup";
import Parol from "./components/Parolpage/Parol";
import Parol2 from "./components/Parolpage/Parol2";
import Parol3 from "./components/Parolpage/Parol3";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path ="/parol" element ={<Parol/>} />
          <Route path ="/parol2" element ={<Parol2/>} />
          <Route path ="/parol3" element ={<Parol3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
