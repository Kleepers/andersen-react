import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import s from './App.module.css';

function App(): JSX.Element {

  return (
    <div className={s.App}>
        <Header />
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/dashboard' element={<PrivateRoute>
                <Dashboard />
            </PrivateRoute>} />
        </Routes>
    </div>
  );
}

export default App;
