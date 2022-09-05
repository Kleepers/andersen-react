import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import s from './App.module.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={s.App}>
        <Header />
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
