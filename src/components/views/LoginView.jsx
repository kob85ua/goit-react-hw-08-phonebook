import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import { authOperations } from "../../redux/auth";

import {
  InputBlockWrapper,
  Label,
  Input,
  InputBlockStyled,
  InputNames,
  AppWrapper,
  Header,
} from "../Styles/Styles";

import Btn from "../AddButton/StyledBtn";

import "../Styles/transitionR.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <AppWrapper>
        <InputBlockWrapper>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fadeHeader"
            unmountOnExit
          >
            <Header>Login page</Header>
          </CSSTransition>
          <InputBlockStyled onSubmit={this.handleSubmit} autoComplete="off">
            <Label>
              <InputNames>Email</InputNames>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Label>

            <Label>
              <InputNames>Password</InputNames>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Label>

            <Btn type="submit">Login</Btn>
          </InputBlockStyled>
        </InputBlockWrapper>
      </AppWrapper>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
