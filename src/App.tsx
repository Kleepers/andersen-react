import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useAppDispatch} from "./app/hooks";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CardDetails from "./components/CardDetails/CardDetails";
import Home from "./components/Home/Home";
import History from "./components/History/History";
import Favorites from "./components/Favorites/Favorites";
import s from './App.module.css';
import {ThemeProvider} from "./app/themeContext";


let initial = true;

function App(): JSX.Element {

    const dispatch = useAppDispatch();

    if (initial) {
        dispatch({
            type: 'init/initApp',
        })
        initial = false;
    }

    return (
        <div className={s.app}>
            <ErrorBoundary>
                <ThemeProvider>
                    <Header/>
                    <Routes>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<SignIn/>}/>
                        <Route path='/dashboard' element={<PrivateRoute>
                            <Dashboard/>
                        </PrivateRoute>}/>
                        <Route path='/history' element={<PrivateRoute>
                            <History/>
                        </PrivateRoute>}/>
                        <Route path='/favorites' element={<PrivateRoute>
                            <Favorites/>
                        </PrivateRoute>}/>
                        <Route path='*' element={<Home />}/>
                        <Route path='/character/:id' element={<CardDetails/>}/>
                    </Routes>
                </ThemeProvider>
            </ErrorBoundary>
        </div>
    );
}

export default App;
