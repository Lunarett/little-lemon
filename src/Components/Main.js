import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Reservations from '../Pages/Reservations';
import OrderOnline from '../Pages/OrderOnline';
import Login from '../Pages/Login';

function Main() {
    const initializeTimes = () => {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00'
        ];
    };

    const updateTimes = async (state, date) => {
        return initializeTimes();
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    return (
        <main>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/About'
                    element={<About />}
                />
                <Route
                    path='/Reservations'
                    element={<Reservations availableTimes={availableTimes} dispatch={dispatch} />}
                />
                <Route
                    path='/OrderOnline'
                    element={<OrderOnline />}
                />
                <Route
                    path='/Login'
                    element={<Login />}
                />
            </Routes>
        </main>
    );
}

export default Main;