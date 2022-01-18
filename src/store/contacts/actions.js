import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { ActionType } from './action-types';

const addContact = createAction(ActionType.ADD_CONTACT, contact => ({
    payload: {
        id: shortid.generate(),
        ...contact,
    },
}));

const deleteContact = createAction(ActionType.DELETE_CONTACT);

const changeFilter = createAction(ActionType.CHANGE_FILTER);

const contactsActions = {
    addContact,
    deleteContact,
    changeFilter,
};
export default contactsActions;
