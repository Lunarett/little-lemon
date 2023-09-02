import React, { useState, useEffect } from 'react';
import '../../Styles/BookingFormStyle.css';

const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [date, setDate] = useState("");
    const [finalTime, setFinalTime] = useState([]);

    useEffect(() => {
        setFinalTime(props.availableTimes.map((time, index) => <option key={index}>{time}</option>));
    }, [props.availableTimes]);

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.updateTimes(new Date(selectedDate));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h1 className='form-heading'>Reserve a Table</h1>
            <div className='form-content'>
                <div className="form-column">
                    <div className="form-group">
                        <label className='booking-label' htmlFor="name">Name:</label>
                        <input className='booking-input' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label className='booking-label' htmlFor="tel">Telephone:</label>
                        <input className='booking-input' type="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} required />
                    </div>
                </div>
                <div className='form-column'>
                    <div className="form-group">
                        <label className='booking-label' htmlFor="date">Date:</label>
                        <input className='booking-input' type="date" id="date" value={date} onChange={handleDateChange} required />
                    </div>
                    <div className="form-group">
                        <label className='booking-label' htmlFor="time">Time:</label>
                        <select className='booking-input' id="time" required>
                            {finalTime}
                        </select>
                    </div>
                </div>
            </div>
            <button className='booking-button button' type="submit">Reserve Table</button>
        </form>
    );
};

export default BookingForm;