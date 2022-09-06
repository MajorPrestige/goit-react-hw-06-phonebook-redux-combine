// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from 'redux/contacts/items/items-actions';

// const itemsReducer = createReducer([], {
//   [addContact.type]: (store, { payload }) => {
//     store.push(payload);
//   },
// });

import { ADD_CONTACT, DELETE_CONTACT, DELETE_ALL_CONTACTS } from 'redux/types';

const initialStore = [
  {
    id: '1',
    name: 'Dan',
    number: '123412312351',
  },
  {
    id: '2',
    name: 'Prestige',
    number: '12312321312',
  },
];

const items = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const duplicateContact = store.find(
        contact => contact.number === payload.number
      );

      if (duplicateContact?.number === payload.number) {
        alert(`Number:${payload.number} is already in your contacts`);
        return store;
      }

      return [payload, ...store];

    case DELETE_CONTACT:
      return store.filter(el => el.id !== payload);

    case DELETE_ALL_CONTACTS:
      return payload;
    default:
      return store;
  }
};

export default items;
