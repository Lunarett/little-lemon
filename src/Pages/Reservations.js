import React, { useState } from 'react';
import '../Styles/BookingStyle.css';

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`date: ${date}, time: ${time}, num guest: ${guests}, occasion: ${occasion}`);
    };

    return (
        <form className='bookingForm' onSubmit={handleSubmit}>
            <div className='bookingTitle'>
                <h1>Book a Table</h1>
            </div>
            <div className='formContainer'>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime}>{availableTime}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" />
            </div>
        </form>
    );
};

function Reservations({ availableTimes, setAvailableTimes }) {
    return (
        <div className='bookingBox'>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
    );
}

export default Reservations;