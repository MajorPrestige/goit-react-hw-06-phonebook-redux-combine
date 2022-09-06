import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from 'redux/contacts/items/items-actions';

const itemsReducer = createReducer([], {
  [addContact.type]: (store, { payload }) => {
    store.push(payload);
  },
});
