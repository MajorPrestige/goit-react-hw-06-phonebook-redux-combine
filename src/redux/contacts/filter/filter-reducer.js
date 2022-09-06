import { FILTER_CONTACTS } from 'redux/types';

const filter = (store = '', { type, payload }) => {
  switch (type) {
    case FILTER_CONTACTS:
      return payload;
    default:
      return store;
  }
};

export default filter;
