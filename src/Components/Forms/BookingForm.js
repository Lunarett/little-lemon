import React from 'react';
import '../../Styles/BookingFormStyle.css';

const BookingForm = () => {
    return (
        <section className="booking-section">
            <div className="form-container">
                <h1 className='form-heading'>Reserve a Table</h1>
                <form className="booking-form">
                    <div className="form-column">
                        <div className="form-group">
                            <label className='booking-label' htmlFor="name">Name:</label>
                            <input className='booking-input'type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label className='booking-label' htmlFor="email">Email:</label>
                            <input className='booking-input' type="email" id="email" name="email" />
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="form-group">
                            <label className='booking-label' htmlFor="date">Date:</label>
                            <input className='booking-input' type="date" id="date" name="date" />
                        </div>
                        <div className="form-group">
                            <label className='booking-label' htmlFor="time">Time:</label>
                            <input className='booking-input' type="time" id="time" name="time" />
                        </div>
                    </div>
                </form>

                <button className='booking-button button' type="submit">Reserve Table</button>
            </div>
        </section>
    );
};

export default BookingForm;