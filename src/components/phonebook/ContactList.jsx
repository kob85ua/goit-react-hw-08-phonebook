import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import ContactItem from "./ContactItem";
import LoaderBlock from "../Loader/Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../Styles/listTransition.css";

class ContactList extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const { isLoadingContacts, contactsLength, contacts } = this.props;
    return (
      <>
        {isLoadingContacts && <LoaderBlock />}
        {contactsLength > 0 && !isLoadingContacts && (
          <TransitionGroup comronent="ul" className="list">
            {contacts.map(({ id }) => (
              <CSSTransition key={id} timeout={250} classNames="list-item-fade">
                <ContactItem key={id} id={id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getVisibleContacts(state),
  contactsLength: phonebookSelectors.getContactsLength(state),
  isLoadingContacts: phonebookSelectors.getLoadingContacts(state),
});

const mapDispatchToProps = {
  onFetchContacts: phonebookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
