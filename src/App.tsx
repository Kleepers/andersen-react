import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useAppDispatch} from "./app/hooks";
import {ErrorBoundaryContainer} from "./components/ErrorBoundary/ErrorBoundaryContainer";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
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
            <ErrorBoundaryContainer>
                <FeatureProvider>
                    <Header/>
                    <Routes>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<SignIn/>}/>
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
            </ErrorBoundaryContainer>
        </div>
    );
}

export default App;
