import { CONTACTS_TO_DELETE, CLEAR_CHECKED_CONTACTS } from 'redux/types';

const itemsChecked = (store = [], { type, payload }) => {
  switch (type) {
    case CONTACTS_TO_DELETE:
      if (store.includes(payload)) {
        return store.filter(el => el !== payload);
      }

      return [...store, payload];

    case CLEAR_CHECKED_CONTACTS:
      return payload;

    default:
      return store;
  }
};

export default itemsChecked;
