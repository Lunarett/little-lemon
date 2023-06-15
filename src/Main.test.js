import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Main from './Main';

// Test for initializeTimes function
test('initializeTimes should return the expected initial state', () => {
    const mainComponent = render(<Main />);
    const initialState = mainComponent.container.firstChild.state.availableTimes;

    const expectedInitialState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    expect(initialState).toEqual(expectedInitialState);
});

// Test for updateTimes function
test('updateTimes should return the same state value provided', () => {
    const mainComponent = render(<Main />);
    const currentState = mainComponent.container.firstChild.state.availableTimes;

    const selectedDate = '2023-06-14';

    const nextState = mainComponent.container.firstChild.updateTimes(currentState, selectedDate);
    expect(nextState).toEqual(currentState);
});