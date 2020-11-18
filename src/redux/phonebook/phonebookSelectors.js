import { createSelector } from "@reduxjs/toolkit";

const getLoadingContacts = (state) => state.phonebook.loading;
const getContacts = (state) => state.phonebook.contacts;
const getContactsLength = (state) => state.phonebook.contacts.length;
const getFilter = (state) => state.phonebook.filter;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);
  return contacts.find((contact) => contact.id === contactId);
};

export default {
  getLoadingContacts,
  getContacts,
  getContactsLength,
  getFilter,
  getVisibleContacts,
  getContactById,
};
