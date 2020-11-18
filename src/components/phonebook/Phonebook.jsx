import React from "react";
import { CSSTransition } from "react-transition-group";

import ContactList from "./ContactList";
import InputBlock from "./InputBlock";
import SearchForm from "./SearchForm";

import { AppWrapper, Header } from "../Styles/Styles";
import "../Styles/transitionR.css";

function Phonebook() {
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

export default Phonebook;
