import axios from "axios";

import phonebookActions from "./phonebookActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
const title = "contacts";

const addContact = (name, number) => (dispatch) => {
  dispatch(phonebookActions.addContactRequest());

  axios
    .post(`/${title}`, { name, number })
    .then((response) =>
      dispatch(phonebookActions.addContactSuccess(response.data))
    )
    .catch((error) => dispatch(phonebookActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(phonebookActions.fetchContactsRequest());
  axios
    .get(`/${title}`)
    .then((response) =>
      dispatch(phonebookActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(phonebookActions.fetchContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(phonebookActions.deleteContactRequest());
  axios
    .delete(`/${title}/${id}`)
    .then(() => dispatch(phonebookActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(phonebookActions.deleteContactError(error)));
};

export default { addContact, fetchContacts, deleteContact };
