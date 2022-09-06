// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/items/add');
// export const deleteContact = createAction('contacts/items/delete');

import { ADD_CONTACT, DELETE_CONTACT, DELETE_ALL_CONTACTS } from 'redux/types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const deleteAllContact = payload => {
  return {
    type: DELETE_ALL_CONTACTS,
    payload,
  };
};
