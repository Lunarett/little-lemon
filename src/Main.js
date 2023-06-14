import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';

function Main() {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route
                    path='/Reservations'
                    element={<Reservations availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}
                />
                <Route path='/OrderOnline' element={<OrderOnline />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;