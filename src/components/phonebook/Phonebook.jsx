import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { phonebookOperations } from "../../redux/phonebook";

import ContactList from "./ContactList";
import InputBlock from "./InputBlock";
import SearchForm from "./SearchForm";

import { AppWrapper, Header } from "../Styles/Styles";
import "../Styles/transitionR.css";
import { authSelectors } from "../../redux/auth";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <AppWrapper>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="fadeHeader"
          unmountOnExit
        >
          <Header>Phonebook</Header>
        </CSSTransition>
        <InputBlock />
        <SearchForm />
        <ContactList />
      </AppWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
