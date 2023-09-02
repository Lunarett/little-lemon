import React, { useReducer } from 'react';
import { BookingForm, Contact } from '../Components';
import { fetchAPI } from '../API/BookingAPI';
import '../Styles/ReservationsStyle.css';

const Reservations = () => {
    const updateTimes = (date) => {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <div className='resv-section'>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
            <Contact />
        </div>
    );
}

export default Reservations;