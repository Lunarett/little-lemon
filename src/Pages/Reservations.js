import React, { useState } from 'react';
import { BookingForm, Contact } from '../Components';
import { bruschetta, greekSalad, lemonDessert, pfp1, pfp2, pfp3, chef } from '../Assets';
import '../Styles/ReservationsStyle.css';

const Reservations = () => {
    return (
        <div className='resv-section'>
            <BookingForm />
            <Contact />
        </div>
    );
}

export default Reservations;