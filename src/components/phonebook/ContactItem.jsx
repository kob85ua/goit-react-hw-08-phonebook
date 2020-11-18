import React from "react";
import { connect } from "react-redux";

import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";

import { ListItem, ContactInfo } from "../Styles/Styles";
import CrossButton from "../CrossButton/CrossButton";

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <ContactInfo>{name}</ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <CrossButton onBtnClick={onDeleteContact}></CrossButton>
    </ListItem>
  );
};

const mapStateToProps = (state, ownProps) => {
  const currentContact = phonebookSelectors.getContactById(state, ownProps.id);
  return { ...currentContact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () =>
    dispatch(phonebookOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
