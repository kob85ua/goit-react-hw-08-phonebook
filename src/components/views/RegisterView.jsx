import React, { Component } from "react";

import { connect } from "react-redux";

import { CSSTransition } from "react-transition-group";
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

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

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
            <Header>Register page</Header>
          </CSSTransition>

          <InputBlockStyled onSubmit={this.handleSubmit} autoComplete="off">
            <Label>
              <InputNames>Login</InputNames>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </Label>

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

            <Btn type="submit">Register</Btn>
          </InputBlockStyled>
        </InputBlockWrapper>
      </AppWrapper>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
