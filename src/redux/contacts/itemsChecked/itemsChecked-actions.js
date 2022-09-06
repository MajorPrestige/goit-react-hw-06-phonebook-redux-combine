import { CONTACTS_TO_DELETE, CLEAR_CHECKED_CONTACTS } from 'redux/types';

export const toDelete = payload => {
  return {
    type: CONTACTS_TO_DELETE,
    payload,
  };
};

export const clearChecked = payload => {
  return {
    type: CLEAR_CHECKED_CONTACTS,
    payload,
  };
};
