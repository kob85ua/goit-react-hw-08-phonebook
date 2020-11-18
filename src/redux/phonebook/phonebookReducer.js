import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";

import phonebookActions from "./phonebookActions";

const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (_, action) => action.payload,
  [phonebookActions.addContactSuccess]: (state, action) => [
    action.payload,
    ...state,
  ],
  [phonebookActions.deleteContactSuccess]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
});
const filter = createReducer("", {
  [phonebookActions.changeFilter]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.addContactError]: () => false,

  [phonebookActions.fetchContactsRequest]: () => true,
  [phonebookActions.fetchContactsSuccess]: () => false,
  [phonebookActions.fetchContactsError]: () => false,

  [phonebookActions.deleteContactRequest]: () => true,
  [phonebookActions.deleteContactSuccess]: () => false,
  [phonebookActions.deleteContactError]: () => false,
});

export default combineReducers({ contacts, filter, loading });
