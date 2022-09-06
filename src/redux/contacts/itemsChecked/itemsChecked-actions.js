import { createAction } from '@reduxjs/toolkit';

const toggleCheckedContacts = createAction('contacts/itemsChecked/toggle');
const deleteCheckedContacts = createAction('contacts/itemsChecked/delete');
