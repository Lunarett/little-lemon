import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Reservations' element={<Reservations />} />
                <Route path='/OrderOnline' element={<OrderOnline />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;