import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useAppDispatch} from "./app/hooks";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import Header from "./components/Header/Header";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CardDetailsContainer from "./components/CardDetails/CardDetailsContainer";
import Home from "./components/Home/Home";
import HistoryContainer from "./components/History/HistoryContainer";
import Favorites from "./components/Favorites/Favorites";
import s from './App.module.css';
import {FeatureProvider} from './app/FeatureContext';

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
                <FeatureProvider>
                    <Header/>
                    <Routes>
                        <Route path='/signup' element={<SignUpContainer/>}/>
                        <Route path='/signin' element={<SignInContainer/>}/>
                        <Route path='/dashboard' element={<PrivateRoute>
                            <DashboardContainer/>
                        </PrivateRoute>}/>
                        <Route path='/history' element={<PrivateRoute>
                            <HistoryContainer/>
                        </PrivateRoute>}/>
                        <Route path='/favorites' element={<PrivateRoute>
                            <Favorites/>
                        </PrivateRoute>}/>
                        <Route path='*' element={<Home />}/>
                        <Route path='/character/:id' element={<CardDetailsContainer/>}/>
                    </Routes>
                </FeatureProvider>
            </ErrorBoundary>
        </div>
    );
}

export default App;
