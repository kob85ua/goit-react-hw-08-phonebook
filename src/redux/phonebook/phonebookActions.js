import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("phonebook/addRequest");
const addContactSuccess = createAction("phonebook/addSuccess");
const addContactError = createAction("phonebook/addError");

const fetchContactsRequest = createAction("phonebook/fetchRequest");
const fetchContactsSuccess = createAction("phonebook/fetchSuccess");
const fetchContactsError = createAction("phonebook/fetchError");

const deleteContactRequest = createAction("phonebook/deleteContactRequest");
const deleteContactSuccess = createAction("phonebook/deleteContactSuccess");
const deleteContactError = createAction("phonebook/deleteContactError");

const changeFilter = createAction("phonebook/changeFilter");

export default {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
