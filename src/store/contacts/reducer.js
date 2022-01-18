import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        const { name } = payload;
        const idx = state.findIndex(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
        if (idx !== -1) {
            toast(`${name} is already in contacts`);
            return state;
        }
        const newState = [...state, payload];
        return newState;
    },
    [actions.deleteContact]: (state, { payload }) => {
        const newState = state.filter(({ id }) => id !== payload);
        return newState;
    },
});
export default combineReducers({ items, filter });
